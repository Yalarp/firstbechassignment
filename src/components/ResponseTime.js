import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ResponseTime.css";

const ResponseTime = ({ responseTimeData }) => {
  const { average, trend } = responseTimeData;

  return (
    <div className="response-time">
      <div className="header">
        <span className="icon">⏱️</span> Response Time
      </div>
      <div className="content">
        <div className="std-time">Std Time - 2min</div>
        <div className="stats">
          <span className="average">{average}</span>
          <span className="text"> Ans took </span>
          <span className="trend">
            <FaArrowUp className="trend-icon" />
            {trend}
          </span>
        </div>
      </div>
      <div className="message">You are slow!</div>
    </div>
  );
};

export default ResponseTime;