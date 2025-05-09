import React from "react";
import {
  ShimmerCircularImage,
  ShimmerTitle,
  ShimmerText
} from "react-shimmer-effects";

const AboutMeShimmer = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Left Section - Avatar and GitHub Info */}
      <div className="flex justify-center items-center flex-col lg:flex-row w-full">
        <ShimmerCircularImage size={220} className="my-2" />

        <div className="lg:ml-5 mt-4 lg:mt-0 text-left w-[60%]">
          <ShimmerTitle className="w-[60%]" />
          <ShimmerText line={1} className="w-[40%] mt-2" />
          <ShimmerText line={2} className="w-full mt-2" />
        </div>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex flex-col justify-center gap-5 pt-5 font-bold text-lg pb-5">
        <ShimmerCircularImage size={40} />
        <ShimmerCircularImage size={40} />
        <ShimmerCircularImage size={40} />
      </div>
    </div>
  );
};

export default AboutMeShimmer;
