//jshint esversion:11
import express, { urlencoded } from "express";
const app = express();
import { get } from "https";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.set("Content-Type", "text/html");

  const query = req.body.pokename;
  console.log(query);
  const url = "https://pokeapi.co/api/v2/pokemon/" + query;

  get(url, (response) => {
    console.log(response);
    console.log(res.statusCode);
    let data = [];
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const poke = JSON.parse(data);
      res.write(`<h1> Nombre: ${poke.name}</h1>`);
      res.write(`<h2>Tipo</h2>`);
      poke.types.forEach((element) => {
        res.write(`<span> ${element.type.name} </span>`);
      });

      res.write(
        `<img style="width: 300px; position: absolute" src="${poke.sprites.front_shiny}">`
      );
      res.send();
    });
  });
});

app.listen(3000, (req, res) => {
  console.log("Server OK at 3000");
});
