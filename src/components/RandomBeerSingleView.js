import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

class RandomBeerSingleView extends React.Component {

    state = { beerItem: [] }

    componentDidMount = async () => {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        this.setState({ beerItem: response.data })
        console.log(response)
    }

    render() {

        return (
            <div>
                <div>
                    <h1>{this.state.beerItem.name}</h1>
                </div>
            </div>

        );
    }
}

export default RandomBeerSingleView;