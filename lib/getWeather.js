const fetch = require('node-fetch');

//Import dotenv module, use config() method so it will access the .env file
require('dotenv').config();


const getWeather = async (location, countryCode) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&appid=${process.env.APPID}`);
    return await data.json();
}

module.exports = getWeather;