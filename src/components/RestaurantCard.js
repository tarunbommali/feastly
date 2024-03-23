import { Link } from "react-router-dom";
import { RATING_STAR_ICON_URL } from "../utils/constants";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { info, cta } = restaurant;
  const { id, cloudinaryImageId, name, avgRating, sla, locality } = info;
  const { slaString } = sla;

  return (
    <Link to={`restaurants/${id}`} className="nav-link" key={id}>
      {" "}
      <li className="flex flex-col bg-[white] my-1 mx-3  w-[280px] h-[288px] hover:scale-[0.95]">
        <img
          className="w-[280px] h-[186px] rounded-[15px]"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />

        <h3 className="text-lg font-semibold w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
        <h4
          className="text-md font-semibold"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#414449",
          }}
        >
          <img src={RATING_STAR_ICON_URL} className="w-[18px] h-[18px] mr-1" />
          {avgRating}

          <span className="flex items-center ml-1">
            <MdDeliveryDining className="mr-1" /> {slaString}
          </span>
        </h4>
        <p
          className="w-[250px] whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ color: "#676a6d" }}
        >
          {restaurant.info.cuisines.join(", ")}
        </p>
        <p style={{ color: "#676a6d" }}>{locality}</p>
      </li>
    </Link>
  );
};

export default RestaurantCard;
