#!/usr/bin/env python3
"""
ghl-setup.py — GoHighLevel API v2 Automation Script
====================================================
Money Decoded 3-Track Funnel | J. Marque Brand

Authenticates with the GoHighLevel API v2 and provisions all CRM infrastructure
for the Money Decoded funnel: tags, custom fields, and email templates.

WHAT IT CREATES:
  - 36 tags (lifecycle, track, sequence, engagement, traffic)
  - 2 custom fields (investor_track RADIO, funnel_source TEXT)
  - 49 email templates (sequences A, B1-B3, C1-C3, D)

DATA SOURCE:
  Reads all configuration from ghl-config.json in the same directory.

USAGE:
  # With CLI arguments:
  python ghl-setup.py --api-key YOUR_KEY --location-id YOUR_LOC_ID

  # With environment variables:
  export GHL_API_KEY="your-api-key"
  export GHL_LOCATION_ID="your-location-id"
  python ghl-setup.py

  # Dry run (shows what would be created without calling API):
  python ghl-setup.py --api-key YOUR_KEY --location-id YOUR_LOC_ID --dry-run

  # Skip email template creation:
  python ghl-setup.py --api-key YOUR_KEY --location-id YOUR_LOC_ID --skip-emails

REQUIREMENTS:
  - Python 3.7+
  - requests library (pip install requests)

RATE LIMITING:
  0.5s delay between API calls to avoid GHL throttling.

AUTHOR: Jai (Claude Code) for Jamaal Marque Richard
DATE:   2026-02-25
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import requests
except ImportError:
    print("\033[91m[ERROR]\033[0m 'requests' library not found. Install it:")
    print("        pip install requests")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

BASE_URL = "https://services.leadconnectorhq.com"
API_VERSION = "2021-07-28"
RATE_LIMIT_DELAY = 0.5  # seconds between API calls
CONFIG_FILENAME = "ghl-config.json"
SCRIPT_DIR = Path(__file__).resolve().parent

# ANSI color codes
GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
BOLD = "\033[1m"
DIM = "\033[2m"
RESET = "\033[0m"


# ---------------------------------------------------------------------------
# Logging helpers
# ---------------------------------------------------------------------------

def log_success(msg: str) -> None:
    print(f"  {GREEN}[OK]{RESET}    {msg}")


def log_fail(msg: str) -> None:
    print(f"  {RED}[FAIL]{RESET}  {msg}")


def log_skip(msg: str) -> None:
    print(f"  {YELLOW}[SKIP]{RESET}  {msg}")


def log_info(msg: str) -> None:
    print(f"  {CYAN}[INFO]{RESET}  {msg}")


def log_dry(msg: str) -> None:
    print(f"  {DIM}[DRY]{RESET}   {msg}")


def section_header(title: str) -> None:
    width = 60
    print()
    print(f"{BOLD}{'=' * width}{RESET}")
    print(f"{BOLD}  {title}{RESET}")
    print(f"{BOLD}{'=' * width}{RESET}")
    print()


# ---------------------------------------------------------------------------
# Configuration loading
# ---------------------------------------------------------------------------

def load_config(config_path: Path) -> Dict[str, Any]:
    """Load and validate ghl-config.json."""
    if not config_path.exists():
        print(f"{RED}[ERROR]{RESET} Config file not found: {config_path}")
        print(f"        Expected location: {SCRIPT_DIR / CONFIG_FILENAME}")
        sys.exit(1)

    try:
        with open(config_path, "r", encoding="utf-8") as f:
            config = json.load(f)
    except json.JSONDecodeError as e:
        print(f"{RED}[ERROR]{RESET} Invalid JSON in config file: {e}")
        sys.exit(1)

    # Validate required keys
    required_keys = ["tags", "custom_fields", "email_templates"]
    for key in required_keys:
        if key not in config:
            print(f"{RED}[ERROR]{RESET} Missing required key '{key}' in config file.")
            sys.exit(1)

    return config


# ---------------------------------------------------------------------------
# API client
# ---------------------------------------------------------------------------

class GHLClient:
    """GoHighLevel API v2 client with rate limiting and error handling."""

    def __init__(self, api_key: str, location_id: str, dry_run: bool = False):
        self.api_key = api_key
        self.location_id = location_id
        self.dry_run = dry_run
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Version": API_VERSION,
            "Content-Type": "application/json",
            "Accept": "application/json",
        })
        self._last_call_time = 0.0

    def _rate_limit(self) -> None:
        """Enforce minimum delay between API calls."""
        elapsed = time.time() - self._last_call_time
        if elapsed < RATE_LIMIT_DELAY:
            time.sleep(RATE_LIMIT_DELAY - elapsed)
        self._last_call_time = time.time()

    def _request(
        self,
        method: str,
        endpoint: str,
        payload: Optional[Dict] = None,
    ) -> Tuple[int, Optional[Dict]]:
        """
        Make an API request with rate limiting.

        Returns:
            Tuple of (status_code, response_json_or_None)
        """
        url = f"{BASE_URL}{endpoint}"

        if self.dry_run:
            return (200, {"dry_run": True})

        self._rate_limit()

        try:
            response = self.session.request(
                method=method,
                url=url,
                json=payload,
                timeout=30,
            )
            try:
                body = response.json()
            except (json.JSONDecodeError, ValueError):
                body = None

            return (response.status_code, body)

        except requests.exceptions.Timeout:
            return (408, {"error": "Request timed out after 30 seconds"})
        except requests.exceptions.ConnectionError as e:
            return (0, {"error": f"Connection error: {str(e)}"})
        except requests.exceptions.RequestException as e:
            return (0, {"error": f"Request error: {str(e)}"})

    def get(self, endpoint: str) -> Tuple[int, Optional[Dict]]:
        return self._request("GET", endpoint)

    def post(self, endpoint: str, payload: Dict) -> Tuple[int, Optional[Dict]]:
        return self._request("POST", endpoint, payload)


# ---------------------------------------------------------------------------
# Fetch existing resources (for duplicate detection)
# ---------------------------------------------------------------------------

def fetch_existing_tags(client: GHLClient) -> List[str]:
    """Fetch all existing tag names for the location."""
    if client.dry_run:
        return []

    status, body = client.get(f"/locations/{client.location_id}/tags")

    if status == 200 and body and "tags" in body:
        return [tag.get("name", "").lower() for tag in body["tags"]]

    # If the endpoint returns paginated results or different structure
    if status == 200 and body:
        # Try alternate response shapes
        if isinstance(body, list):
            return [tag.get("name", "").lower() for tag in body]

    log_info(f"Could not fetch existing tags (HTTP {status}). Duplicate detection disabled.")
    return []


def fetch_existing_custom_fields(client: GHLClient) -> List[str]:
    """Fetch all existing custom field names for the location."""
    if client.dry_run:
        return []

    status, body = client.get(f"/locations/{client.location_id}/customFields")

    if status == 200 and body and "customFields" in body:
        return [cf.get("name", "").lower() for cf in body["customFields"]]

    if status == 200 and body:
        if isinstance(body, list):
            return [cf.get("name", "").lower() for cf in body]

    log_info(f"Could not fetch existing custom fields (HTTP {status}). Duplicate detection disabled.")
    return []


# ---------------------------------------------------------------------------
# Tag creation
# ---------------------------------------------------------------------------

def create_tags(
    client: GHLClient,
    tags: List[Dict[str, str]],
    existing_tags: List[str],
) -> Dict[str, int]:
    """
    Create tags via GHL API.

    Returns:
        Dict with counts: {"created": N, "skipped": N, "failed": N}
    """
    section_header(f"TAGS ({len(tags)} configured)")

    counts = {"created": 0, "skipped": 0, "failed": 0}

    for tag_config in tags:
        tag_name = tag_config["name"]
        category = tag_config.get("category", "")
        label = f"{tag_name}"
        if category:
            label += f" ({category})"

        # Duplicate detection
        if tag_name.lower() in existing_tags:
            log_skip(f"{label} -- already exists")
            counts["skipped"] += 1
            continue

        if client.dry_run:
            log_dry(f"Would create tag: {label}")
            counts["created"] += 1
            continue

        # POST /locations/{locationId}/tags
        status, body = client.post(
            f"/locations/{client.location_id}/tags",
            {"name": tag_name},
        )

        if status in (200, 201):
            log_success(f"{label}")
            counts["created"] += 1
        elif status == 409 or (body and "duplicate" in str(body).lower()):
            log_skip(f"{label} -- duplicate detected by API")
            counts["skipped"] += 1
        elif status == 422 and body and "already" in str(body).lower():
            log_skip(f"{label} -- already exists (422)")
            counts["skipped"] += 1
        else:
            error_msg = ""
            if body:
                error_msg = body.get("message", body.get("error", str(body)))
            log_fail(f"{label} -- HTTP {status}: {error_msg}")
            counts["failed"] += 1

    return counts


# ---------------------------------------------------------------------------
# Custom field creation
# ---------------------------------------------------------------------------

def create_custom_fields(
    client: GHLClient,
    fields: List[Dict[str, Any]],
    existing_fields: List[str],
) -> Dict[str, int]:
    """
    Create custom fields via GHL API.

    Returns:
        Dict with counts: {"created": N, "skipped": N, "failed": N}
    """
    section_header(f"CUSTOM FIELDS ({len(fields)} configured)")

    counts = {"created": 0, "skipped": 0, "failed": 0}

    for field_config in fields:
        field_name = field_config["name"]
        data_type = field_config["dataType"]
        options = field_config.get("options", [])
        label = f"{field_name} ({data_type})"
        if options:
            label += f" [{', '.join(options)}]"

        # Duplicate detection
        if field_name.lower() in existing_fields:
            log_skip(f"{label} -- already exists")
            counts["skipped"] += 1
            continue

        if client.dry_run:
            log_dry(f"Would create custom field: {label}")
            counts["created"] += 1
            continue

        # Build payload
        payload: Dict[str, Any] = {
            "name": field_name,
            "dataType": data_type,
        }
        if options:
            payload["options"] = options

        # POST /locations/{locationId}/customFields
        status, body = client.post(
            f"/locations/{client.location_id}/customFields",
            payload,
        )

        if status in (200, 201):
            log_success(f"{label}")
            counts["created"] += 1
        elif status == 409 or (body and "duplicate" in str(body).lower()):
            log_skip(f"{label} -- duplicate detected by API")
            counts["skipped"] += 1
        elif status == 422 and body and "already" in str(body).lower():
            log_skip(f"{label} -- already exists (422)")
            counts["skipped"] += 1
        else:
            error_msg = ""
            if body:
                error_msg = body.get("message", body.get("error", str(body)))
            log_fail(f"{label} -- HTTP {status}: {error_msg}")
            counts["failed"] += 1

    return counts


# ---------------------------------------------------------------------------
# Email template creation
# ---------------------------------------------------------------------------

def create_email_templates(
    client: GHLClient,
    templates: List[Dict[str, Any]],
) -> Dict[str, int]:
    """
    Attempt to create email templates via GHL API.

    GHL API v2 does not have a stable public endpoint for email template
    creation. This function attempts POST /locations/{locationId}/emails/templates
    and gracefully falls back to saving HTML files locally if the endpoint
    returns 404 or another unsupported status.

    Returns:
        Dict with counts: {"created": N, "skipped": N, "failed": N, "saved_html": N}
    """
    section_header(f"EMAIL TEMPLATES ({len(templates)} configured)")

    counts = {"created": 0, "skipped": 0, "failed": 0, "saved_html": 0}

    # Check if any HTML files exist
    emails_dir = SCRIPT_DIR / "ghl-emails"
    api_supported = None  # None = unknown, True/False after first attempt

    for tmpl in templates:
        tmpl_id = tmpl["id"]
        tmpl_name = tmpl["name"]
        subject = tmpl["subject"]
        from_name = tmpl.get("from_name", "J. Marque")
        html_file = tmpl.get("html_file", "")
        label = f"{tmpl_id}: {tmpl_name}"

        # Resolve HTML file path
        html_path = SCRIPT_DIR / html_file if html_file else None
        html_body = ""
        if html_path and html_path.exists():
            try:
                html_body = html_path.read_text(encoding="utf-8")
            except Exception as e:
                log_info(f"Could not read {html_file}: {e}")

        if client.dry_run:
            if html_body:
                log_dry(f"Would create template: {label} (HTML loaded: {len(html_body)} chars)")
            else:
                log_dry(f"Would create template: {label} (no HTML file yet -- placeholder)")
            counts["created"] += 1
            continue

        # If we already know the API doesn't support this, skip the call
        if api_supported is False:
            _handle_template_fallback(
                tmpl, html_path, html_body, label, counts
            )
            continue

        # Attempt API creation
        payload = {
            "name": tmpl_name,
            "subject": subject,
            "fromName": from_name,
            "html": html_body if html_body else _placeholder_html(tmpl),
        }

        status, body = client.post(
            f"/locations/{client.location_id}/emails/templates",
            payload,
        )

        if status in (200, 201):
            api_supported = True
            log_success(f"{label}")
            counts["created"] += 1
        elif status == 404 or status == 405:
            # Endpoint not available -- switch to fallback mode
            if api_supported is None:
                log_info(
                    "GHL API v2 does not support direct email template creation "
                    f"(HTTP {status})."
                )
                log_info(
                    "Falling back to local HTML file generation. "
                    "Import these manually in GHL > Marketing > Emails > Templates."
                )
                log_info(
                    f"HTML files location: {emails_dir}/"
                )
                print()
                api_supported = False

            _handle_template_fallback(
                tmpl, html_path, html_body, label, counts
            )
        elif status == 409 or (body and "duplicate" in str(body).lower()):
            log_skip(f"{label} -- duplicate")
            counts["skipped"] += 1
        elif status == 422 and body and "already" in str(body).lower():
            log_skip(f"{label} -- already exists")
            counts["skipped"] += 1
        else:
            error_msg = ""
            if body:
                error_msg = body.get("message", body.get("error", str(body)))
            log_fail(f"{label} -- HTTP {status}: {error_msg}")
            counts["failed"] += 1

    return counts


def _handle_template_fallback(
    tmpl: Dict[str, Any],
    html_path: Optional[Path],
    html_body: str,
    label: str,
    counts: Dict[str, int],
) -> None:
    """Handle email template when API is unavailable -- save as HTML file."""
    if html_path and html_body:
        # HTML file already exists
        log_skip(f"{label} -- HTML exists at {html_path.relative_to(SCRIPT_DIR)}")
        counts["saved_html"] += 1
        return

    # Generate placeholder HTML and save
    if html_path:
        html_path.parent.mkdir(parents=True, exist_ok=True)
        placeholder = _placeholder_html(tmpl)
        try:
            html_path.write_text(placeholder, encoding="utf-8")
            log_success(f"{label} -- placeholder HTML saved to {html_path.relative_to(SCRIPT_DIR)}")
            counts["saved_html"] += 1
        except Exception as e:
            log_fail(f"{label} -- could not write HTML: {e}")
            counts["failed"] += 1
    else:
        log_skip(f"{label} -- no html_file path configured")
        counts["skipped"] += 1


def _placeholder_html(tmpl: Dict[str, Any]) -> str:
    """
    Generate a placeholder HTML email template.

    Uses a clean, minimal structure that can be imported into GHL
    or replaced with the actual email content later.
    """
    subject = tmpl.get("subject", "")
    name = tmpl.get("name", "")
    from_name = tmpl.get("from_name", "J. Marque")
    sequence = tmpl.get("sequence", "")
    day = tmpl.get("day", 0)
    tmpl_id = tmpl.get("id", "")

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{name}</title>
  <!--
    GHL Email Template
    ==================
    Template ID:  {tmpl_id}
    Name:         {name}
    Subject:      {subject}
    From:         {from_name}
    Sequence:     {sequence}
    Day:          {day}

    INSTRUCTIONS:
    1. Replace the body content below with the actual email copy.
    2. Import into GHL: Marketing > Emails > Templates > Import.
    3. Or paste the HTML directly into a GHL workflow email action.

    Generated by ghl-setup.py on {time.strftime('%Y-%m-%d %H:%M:%S')}
  -->
  <style>
    body {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }}
    .header {{
      border-bottom: 2px solid #D4AF37;
      padding-bottom: 15px;
      margin-bottom: 25px;
    }}
    .footer {{
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #e0e0e0;
      font-size: 13px;
      color: #888888;
    }}
    a {{
      color: #D4AF37;
    }}
  </style>
</head>
<body>
  <div class="header">
    <strong>{from_name}</strong>
  </div>

  <p>{{{{contact.first_name}}}},</p>

  <p>
    <!-- PLACEHOLDER: Replace this with the actual email body from the
         corresponding sequence markdown file. -->
    [Email content for {name} goes here]
  </p>

  <p>
    -- {from_name}<br>
    $250M+ in Real Estate | USMC Veteran
  </p>

  <div class="footer">
    <p>
      You received this email because you signed up at Money Decoded.<br>
      <a href="{{{{unsubscribe_link}}}}">Unsubscribe</a>
    </p>
  </div>
</body>
</html>"""


# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------

def print_summary(
    tag_counts: Dict[str, int],
    field_counts: Dict[str, int],
    email_counts: Dict[str, int],
    dry_run: bool,
) -> None:
    """Print a formatted summary of all operations."""
    section_header("SUMMARY")

    mode_label = f" {YELLOW}(DRY RUN){RESET}" if dry_run else ""
    print(f"  {BOLD}Execution Mode:{RESET}{mode_label if dry_run else ' LIVE'}")
    print()

    # Tags
    total_tags = sum(tag_counts.values())
    print(f"  {BOLD}Tags:{RESET}")
    print(f"    {GREEN}Created:{RESET}  {tag_counts.get('created', 0)}")
    print(f"    {YELLOW}Skipped:{RESET}  {tag_counts.get('skipped', 0)}")
    print(f"    {RED}Failed:{RESET}   {tag_counts.get('failed', 0)}")
    print(f"    Total:    {total_tags}")
    print()

    # Custom Fields
    total_fields = sum(field_counts.values())
    print(f"  {BOLD}Custom Fields:{RESET}")
    print(f"    {GREEN}Created:{RESET}  {field_counts.get('created', 0)}")
    print(f"    {YELLOW}Skipped:{RESET}  {field_counts.get('skipped', 0)}")
    print(f"    {RED}Failed:{RESET}   {field_counts.get('failed', 0)}")
    print(f"    Total:    {total_fields}")
    print()

    # Email Templates
    total_emails = sum(email_counts.values())
    print(f"  {BOLD}Email Templates:{RESET}")
    print(f"    {GREEN}Created (API):{RESET}    {email_counts.get('created', 0)}")
    print(f"    {GREEN}Saved (HTML):{RESET}     {email_counts.get('saved_html', 0)}")
    print(f"    {YELLOW}Skipped:{RESET}          {email_counts.get('skipped', 0)}")
    print(f"    {RED}Failed:{RESET}           {email_counts.get('failed', 0)}")
    print(f"    Total:            {total_emails}")
    print()

    # Overall status
    total_failed = (
        tag_counts.get("failed", 0)
        + field_counts.get("failed", 0)
        + email_counts.get("failed", 0)
    )

    if total_failed == 0:
        print(f"  {GREEN}{BOLD}All operations completed successfully.{RESET}")
    else:
        print(f"  {RED}{BOLD}{total_failed} operation(s) failed. Review errors above.{RESET}")

    # Reminder about HTML files
    saved_html = email_counts.get("saved_html", 0)
    if saved_html > 0:
        print()
        print(f"  {CYAN}NOTE:{RESET} {saved_html} email template(s) saved as HTML files.")
        print(f"  {CYAN}     {RESET} Import them manually in GHL:")
        print(f"  {CYAN}     {RESET}   Marketing > Emails > Templates > Import")
        print(f"  {CYAN}     {RESET}   Files: {SCRIPT_DIR / 'ghl-emails'}/")

    print()


# ---------------------------------------------------------------------------
# CLI argument parsing
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "GoHighLevel API v2 Setup Script -- Creates tags, custom fields, "
            "and email templates for the Money Decoded 3-Track Funnel."
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Examples:\n"
            "  python ghl-setup.py --api-key abc123 --location-id loc456\n"
            "  python ghl-setup.py --api-key abc123 --location-id loc456 --dry-run\n"
            "  GHL_API_KEY=abc123 GHL_LOCATION_ID=loc456 python ghl-setup.py\n"
        ),
    )

    parser.add_argument(
        "--api-key",
        type=str,
        default=os.environ.get("GHL_API_KEY", ""),
        help="GHL API v2 Bearer token (or set GHL_API_KEY env var)",
    )
    parser.add_argument(
        "--location-id",
        type=str,
        default=os.environ.get("GHL_LOCATION_ID", ""),
        help="GHL Location/Sub-Account ID (or set GHL_LOCATION_ID env var)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        default=False,
        help="Show what would be created without making any API calls",
    )
    parser.add_argument(
        "--skip-tags",
        action="store_true",
        default=False,
        help="Skip tag creation",
    )
    parser.add_argument(
        "--skip-fields",
        action="store_true",
        default=False,
        help="Skip custom field creation",
    )
    parser.add_argument(
        "--skip-emails",
        action="store_true",
        default=False,
        help="Skip email template creation",
    )
    parser.add_argument(
        "--config",
        type=str,
        default=str(SCRIPT_DIR / CONFIG_FILENAME),
        help=f"Path to config JSON file (default: {CONFIG_FILENAME} in script directory)",
    )

    return parser.parse_args()


# ---------------------------------------------------------------------------
# Validation
# ---------------------------------------------------------------------------

def validate_credentials(api_key: str, location_id: str) -> None:
    """Validate that API credentials are provided."""
    errors = []
    if not api_key:
        errors.append(
            "API key is required. Use --api-key or set GHL_API_KEY environment variable."
        )
    if not location_id:
        errors.append(
            "Location ID is required. Use --location-id or set GHL_LOCATION_ID environment variable."
        )

    if errors:
        for err in errors:
            print(f"{RED}[ERROR]{RESET} {err}")
        print()
        print("Run with --help for usage information.")
        sys.exit(1)


def validate_config(config: Dict[str, Any]) -> None:
    """Validate config structure and print summary."""
    tags = config.get("tags", [])
    fields = config.get("custom_fields", [])
    templates = config.get("email_templates", [])

    print(f"  Config loaded: {len(tags)} tags, {len(fields)} custom fields, {len(templates)} email templates")

    # Validate tag structure
    for i, tag in enumerate(tags):
        if "name" not in tag:
            print(f"{RED}[ERROR]{RESET} Tag at index {i} is missing 'name' field.")
            sys.exit(1)

    # Validate custom field structure
    for i, field in enumerate(fields):
        if "name" not in field:
            print(f"{RED}[ERROR]{RESET} Custom field at index {i} is missing 'name' field.")
            sys.exit(1)
        if "dataType" not in field:
            print(f"{RED}[ERROR]{RESET} Custom field '{field['name']}' is missing 'dataType' field.")
            sys.exit(1)

    # Validate email template structure
    for i, tmpl in enumerate(templates):
        if "id" not in tmpl:
            print(f"{RED}[ERROR]{RESET} Email template at index {i} is missing 'id' field.")
            sys.exit(1)
        if "name" not in tmpl:
            print(f"{RED}[ERROR]{RESET} Email template at index {i} is missing 'name' field.")
            sys.exit(1)
        if "subject" not in tmpl:
            print(f"{RED}[ERROR]{RESET} Email template '{tmpl['name']}' is missing 'subject' field.")
            sys.exit(1)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    """Main entry point."""
    args = parse_args()

    # Banner
    print()
    print(f"{BOLD}{CYAN}{'=' * 60}{RESET}")
    print(f"{BOLD}{CYAN}  GHL Setup -- Money Decoded 3-Track Funnel{RESET}")
    print(f"{BOLD}{CYAN}  J. Marque Brand | GoHighLevel API v2{RESET}")
    print(f"{BOLD}{CYAN}{'=' * 60}{RESET}")
    print()

    if args.dry_run:
        print(f"  {YELLOW}{BOLD}*** DRY RUN MODE -- No API calls will be made ***{RESET}")
        print()

    # Validate credentials (skip validation in dry-run if not provided)
    if not args.dry_run:
        validate_credentials(args.api_key, args.location_id)
    else:
        if not args.api_key:
            args.api_key = "dry-run-placeholder"
        if not args.location_id:
            args.location_id = "dry-run-placeholder"

    # Load config
    config_path = Path(args.config)
    config = load_config(config_path)
    validate_config(config)

    # Initialize API client
    client = GHLClient(
        api_key=args.api_key,
        location_id=args.location_id,
        dry_run=args.dry_run,
    )

    # Connection test (skip in dry-run)
    if not args.dry_run:
        print()
        print(f"  Testing API connection...")
        status, body = client.get(f"/locations/{args.location_id}")
        if status == 200:
            loc_name = ""
            if body and isinstance(body, dict):
                loc = body.get("location", body)
                loc_name = loc.get("name", "")
            log_success(f"Connected to location: {loc_name or args.location_id}")
        elif status == 401:
            log_fail("Authentication failed. Check your API key.")
            sys.exit(1)
        elif status == 0:
            error_msg = body.get("error", "Unknown") if body else "Unknown"
            log_fail(f"Could not connect to GHL API: {error_msg}")
            sys.exit(1)
        else:
            log_info(f"Location lookup returned HTTP {status}. Proceeding anyway.")

    # Fetch existing resources for duplicate detection
    existing_tags: List[str] = []
    existing_fields: List[str] = []

    if not args.dry_run:
        print()
        print(f"  Fetching existing resources for duplicate detection...")
        if not args.skip_tags:
            existing_tags = fetch_existing_tags(client)
            if existing_tags:
                log_info(f"Found {len(existing_tags)} existing tag(s)")
        if not args.skip_fields:
            existing_fields = fetch_existing_custom_fields(client)
            if existing_fields:
                log_info(f"Found {len(existing_fields)} existing custom field(s)")

    # ---- Create Tags ----
    tag_counts = {"created": 0, "skipped": 0, "failed": 0}
    if not args.skip_tags:
        tag_counts = create_tags(client, config["tags"], existing_tags)
    else:
        section_header("TAGS (skipped)")
        log_skip("Tag creation skipped via --skip-tags")

    # ---- Create Custom Fields ----
    field_counts = {"created": 0, "skipped": 0, "failed": 0}
    if not args.skip_fields:
        field_counts = create_custom_fields(
            client, config["custom_fields"], existing_fields
        )
    else:
        section_header("CUSTOM FIELDS (skipped)")
        log_skip("Custom field creation skipped via --skip-fields")

    # ---- Create Email Templates ----
    email_counts = {"created": 0, "skipped": 0, "failed": 0, "saved_html": 0}
    if not args.skip_emails:
        email_counts = create_email_templates(client, config["email_templates"])
    else:
        section_header("EMAIL TEMPLATES (skipped)")
        log_skip("Email template creation skipped via --skip-emails")

    # ---- Summary ----
    print_summary(tag_counts, field_counts, email_counts, args.dry_run)

    # Exit code
    total_failed = (
        tag_counts.get("failed", 0)
        + field_counts.get("failed", 0)
        + email_counts.get("failed", 0)
    )
    sys.exit(1 if total_failed > 0 else 0)


if __name__ == "__main__":
    main()
