import React from "react";
import "./Suggestions.css";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="suggestions">
      <div className="suggestion-header">
        <span className="icon">✨</span> Suggestions
      </div>
      <div className="suggestion-times">
        <span className="time">0.1-12</span>
        <span className="time">0.12-32</span>
        <span className="time">0.32-40</span>
      </div>
      <div className="suggestion-levels">
        <span className="level easy">40sec</span>
        <span className="level medium">1.5min</span>
        <span className="level hard">3min</span>
      </div>
      <div className="suggestion-levels">
        <span className="level easy">Easy</span>
        <span className="level medium">Medium</span>
        <span className="level hard">Hard</span>
      </div>
    </div>
  );
};

export default Suggestions;