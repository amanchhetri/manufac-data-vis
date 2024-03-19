import data from "../data/Wine-Data.json";
import ReactECharts, { EChartsOption } from "echarts-for-react";

// Define a type for your data
type WineDataItem = {
  Alcohol: number | string;
  "Malic Acid": number | string;
  Ash: number | string;
  "Alcalinity of ash": number | string;
  Magnesium: number | string;
  "Total phenols": number | string;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number | string;
  Proanthocyanins: number | string;
  "Color intensity": number | string;
  Hue: number | string;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number | string;
};

function LineChart() {
  // Prepare data for echarts
  const option: EChartsOption = {
    xAxis: {
      type: "value",
      name: "Flavanoids", // Label for the horizontal axis
      nameLocation: "center",
      nameGap: 30,
      nameTextStyle: {
        fontSize: 14,
      },
    },
    yAxis: {
      type: "value",
      name: "Ash", // Label for the vertical axis
      nameLocation: "center",
      nameGap: 20,
      nameTextStyle: {
        fontSize: 14,
      },
    },
    series: [
      {
        data: data.map((item: WineDataItem) => item.Flavanoids),
        type: "line",
      },
      {
        data: data.map((item: WineDataItem) => item.Ash),
        type: "line",
        lineColor: "green",
      },
    ],
  };

  return <ReactECharts option={option} className="chart" />;
}

export default LineChart;
