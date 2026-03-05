// Money Decoded — Audio Module Generator via ElevenLabs Voice Clone
// Splits manuscripts into module chunks → sends to ElevenLabs TTS API → saves as MP3
//
// REQUIRES:
//   1. ElevenLabs account ($5/mo starter plan) — elevenlabs.io
//   2. Voice clone created (upload 1-5 min of Jamaal's voice)
//   3. API key set as environment variable: ELEVENLABS_API_KEY
//   4. Voice ID from cloned voice: ELEVENLABS_VOICE_ID
//
// Usage:
//   set ELEVENLABS_API_KEY=your_key_here
//   set ELEVENLABS_VOICE_ID=your_voice_id_here
//   node generate-audio.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const BASE_URL = 'https://api.elevenlabs.io/v1';

if (!API_KEY || !VOICE_ID) {
  console.error('Missing environment variables. Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID');
  console.error('\nSetup steps:');
  console.error('1. Sign up at https://elevenlabs.io ($5/mo starter)');
  console.error('2. Go to VoiceLab → Add Voice → Instant Voice Clone');
  console.error('3. Upload 1-5 minutes of your voice (clear recording, no background noise)');
  console.error('4. Copy the Voice ID from the voice settings');
  console.error('5. Copy your API key from Profile → API Key');
  console.error('\nThen run:');
  console.error('  set ELEVENLABS_API_KEY=sk_...');
  console.error('  set ELEVENLABS_VOICE_ID=...');
  console.error('  node generate-audio.js');
  process.exit(1);
}

// Module definitions with line ranges for splitting
const TRACKS = [
  {
    slug: 'deal-machine',
    name: 'The Deal Machine',
    modules: [
      { num: 1, title: 'The Down Market Advantage', startMarker: '# MODULE 1', endMarker: '# MODULE 2' },
      { num: 2, title: 'Wholesaling — Your First $5K-$15K', startMarker: '# MODULE 2', endMarker: '# MODULE 3' },
      { num: 3, title: 'The BRRRR Method', startMarker: '# MODULE 3', endMarker: '# MODULE 4' },
      { num: 4, title: 'Fix & Flip — Big Cash Injections', startMarker: '# MODULE 4', endMarker: '# MODULE 5' },
      { num: 5, title: 'Creative Finance', startMarker: '# MODULE 5', endMarker: '# MODULE 6' },
      { num: 6, title: 'Your First 90 Days', startMarker: '# MODULE 6', endMarker: null },
    ],
  },
  {
    slug: 'wealth-shift',
    name: 'The Wealth Shift',
    modules: [
      { num: 1, title: 'The Wall Street Tax', startMarker: '## MODULE 1', endMarker: '## MODULE 2' },
      { num: 2, title: 'The SDIRA Playbook', startMarker: '## MODULE 2', endMarker: '## MODULE 3' },
      { num: 3, title: 'Liquidation Strategy', startMarker: '## MODULE 3', endMarker: '## MODULE 4' },
      { num: 4, title: 'Passive Real Estate Strategies', startMarker: '## MODULE 4', endMarker: '## MODULE 5' },
      { num: 5, title: 'Your Wealth Shift Calculator', startMarker: '## MODULE 5', endMarker: '## MODULE 6' },
    ],
  },
  {
    slug: 'foundation',
    name: 'The Foundation',
    modules: [
      { num: 1, title: 'Budget & Cash Flow', startMarker: '# MODULE 1', endMarker: '# MODULE 2' },
      { num: 2, title: 'Risk Management', startMarker: '# MODULE 2', endMarker: '# MODULE 3' },
      { num: 3, title: 'Net Worth & Hidden Assets', startMarker: '# MODULE 3', endMarker: '# MODULE 4' },
      { num: 4, title: 'Retirement Accounts', startMarker: '# MODULE 4', endMarker: '# MODULE 5' },
      { num: 5, title: 'Building Your Investment Team', startMarker: '# MODULE 5', endMarker: '# MODULE 6' },
      { num: 6, title: 'Your Buy Box', startMarker: '# MODULE 6', endMarker: '# MODULE 7' },
      { num: 7, title: 'Your 90-Day Launch Plan', startMarker: '# MODULE 7', endMarker: null },
    ],
  },
];

function extractModule(markdown, startMarker, endMarker) {
  const lines = markdown.split('\n');
  let capturing = false;
  let content = [];

  for (const line of lines) {
    if (line.trim().toUpperCase().startsWith(startMarker.toUpperCase())) {
      capturing = true;
    }
    if (capturing && endMarker && line.trim().toUpperCase().startsWith(endMarker.toUpperCase())) {
      break;
    }
    if (capturing) {
      // Strip markdown formatting for TTS
      let clean = line
        .replace(/^#{1,6}\s+/, '') // remove heading markers
        .replace(/\*\*([^*]+)\*\*/g, '$1') // remove bold
        .replace(/\*([^*]+)\*/g, '$1') // remove italic
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove links
        .replace(/^[-*]\s+/g, '') // remove list markers
        .replace(/^\|.*\|$/g, '') // remove table rows
        .replace(/^---+$/g, '') // remove horizontal rules
        .replace(/`([^`]+)`/g, '$1') // remove inline code
        .trim();

      if (clean) content.push(clean);
    }
  }

  return content.join('\n\n');
}

function makeRequest(url, options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      } else {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode}: ${body}`)));
      }
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function generateAudio(text, outputPath, moduleName) {
  console.log(`  🎙️  Generating: ${moduleName}`);
  console.log(`     Text length: ${text.length} chars (~${Math.round(text.split(/\s+/).length / 150)} min audio)`);

  // ElevenLabs has a character limit per request. Split if needed.
  const MAX_CHARS = 5000;
  const chunks = [];

  if (text.length <= MAX_CHARS) {
    chunks.push(text);
  } else {
    // Split on paragraph boundaries
    const paragraphs = text.split('\n\n');
    let current = '';
    for (const p of paragraphs) {
      if ((current + '\n\n' + p).length > MAX_CHARS && current.length > 0) {
        chunks.push(current);
        current = p;
      } else {
        current = current ? current + '\n\n' + p : p;
      }
    }
    if (current) chunks.push(current);
  }

  console.log(`     Chunks: ${chunks.length}`);

  const audioBuffers = [];

  for (let i = 0; i < chunks.length; i++) {
    const payload = JSON.stringify({
      text: chunks[i],
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.3,
        use_speaker_boost: true,
      },
    });

    const url = new URL(`${BASE_URL}/text-to-speech/${VOICE_ID}`);

    const buffer = await makeRequest(url, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
    }, payload);

    audioBuffers.push(buffer);
    console.log(`     Chunk ${i + 1}/${chunks.length} done (${(buffer.length / 1024).toFixed(0)} KB)`);

    // Rate limiting — wait 1 second between chunks
    if (i < chunks.length - 1) {
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Concatenate all MP3 chunks (simple concatenation works for MP3)
  const finalBuffer = Buffer.concat(audioBuffers);
  fs.writeFileSync(outputPath, finalBuffer);
  console.log(`     ✅ Saved: ${outputPath} (${(finalBuffer.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  console.log('=== Money Decoded — Audio Module Generator (ElevenLabs) ===\n');
  console.log(`Voice ID: ${VOICE_ID}`);
  console.log(`API Key: ${API_KEY.substring(0, 8)}...`);
  console.log('');

  const baseDir = path.resolve(__dirname, '../../business/funnel/products');
  let totalModules = 0;

  for (const track of TRACKS) {
    console.log(`\n🎵 ${track.name.toUpperCase()} (${track.modules.length} modules)`);

    const manuscriptPath = path.join(baseDir, track.slug, 'manuscript.md');
    const audioDir = path.join(baseDir, track.slug, 'deliverables', 'audio');
    fs.mkdirSync(audioDir, { recursive: true });

    const markdown = fs.readFileSync(manuscriptPath, 'utf8');

    for (const mod of track.modules) {
      const text = extractModule(markdown, mod.startMarker, mod.endMarker);
      if (!text || text.length < 100) {
        console.log(`  ⚠️  Skipping Module ${mod.num} — insufficient text`);
        continue;
      }

      const filename = `${track.slug}-module-${mod.num}-${mod.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.mp3`;
      const outputPath = path.join(audioDir, filename);

      await generateAudio(text, outputPath, `Module ${mod.num}: ${mod.title}`);
      totalModules++;

      // Wait between modules to respect rate limits
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\n=== Done! ${totalModules} audio modules generated ===`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
