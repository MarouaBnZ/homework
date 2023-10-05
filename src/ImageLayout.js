import React from "react";
import { Outlet } from "react-router-dom";
function ImageLayout() {
  return (
    <>
      <div>
        <h1> Bienvenue au site officiel </h1>
      </div>
      <Outlet> </Outlet>
    </>
  );
}

export default ImageLayout;
