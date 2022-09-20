import React, {FC} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { price } from "config/_mockCoinGraphData";
import { time } from "config/_mockTimeLine";

export type ChartProps = {

};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  time,
  datasets: [
    {
      data: price.slice(price.length / 7 * 6 - 1, price.length - 1),
      borderColor: "#0063F5",
    },
  ],
};

const Chart: FC<ChartProps> = () => {
  return <Line options={options} data={data} style={{marginBottom: "38px"}}/>;
};

export default Chart;