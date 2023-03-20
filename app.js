const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Community =require('./models/login');
const SignUp  = require('./models/signup');

const port = process.env.PORT ||  8000;


const app= express();

const dbURI='mongodb+srv://test123:test123@cluster12321.p6gwdho.mongodb.net/mnnit-community-page?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(8000))
.catch((err)=> console.log(err));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/homepage',(req,res)=> {
  res.render('homepage');
});

app.get('/homepage anonymous', (req,res)=> {
  res.render('homepage anonymous');
});


app.get('/events', (req,res)=> {
  res.render('events');
});

app.get('/news', (req,res)=> {
  res.render('news');
});

app.get('/signup', (req,res)=> {
  res.render('signup');
});

app.post('/signups', (req,res) => {

  const signup= new Signup({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      password: req.body.password
    });
  

  signup.save()
    .then(result => {
      res.send("item send to.. database");
    })
    .catch(err => {
      console.log(err);
    });
  });
app.get('/login', (req,res) => {
  res.render('login');
});

app.post('/communities', (req,res) => {

  const community= new Community({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });

  community.save()
    .then(result => {
      res.redirect('/communities');
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/qna', (req,res) => {
  res.render('qna');
});

app.get('/qna1', (req,res) => {
  res.render('qna1');
});
