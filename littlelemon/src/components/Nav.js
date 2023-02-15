import React from 'react';
import logo from '../images/Logo.svg';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Booking from './Booking';
import Confirm from './Confirm';
import About from './About';
import OrderOnline from './OrderOnline';



function Nav(){
    return(
       <div>
            <header className="nav">
                <div><img src={logo} className="logo-image" alt="logo"/></div>
                <nav className="nav-bar">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="#" className="nav-item">Menu</Link>
                    <Link to="/book" className="nav-item">Reservation</Link>
                    <Link to="/order" className="nav-item">Order Online</Link>
                    <Link to="/" className="nav-item">Login</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<><Home /></>}></Route>
                <Route path="/book" element={<Booking />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/order" element={<OrderOnline />}></Route>
                <Route path="/confirm"  element={<Confirm />}></Route>  
            </Routes> 
       </div>
       
    );
}
export default Nav;


