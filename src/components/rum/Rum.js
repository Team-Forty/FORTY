import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../grid/grid.css";

const Rum = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum");
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

            {items.map(item => (
                <section className="grid_main_card_placeholder">
                    <img src={item.strDrinkThumb} alt="" />
                    <div className="grid_main_card_description">
                    <h1>{item.strDrink}</h1>
                    <h2>key - {item.idDrink}</h2>

                    <Link style={{ color: "white" }} to={`/rum/${item.idDrink}`}>
                        <h3 >see Details</h3>
                    </Link>
                    </div>

                </section>
            ))}

        </section>

    );
}

export default Rum;