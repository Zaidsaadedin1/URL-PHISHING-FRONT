import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = ({ percentage }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [percentage, 100 - percentage],
              backgroundColor: ["green", "Lavender"],
            },
          ],
        },
        options: {
          cutout: "60%",
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          // Custom text in the center of the doughnut
          plugins: {
            doughnutlabel: {
              labels: [],
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up on component unmount
      }
    };
  }, [percentage]);

  useEffect(() => {
    if (chartInstance.current && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const centerX = chartRef.current.width / 2;
      const centerY = chartRef.current.height / 2;

      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height); // Clear previous text
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText(`${percentage}%`, centerX, centerY);
      ctx.restore();
    }
  }, [percentage]);

  return <canvas className="donut" ref={chartRef}></canvas>;
};

export default DonutChart;
