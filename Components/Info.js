import React from "react";
import ReactDOM from "react-dom";

export default function Info() {
  return (
    <div>
      <img src="./images/tayyab-pic.jpg" />
      <h1>Muhammad Tayyab</h1>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>
      <button className="email-btn" type="button">
        <i className="fa-regular fa-envelope"></i>Email
      </button>
    </div>
  );
}
