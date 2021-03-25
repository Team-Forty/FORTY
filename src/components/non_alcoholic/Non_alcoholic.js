import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <section>
            {items.map(item => (
                <section>
                    <img src={item.strDrinkThumb} alt="" />
                    <h1>{item.strDrink}</h1>
                    <h2>key - {item.idDrink}</h2>

                    <Link style={{ color: "white" }} to={`/allbiers/${item.idDrink}`}>
                        <h3 >see Details</h3>
                    </Link>

                </section>
            ))}
        </section>

    );
}

export default Non_alcoholic;