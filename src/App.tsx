//@ts-ignore
import React from "react";
import "./App.css";
import "./BleTest";
import { alive, dead, scan, sett } from "./BleTest";

function App() {
  return (
    <div className="App">
      <h1>This is a simple BT app</h1>
      <button onClick={scan}>Scan</button>
      <button onClick={sett}>Settings</button>
      <button onClick={alive}>Activate</button>
      <button onClick={dead}>De-Activate</button>
    </div>
  );
}

export default App;
