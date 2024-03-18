const RestaurantCard = (props) => {
    const { restaurant } = props;
    const { info } = restaurant;
    const { id, cloudinaryImageId, name, avgRating, sla, locality } = info;
    const { slaString } = sla;
    return (
      <li className="restaurant-card" key={id}>
        <img
          className="restaurant-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
  
        <h3 className="restaurant-title" style={{ color: "#414449" }}>{name}</h3>
        <h4
          style={{
            display: "flex",
  
            alignItems: "center",
            color: "#414449",
          }}
        >
          <img
            src="https://res.cloudinary.com/drdgj0pch/image/upload/v1710400102/Frontend/Icons/star_rating_twbpwj.svg"
            className="star-icon"
          />
          {avgRating}
          <span className="delivery-time">
            - {slaString}
          </span>
        </h4>
        <p className="cuisines">{restaurant.info.cuisines.join(", ")}</p>
        <p style={{ color: "#676a6d" }}>{locality}</p>
      </li>
    );
  };



export default RestaurantCard