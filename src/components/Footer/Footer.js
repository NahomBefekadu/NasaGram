import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__logo">
        <img
          className="Footer__logoImg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg"
          }
          alt="Marsplanet"
        />
        <span>NasaGram</span>
      </div>
      <div className="Footer_info">
        <p>
          Brought to you by NASA's Image{" "}
          <a
            className="Footer_link"
            href="https://api.nasa.gov/#apod"
            target="_blank"
            aria-describedby="This is a link to the api"
          >
            API (opens in a new window)
          </a>
        </p>

        <p>&copy; 2022 Nahom Befekadu</p>
      </div>
    </div>
  );
}
