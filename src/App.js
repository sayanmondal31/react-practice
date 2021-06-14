import React, { useEffect, useState } from "react";
import Room from "./components/Room";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const webBackground = localStorage.getItem("darkMode");
    if (webBackground === "1") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  function darkModeHandler() {
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem("darkMode", "0");
    } else {
      setDarkMode(true);
      localStorage.setItem("darkMode", "1");
    }
  }

  darkMode
    ? (document.body.style.backgroundColor = "#202124")
    : (document.body.style.backgroundColor = "white");

  return (
    <div>
      <h1 style={{ color: darkMode ? "white" : "black" }}>
        Example of useEffect
      </h1>
      <p style={{ color: darkMode ? "white" : "black" }}>
        dark mode and light mode
      </p>
      <p style={{ color: darkMode ? "white" : "black" }}>
        Game with emoji: when three switch on then room with light
      </p>
      <button style={{backgroundColor:"whitesmoke", borderRadius:"20px", padding:"1rem", fontSize:"20px"}} onClick={darkModeHandler}>
        {" "}
        {darkMode ? "Light Mode" : "Dark Mode"}{" "}
      </button>
      <br />
      <br />
      <br />
      <h1 style={{ color: darkMode ? "yellow" : "black" }}>
       to get 💡 you have to turn on three switches
      </h1>
      <Room />
    </div>
  );
}

export default App;
