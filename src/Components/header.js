import React from "react";
import "./header.css";
const header = () => {
  return (
    <div className="header">
      <div className="header-elem">
        <i className="envelope open icon huge"></i>
        <h1>POSTMAN-WEB</h1>
      </div>
      <div className="navbar">
        <a href="a">
          <div className="navbar-links">Home</div>
        </a>
        <a href="b">
          <div className="navbar-links">Workspaces</div>
        </a>
        <a href="c">
          {" "}
          <div className="navbar-links">Api Networks</div>
        </a>
        <a href="d">
          <div className="navbar-links">Reports</div>
        </a>
        <a href="e">
          <div className="navbar-links">Explore</div>
        </a>
      </div>
    </div>
  );
};

export default header;
