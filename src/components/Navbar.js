import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdSchool } from "react-icons/md";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import "./Navbar.css";
import ProfileImage from "./profile.png"; // Import the image


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <span className="logo-icon">
            <FaUserCircle />
          </span>
          Firstbench
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/dashboard" className="active">
            <MdDashboard className="nav-icon" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/firstguru">
            <MdSchool className="nav-icon" />
            FirstGuru
          </a>
        </li>
        <li>
          <a href="/townhall">
            <AiFillHome className="nav-icon" />
            TownHall
          </a>
        </li>
        <li>
          <a href="/ai-evaluation">
            <AiOutlineMenu className="nav-icon" />
            AI Evaluation
          </a>
        </li>
        <li>
          <a href="/performance">
            <BsGraphUp className="nav-icon" />
            Performance
          </a>
        </li>
        <li>
          <a href="/mock-test">
            <FaBell className="nav-icon" />
            Mock Test
          </a>
        </li>
      </ul>
      <div className="profile">
        <a href="/profile">
          <FaBell className="profile-icon" />
        </a>
        <a href="/profile">
          <img
            src={ProfileImage}
            alt="Profile"
            className="profile-image"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;