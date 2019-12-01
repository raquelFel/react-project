import React from "react";

import "./WeatherInfo.css";

import FormattedDate from "./FormattedDate";
import TempUnit from "./TempUnit";

export default function WeatherInfo(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span className="Date">
                <FormattedDate date={props.data.date} />
              </span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <img src={iconUrl} alt={props.data.description} />
        </div>
        <div className="col-3">
          <TempUnit celsius={props.data.temperature} />
          <span className="descrip">{props.data.description}</span>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
