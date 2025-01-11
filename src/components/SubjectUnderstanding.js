import React from "react";
import "./SubjectUnderstanding.css";

const subjects = [
  { name: "Geography", color: "#0D6EFD" },
  { name: "Politics", color: "#FFC107" },
  { name: "Current Affairs", color: "#17a2b8" },
  { name: "General Studies", color: "#DC3545" },
  { name: "Mathematics", color: "#17a2b8" },
  { name: "Social Studies", color: "#6C757D" },
  { name: "English Literature", color: "#DC3545" },
  { name: "Indian History", color: "#FFC107" },
  { name: "Economics", color: "#17a2b8" },
];

const SubjectUnderstanding = () => {
  return (
    <div className="subject-understanding">
      <h3 className="section-title">Subject Understanding</h3>
      <div className="subjects-list">
        {subjects.map((subject, index) => (
          <span
            key={index}
            className="subject"
            style={{ backgroundColor: subject.color }}
          >
            {subject.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubjectUnderstanding;