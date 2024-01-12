"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TopProductEntry } from "@/app/lib/definitions";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Popular Coffee",
    },
  },
};

interface DonutChartProps {
  popularCoffeeData: Array<TopProductEntry>;
}

export default function DonutChart({ popularCoffeeData }: DonutChartProps) {
  const labels = popularCoffeeData.map((entry) => entry.title);
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: popularCoffeeData.map((entry) => entry.totalSales),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}
