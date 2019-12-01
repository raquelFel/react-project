import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
    console.log(response.data.list[1].weather[0].icon);
  }

  if (loaded && forecastData.city.name === props.city) {
    return (
      <div className="Forecast row">
        {forecastData.list.slice(0, 6).map(function(weather) {
          let iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
          return (
            <div className="col-2">
              <img src={iconUrl} alt="oops!" />
              {Math.round(weather.main.temp)}ºC
            </div>
          );
        })}
      </div>
    );
  } else {
    const apiKey = "f58b0854457e2f05df673d838cf4e8ca";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
