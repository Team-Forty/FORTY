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
            <img src={HeaderImg} alt="" />
            <h1>The Home Of Fine Drinking</h1>
        </header>
    );
}

export default Header;