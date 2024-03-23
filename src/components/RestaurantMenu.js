import { Link, useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { RATING_STAR_ICON_URL } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <ShimmerUi />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo.data.cards[0]?.card?.card?.info;
  const cardAccordionList =
    resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div className="flex flex-col items-center">
      <div className="flex my-3 w-[80%] justify-start items-start">
        <Link to="/" className="nav-link">
          Home
        </Link>{" "}
        <p className="ml-2 font-semibold"> / {name}</p>
      </div>
      <div className="flex my-3 w-[80%] justify-between">
        <div className="flex flex-col ">
          <h4 className="text-xl font-bold text-[#282c3f]">{name}</h4>
          <p className="text-[#7e808c]">{cuisines.join(", ")}</p>
          <p className="text-[#3e4152] my-2 text-lg font-bold">
            Cost For Two : {costForTwoMessage}
          </p>
        </div>
        <div className="flex items-center">
          <img src={RATING_STAR_ICON_URL} className="mr-1" />
          <p className="font-semibold text-xl text-[#198e3d]">{avgRating}</p>
        </div>
      </div>

      <div className="flex flex-col my-3 w-[80%] justify-start items-start">
        <h2 className="flex items-center text-xl font-bold my-2 text-[#282c3f]">
          {
            resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
              ?.card?.card?.title
          }
          (
          {cardAccordionList &&
            cardAccordionList.length &&
            cardAccordionList.length}
          )
        </h2>

        <ul className="flex flex-col">
          {cardAccordionList &&
            cardAccordionList.map((item) => (
              <li key={item.card.info.id} className="list-none py-2">
                <p className="text-md font-semibold text-[#3e4152]">
                  {item.card.info.name}
                </p>
                <p className="text-sm text-[#3e4152]">
                  Rs:
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
