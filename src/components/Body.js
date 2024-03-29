import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [initialRestaurantsList, setInitialRestaurantsList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [title, setTitle] = useState("");
  const [lat, setLat] = useState(17.6868159);
  const [lng, setLng] = useState(83.2184815);
  const [locationName, setLocationName] = useState("");
  const onlineStatus = useOnlineStatus();
  const [restaurantOnlineDelveryTitle, setRestaurantOnlineDelveryTitle] =
    useState("");

  const [restaurantOnlineDelvery, setRestaurantOnlineDelvery] = useState([]);

  useEffect(() => {
    getLocation();
  }, []); // Fetch location when component mounts

  useEffect(() => {
    getLocationName(lat, lng);
  }, []);
  useEffect(() => {
    getRestaurantList();
  }, [lat, lng]);

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

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLat(latitude);
          setLng(longitude);
          console.log("getLocation called");
          getLocationName(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Please allow location access to use this feature.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const renderSearchInput = () => {
    return (
      <div className="flex items-center border-[1px] rounded-md text-black  px-3 py-1 text-lg mr-5">
        <input
          type="text"
          placeholder="Search for Restaurants"
          className="py-1 px-1 mr-2 outline-none"
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

  document.title =
    "Order Food Online from India's Best Food Delivery Service | feastly";

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      const addressComponents = data.address;
      let city =
        addressComponents.city ||
        addressComponents.county ||
        addressComponents.town ||
        addressComponents.state_district;
      let state = addressComponents.state;
      let country = addressComponents.country;

      if (country === "India") {
        setLocationName(`${city}, ${state}, ${country}`);
      } else {
        setLocationName("Location outside India");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  const getRestaurantList = async () => {
    try {
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`;
      const response = await fetch(url);
      const res = await response.json();
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
    }
  };

  const renderRestaurantList = () => {
    return (
      <div className="mx-auto">
        <div className="flex flex-col">
          <h1 className="py-3 font-bold text-2xl ">{title}</h1>
          <ul className="flex flex-wrap justify-between items-center p-4">
            {restaurantsList.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                restaurant={restaurant}
                lat={lat}
                lng={lng}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="py-3 font-bold text-2xl">
            {restaurantOnlineDelveryTitle}
          </h1>

          <ul className="flex flex-wrap items-center p-4 ">
            {restaurantOnlineDelvery.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                restaurant={restaurant}
                lat={lat}
                lng={lng}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderBodyHeader = () => {
    return (
      <div className="flex justify-between items-center w-[80%] py-3 my-2 text-[#93959f]">
        <div className="flex flex-col  py-3 ">
          <p>{!locationName ? "...loading" : locationName}</p>
          <button
            onClick={getLocation}
            className="flex items-center  font-semibold text-[#3d4046]"
          >
            <FaLocationCrosshairs className="mr-1" />
            Get current location
          </button>
        </div>
        {renderSearchInput()}
      </div>
    );
  };

  if (onlineStatus === false) return <h1>Looks likes your offline!😮</h1>;

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
