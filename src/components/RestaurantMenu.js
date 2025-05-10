import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantDetails from "./RestaurantDetails";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ShimmerThumbnail } from "react-shimmer-effects";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(null);
  const cartItems = useSelector((store) => store.cart.items);
  const [multiple, setMultiple] = useState([]);

  if (!resInfo) {
    return (
      <div className="flex flex-col mx-auto items-center">
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="bg-[#edeff4] h-[200px] w-[65%] rounded-md my-2"
          ></div>
        ))}
      </div>
    );
  }

  const restroName = resInfo?.data?.cards[0]?.card?.card?.text;
  const restroDetails = resInfo.data.cards[2].card.card.info;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <div className="flex flex-col my-3 mx-4 justify-start items-start">
        {/* Accordion type category */}
        <ul className="flex flex-col w-[100%]">
          {filteredItems.map((item, index) => (
            <AccordionItem
              key={index}
              accordionDetails={{ item }}
              showItems={index === activeIndex}
              setActiveAccordion={toggleAccordion}
              index={index}
            />
          ))}
        </ul>
      </div>
    );
  };

  const renderBreadcrumb = () => {
    return (
      <div className="flex text-sm">
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
      <div className="flex flex-col my-3 w-[65%]">
        {renderBreadcrumb()}
        <RestaurantDetails restroDetails={restroDetails} />
        {renderAccordionMenu()}
        {cartItems.length > 0 && (
          <div className="flex items-center pt-5  font-bold text-white justify-between  text-lg bottom-0 pb-5 fixed bg-[#60b246] py-3 px-5 h-[20] w-[65%]">
            <h1>
              {cartItems.length} {cartItems === 1 ? "item" : "items"} added
            </h1>
            <Link to="/cart" className="flex items-center">
              VIEW CART <LiaShoppingBagSolid />{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
