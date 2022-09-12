//@ts-ignore
import React from "react";
import "./App.css";
import "./BleTest";
import { scan } from "./BleTest";

function clickMe() {
  alert("You clicked me!");
}

function App() {
  return (
    <div className="App">
      <h1>This is a simple BT app</h1>
      <button onClick={scan}>Button</button>
      <button onClick={() => console.log("Button was clicked")}>Alert</button>
    </div>
  );
}

export default App;
