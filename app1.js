const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurantlist = require("./restaurant.json");
const port = 3001

app.engine('handlebars', exphbs.engine({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index", { restaurants: restaurantlist.results})
})

app.get("/restaurants/:restaurant_id",(req,res)=>{
    const restaurant = restaurantlist.results.filter(restaurant => restaurant.id == req.params.restaurant_id)
    res.render('show', { restaurant: restaurant[0]})
})

app.get("/search",(req,res)=>{
    const restaurants = restaurantlist.results.filter((restaurant)=>{
        return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase())
    })
    res.render('index', { restaurants: restaurants, keyword: req.query.keyword})
})

app.listen(port, ()=>{
    console.log(`Express is listening on localhost: ${port}`);
})