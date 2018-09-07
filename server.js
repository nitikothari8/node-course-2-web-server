const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear()
});

hbs.registerHelper('scremIt',(text) => {
  return text.toUpperCase();
});
app.set('view engine','hbs');

app.use((req, res, next) => {
  var d = new Date().toString();
  var log = d + " " + req.method+ " " + req.path;
   //fs.appendFile('log.txt',log + '\n');
});


app.use((req, res, next) => {
     res.render('maintence.hbs');
});

app.get('/about',(req, res) => {
     res.render('about.hbs',{
       pageTitle : 'About Page'
     });
});

app.get('/bad',(req, res) => {
  res.send({
      errorMessage : 'Unable to handle a request'
  });
});


app.get("/",(req, res) =>
{
    res.render("home.hbs",{
      pageTitle : 'Home Page',
       msg : 'Welcome to all Users'
    });
});
app.use(express.static(__dirname + '/public'));
app.listen(port,() =>{
  console.log("Server is on port 3000");
});
