const express = require('express')
const body = require("body-parser");
const exhbs = require("express-handlebars");
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.static('public'));
const buttonsRoute = require("./routes/buttons-routes");
var useButtons = buttonsRoute();
// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 
app.engine("handlebars", exhbs({defaultLayout: "main", layoutsDir: "views/layouts"}));
app.set("view engine", "handlebars");
app.use(body.urlencoded({extended:false}))
app.use(body.json());
//routes
app.get('/' , useButtons.homeRoute);
app.get('/gallery' , useButtons.galleryRoute)
app.get("/register", useButtons.registerRoute)
app.get("/logIn", useButtons.logIn)
app.listen(PORT, ()=>{

})