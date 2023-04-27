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
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import { productsArray } from "./utils/data";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: "Sales by Month for:",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Meses",
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: "Vendas",
      },
    },
  },
};

const labels = ["Janeiro", "Fevereiro", "Março", "Abril"];

export default function SellsGraph() {
  const [brand, setBrand] = useState("");

  const sellsArray = productsArray
    .map((produto) =>
      produto.marca === brand
        ? produto.vendas.map(({ quantidade }) => quantidade)
        : null
    )
    .filter((product) => product !== null);

  const data = {
    labels,
    datasets: [
      {
        label: "Vendas",
        data: sellsArray.shift(),
        backgroundColor: "#5896E6",
      },
    ],
  };

  return (
    <div className="main-div">
      <Header />
      <Form listenBrandChange={(brand) => setBrand(brand)} />
      <div className="graph-div">
        <form></form>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
