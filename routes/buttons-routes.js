const uniqid = require("uniqid")
module.exports = function buttons(){
    function homeRoute(req,res){
        //console.log(uniqid());
        res.render("index")
    }
    function registerRoute(req, res){
        res.render("register")
    }
    function galleryRoute(req,res){
        res.render("gallery")
    }
    function logIn(req,res){
        res.render("login");
    }
    return{
        homeRoute,
        registerRoute,
        galleryRoute,
        logIn
    }
}