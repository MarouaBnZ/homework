import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "./contexts/ImageContext";
import { Link } from "react-router-dom";
function Image({ title, descriptif, img }) {
  const images = useContext(ImageContext);
  const { imgId } = useParams();
  const image = images.find((i) => {
    return i.id == imgId;
  });

  if (image) {
    return (
      <>
        <h1 style={{ color: "gray" }}> {image.title}</h1>
        <img
          src={`${image.img}`}
          alt="Image_Téléchargée"
          style={{ width: "25%" }}
        />
        <p style={{ fontWeight: "700" }}>{image.descriptif} </p>
      </>
    );
  } else {
    return (
      <>
        <h1> l'image avec l'id {imgId} n'existe pas</h1>
      </>
    );
  }
}
export default Image;
