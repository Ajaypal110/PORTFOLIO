const { execSync } = require('child_process');
const fs = require('fs');
try {
  execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
  console.log("Success");
} catch(e) {
  fs.writeFileSync('raw_error.txt', (e.stdout || '') + '\n' + (e.stderr || '') + '\n' + (e.message || ''));
}
