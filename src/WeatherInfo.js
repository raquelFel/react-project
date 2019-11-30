import React from "react";

import FormattedDate from "./FormattedDate";
import TempUnit from "./TempUnit";

export default function WeatherInfo(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={iconUrl} alt={props.data.description} />
          <div>
            <TempUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
