const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather')

router.get('/', (req, res)=>{
    res.render('404');
});

module.exports = router;