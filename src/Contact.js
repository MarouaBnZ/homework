import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <h1> Veuillez nous contactez par Mail</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label style={{ fontWeight: "700", color: "Purple" }}> Nom </label>
          <input type="text" style={{ width: "30%", borderRadius: "5px" }} />

          <label style={{ fontWeight: "700", color: "Purple" }}> Prenom </label>
          <input type="text" style={{ width: "30%", borderRadius: "5px" }} />

          <label style={{ fontWeight: "700", color: "Purple" }}> Email </label>
          <input type="email" style={{ width: "30%", borderRadius: "5px" }} />
          <Link to="/Validation">
            <input
              type="submit"
              value="Valider"
              style={{
                backgroundColor: "white",
                color: "black",
                margin: "30px",
                borderRadius: "20px",
                fontSize: "1.5rem",
                position: "relative",
                fontWeight: "700",
                width: "80%",
              }}
            />
          </Link>
        </form>
      </div>
    </>
  );
}

export default Contact;
