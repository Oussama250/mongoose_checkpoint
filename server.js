// import mongoose 
const express = require('express');
const mongoose= require('mongoose');
const Person = require("./Models/Person");
const app = express();
const url = 'mongodb://127.0.0.1:27017/my_database'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
});

const Preson = new Person ({name : "Oussama Beddiaf", age: 31});

Preson.save((error) => {
    if(error) {
        console.log(`error has occured: ${error}`);
    }
    else
        console.log("Document has succesfuly saved.");
});

Person.find({},(error, documents)=> {
    if(error) {
        console.log(`an error has occured : ${error}`);
    }
    else
        console.log(documents);
})