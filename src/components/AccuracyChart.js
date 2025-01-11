import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./AccuracyChart.css";

const AccuracyChart = ({ accuracyChartData }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{`Accuracy : ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="accuracy-chart">
      <div className="chart-header">
        <span className="icon">📊</span> Compare Accuracy
      </div>
      <div className="chart-content">
        <div className="time-labels">
          <span>10min</span>
          <span className="active-time">15min</span>
          <span>30min</span>
          <span>45min</span>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={accuracyChartData}
            margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="slot"
              tick={{ fontSize: 12, fill: "#777" }}
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fontSize: 12, fill: "#777" }}
              tickFormatter={(value) => `${value}%`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="accuracy" fill="#6f42c1" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AccuracyChart;