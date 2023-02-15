import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/style.css';
import restauranfood from '../images/food1.png';
import Specials from "./Specials";
import About from './About';
import Footer from './Footer';

 
function Home(){
    const nav=useNavigate();
    const handleClick=()=>{
        nav('/book');
    };
    return(
        <>
       <article className="main-content">
            <section className="content">
                <h1 className="restaurant-name">Little Lemon</h1>
                <h2 className="restaurant-location">Chicago</h2>
                <p className="sub-section"> We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We 
                focus on traditional recipes served with a modern twist.</p>
                    <br></br>
                <button  className="btnHome" onClick={handleClick}>Reserve a table</button>
            </section>
            <section className="img-content">
                <img src={restauranfood} className="restaurant-image" alt="resturant food" ></img>  
            </section>
       </article>
       <article className="special">
            <Specials />
            <About />
            <Footer />
       </article>
       </>
    );
}
export default Home;