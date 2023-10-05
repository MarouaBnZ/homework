import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        style={{
          background: "rgb(221, 241, 255)",
          width: "100%",
          padding: "10px",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "100px",
          }}
        >
          <Link
            to="/images"
            style={{
              marginRight: "20px",
              padding: "20px",
              fontSize: "2rem",
              textDecoration: "none",
            }}
          >
            <li> Images</li>
          </Link>
          <Link
            to="/contact"
            style={{
              marginRight: "20px",
              padding: "20px",
              fontSize: "2rem",
              textDecoration: "none",
            }}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <h1> Bienvenue à notre Site Web </h1>
    </>
  );
}

export default Home;
