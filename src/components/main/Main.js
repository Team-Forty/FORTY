import React from 'react';
import "./Main.css";
import GinImg from '../data/img/jez-timms-J7J0oTps4Lo-unsplash 2.png'
import VodkaImg from '../data/img/mae-mu-T7heq8rawkc-unsplash 4.png'
import NoAlcImg from '../data/img/nikita-tikhomirov-roMo1sOj8q8-unsplash 2.png'
import RumImg from '../data/img/melissa-walker-horn-gtDYwUIr9Vg-unsplash 1.png'

//! changes imports:
import { Link } from 'react-router-dom';
import Search from '../search/Search';



const Main = () => {

    const linkStyle = {
        textDecoration: "inherit", 
        width: "100%",
        color: "white"
    }

    return (
        <section className="main">
            <h4>Choose your favorite spirit:</h4>
            <div className="main_flex">



                <div className="main_flex_link">



                    <div className="main_link_oben1" >
                        <Link to="/gins" ><img src={GinImg} alt="" />
                            <p className="main_link_p">GIN</p></Link>
                    </div>




                    <div className="main_link_oben2">
                        <Link to="/vodka"><p className="main_link_p">VODKA</p>
                            <img src={VodkaImg} alt="" /></Link>
                    </div>


                </div>



                <div className="main_flex_action">


                    <button>
                    <Link style = {linkStyle} to="/random">
                        <div className="main_link">
                            <h1 style={{ color: "white" }}>Can we inspire you?</h1>
                        </div>
                    </Link>
                    </button>

                    {/* <div>
                        <Search/>
                    </div> */}

                    {/* <div>
                        <input type="text" />
                        <button>Search your favorite</button>
                    </div> */}
                </div>



                <div className="main_flex_link">


                    <div className="main_link_unten1">
                        <Link to="/non_alcoholic">
                            <p className="main_link_p">NON-ALCOHOLIC</p>
                            <img src={NoAlcImg} alt="" /></Link>
                    </div>





                    <div className="main_link_unten2">
                        <Link to="/rum">
                            <img src={RumImg} alt="" />
                            <p className="main_link_p">RUM</p>
                        </Link>
                    </div>

                </div>
            </div>
            <article className="main_article">
                <p>Genuss hat viele Facetten</p>
                <p>aber ohne das richtige Maß geht es nicht! Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genussgehören neben dem Geschmack natürlich auch die Optik, die Farbe und die verschiedenen Aromen, die im Zusammenspiel ganz neue Assoziationen wecken und unterbewusst auch den Geschmack beeinflussen.</p>
            </article>
        </section>
    );
}

export default Main;