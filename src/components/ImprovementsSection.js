import React, { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import SubjectUnderstanding from "./SubjectUnderstanding";
import ResponseTime from "./ResponseTime";
import ApproachData from "./ApproachData";
import Suggestions from "./Suggestions";
import "./ImprovementsSection.css";

const ImprovementsSection = () => {
  const { dashboardData } = useContext(DashboardContext);

  return (
    <div className="improvements-section">
      <div className="card-section">
        <h3 className="card-title">Improvements</h3>
        <SubjectUnderstanding
          subjectData={dashboardData.subjectData}
          className="subject-chart"
        />
      </div>
      <div className="card-section">
        <h3 className="card-title">Response Time</h3>
        <ResponseTime responseTimeData={dashboardData.responseTimeData} />
      </div>
      <div className="card-section">
        <h3 className="card-title">Approach Data</h3>
        <ApproachData approachData={dashboardData.approachData} />
      </div>
      <div className="card-section">
        <h3 className="card-title">Suggestions</h3>
        <Suggestions suggestions={dashboardData.suggestions} />
      </div>
    </div>
  );
};

export default ImprovementsSection;