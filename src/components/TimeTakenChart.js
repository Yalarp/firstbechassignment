import React from "react";
import "./TimeTakenChart.css";

const TimeTakenChart = () => {
  return (
    <div className="time-taken-chart">
      <div className="chart-title">
        <span className="chart-icon">⏱️</span> Time Taken
      </div>
      <div className="chart-content">
        <div className="scale">
          <div className="scale-labels">
            <span>10sec</span>
            <span>20</span>
            <span>30</span>
            <span>40</span>
            <span>50</span>
            <span>60</span>
            <span>70</span>
            <span>80</span>
            <span>90</span>
          </div>
          <div className="scale-line">
            <div className="red-line" style={{ width: "55%" }}></div>
            <div className="green-line" style={{ width: "45%" }}></div>
            <div
              className="pointer"
              style={{ left: "30%" }}
            ></div>
          </div>
        </div>
        <div className="text-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
        <div className="scale">
          <div className="scale-labels second-scale">
            <span>4sec</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
          <div className="scale-line">
            <div className="red-line" style={{ width: "60%" }}></div>
            <div className="green-line" style={{ width: "40%" }}></div>
            <div
              className="pointer"
              style={{ left: "50%" }}
            ></div>
          </div>
        </div>
        <div className="text-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
    </div>
  );
};

export default TimeTakenChart;