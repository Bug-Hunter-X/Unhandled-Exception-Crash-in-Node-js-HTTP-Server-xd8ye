# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing the server to crash. The `bug.js` file contains a server that throws an error without proper handling, leading to process termination.  The `bugSolution.js` file shows how to properly handle the error using a `try...catch` block and process listeners.