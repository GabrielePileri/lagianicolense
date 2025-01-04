import "./Header.css";
import { gsap } from "gsap";
import { useEffect } from "react";
// import logo from "./img/logo.png";

function Header() {
useEffect(() => {
  gsap.to(window, {duration: 2, scrollTo: "#story"});
}, []);

  return (
    <div className="header">
      {/* <div className="logo-div">
        <img src={logo} className="logo" />
      </div> */}
      <h1 className="title">La Gianicolense</h1>
      <div className="right-content">
        <p className="right-content-p" onClick={this.useEffect}>Chi siamo</p>
        <p className="right-content-p">Menù</p>
        <p className="right-content-p">Contatti</p>
        <p className="right-content-p">Foto</p>
      </div>
    </div>
  );
}

export default Header;
