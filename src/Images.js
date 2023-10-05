import React from "react";
import { Link } from "react-router-dom";
import { ImageContext } from "./contexts/ImageContext";
import { useContext } from "react";

function Images({ title, descriptif }) {
  const imageList = useContext(ImageContext);
  let images = imageList.map((image) => {
    <Link key={image.id} to={`/images/${image.id}`}>
      <div key={image.id}>
        <h1>{image.title}</h1>
        <p>{image.descriptif}</p>
      </div>
      ;
    </Link>;
  });
  return <>{images}</>;
}
export default Images;
