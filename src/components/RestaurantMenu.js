import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantDetails from "./RestaurantDetails";
import AccordionItem from "./AccordionItem";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return "Loading...";
  }
  const restroName = resInfo?.data?.cards[0]?.card?.card?.text;
  const restroDetails = resInfo.data.cards[2].card.card.info;

  const renderAccordionMenu = () => {
    const accordionList =
      resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

    if (!accordionList || accordionList.length === 0) {
      return null; // Return null if accordionList is empty or undefined
    }

    const filteredItems = accordionList?.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
      <div className="flex flex-col my-3 mx-4  justify-start items-start">
        {/* Accordion type category */}
        <ul className="flex flex-col">
          {filteredItems.map((item, index) => (
            <AccordionItem key={index} accordionDetails={{ item }} />
          ))}
        </ul>
      </div>
    );
  };

  const renderBreadcrumb = () => {
    return (
      <div className="flex text-[10.5px]">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <p className="ml-2 font-semibold">
          {restroName === undefined ? "..." : "/ " + restroName}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col my-3 w-[60%]">
        {renderBreadcrumb()}
        <RestaurantDetails restroDetails={restroDetails} />
        {renderAccordionMenu()}
      </div>
    </div>
  );
}
