//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

//db.once('open', function() {
const itemSchema = new mongoose.Schema({
    name: String,
});
const Item = mongoose.model("Item", itemSchema);

const task1 = new Item({ name: "Bienvenido a tu lista de tareas" });

const task2 = new Item({ name: "<--- Acá puedes borrar tus tareas" });

const task3 = new Item({ name: "Presionando + puedes añadir tareas nuevas" });

const defaultItems = [task1, task2, task3];

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
})
const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
    Item.find({}, (err, dbItems) => {
        if (err) {
            console.error(err);
        } else {
            dbItems.length === 0 &&
                Item.insertMany(defaultItems, function(err) {
                    err ? console.error(err) : console.log("Saved to DB");
                    res.redirect("/");
                });

            dbItems.length !== 0 && res.render("list", { listTitle: "Para hoy", newListItems: dbItems });
        }
    });
});

//})

app.post("/", function(req, res) {

    if (req.body.newItem.length > 0) {
        const itemName = req.body.newItem;
        const newTask = new Item({ name: itemName });

        if (req.body.list !== "Para hoy") {
            List.findOne({ name: req.body.list }, (err, existingList) => {
                existingList.items.push(newTask);
                existingList.save();
                res.redirect("/" + req.body.list);
            })
        } else {
            newTask.save();
            res.redirect("/");
        };
    }
});

app.post("/delete", (req, res) => {
    if (req.body.listName === "Para hoy") {
        Item.findByIdAndRemove(req.body.checkbox, (err) => {
            err ? console.log(err) : console.log("Deleted successfully. Cheers!")
        });
        res.redirect("/");
    } else {
        List.findOneAndUpdate({ name: req.body.listName }, { $pull: { items: { _id: req.body.checkbox } } }, (err, foundList) => {
            if (err) { console.log(err) } else {
                console.log("Deleted succesfully from custom list");
                res.redirect("/" + req.body.listName);
            }
        });
    }

});

app.get("/:customListName", function(req, res) {
    let list = [];
    const listName = _.capitalize(req.params.customListName);
    List.findOne({ name: listName }, (err, existingList) => {
        if (err) { console.log(err) } else {

            if (existingList === null) {
                list = new List({ name: listName, items: defaultItems })
                list.save();


            } else {
                list = existingList;

            }
            res.render("list", { listTitle: listName, newListItems: list.items });

        }
    })


});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});