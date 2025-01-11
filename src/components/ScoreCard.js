import React from "react";
import "./ScoreCard.css";
import { FaUser } from "react-icons/fa";

const ScoreCard = ({ title, score, outOf, name, accuracy }) => {
  const isTopScore = title === "Top Score";
  return (
    <div className={`scorecard ${isTopScore ? "top-score" : ""}`}>
      <h3 className="scorecard-title">
        {isTopScore && <FaUser className="user-icon" />} {title}
      </h3>
      <div className="score-container">
        {name && <span className="name">{name}</span>}
        <span className="score">
          {score}
          <span className="out-of">/{outOf}</span>
        </span>
      </div>
      {accuracy && (
        <div className="accuracy">
          <span className="accuracy-label">Accuracy:</span>
          <span className="accuracy-value">{accuracy}%</span>
        </div>
      )}
    </div>
  );
};

export default ScoreCard;