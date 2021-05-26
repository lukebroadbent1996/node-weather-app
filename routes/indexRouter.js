const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather')

// set all to router.get(/)because in /index.js, each router are called separately as app.use(/name_of_router, router_file)
router.get('/', async(req, res)=>{
    let data = await getWeather('Manchester', 'uk');
    let name = data.name;
    let temp = data.main.temp;
    let type = data.weather[0].main;
    let description = data.weather[0].description;
    let feels_like = data.main.feels_like;
    let wind = data.wind.speed;
    let hum = data.main.humidity;
    res.render('index', {name, temp, data: {temp, type, description, feels_like, wind, hum}});

});

module.exports = router;