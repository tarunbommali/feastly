import React from "react";
import { IoReload } from "react-icons/io5";


export const FetchError = () => {
  return (
    <div className="flex flex-col shadow-lg p-4 w mx-auto w-[90%]  md:w-[40%] mt-5">
      <img
        src="https://lh3.googleusercontent.com/1wCZM8Py3IzeamnPWn1E1vW9BvECRS0tTnDbQGBUjFzsJTqxjax7pu7pUZugPd8vfaOtInhldnRQbuCIvCD_ifWR=s1280-w1280-h800"
        alt="cors"
        className="h-[200px] w-[400px]"
      />
      <div className="flex flex-col">
        <h1>Install Allow CORS: Access-Control-AlIow-Origin</h1>
        <p>API Referrer Policy: strict-origin-when-cross-origin</p>

        <a
          className="text-blue-950 text-xl underline"
          href="https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf"
        >
          Download Extension
        </a>
        <button
          className="flex items-center my-3 p-2 font-semibold border"
          onClick={() => window.location.reload()}
        >
          <IoReload className="mx-2" /> Reload
        </button>
      </div>
      <p>or</p>
      <p>sometimes there might be issue with <a target="__blank" className="text-[#00a6ed] font-medium underline" href="https://www.swiggy.com/">siggy.com</a> API</p>
    </div>
  );
};
