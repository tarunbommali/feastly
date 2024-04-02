import React from "react";
import { RATING_STAR_ICON_URL, SWIGGY_MEDIA_ASSEST } from "../utils/constants";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { addItem } from "../redux-store/cartSlice";

const AccordionItemCard = ({ itemCard }) => {
  const itemDetails = itemCard?.card?.info;
  const dispatch = useDispatch(); 


  const price = itemDetails.price || itemDetails.defaultPrice 
  
  const { name, imageId, ratings, itemAttribute, description } =
    itemDetails || {};
  const { aggregatedRating } = ratings || {};
  const { rating, ratingCountV2 } = aggregatedRating || {};
  const { vegClassifier } = itemAttribute || {};

  const imgUrl = SWIGGY_MEDIA_ASSEST + imageId;

  const renderVegClassifier = () => {
    return (
      <div className="font-bold">
        {vegClassifier === "NONVEG" ? (
          <div className="inline-block p-[1px] px-[2px] rounded-lg border  border-[#e43b4f]">
            <IoTriangle className="fill-[#e43b4f] my-1 rounded-md " />
          </div>
        ) : (
          <div className="inline-block p-[1px] px-[4px] rounded-lg border border-[#0f8a65]">
            <FaCircle className="fill-[#0f8a65] my-1 rounded-md" />
          </div>
        )}
      </div>
    );
  };


  const onHandelAddItemToCart = (itemDetails) => {
    console.log("Adding item to cart..."); // Add this line for debugging
    // Dispatch an Action
    dispatch(addItem(itemDetails));
  };

  return (
    <li className="relative flex justify-between text-[#414449] w-[100%] rounded-sm border-b-2 my-4 p-4">
      <div className="flex flex-col pb-4">
        {renderVegClassifier()}
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-lg font-semibold">₹{price / 100}</p>
        <p className="flex items-center text-[#116649]">
          <img src={RATING_STAR_ICON_URL} alt="rating" />
          {rating} <span className="text-[#676a6d]">({ratingCountV2})</span>
        </p>
        <p className="my-1 w-[85%] text-[#676a6d]">{description}</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-4 w-[186px] h-[174px] ">
        <img
          src={imgUrl}
          alt={name}
          className="w-[156px] h-[144px] rounded-md"
        />
        <button onClick={()=>onHandelAddItemToCart(itemDetails)}  className="absolute bottom-0 font-bold bg-white px-11 py-2 mb-4 rounded-lg text-[#1ba672] font-bolda border ">
          Add
        </button>
      </div>
    </li>
  );
};

export default AccordionItemCard;