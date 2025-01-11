import React from "react";
import Navbar from "./Navbar";
import ResultSummary from "./ResultSummary";
import ImprovementsSection from "./ImprovementsSection";
import ComparisonSection from "./ComparisonSection";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="main-content">
        <div className="left-section">
          <ResultSummary />
        </div>
        <div className="right-section">
          <div className="right-content">
            <div className="empty-boxes">
              <div className="compare-accuracy-box">
                <span className="checkbox">☑</span> Compare Accuracy
              </div>
              <div className="compare-accuracy-box">
                <span className="checkbox">☑</span> Compare Accuracy
              </div>
              <div className="compare-accuracy-box">
                <span className="checkbox">☑</span> Compare Accuracy
              </div>
            </div>
            <div className="bottom-section">
              <ImprovementsSection />
              <ComparisonSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;