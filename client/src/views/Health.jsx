import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "week 0", weight: 97.8 },
  { name: "week 1", weight: 96.3 },
];

const Health = () => {
  const renderLineChart = (
    <LineChart width={800} height={250} data={data}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <Line type="monotone" dataKey="week goal" stroke="blue" />
      <ReferenceLine y={80} label="goal" stroke="green" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  const calcAmount = () => {
    const length = data.length;
    const last = data[length - 1].weight;
    const beforeLast = data[length - 2].weight;
    return (beforeLast - last).toFixed(2);
  };

  const inPrecentage = () => {
    const length = data.length;
    const goal = 80;
    const last = data[length - 1].weight;
    const start = data[0].weight;
    const x = start - goal;
    const y = start - last;

    return ((y * 100) / x).toFixed(2);
  };

  return (
    <div>
      <p>Health Page</p>
      {renderLineChart}
      <p>You lost {calcAmount()}kg since last week.</p>
      <p>Progress {inPrecentage()}%</p>
    </div>
  );
};

export default Health;
