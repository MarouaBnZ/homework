import React from "react";
import { Link } from "react-router-dom";
import { ImageContext } from "./contexts/ImageContext";
import { useContext } from "react";

function ImageList() {
  const images = useContext(ImageContext);
  let imageLists = images.map((image) => {
    return (
      <Link
        key={image.id}
        to={`/image/${image.id}`}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          key={image.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <h1 style={{ color: "gray" }}> {image.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{imageLists}</>;
}

export default ImageList;
