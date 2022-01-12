import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img
          className="Header__logoImg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg"
          }
          alt="Marsplanet"
        />
        <span>NasaGram</span>
      </div>
    </div>
  );
}
