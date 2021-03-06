/*
Name: Carlitos de Castro
Student ID: 300949290
Date: March 06, 2021
Midterm Test
 */

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema ({
    name : String,
    author : String,
    published : String,
    description : String,
    price : Number
},
{
    collection : "books"
})
/**
 * add your code to 
 * create your model here
 * 
 */

module.exports = mongoose.model('Book', bookModel);