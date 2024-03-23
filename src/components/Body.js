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

  const renderSearchInput = () => {
    return (
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for Restaurants"
          className="search"
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

  document.title = "Order Food Online from India's Best Food Delivery Service | feastly"

  const renderRestaurantList = () => {
    return (
      <ul className="restaurant-list">
        {restaurantsList.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            lat={lat}
            lng={lng}
          />
        ))}
      </ul>
    );
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



  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
      const addressComponents = data.address;


      console.log(addressComponents);

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
      console.log(restaurantsList);
      setInitialRestaurantsList(restaurantsList);
      setRestaurantsList(restaurantsList);
      setLoading(false);
      setTitle(title);
    } catch (error) {
      console.error("Error fetching restaurant list:", error);
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus() ; 

  if (onlineStatus === false) return <h1>Looks likes your offline!😮</h1> 

  return (
    <div className="app-container">
      <div className="body-header">
        <div className="location-details">
          <p>{locationName}</p>
          <button onClick={getLocation} className="get-location-btn">
            <FaLocationCrosshairs />
            Get current location
          </button>
        </div>
        {renderSearchInput()}
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      {loading ? <ShimmerUi /> : renderRestaurantList()}
    </div>
  );
};

export default Body;
