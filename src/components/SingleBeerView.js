import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";


function SingleBeerView(props) {
  const { id } = useParams();
  console.log(props);

  const [beerDetail, setDetail] = useState(' ');
  useEffect(() => {
    Axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      const beerDetail = response.data.filter((elt) => id === elt._id);
      setDetail(beerDetail);
    });
  });

    return (
        <div>
            <div className="detailItemImg">
                <img src={beerDetail[0].image_url} alt="image" />
            </div>
            <div className="detailContent">
                <h2 className="detailName">{beerDetail[0].name}</h2>
                <h4>{beerDetail[0].tagline} </h4>
                <p> {beerDetail[0].first_brewed}</p>
                <p>{beerDetail[0].attenuation_level}</p>
                <p>{beerDetail[0].description}</p>
                <small>{beerDetail[0].contributed_by}</small>
            </div>
        </div>
    );
}

export default SingleBeerView;