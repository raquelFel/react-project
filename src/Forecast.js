import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecastData(response.data);
    setLoaded(true);
  }

  if (loaded && forecastData.city.name === props.city) {
    return (
      <div className="Forecast row">
        {forecastData.list.slice(0, 5).map(function(weather) {
          return <div className="col">{Math.round(weather.main.temp)}ºC</div>;
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
