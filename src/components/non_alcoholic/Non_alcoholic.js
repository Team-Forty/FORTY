import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../grid/grid.css";


const Non_alcoholic = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
        const items = await data.json();
        setItems(items.drinks)
        console.log(items);
        console.log(items.drinks);
        console.log(items.drinks[0].idDrink);
        console.log(items.drinks[0].strDrinkThumb);
        // console.log(items[0].idDrink);
    }

    return (
        <section className="grid_main_cards">
            {items.map((item, i) => (
                <Link key={i} style={{ color: "white" , textDecoration: "none"}} to={`/gins/${item.idDrink}`}>
                    <div className="grid_main_card_placeholder">
                        <img src={item.strDrinkThumb} alt="" />
                            <div className="grid_main_card_description">
                                <h3>{item.strDrink}</h3>
                            </div>
                    </div>
                </Link>
            ))}
        </section>

    );
}

export default Non_alcoholic;