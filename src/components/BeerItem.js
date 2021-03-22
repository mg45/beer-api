import { Link } from "react-router-dom";

const BeerItem = (props) => {
    return (
        <div className="ui raised verry padded text container segment">
            <Link className="link" to={`/beer/${props.id}`}>
                <div className="carouselImg-wrapper">
                    <img src={props.img} alt="" />
                </div>
                <div className="test1">
                    <h4>{props.name}</h4>
                    <p>{props.tagline} </p>
                    <p>{props.contribute} </p>
                </div>
            </Link>
        </div>
    )
}
export default BeerItem;