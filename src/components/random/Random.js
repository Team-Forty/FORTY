import React, { useState, useEffect } from 'react';
import '../drink/drink.css';



const Random = () => {

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});
    let [ingCounter, setIngridient] = useState(1);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        const item = await fetchItem.json();
        console.log(item.drinks);
        console.log(item.drinks[0].idDrink);
        setItem(item.drinks[0])
    }

    const drawIngridients = () => {
        let strIngredient = "strIngredient" + ingCounter
        console.log(strIngredient);

        // if (strIngredient!= null) {
        //     console.log(strIngredient);
            
        //     // setIngridient(ingCounter++)
        // }
    }

    for (let i = 1; i<=15;i++ ){
        let strIngredient = "strIngredient" + i;
        console.log(strIngredient);
        console.log(`item.drinks[0].${strIngredient}`);

        let myLinik = `item.drinks[0].${strIngredient}`
        console.log(myLinik);

        // if(item.drinks.strIngredient != null) {
        //     counter ++;
            
        // }
        // console.log("counter - " + counter);

    }

    drawIngridients()


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

export default Random;