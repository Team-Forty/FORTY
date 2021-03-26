import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../drink/drink.css';



const Search = () => {

    let textInput = React.createRef();

    useEffect(() => {
        fetchItems();
    }, [])

    const [output, setOutput] = useState("")
    const [items, setItems] = useState([]);
    const [sectionStyle, setStyle] = useState({
        display: "none"
    })
    console.log(output);


    const showResult = () => {
        console.log("test showResult");
        // console.log(search_for.value);
        console.log(output);
        console.log(items);
        setStyle({ display: "block" })
        fetchItems()
    }
    console.log(output);



    const showInput = (event) => {
        event.preventDefault()

        console.log(event.target.value);
        console.log(textInput.current.value);
        setOutput(textInput.current.value)
    }

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            showResult()
        }
    }

    const fetchItems = async () => {


        const fetchItems = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${output}`)

        const items = await fetchItems.json();
        console.log(output);
        console.log(items);

        console.log(items.drinks);


        setItems(items.drinks)


    }

    // console.log(items[0].drinks);
    console.log(items);





    return (
        <section>

            <input type="text" onInput={showInput} onKeyPress={handleEnterPress} ref={textInput} />
            <button onClick={showResult}>Search</button>



            <section style={sectionStyle} >

                {items
                    ? items.map((item, i) => (

                        <Link key={i} style={{ color: "white", textDecoration: "none" }} to={`/gins/${item.idDrink}`}>
                            <div className="grid_main_card_placeholder">
                                <img src={item.strDrinkThumb} alt="" />
                                <div className="grid_main_card_description">
                                    <h3>{item.strDrink}</h3>
                                </div>
                            </div>
                        </Link>


                        // <Link key={i} style={{ color: "white", textDecoration: "none" }} to={`/gins/${item.idDrink}`}>
                        //     <div style={{ color: "white", textDecoration: "none" }} className="grid_main_card_placeholder">
                        //         <img src={item.strDrinkThumb} alt="" />
                        //         <div style={{ color: "white", textDecoration: "none" }} className="grid_main_card_description">
                        //             <h3 style={{ color: "white", textDecoration: "none" }}>{item.strDrink}</h3>
                        //         </div>
                        //     </div>
                        // </Link>



                    ))
                    : "Leider ohne Coctail today!"}
            </section>

        </section>
    );
}

export default Search;