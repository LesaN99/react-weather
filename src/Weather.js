import React from "react";
import "./Weather.css"


export default function Weather() {
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
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        </header>
            <h1>Johannesburg</h1>
            <ul>
                <li>Thursday 17:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="isolated thunderstorms" />
                    26°C
                </div>
                <div className="col-6">
                    <uL>
                        <li>Precipitation: 5%</li>
                        <li>Humidity: 45%</li>
                        <li>Wind: 10 km/h</li>
                    </uL>
                </div>
            </div>
            </div>
        </div>
    )
}