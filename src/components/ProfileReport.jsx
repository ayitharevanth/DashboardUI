import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProfileReport = ({ title, value, year, percentage }) => {
  const data = {
    labels: ['', '', '', ''],
    datasets: [
      {
        label: '',
        data: [0, 3, 2, 4],
        borderColor: '#fbbf24',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(251, 191, 36, 0.5)');
          gradient.addColorStop(1, 'rgba(251, 146, 60, 0.8)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="border bg-white rounded-3xl p-5 w-64 shadow-md flex">
      <div className="flex flex-col justify-between w-1/2">
        <div>
          <div className="text-gray-600 text-sm mb-2">{title}</div>
          <div className="bg-amber-200 text-amber-600 text-xs px-3 py-1 rounded-full inline-block">YEAR {year}</div>
        </div>
        <div className="flex gap-2">
          <div className="text-xl font-semibold mb-1">{value}</div>
          <div className="text-sm font-bold text-amber-500 mt-2">{percentage}%</div>
        </div>
      </div>
      <div className="w-1/2 h-32 relative">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ProfileReport;