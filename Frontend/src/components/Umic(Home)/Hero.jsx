import logo from "../../assets/th.jpeg";
import "./Hero.css";
import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    // Initialize the Bootstrap carousel
    const carouselElement = document.getElementById('carouselExampleCaptions');
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 2000, // Time between slides in milliseconds
        wrap: true, // Loop back to the start when the end is reached
      });
    }
  }, []);
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={logo} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={logo} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={logo} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
