import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { LuArrowRightLeft } from "react-icons/lu";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserLoggedIn from "../context/UserContext";
import { FetchError } from "./FetchError";
import OfflineError from "./OfflineError";
import { useSelector, useDispatch } from "react-redux";
import {
  setRestaurants,
  setOnlineDelivery,
  setTitle,
  setLoading,
  setFetchFailed,
  setFilteredRestaurants,
} from "../redux-store/restroSlice";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserLoggedIn);
  const dispatch = useDispatch();

  const {
    initialRestaurantsList,
    restaurantsList,
    onlineDeliveryList,
    onlineDeliveryTitle,
    title,
    loading,
    fetchFailed,
  } = useSelector((state) => state.restro);

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    try {
      const url =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999";

      const response = await fetch(url);
      const res = await response.json();

      const restaurantsList =
        res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      const title = res.data.cards[1].card.card.header.title;
      const onlineDeliveryTitle = res?.data?.cards[2]?.card?.card?.title;
      const onlineDeliveryList =
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      dispatch(setRestaurants(restaurantsList));
      dispatch(setTitle(title));
      dispatch(
        setOnlineDelivery({
          title: onlineDeliveryTitle,
          list: onlineDeliveryList,
        })
      );
      dispatch(setFetchFailed(false));
    } catch (error) {
      console.error("Error fetching restaurant list:", error);
      dispatch(setLoading(false));
      dispatch(setFetchFailed(true));
    }
  };

  const onHandleSearch = (searchInputText) => {
    setSearchInput(searchInputText);
    const filtered = initialRestaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInputText.toLowerCase())
    );
    dispatch(setFilteredRestaurants(filtered));
  };

  const resetSearch = () => {
    setSearchInput("");
    dispatch(setFilteredRestaurants(initialRestaurantsList));
  };

  const handleSortChange = (sortType) => {
    let sorted = [...restaurantsList];
    if (sortType === "Rating") {
      sorted = sorted.filter((res) => res.info.avgRating >= 4.0);
    } else if (sortType === "Name") {
      sorted.sort((a, b) =>
        a.info.name.toLowerCase().localeCompare(b.info.name.toLowerCase())
      );
    } else if (sortType === "Price") {
      sorted.sort((a, b) => {
        const costA = a.info.costForTwo || "";
        const costB = b.info.costForTwo || "";
        return parseInt(costA.match(/\d+/)) - parseInt(costB.match(/\d+/));
      });
    }
    dispatch(setFilteredRestaurants(sorted));
  };

  const handleFilterChange = (filter) => {
    let filtered = [...initialRestaurantsList];
    switch (filter) {
      case "Fast Delivery":
        filtered = filtered.filter((res) => res.info.sla.deliveryTime <= 30);
        break;
      case "New on Swiggy":
        filtered = filtered.filter((res) => res.info.isNewlyOnboarded);
        break;
      case "Pure Veg":
        filtered = filtered.filter((res) => res.info.veg === true);
        break;
      case "Offers":
        filtered = filtered.filter((res) => res.info.aggregatedDiscountInfo);
        break;
      case "Rs. 300-Rs. 600":
        filtered = filtered.filter(
          (res) =>
            res.info.costForTwo &&
            parseInt(res.info.costForTwo.match(/\d+/)) >= 300 &&
            parseInt(res.info.costForTwo.match(/\d+/)) <= 600
        );
        break;
      case "Less than Rs. 300":
        filtered = filtered.filter(
          (res) =>
            res.info.costForTwo &&
            parseInt(res.info.costForTwo.match(/\d+/)) < 300
        );
        break;
      default:
        break;
    }
    dispatch(setFilteredRestaurants(filtered));
  };

  const renderSearchInput = () => (
    <div className="flex justify-between items-center border-[1px] w-[30%] my-5 rounded-md text-black px-3 py-1 text-lg mr-5">
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

  const renderFilterOptions = () => (
    <div className="flex flex-wrap py-2 my-2 ml-3 text-[#505357]">
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
      {[
        "Fast Delivery",
        "New on Swiggy",
        "Pure Veg",
        "Offers",
        "Rs. 300-Rs. 600",
        "Less than Rs. 300",
      ].map((filter) => (
        <button
          key={filter}
          className="mx-2 py-1 px-4 rounded-2xl bg border border-1px"
          onClick={() => handleFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );

  const renderRestaurantList = () => (
    <div className="mx-auto">
      <div className="flex flex-col">
        <h1 className="py-3 font-thin text-2xl ml-8 ">{title}</h1>
        <ul className="flex flex-wrap items-center p-4">
          {restaurantsList.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col">
        <h1 className="py-3 font-thin ml-8 text-2xl">{onlineDeliveryTitle}</h1>
        {renderFilterOptions()}
        <ul className="flex flex-wrap items-center p-4">
          {onlineDeliveryList.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </ul>
      </div>
    </div>
  );

  const renderBodyHeader = () => (
    <div className="flex justify-between items-center mr-6 w-[100%] md:w-[82%]">
      <div className="flex flex-col ml-4 text-xl font-semibold">
       
       <h1> Hi {loggedInUser}.!</h1>
      </div>
      {renderSearchInput()}
    </div>
  );

  document.title =
    "Order Food Online from India's Best Food Delivery Service | feastly";

  if (!onlineStatus) return <OfflineError />;
  if (fetchFailed) return <FetchError />;

  return (
    <div className="flex min-h-screen flex-col items-center">
      {renderBodyHeader()}
      <div className="flex justify-center items-center w-[85%] mx-auto">
        {loading ? <ShimmerUi /> : renderRestaurantList()}
      </div>
    </div>
  );
};

export default Body;
