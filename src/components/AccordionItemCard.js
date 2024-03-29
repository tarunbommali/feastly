import React from "react";
import { RATING_STAR_ICON_URL } from "../utils/constants";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";


const AccordionItemCard = ({ itemCard }) => {
  const itemDetails = itemCard?.card?.info;
  const { name, imageId, price, ratings, itemAttribute , description} = itemDetails;
  const { aggregatedRating } = ratings;
  const {rating , ratingCountV2} = aggregatedRating
  const { vegClassifier } = itemAttribute;
  const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId
  
  return (
    <li className="flex justify-between text-[#414449] w-[100%]  rounded-sm shadow-sm my-2 p-2">
        <div className="flex flex-col">
        <h1 className="font-bold">{vegClassifier === "NONVEG" ? <IoTriangle className="fill-[#e43b4f] my-1" /> : <IoTriangle className="fill-[#0f8a65] my-1" />}</h1>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-lg font-semibold">₹{price/100}</p>
        <p className="flex items-center text-[#116649]"><img src={RATING_STAR_ICON_URL} alt="rating" />{rating} <span className="text-[#676a6d]">({ratingCountV2})</span></p>

        <p className="my-1 text-[#676a6d]">{description}</p>
      </div>
      <img src={imgUrl} alt={name} className="w-[156px] h-[144px] rounded-md" />
    </li>
  );
};

export default AccordionItemCard;
