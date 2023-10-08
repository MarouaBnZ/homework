import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Image from "./Image";
import Acceuil from "./Acceuil";
import tigre from "./images/tigre.jpg";
import architecture from "./images/architecture.jpg";
import info3 from "./images/Info3.jpg";
import food from "./images/food.jpg";
import Validation from "./Validation";
import ImageList from "./ImageList";
import { ImageContext } from "./contexts/ImageContext";

function App() {


  let imagesList = [
    {
      id: 1,
      title: "Theme Animaux",
      descriptif: "Tigre",
      img: tigre,
    },
    {
      id: 2,
      title: "Theme Architecture",
      descriptif: "Maison Moderne",
      img: architecture,
    },
    {
      id: 3,
      title: "Theme Informtique",
      descriptif: "Le monde de l'IT",
      img: info3,
    },
    {
      id: 4,
      title: "Theme culinaire",
      descriptif: "Fast Food ",
      img: food,
    },
  ];
  return (
    <ImageContext.Provider value={imagesList}>
      <div className="App">
        <div
          style={{
            background: " rgba(215, 223, 230, 0.947)",
            width: "100%",
          }}
        >
          <nav style={{ padding: "20px" }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "90px",
              }}
            >
              <Link
                to="/acceuil"
                style={{
                  marginRight: "20px",
                  padding: "10px",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                <li>Acceuil</li>{" "}
              </Link>

              <Link
                to="/Images"
                style={{
                  marginRight: "20px",
                  padding: "20px",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                <li> Images </li>
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
                <li> Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Routes>
          {/* <Route path="/images" element={<ImageLayout />}> */}{" "}
          {/* </Route> */}
          <Route path="/image/:imgId" element={<Image />} />
          <Route path="/images" element={<ImageList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </div>
    </ImageContext.Provider>
  );
}

export default App;
