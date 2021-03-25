import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gins = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin");
        const items = await data.json();
        setItems(items.drinks)
        console.log(items);
        console.log(items.drinks);
        console.log(items.drinks[0].idDrink);
        console.log(items.drinks[0].strDrinkThumb);
        // console.log(items[0].idDrink);
    }

    return (
        <section>
            {items.map(item => (
                <section>
                    <img src={item.strDrinkThumb} alt="" />
                    <h1>{item.strDrink}</h1>
                    <h2>key - {item.idDrink}</h2>

                    <Link style={{ color: "white" }} to={`/gins/${item.idDrink}`}>
                        <h3 >see Details</h3>
                    </Link>

                </section>
            ))}
        </section>

    );
}

export default Gins;