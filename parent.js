const os = require('os');
const { spawn } = require('child_process');

console.log(`${process.platform}, ${os.cpus()[0].model.trim()}, ${os.cpus()[0].speed}, ${os.cpus().length} cores`);

[
  spawn('node', ['child.js'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
//  spawn('node', ['prime.js'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
  spawn('npm', ['-v'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
].forEach(proc => {
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
});
