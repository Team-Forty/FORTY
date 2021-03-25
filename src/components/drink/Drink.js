import React, { useState, useEffect } from 'react';
import './Drink.css';

// import Header from "./Header";

const Drink = ({ match }) => {

    useEffect(() => {
        fetchItem();
    }, [])


    const [item, setItem] = useState({});

    const fetchItem = async () => {
        // const fetchItem = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=/${match.params.id}`)
        const fetchItem = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`)

        const item = await fetchItem.json();
        console.log(item);

        console.log(item.drinks);
        console.log(item.drinks[0].idDrink);
        setItem(item.drinks[0])
    }
    return (
        <div>

            <section className="item_detail">
                <h2>{item.strDrink}</h2>
                <img id="drink_img" src={item.strDrinkThumb} alt="" />

                <section>
                    <h3>{item.strIngredient1}  {item.strMeasure1}</h3>
                    <h3>{item.strIngredient2}  {item.strMeasure2}</h3>
                    <h3>{item.strIngredient3}  {item.strMeasure3}</h3>
                    <h3>{item.strIngredient4}  {item.strMeasure4}</h3>
                    <h3>{item.strIngredient5}  {item.strMeasure5}</h3>
                    <h3>{item.strIngredient6}  {item.strMeasure6}</h3>
                    <h3>{item.strIngredient7}  {item.strMeasure7}</h3>
                    <h3>{item.strIngredient8}  {item.strMeasure8}</h3>
                    <h3>{item.strIngredient9}  {item.strMeasure9}</h3>
                    <h3>{item.strIngredient10}  {item.strMeasure10}</h3>
                </section>


            </section>


        </div>
    );
}

export default Drink;