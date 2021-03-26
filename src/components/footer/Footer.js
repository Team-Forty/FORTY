import React from 'react';
import "./Footer.css";
import Insta from '../data/img/iconfinder_1_Instagram_colored_svg_1_5296765 1.svg'
import Twitter from '../data/img/iconfinder_1_Twitter_colored_svg_5296514 1.svg'
import Facebook from '../data/img/iconfinder_1_Facebook_colored_svg_copy_5296499 1.svg'




const Footer = () => {
    return (
        <section className="Footer">
            <h3>Copyright by Simon, Steffen, Önder</h3>
            <div>
                <img src={Insta} alt="" />
                <img src={Twitter} alt="" />
                <img src={Facebook} alt="" />
            </div>
        </section>
    );
}

export default Footer;