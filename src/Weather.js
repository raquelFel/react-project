import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city" />
          </div>
          <div className="col-3">
            <input type="submit" value="Go!" className="btn btn-light" />
          </div>
        </div>
      </form>

      <h1>Paris</h1>
      <ul>
        <li>Wednesday</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="image" />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 5%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
