import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city" autoFocus="on" />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Go!"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>

        <h1>{WeatherData.city}</h1>
        <ul>
          <li>Wednesday</li>
          <li>{WeatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="" alt="image" />
            <span>{WeatherData.temperature}ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {WeatherData.humidity}%</li>
              <li>Wind: {WeatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f58b0854457e2f05df673d838cf4e8ca";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&APPID=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
