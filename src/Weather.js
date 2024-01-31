import React, {useState} from "react";
import "./Weather.css"
import axios from "axios";
import FormattedDate from "./FormattedDate";


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
        </header>
            <h1>{weather.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weather.date} />
                </li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weather.iconUrl} alt={weather.description}
                    className="float-left" />
                   <span className="temperature">{Math.round(weather.temperature)}</span>
                   <span className="unit">°C</span>
                   </div>
                </div>
                <div className="col-6">
                    <uL>
                        <li>humidity: {weather.humidity}%</li>
                        <li>wind: {weather.wind}km/h</li> 
                    </uL>
                </div>
            </div>
            </div>
        </div>
    );

} else {
    const apiKey = "5354b60afda2b7800186c06153932396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);

    return "Loading...";
}
   
}