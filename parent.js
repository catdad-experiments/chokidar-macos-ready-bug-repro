const { spawn } = require('child_process');

[
  spawn('node', ['child.js'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
//  spawn('node', ['prime.js'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
  spawn('npm', ['-v'], { stdio: ['ignore', 'pipe', 'pipe' ]}),
].forEach(proc => {
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
});
