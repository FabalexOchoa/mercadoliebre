const express = require("express");
const app = express();
const path = require("path");

//carpeta publica
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// levantar server
app.listen(3000, () => {
  console.log("el servidor funciona en puerto 3000");
});

//rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/register.html"));
});
