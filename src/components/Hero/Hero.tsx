import image from "./img/cinematic1.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Pizzeria La Gianicolense</h1>
        <p className="p-hero">Ogni fetta una festa. Ogni piatto una scoperta</p>
      </div>
      <div className="hero-div">
        <img src={image} className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
