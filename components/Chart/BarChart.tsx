import { BaseProps } from "@/types/BaseProps";
import { SummarySaleEntry } from "@/types/Summary";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sale Statistics",
    },
  },
};

interface BarChartProps extends BaseProps {
  salesData: Array<SummarySaleEntry>;
}

const BarChart = ({ salesData }: BarChartProps) => {
  const labels = salesData.map((entry) => entry._id);
  const data = {
    labels,
    datasets: [
      {
        label: "Sales per Month",
        data: salesData.map((entry) => entry.totalSales),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
