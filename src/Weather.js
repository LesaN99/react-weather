import React, {useState} from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";



export default function Weather(props) {
    const [weather, setWeather] = useState({ready: false});

function showTemperature(response) {
  setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.weather[0].description,
    });
}

if (weather.ready) {
    return (
        <div className="Weather">
            <div className="weather-app">
                <header>
            <form>
          <input
            type="search"
            placeholder= "Enter a city.."
            required
            className="search-input"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <Weatherinfo data={weatherData}/>
        </header>
        </div>
    );

} else {
    const apiKey= `f5029b784306910c19746e40c14d6cd3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);

    return "Loading...";
}
   
}