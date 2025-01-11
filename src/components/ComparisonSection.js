import React, { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import AccuracyChart from "./AccuracyChart";
import TimeTakenChart from "./TimeTakenChart";
import "./ComparisonSection.css";

const ComparisonSection = () => {
  const { dashboardData } = useContext(DashboardContext);

  return (
    <div className="comparison-section">
      <div className="card-section">
        <h3 className="card-title">Compare Accuracy</h3>
        <AccuracyChart accuracyChartData={dashboardData.accuracyChartData} />
      </div>

      <div className="card-section">
        <h3 className="card-title">Time Taken</h3>
        <TimeTakenChart timeTakenChartData={dashboardData.timeTakenChartData} />
      </div>
    </div>
  );
};

export default ComparisonSection;