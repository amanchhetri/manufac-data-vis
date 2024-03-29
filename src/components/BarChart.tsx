import data from "../data/Wine-Data.json";
import ReactECharts, { EChartsOption } from "echarts-for-react";

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

function BarChart() {
  // Calculate minimum Magnesium value for each Alcohol category
  const alcoholCategories: Record<number | string, number | string>  = {};
  data.forEach((item: WineDataItem) => {
    if (
      !(item.Alcohol in alcoholCategories) ||
      item.Magnesium < alcoholCategories[item.Alcohol]
    ) {
      alcoholCategories[item.Alcohol] = item.Magnesium;
    }
  });

  // Prepare data for echarts
  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: Object.keys(alcoholCategories), // Alcohol categories on the horizontal axis
      name: "Alcohol", // Label for the horizontal axis
      axisTick: {
        alignWithLabel: true,
      },
      nameLocation: "center",
      nameGap: 30,
      nameTextStyle: {
        fontSize: 14,
      },
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium", // Label for the vertical axis
      nameLocation: "center",
      nameGap: 24,
      nameTextStyle: {
        fontSize: 14,
      },
    },
    series: [
      {
        data: Object.values(alcoholCategories), // Minimum Magnesium values for each Alcohol category
        type: "bar",
        barWidth: "50%",
        label: {
          show: true, // show Minimum Magnesium value inside bar
        },
      },
    ],
  };

  return <ReactECharts option={option} className="chart" />;
}

export default BarChart;
