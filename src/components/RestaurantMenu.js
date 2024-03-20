import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { RATING_STAR_ICON_URL } from "../utils/constants";

export default function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <ShimmerUi />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo.data.cards[0]?.card?.card?.info;
  const cardAccordionList =
    resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div className="restaurant-menu-container">
      <div className="breadcum">
        <Link to="/" className="nav-link">
          Home
        </Link> / <p className="active-breadcum">{name}</p>
      </div>
      <div className="restaurant-details">
        <div className="details-section">
          <h4 className="menu-title">{name}</h4>
          <p>{cuisines.join(", ")}</p>
          <p>Cost For Two : {costForTwoMessage}</p>
        </div>
        <p className="res-menu-rating"><img
            src={RATING_STAR_ICON_URL}
            className="star-icon"
          />{avgRating}</p>
      </div>

      <div className="menu-list-container">
        <h2>
          {
            resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.title
          }{" "}
          (
          {cardAccordionList &&
            cardAccordionList.length &&
            cardAccordionList.length}
          )
        </h2>
        {cardAccordionList &&
          cardAccordionList.map((item) => (
            <li key={item.card.info.id} className="card-accordion">
              <p>{item.card.info.name}</p>
              <p>
                Rs:{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
            </li>
          ))}
      </div>
    </div>
  );
}
