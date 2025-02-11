// console.log('Express Tutorial')
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("User hit the server");
  res.end("hello world");
});

server.listen(5050, () => {
  console.log("server is listening on port 5050");
});
