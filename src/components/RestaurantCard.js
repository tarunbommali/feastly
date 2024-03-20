import { Link } from "react-router-dom";
import { RATING_STAR_ICON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurant } = props;
    const { info , cta} = restaurant;
    const { id, cloudinaryImageId, name, avgRating, sla, locality } = info;
    const { slaString } = sla;
    
    return (
     <Link to={`restaurants/${id}` } className="nav-link" key={id}> <li className="restaurant-card" >
        <img
          className="restaurant-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
  
        <h3 className="restaurant-card-title" style={{ color: "#414449" }}>{name}</h3>
        <h4
          style={{
            display: "flex",
  
            alignItems: "center",
            color: "#414449",
          }}
        >
          <img
            src={RATING_STAR_ICON_URL}
            className="star-icon"
          />
          {avgRating}
          <span className="delivery-time">
            - {slaString}
          </span>
        </h4>
        <p className="cuisines">{restaurant.info.cuisines.join(", ")}</p>
        <p style={{ color: "#676a6d" }}>{locality}</p>
      </li></Link>
    );
  };



export default RestaurantCard