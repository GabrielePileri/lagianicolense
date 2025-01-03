import image from "./img/cinematic.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Pizzeria La Gianicolense</h1>
      </div>
      <div className="hero-div">
        <img src={image} className="hero-img" />
      </div>

    </div>
  );
}

export default Hero;
