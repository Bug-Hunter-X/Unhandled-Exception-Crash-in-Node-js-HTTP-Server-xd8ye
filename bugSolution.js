const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (err) {
    console.error('Caught error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Additional error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});