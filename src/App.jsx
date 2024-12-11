
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState('');

  const changeColor = (color) => {
    setBgColor(color);
  };
  
  return (
    <div
  className="d-flex justify-content-center align-items-center vh-100"
  style={{ backgroundColor: bgColor }}
>
  <div className="w-50 p-5 text-center rounded" style={{ backgroundColor: "#f0f0f0" }}>
    <h1>Explore the colours in rainbow</h1>
   
    <div className="mt-4">
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("violet")}
        style={{ backgroundColor: "violet", color: "white" }}
      >
        Violet
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("indigo")}
        style={{ backgroundColor: "indigo", color: "white" }}
      >
        Indigo
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("blue")}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Blue
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("green")}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Green
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("yellow")}
        style={{ backgroundColor: "yellow", color: "black" }}
      >
        Yellow
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("orange")}
        style={{ backgroundColor: "orange", color: "white" }}
      >
        Orange
      </Button>
      <Button
        className="btn btn-light m-2 rounded"
        onClick={() => changeColor("red")}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Red
      </Button>
    </div>
  </div>
</div>

  );
}

export default App;