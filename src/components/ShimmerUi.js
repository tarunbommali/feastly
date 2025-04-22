import React from "react";
import {
  ShimmerThumbnail,
  ShimmerTitle,
  ShimmerText,
  ShimmerCircularImage,
} from "react-shimmer-effects";

const ShimmerUi = ({ count = 10 }) => {
  return (
    <div className="flex justify-start items-center flex-wrap p-3 w-full">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col w-[280px] h-[288px] bg-white my-3 mx-4 p-2 rounded-lg shadow-md"
        >
          <ShimmerThumbnail height={186} width={260} className="rounded-xl" />
          <ShimmerTitle className="mt-2" />
          <div className="flex items-center mt-2">
            <ShimmerCircularImage size={18} className="mr-2" />
            <ShimmerText line={1} className="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;