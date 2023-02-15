import React  from "react";
import { Link } from "react-router-dom";



function Footer(){
     return(
     <footer>
      <menu className="footer-menu">
        <section className="img-footer">
            <img src={require("../images/footer-logo.png")} alt="Little Lemon logo"></img>
        </section>
        <section className="footer-nav">
            <h1 className="footer-nav-header">Navigation</h1>
            <ul className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                 <a href={require("../images/menuPage.webp")} target="_blank" rel="noreferrer">Menu</a>
                <Link to="/book">Reservations</Link>
                <Link to="/order">Order</Link>
                <Link to="/">Login</Link>
          </ul>
        </section>
        <section className="footer-nav">
            <h1 className="footer-nav-header">Contact</h1>
            <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(123)-243-6827</li>
            <br></br>
            <a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a>
          </ul>
        </section>
        <section className="footer-nav">
            <h1 className="footer-nav-header">Connect Us</h1>
            <ul className="footer-links">
            <a href="/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="/" target="_blank" rel="noreferrer">Join us!</a>
          </ul>
        </section>
      </menu>
    </footer>
     );
}
export default Footer;