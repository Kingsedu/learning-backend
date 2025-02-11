const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.json(products);
});

app.listen(4999, () => {
  console.log("Server is running on port 4999");
});

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// //*setup static and middleware;
// app.use(express.static("./public"));
// app.get("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

// const express = require("express");
// const cors = require("cors");
// //? initializing the express app;

// const app = express();
// app.use(cors());
// app.get("/", (req, res) => {
//   res.status(200).send("hello is this d beginning of the journey");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About Page");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource not found</h1>");
// });
// app.listen(5045, () => {
//   console.log("Server is running on port 5045");
// });

// // console.log('Express Tutorial')
// const http = require("http");
// const { readFileSync } = require("node:fs");

// // get all files;
// const homePage = readFileSync("navbar-app/index.html");
// const homeStyles = readFileSync("navbar-app/styles.css");
// const homeImages = readFileSync("navbar-app/logo.svg");
// const homeLogic = readFileSync("navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   const url = req.url;
//   //this is the home page;
//   if (url === "/") {
//     console.log("User hit the server");
//     res.writeHead(200, { "content-type": "text/html" });

//     res.write(homePage);
//     res.end();
//   } else if (url === "/styles.css") {
//     // console.log("User hit the about page");
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImages);
//     res.end();
//   } else if (url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   }
//   //this is the about page
//   else if (url === "/about") {
//     console.log("User hit the about page");
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>This is the About Page</h1>");
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>Page not found</h1>");
//     res.end();
//   }
// });

// server.listen(5050, () => {
//   console.log("server is listening on port 5050");
// });
