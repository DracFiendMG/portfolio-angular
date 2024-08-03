const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Image = require('../models/image')

const db = "mongodb+srv://sreeramrdy:Reddy_2000@portfolio-database.wrx5j6k.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio-Database"
mongoose.Promise = global.Promise

mongoose.connect(db, function(err){
    if (err){
        console.error("Error! "+ err)
    }
})

router.get('/images', function(req, res) {
    console.log('Get request for all images')
    Image.find({})
        .exec(function(err, images){
            if(err){
                console.log("Error retrieving images")
            }else{
                console.log(images)
                res.json(images)
            }
        })
})

module.exports = router