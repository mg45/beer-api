import React from 'react';
import axios from 'axios';
import BeerItem from './BeerItem';

class BeerList extends React.Component {

    state = { beerList: [] }

    componentDidMount = async () => {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState({ beerList: response.data })
    }

    render() {
        return (
            <section>
                <h1>ALL BEERS</h1>
                {this.state.beerList.map((elt) => (
                    <BeerItem
                        name={elt.name}
                        img={elt.image_url}
                        tagline={elt.tagline}
                        contribute={elt.contributed_by}
                        id={elt._id}
                    />
                ))}
            </section>
        );
    }
}

export default BeerList;