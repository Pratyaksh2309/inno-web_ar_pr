import "./Footer.css";
import logo from "../assets/p.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "black" }} className="pt-2">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/innovationcell" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://x.com/umic_iitb" target="_blank" rel="noreferrer">
                  <i className="fa fa-times" />
                </a>
                <a href="https://www.instagram.com/umic_iitb/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/company/unmesh-mashruwala-innovation-cell-iit-bombay/mycompany/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <br />
              <div
                className="contact-details"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start", // Aligns the items to the top
                }}
              >
                <div>
                  <h4>Contact Us</h4>
                  <h6>Name: Aryan Mishra</h6>
                  <h6>Phone No: 8197020074</h6>
                  <h6>Email:</h6>
                  <h6>Location:</h6>
                </div>
              
                <img
                  src={logo}
                  className="logo"
                  alt="Logo"
                  width="90"
                  height="90"
                  style={{ objectFit: "contain"}} 
                />
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-sm-row justify-content-end py-4 my-4 border-top"
            style={{ color: "white" }}
          >
            <p>© 2024 SeDriCa. IIT BOMBAY.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
