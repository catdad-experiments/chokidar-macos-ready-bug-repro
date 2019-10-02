const { spawn } = require('child_process');

spawn('node', ['child.js'], { stdio: 'inherit' });
spawn('npx', ['electron', '--version'], { stdio: 'inherit' });
