import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
``

function LineChart({ chartData }) {
  return <Line data={chartData} options={chartData.options} style={{width:"100%", height:"100%"}}/>;
}

export default LineChart;