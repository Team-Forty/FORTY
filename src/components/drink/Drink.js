import React, { useState, useEffect } from 'react';
import './drink.css';

// import Header from "./Header";

const Drink = ({ match }) => {

    useEffect(() => {
        fetchItem();
    })


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
        
        <section className="drink_card_big">
            <img src={item.strDrinkThumb} alt=""/>
                <div className="drink_card_description">
                    <h1>{item.strDrink}</h1>
                        <div className="drink_card_ingredients">
                            <p>{item.strMeasure1} {item.strIngredient1}</p>
                            <p>{item.strMeasure2} {item.strIngredient2}</p>
                            <p>{item.strMeasure3} {item.strIngredient3}</p>
                            <p>{item.strMeasure4} {item.strIngredient4}</p>
                            <p>{item.strMeasure5} {item.strIngredient5}</p>
                            <p>{item.strMeasure6} {item.strIngredient6}</p>
                            <p>{item.strMeasure7} {item.strIngredient7}</p>
                            <p>{item.strMeasure8} {item.strIngredient8}</p>
                            <p>{item.strMeasure9} {item.strIngredient9}</p>
                            <p>{item.strMeasure10} {item.strIngredient10}</p>
                            <p>{item.strMeasure11} {item.strIngredient11}</p>
                            <p>{item.strMeasure12} {item.strIngredient12}</p>
                            <p>{item.strMeasure13} {item.strIngredient13}</p>
                            <p>{item.strMeasure14} {item.strIngredient14}</p>
                            <p>{item.strMeasure15} {item.strIngredient15}</p>
                            <p>{item.strInstructionsDE}</p>
                        </div>
                </div> 
        </section>
        
    );
}

export default Drink;