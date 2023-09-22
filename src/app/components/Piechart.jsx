
"use client";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Piechart = () => {
  // Define your chart data here
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF5733', '#3490DC', '#FFC107', '#4CAF50', '#9B59B6'],
      },
    ],
  };

  
  const options = {
    maintainAspectRatio: false, 
    legend: {
      display: true,
      position: 'right', 
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 -mt-9">
      <h2 className="text-xl font-semibold mb-4">Top Product</h2>
      <div className="relative h-40">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Piechart;



