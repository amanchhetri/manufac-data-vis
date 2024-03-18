import React, {useEffect} from 'react';
import data from "../data/Wine-Data.json";
import ReactECharts from 'echarts-for-react';

function Chart() {

  // Prepare data for echarts
  const option = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids', // Label for the horizontal axis
    },
    yAxis: {
      type: 'value',
      name: 'Ash', // Label for the vertical axis
    },
    series: [{
      data: data.map(item => [item.Flavanoids, item.Ash]),
      type: 'line',
    }],
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <ReactECharts option={option} />
    </div>
  );
}

export default Chart;