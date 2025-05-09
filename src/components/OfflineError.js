import React from "react";
import { IoCloudOffline } from "react-icons/io5";

const OfflineError = () => {
  return (
    <div className="flex justify-center font-thin text-xl h-[50vh] text-gray-400">
      <div className="flex items-center">
        <IoCloudOffline />
        <h1 className="mx-2">Looks likes your offline!😮</h1>
      </div>
    </div>
  );
};

export default OfflineError;
