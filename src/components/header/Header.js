import React from 'react';
import "./Header.css";
import HeaderImg from '../data/img/ash-edmonds-fsI-_MRsic0-unsplash.jpg'
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header className="header" >
            <div className="header_menu">

                
                <Link to = {"/"}>
                <h1>FORTY</h1>
                </Link>
                

                <div className="header_menu_wrapper">
                    <p>MENU</p>
                    <div className="header_menu_hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <img src={HeaderImg} alt="" />
            <p>Home Of Fine Drinking</p>
        </header>
    );
}

export default Header;