const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const portno = 8080;

app.get("/", function (req, res) {
  res.send("<h1>Hello from the express</h1>".toUpperCase());
});

app.get("/about", (req, res) => {
  console.log("URL : ", req.url);
  console.log("request : ", req);
  res.send(`this app is created by Sourav Ganguly. ${req.header}`);
});

app.listen(portno, () => {
  console.log(`${hostname}:${portno}`);
});
