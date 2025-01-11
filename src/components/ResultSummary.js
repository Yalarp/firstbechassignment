import React, { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import ScoreCard from "./ScoreCard";
import { FaSyncAlt, FaCheckCircle, FaEdit } from "react-icons/fa";
import "./ResultSummary.css";
import resultImage from "./image.png"; // Import the image

const ResultSummary = () => {
  const { dashboardData } = useContext(DashboardContext);

  return (
    <div className="result-summary">
      <div className="result-content">
        <div className="image-container">
          <img src={resultImage} alt="Result" className="result-image" />
        </div>
        <div className="text-content">
          <h2>Your Result!</h2>
          <p className="insights-text">
            All your insights & details in one place
          </p>
        </div>
      </div>

      <div className="scorecards-container">
        <div className="scorecard">
          <h3 className="scorecard-title">
            <FaCheckCircle className="check-icon" /> YOU'VE PASSED
          </h3>
          <div className="score-container">
            <span className="score">
              {dashboardData.yourScore}
              <span className="out-of">/{240}</span>
            </span>
          </div>
          <div className="accuracy">
            <span className="accuracy-label">Accuracy:</span>
            <span className="accuracy-value">{dashboardData.accuracy}%</span>
          </div>
        </div>
        <ScoreCard
          title="Top Score"
          score={dashboardData.topScore}
          outOf={240}
          name="Parth Kotkar"
          accuracy={dashboardData.accuracy}
        />
      </div>
      <div className="actions">
        <p className="improve-text">
          Improve your score by practicing more.
        </p>
        <button className="practice-button">Practice more</button>
      </div>
      <div className="revisit">
        <h3 className="revisit-title">
          Revisit Paper <FaEdit className="revisit-icon" />
        </h3>
        <p className="revisit-text">
          Challenge your friends by simply sharing a link to this test
        </p>
        <button className="visit-button">
          <FaSyncAlt className="visit-icon" /> Visit
        </button>
      </div>
      <div className="instructions">
        <p className="instructions-text">
          <span className="icon">ⓘ</span>
          Instructions for how to upload your handwritten material in given
        </p>
      </div>
    </div>
  );
};

export default ResultSummary;