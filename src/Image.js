import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "./contexts/ImageContext";
import { Link } from "react-router-dom";
function Image({ title, descriptif }) {
  const images = useContext(ImageContext);
  const { imgId } = useParams();
  const image = images.find((i) => {
    return i.id == imgId;
  });

  if (image) {
    return (
      <>
        <h3> Voici la figure téléchargée</h3>
        <h1> {image.title}</h1>
        <p>{image.descriptif} </p>
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
