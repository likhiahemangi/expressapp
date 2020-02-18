const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')



//This allows express to make my static content avialable from the public
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}))


//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
pp.get("/",(req,res)=>{

    res.render('home',{
        title: "Home",
        headingInfo : "Home Page",
        randomContent: "Home Page"
    });
});
app.get("/product",(req,res)=>{

    res.render("product",{
        title: "Product Page",
        headingInfo : "Product PAge",
    });
});

app.listen(3000,()=>{

    console.log(`Web server is up and running`);
})