const { spawn } = require('child_process');

spawn('node', ['debug.js'], { stdio: 'inherit' });
spawn('npx', ['electron', '--version'], { stdio: 'inherit' });
