const express = require('express');
const router = express.Router();

const getWeather = require('../lib/getWeather')

router.get('/', (req, res)=>{
    res.render('weather');
});

// async and await for getting the data
router.post('/', async(req, res)=>{
    let location = req.body.location;
    let countryCode = req.body.countryCode
    let data = await getWeather(location, countryCode);
    if (data.cod == '404'){
        res.render('weather', {
            err:'The provided location doesn\'t exist'
        })
        return;
    }
    let name = data.name;
    let temp = data.main.temp;
    let type = data.weather[0].main;
    let description = data.weather[0].description;
    let feels_like = data.main.feels_like;
    let wind_speed = data.wind.speed;
    let humidity = data.main.humidity;
    res.render('weather', {name, data: {temp, type, description, feels_like, wind_speed, humidity}, listExists: true});
})

module.exports = router;