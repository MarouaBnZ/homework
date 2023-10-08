import React from "react";
import { Link } from "react-router-dom";

import back from "./images/back.jpg";
function Acceuil() {
  return (
    <>
      <Link
        to="/acceuil"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          color: "gray",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}> Bienvenue à notre Site Web</h1>
          <img src={back} alt="" style={{ width: "40%" }} />
        </div>
      </Link>
    </>
  );
}

export default Acceuil;
