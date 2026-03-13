import { build } from 'vite';
import fs from 'fs';

async function run() {
  try {
    await build();
  } catch(e) {
    fs.writeFileSync('error_dump.txt', e?.message + '\n\n' + e?.stack);
  }
}
run();
