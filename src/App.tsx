import React from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <h1>Data Visualization</h1>
      <div className="chart-wrapper">
        <LineChart />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
