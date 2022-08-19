//@ts-ignore
import React from 'react'
import './App.css'

function clickMe (){
  alert('You clicked me!');
}

function App() {
  return (
    <div className='App'>
      <h1>This is a simple BT app</h1>
      <button onClick = {clickMe}>
        Button
      </button>
    </div>
  )
}

export default App
