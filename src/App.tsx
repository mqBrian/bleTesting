//@ts-ignore
import React from "react";
import "./App.css";
import "./BleTest";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <h1>This is a simple BT app</h1>
      <Buttons />
    </div>
  );
}

export default App;
