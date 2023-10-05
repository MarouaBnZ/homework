import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Images from "./Images";
import Image from "./Image";
import ImageLayout from "./ImageLayout";
import Validation from "./Validation";
import { ImageContext } from "./contexts/ImageContext";
function App() {
  let imagesList = [
    {
      id: 1,
      title: "Info1",
      Descriptif: "Cette photo a été téléchargé le 01 Octobre du site Freepik",
      img: <img src="./images/Info1.jpg" alt="Info1" />,
    },
    {
      id: 2,
      title: "Info2",
      Descriptif: "Cette photo a été téléchargé le 02 Octobre du site Freepik",
      img: "./images/Info2.jpg",
    },
    {
      id: 3,
      title: "Info3",
      Descriptif: "Cette photo a été téléchargé le 03 Octobre du site Freepik",
      img: "./images/Info3.jpg",
    },
    {
      id: 4,
      title: "Info4",
      Descriptif: "Cette photo a été téléchargé le 04 Octobre du site Freepik",
      img: "./images/Info4.jpg",
    },
  ];
  return (
    <ImageContext.Provider value={imagesList}>
      <div className="App">
        <ul>
          <Routes>
            {/* <Route path="/images" element={<ImageLayout />}> */}{" "}
            {/* </Route> */}
            <Route path="/images/:imageId" element={<Image />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/validation" element={<Validation />} />
          </Routes>
        </ul>
      </div>
    </ImageContext.Provider>
  );
}

export default App;
