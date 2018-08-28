const express = require('express')
const router = express.Router()

const Restaurant = require('../models/Restaurant')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/restaurants', (req, res) => {
    Restaurant.find({}).then(restaurants => {
        res.send(restaurants)
    })
})

module.exports = router
