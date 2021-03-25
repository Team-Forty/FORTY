import React, { Component } from 'react';
import './grid.css'


class Grid extends Component {
    state = { 

     }
    render() { 
        return (
            <section className="grid">
            <header className="grid_header">
                <h1>FORTY</h1>
                <div className="grid_header_menu">
                    <h2>MENU</h2>
                    <div className="grid_header_container">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </header>
            <main>
                <section className="grid_main_search">
                    <form action="">
                        <label htmlFor="">Search more</label>
                        <input type="text"/>
                    </form>
                </section>
                <section className="grid_main_cards">
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                    <div className="grid_main_card_placeholder">
                        <img src="mojito.jpg" alt=""/>
                        <div className="grid_main_card_description">
                            <h3>Mojito</h3>
                            <button>show complete</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <section className="grid_footer">
                    <div>
                        <p>Copyright by Simon, Önder, Steffen</p>
                    </div>
                    <div className="grid_footer_icons">
                        <img src="facebook.svg" alt=""/>
                        <img src="twitter.svg" alt=""/>
                        <img src="instagram.svg" alt=""/>
                    </div>
                </section>
            </footer>
        </section>
         );
    }
}
 
export default Grid;

// const Grid = () => {
//     return ( 
//         <section className="grid">
//             <header className="grid_header">
//                 <h1>FORTY</h1>
//                 <div className="grid_header_menu">
//                     <h2>MENU</h2>
//                     <div className="grid_header_container">
//                         <span></span><span></span><span></span>
//                     </div>
//                 </div>
//             </header>
//             <main>
//                 <section className="grid_main_search">
//                     <form action="">
//                         <label htmlFor="">Search more</label>
//                         <input type="text"/>
//                     </form>
//                 </section>
//                 <section className="grid_main_cards">
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                     <div className="grid_main_card_placeholder">
//                         <img src="mojito.jpg" alt=""/>
//                         <div className="grid_main_card_description">
//                             <h3>Mojito</h3>
//                             <button>show complete</button>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <footer>
//                 <section className="grid_footer">
//                     <div>
//                         <p>Copyright by Simon, Önder, Steffen</p>
//                     </div>
//                     <div className="grid_footer_icons">
//                         <img src="facebook.svg" alt=""/>
//                         <img src="twitter.svg" alt=""/>
//                         <img src="instagram.svg" alt=""/>
//                     </div>
//                 </section>
//             </footer>
//         </section>
//      );
// }
 
// export default Grid;