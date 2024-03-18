import React, {useEffect} from 'react';
import data from "../data/Wine-Data.json";
import ReactECharts from 'echarts-for-react';

function BarChart() {

    // Calculate minimum Magnesium value for each Alcohol category
  const alcoholCategories:any = {};
  data.forEach(item => {
    if (!(item.Alcohol in alcoholCategories) || item.Magnesium < alcoholCategories[item.Alcohol]) {
      alcoholCategories[item.Alcohol] = item.Magnesium;
    }
  });

  // Prepare data for echarts
  const option = {
    xAxis: {
      type: 'category',
      data: Object.keys(alcoholCategories), // Alcohol categories on the horizontal axis
      name: 'Alcohol', // Label for the horizontal axis
    },
    yAxis: {
      type: 'value',
      name: 'Minimum Magnesium', // Label for the vertical axis
    },
    series: [{
      data: Object.values(alcoholCategories), // Minimum Magnesium values for each Alcohol category
      type: 'bar',
    }],
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <ReactECharts option={option} />
    </div>
  );
}

export default BarChart;