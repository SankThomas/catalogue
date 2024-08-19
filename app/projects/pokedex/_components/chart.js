"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

export default function Chart({ details }) {
  const data = {
    labels: [
      `${details.stats[0].stat.name.toUpperCase()}`,
      `${details.stats[1].stat.name.toUpperCase()}`,
      `${details.stats[2].stat.name.toUpperCase()}`,
      `${details.stats[3].stat.name.toUpperCase()}`,
      `${details.stats[4].stat.name.toUpperCase()}`,
      `${details.stats[5].stat.name.toUpperCase()}`,
    ],
    datasets: [
      {
        label: `${details.name.toUpperCase()}`,
        data: [
          `${details.stats[0].base_stat}`,
          `${details.stats[1].base_stat}`,
          `${details.stats[2].base_stat}`,
          `${details.stats[3].base_stat}`,
          `${details.stats[4].base_stat}`,
          `${details.stats[5].base_stat}`,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(255, 159, 64)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}
