const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const fruitSchema = new mongoose.Schema({
        name: String,
        flavor: String,
        Amount: Number

    });

    const Fruit = mongoose.model('Fruit', fruitSchema);

    const Papaya = new Fruit({ name: "Papaya", flavor: "Disgusting", Amount: 2 })
    Papaya.save(function(err, papaya) {
        if (err) return console.error(err);

    });

    const Pina = new Fruit({ name: "Pina", flavor: "Delicious", Amount: 3 })
    Pina.save(function(err, pina) {
        if (err) return console.error(err);

    });

    const Tomate = new Fruit({ name: "Tomate", flavor: "Tomato", Amount: 2 })
    Tomate.save(function(err, tomate) {
        if (err) return console.error(err);

    });
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favoriteFruit: fruitSchema
    })


    const Person = mongoose.model('Person', personSchema);
    const Jim = new Person({
        name: "Jim",
        age: 37
    })
    Jim.save((err, jim) => { if (err) return console.error(err) })

    const Amy = new Person({
        name: "Amy",
        age: 36,
        favoriteFruit: Tomate
    })
    Amy.save((err, amy) => { if (err) return console.error(err) })

    const Kiwi = new Fruit({ name: "Kiwi", flavor: "Acid", Amount: 3 })
    Kiwi.save((err, kiwi) => { if (err) return console.error(err) })

});