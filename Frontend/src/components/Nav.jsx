import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sedrica from "../assets/Sedrica.png";
import Umic from "../assets/Umic.png";
import bars from "../assets/bars-solid.svg";
import "./Nav.css";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(getActiveIndex(location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState(false); // State to trigger animation
  const menuRef = useRef(null);

  function getActiveIndex(path) {
    switch (path) {
      case "/":
        return 0;
      case "/Forms":
        return 1;
      case "/Display":
        return 2;
      default:
        return 0;
    }
  }

  useEffect(() => {
    setActiveIndex(getActiveIndex(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (index, path) => {
    setActiveIndex(index);

    setTimeout(() => {
      setAnimation(true); 
      navigate(path);
      setAnimation(false);
      if (window.innerWidth <= 611) {
        setMenuOpen(false);
      }
    }, 2000); // Duration of animation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <div style={{ backgroundColor: "black", marginTop: "20px" }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <Helmet>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Helmet>
        <div className={`navigation ${animation ? "animate" : ""}`}>
          <img src={Umic} className="logo" alt="Logo" width="60" height="60" style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", objectFit: "contain" }} />
          <img src={Sedrica} className="logo" alt="Logo" width="150" height="150" style={{ position: "absolute", left: "80px", top: "50%", transform: "translateY(-50%)", objectFit: "contain" }} />
          <ul>
            <li className={`list ${activeIndex === 0 ? "active" : ""}`} onClick={() => handleClick(0, "/")}>
              <a href="/">
                <span className="icon"><ion-icon name="home"></ion-icon></span>
                <span className="text">UMIC</span>
                <span className="circle" />
              </a>
            </li>
            <li className={`list ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleClick(1, "/Forms")}>
              <a href="/Forms">
                <span className="icon"><ion-icon name="people-circle"></ion-icon></span>
                <span className="text">Form</span>
                <span className="circle" />
              </a>
            </li>
            <li className={`list ${activeIndex === 2 ? "active" : ""}`} onClick={() => handleClick(2, "/Display")}>
              <a href="/Display">
                <span className="icon"><ion-icon name="people"></ion-icon></span>
                <span className="text">Display</span>
                <span className="circle" />
              </a>
            </li>
            <div className="indicator" style={{ transform: `translateX(calc(70px * ${activeIndex}))` }} />
          </ul>
          <div className="hamburger-menu icon" onClick={toggleMenu} style={{ position: "absolute", height: "50px" }}>
            <img height="40px" width="40px" style={{ bottom: "100px" }} src={bars} />
          </div>
        </div>
        <div ref={menuRef} className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="/" onClick={() => handleClick(0, "/")}>UMIC</a>
          <a href="/Forms" onClick={() => handleClick(1, "/Forms")}>Form</a>
          <a href="/Display" onClick={() => handleClick(2, "/Display")}>Display</a>
          <a style={{ color: "red" }} href={location.pathname} onClick={() => handleClick(activeIndex, location.pathname)}>Close</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
