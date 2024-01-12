"use client";

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
import { SummarySaleEntry } from "@/app/lib/definitions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

interface BarChartProps {
  salesData: Array<SummarySaleEntry>;
  customClasses?: string;
}

export default function BarChart({ salesData }: BarChartProps) {
  const labels = salesData.map((entry) => entry.label);
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
}
