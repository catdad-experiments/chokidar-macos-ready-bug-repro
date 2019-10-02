const { spawn } = require('child_process');

const proc1 = spawn('node', ['child.js'], { stdio: ['ignore', 'pipe', 'pipe' ]});
const proc2 = spawn('npx', ['electron', '--version'], { stdio: ['ignore', 'pipe', 'pipe' ]});

proc1.stdout.pipe(process.stdout);
proc1.stderr.pipe(process.stderr);
proc2.stdout.pipe(process.stdout);
proc2.stderr.pipe(process.stderr);
