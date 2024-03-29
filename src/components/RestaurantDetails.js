import React from "react";
import { RATING_STAR_ICON_URL } from "../utils/constants";

const RestaurantDetails = ({ restroDetails }) => {
  const {
    avgRating,
    areaName,
    city,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    feeDetails,
  } = restroDetails;

  const { slaString } = sla;

  const fee =
    typeof feeDetails.amount === "number" ? feeDetails.amount / 100 : 0;

  return (
    <div className="felx flex-col shadow-lg w-[100%] p-2 m-2 text-[#161a1f]">
      <h1 className="text-xl font-bold my-4 py-2">{restroDetails.name}</h1>
      <div className="flex flex-col border p-4 m-2 rounded-md">
        <p className="flex items-center text-lg font-semibold">
          <img src={RATING_STAR_ICON_URL} alt="rating" className="mr-1" />
          {avgRating}
          {" ("}
          {totalRatingsString}
          {")"}
          <span className="mx-2 text-[#8d8f91]">.</span> {costForTwoMessage}
        </p>
        <p className="underline text-[#00a6ed] font-bold">
          {cuisines.join(", ")}
        </p>
        <p className="font-semibold">
          {areaName} {city}
        </p>
        <p className="font-semibold">{slaString}</p>
        <p className="my-2 text-[#676a6d]">₹{fee} Delivery fee will apply</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
