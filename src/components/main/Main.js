import React from 'react';
import { useMediaQuery } from 'react-responsive'
import "./Main.css";
import GinImg from '../data/img/jez-timms-J7J0oTps4Lo-unsplash.jpg'
import VodkaImg from '../data/img/mae-mu-T7heq8rawkc-unsplash.jpg'
import NoAlcImg from '../data/img/nikita-tikhomirov-roMo1sOj8q8-unsplash.jpg'
import RumImg from '../data/img/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg'

const Main = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <section className="main">
            <h1>Choose your favorite spirit:</h1>
            <div className="main_grid">
                <img src={GinImg} alt="" />
                <h1>GIN</h1>
                <h1>VODKA</h1>
                <img src={VodkaImg} alt="" />
                <h1>Can we inspire you?</h1>
                <form action="">
                    <input type="text" />
                    <br></br>
                    <br></br>
                    <label htmlFor="">Search your favorite</label>
                </form>
                <h1>NON-<br></br>ALCOHOLIC</h1>
                <img src={NoAlcImg} alt="" />
                <img src={RumImg} alt="" />
                <h1>RUM</h1>
            </div>
            <article className="main_article">
                <h2>Genuss hat viele Facetten <span></span></h2>
                <p>aber ohne das richtige Maß geht es nicht!<br></br>Cocktails kann man mit allen Sinnen genießen. Zum Cocktail-Genuss<br></br>gehören neben dem Geschmack natürlich auch die Optik, die Farbe und<br></br>die verschiedenen Aromen, die im Zusammenspiel ganz neue<br></br>Assoziationen wecken und unterbewusst auch den Geschmack<br></br>beeinflussen.</p>
            </article>
        </section>
    );
}

export default Main;