//jshint esversion:11

import express, { urlencoded } from "express";
const app = express();
import { get } from "https";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
let items = [];
let workItems = [];

app.set("view engine", "ejs");
app.use(urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  /*  let currentDay= today.getDay();
    let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; */
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  res.render("list", {
    listTitle: today.toLocaleDateString("en-US", options),
    newListItems: items,
  });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work") {workItems.push(item); res.redirect("/work");} 
  else { items.push(item);  res.redirect("/");} 

 
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, (res, req) => {
  console.log("Server OK at 3000");
});
