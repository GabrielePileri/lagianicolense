import "./Header.css";
import logo from "./img/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <h1 className="title">La Gianicolense</h1>
      <div className="right-content">
        <p className="right-content-p">Menù</p>
        <p className="right-content-p">Chi siamo</p>
        <p className="right-content-p">Contatti</p>
        <p className="right-content-p">Foto</p>
      </div>
    </div>
  );
}

export default Header;
