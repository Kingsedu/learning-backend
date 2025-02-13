const express = require("express");
// const morgan = require("morgan");
// const { logger, authorize } = require("./middleware");

let { people } = require("./data");

//middleware are functions that execute between the request and response object,
const app = express();

// static assets;

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome : ${name}`);
  } else {
    res.status(401).send("Please enter a name");
  }
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, person: newPeople });
});


app.delete('/api/people/:id', (req, res)=>{
  const { id } = req.params;
  const person = people.find((person) => person.id === +id);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person)=> person.id !== +id);
  return res.status(200).json({ success: true, data: newPeople})
})
app.listen(4999, () => {
  console.log("Server is running on port 4999");
});

// app.use([logger, authorize]);
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("home");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact");
// });

// app.get("/details", (req, res) => {
//   res.send("details");
// });
// app.get("/", (req, res) => {
//   res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
// });
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get("/api/products/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const singleProductId = products.find((product) => product.id === +id);
//   if (!singleProductId) {
//     return res.status(404).send("Product not found");
//   }
//   res.json(singleProductId);
// });

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, +limit);
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(303).send("No products matched your search");
//     return res.status(200).json({ success: true, data: [] });
//   }
//   return res.status(200).json(sortedProducts);
//   // res.send("hello world");
// });

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
