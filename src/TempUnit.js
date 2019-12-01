import React, { useState } from "react";
import "./TempUnit.css";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TempUnit">
        <span className="unit">
          {props.celsius}
          <span className="CF">
            ºC |{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              ºF
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="TempUnit">
        <span class="unit">
          {fahrenheit}
          <span className="CF">
            <a href="/" onClick={showCelsius}>
              ºC
            </a>{" "}
            | ºF
          </span>
        </span>
      </div>
    );
  }
}
