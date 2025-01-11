import React from "react";
import "./ApproachData.css";

const ApproachData = ({ approachData }) => {
  return (
    <div className="approach-data">
      {approachData.map((data, index) => (
        <div key={index} className="data-item">
          <span className="data-value">{data.value}%</span>
          <span className="data-type">{data.type}</span>
        </div>
      ))}
    </div>
  );
};

export default ApproachData;