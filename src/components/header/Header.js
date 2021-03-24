import React from 'react';
import "./Header.css";
import HeaderImg from '../data/img/ash-edmonds-fsI-_MRsic0-unsplash.jpg'



const Header = () => {
    return (
        <header className="header" >
            <h1>FORTY</h1>
            <div className="header_menu">
                <h1>MENU</h1>
                <div className="header_burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <figure>
                <img src={HeaderImg} alt="" />
                <figcaption><h1>Home Of Fine Drinking</h1></figcaption>
            </figure>
        </header>
    );
}

export default Header;