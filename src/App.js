import React from "react";

import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was coded by{" "}
          <a href="https://raquelfelgueiras.com/">Raquel Felgueiras </a>and is{" "}
          {""}
          <a href="https://github.com/raquelFel/react-project" target="_blank">
            Open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
