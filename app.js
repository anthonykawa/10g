const handler = require('serve-handler');
const http = require('http');
 
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  return handler(request, response);
})
 
server.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});