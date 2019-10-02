let count = 0;
setInterval(() => {
  console.log('child', ++count, Date.now());
}, 100);

const path = require('path');
const chokidar = require('chokidar');
const root = path.resolve('.');

const watcher = chokidar.watch('.', {
  cwd: root,
  ignored: [
    /(^|[/\\])\../, // Dotfiles
    'node_modules',
    '**/*.map'
  ]
});

watcher.on('add', f => console.log('add', f));
watcher.on('ready', () => console.log('ready'));

// exit after 10 seconds... it should definitely be enough time
setTimeout(() => {
  process.exit();
}, 10000);
