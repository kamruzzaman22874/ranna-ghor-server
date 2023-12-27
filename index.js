const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());


const foods = require("./foods.json");
const trendingFood = require("./trendingFood.json");
const latsetFood = require("./latestFood.json");
const categoryFood = require("./categoryRecepie.json");



app.get("/foods", (req, res) => {
    res.send(foods)
})
app.get("/food", (req, res) => {
    res.send(trendingFood)
})

app.get("/latestFood", (req, res) => {
    res.send(latsetFood)
})

app.get("/category", (req, res) => {
    res.send(categoryFood)
})

app.get('/', (req, res) => {
    res.send("Ranna Gor Server Is Running")
})

app.listen(port, () => {
    console.log(`Ranna Gor Server is listening on ${port}`)
})