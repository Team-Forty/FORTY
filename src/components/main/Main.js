import React from 'react';
import "./Main.css";
import GinImg from '../data/img/jez-timms-J7J0oTps4Lo-unsplash.jpg'
import VodkaImg from '../data/img/mae-mu-T7heq8rawkc-unsplash.jpg'
import NoAlcImg from '../data/img/nikita-tikhomirov-roMo1sOj8q8-unsplash.jpg'
import RumImg from '../data/img/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg'
import Header from '../header/Header';

//! changes imports:
import { Link } from 'react-router-dom';



const Main = () => {
    return (
        <section className="main">
            <h1>Choose your favorite spirit:</h1>
            <div className="main_grid">

                <Link to="/gins" >
                    <div className="main_link" >
                        <img src={GinImg} alt="" />
                        <h1>GIN</h1>
                    </div>
                </Link>

                <Link to="/vodka">
                    <div className="main_link">
                        <h1>VODKA</h1>
                        <img src={VodkaImg} alt="" />
                    </div>
                </Link>

                <h1>Can we inspire you?</h1>
                <form action="">
                    <input type="text" />
                    <br></br>
                    <br></br>
                    <label htmlFor="">Search your favorite</label>
                </form>
                <Link to="/non_alcoholic">
                    <div className="main_link">
                        <h1>NON-<br></br>ALCOHOLIC</h1>
                        <img src={NoAlcImg} alt="" />
                    </div>
                </Link>
                <Link to="/rum">
                    <div className="main_link">
                        <img src={RumImg} alt="" />
                        <h1>RUM</h1>
                    </div>
                </Link>





            </div>
            <article className="main_article">
                <h2>Genuss hat viele Facetten <span></span></h2>
                <p>aber ohne das richtige Maß geht es nicht!<br></br>Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genuss<br></br>gehören neben dem Geschmack natürlich auch die Optik, die Farbe und<br></br>die verschiedenen Aromen, die im Zusammenspiel ganz neue<br></br>Assoziationen wecken und unterbewusst auch den Geschmack<br></br>beeinflussen.</p>
            </article>
        </section>
    );
}

export default Main;