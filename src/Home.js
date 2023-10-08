import React from "react";
import { Link } from "react-router-dom";

import back from "./images/back.jpg";
function Home() {
  return (
    <>
      <div>
        <h1 style={{ color: "gray", padding: "50px" }}>
          Bienvenue à notre Site Web{" "}
        </h1>

        <img
          src={back}
          alt=""
          style={{ backgroundSize: "cover", width: "70%" }}
        />
      </div>
    </>
  );
}

export default Home;
