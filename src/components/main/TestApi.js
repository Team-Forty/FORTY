import React, { Component } from 'react';
import "./Main.css";

class TestApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    //!    SUCHE NACH NAME!

    // componentDidMount() {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);

    //             this.setState({ data: json.results });
    //         })
    // }

    //! SUCHE NACH ID!

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
            .then(response => response.json())
            .then(json => {
                console.log(json);

                this.setState({ data: json.results });
            })
    }

    //! KATEGORIE (GIN)
    // componentDidMount() {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);

    //             this.setState({ data: json.results });
    //         })
    // }


    render() {
        return (
            <section>
                <h1>Tessting api</h1>
            </section>
        );
    }
}

export default TestApi;