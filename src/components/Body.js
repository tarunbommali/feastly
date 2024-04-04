import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";

import useOnlineStatus from "../hooks/useOnlineStatus";
import UserLoggedIn from "../context/UserContext";
import { FetchError } from "./FetchError";

const Body = () => {
  const [initialRestaurantsList, setInitialRestaurantsList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const onlineStatus = useOnlineStatus();
  const [restaurantOnlineDelveryTitle, setRestaurantOnlineDelveryTitle] =
    useState("");

  const [fetchFailed, setFetchFailed] = useState(false);

  const [restaurantOnlineDelvery, setRestaurantOnlineDelvery] = useState([]);

  const { loggedInUser } = useContext(UserLoggedIn);
  useEffect(() => {
    getRestaurantList();
  },[]);

  const onHandleSearch = (searchInputText) => {
    setSearchInput(searchInputText);
    const filteredRestaurantsList = initialRestaurantsList.filter(
      (restaurant) =>
        restaurant.info.name
          .toLowerCase()
          .includes(searchInputText.toLowerCase())
    );
    setRestaurantsList(filteredRestaurantsList);
  };

  const resetSearch = () => {
    setSearchInput("");
    setRestaurantsList(initialRestaurantsList);
  };

  document.title =
    "Order Food Online from India's Best Food Delivery Service | feastly";

  const renderSearchInput = () => {
    return (
      <div className="flex justify-between items-center border-[1px] w-[40%] my-5 rounded-md text-black  px-3 py-1 text-lg mr-5">
        <input
          type="text"
          placeholder="Search for Restaurants"
          className="py-1 px-1 mr-2 outline-none w-[100%]"
          value={searchInput}
          onChange={(e) => onHandleSearch(e.target.value)}
        />
        {searchInput.length !== 0 ? (
          <button onClick={resetSearch} className="icon-button">
            <IoCloseSharp className="icon" />
          </button>
        ) : (
          <button
            onClick={() => onHandleSearch(searchInput)}
            className="icon-button"
          >
            <IoSearchOutline className="icon" />
          </button>
        )}
      </div>
    );
  };

  const getRestaurantList = async () => {
    try {
      const url =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999";

      const response = await fetch(url);
      const res = await response.json();
      setFetchFailed(false);
      const restaurantsList =
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      const title = res.data.cards[1].card.card.header.title;

      const restaurantOnlineDelveryTitleText =
        res?.data?.cards[2]?.card?.card?.title;
      setRestaurantOnlineDelveryTitle(restaurantOnlineDelveryTitleText);
      const restaurantOnlineDelveryList =
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantOnlineDelvery(restaurantOnlineDelveryList);

      setInitialRestaurantsList(restaurantsList);
      setRestaurantsList(restaurantsList);
      setLoading(false);
      setTitle(title);
    } catch (error) {
      console.error("Error fetching restaurant list:", error);
      setLoading(false);
      setFetchFailed(true);
    }
  };

  const renderFilterOptions = () => {
    return (
      <div className="flex flex-wrap py-2 my-2 text-[#505357]">
        <button className="flex items-center mx-4 py-1 px-4 rounded-2xl bg border border-1px">
          Filter <LuArrowRightLeft className="text-xl" />
        </button>
        <select
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="Rating">Ratings 4.0+</option>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
        </select>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("Fast Delivery")}
        >
          Fast Delivery
        </button>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("New on Swiggy")}
        >
          New on Swiggy
        </button>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("Pure Veg")}
        >
          Pure Veg
        </button>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("Offers")}
        >
          Offers
        </button>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("Rs. 300-Rs. 600")}
        >
          Rs. 300-Rs. 600
        </button>
        <button
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange("Less than Rs. 300")}
        >
          Less than Rs. 300
        </button>
      </div>
    );
  };

  const renderRestaurantList = () => {
    return (
      <div className="mx-auto">
        <div className="flex flex-col">
          <h1 className="py-3 font-bold text-2xl ">{title}</h1>
          <ul className="flex flex-wrap items-center p-4">
            {restaurantsList.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="py-3 font-bold text-2xl">
            {restaurantOnlineDelveryTitle}
          </h1>
          {renderFilterOptions()}

          <ul className="flex flex-wrap items-center p-4 ">
            {restaurantOnlineDelvery.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  if (onlineStatus === false) return <h1>Looks likes your offline!😮</h1>;
  if (fetchFailed) return <FetchError />;

  const renderBodyHeader = () => {
    return (
      <div className="flex justify-between items-center w-[80%]">
        <h1 className="flex items-center p-1 mx-2 text-2xl font-semibold">
          <div className=" flex justify-center items-center bg-[#414449] mr-2 rounded-[50%] h-[50px] w-[50px] text-white">
            {loggedInUser && loggedInUser.slice(0, 2).toUpperCase()}
          </div>
          {loggedInUser}
        </h1>
        {renderSearchInput()}
      </div>
    );
  };

  return (
    <div className="flex  min-h-screen flex-col items-center">
      {renderBodyHeader()}
      <div className="flex justify-center items-center w-[85%] mx-auto">
        {loading ? <ShimmerUi /> : renderRestaurantList()}
      </div>
    </div>
  );
};

export default Body;
