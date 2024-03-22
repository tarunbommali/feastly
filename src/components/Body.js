import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { IoSearchOutline, IoCloseSharp } from 'react-icons/io5'; // Using io5 instead of io

const Body = () => {
  const [initialRestaurantsList, setInitialRestaurantsList] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(""); // Added missing state for search input
  const [title, setTitle] = useState("")

  

  const onHandleSearch = (searchInputText) => {
    setSearchInput(searchInputText);
    const filteredRestaurantsList = initialRestaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInputText.toLowerCase())
    );
    setRestaurantsList(filteredRestaurantsList);
  };

  const resetSearch = () => {
    setSearchInput(""); // Reset search input
    setRestaurantsList(initialRestaurantsList); // Reset restaurant list to initial state
  };

  let lat =   17.6868159
  let  lng =   83.2184815

  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  // const url =
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const getRestaurantList = async () => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      const restaurantsList = res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      const title = res.data.cards[1].card.card.header.title;
      setInitialRestaurantsList(restaurantsList);
      setRestaurantsList(restaurantsList); // Set initial list
      setLoading(false);
      setTitle(title)
    } catch (error) {
      console.error("Error fetching restaurant list:", error);
      setLoading(false);
    }

    
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return loading ? (
    <ShimmerUi />
  ) : (
    <div className="app-container">
      <div className="body-header">
        <h1 className="title">{title}</h1>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for Restaurants"
            className="search"
            value={searchInput}
            onChange={(e) => onHandleSearch(e.target.value)} // Fixed onChange handler
          />
          {searchInput.length !== 0 ? (
            <button onClick={resetSearch} className="icon-button">
              <IoCloseSharp className="icon" />
            </button>
          ) : (
            <button onClick={() => onHandleSearch(searchInput)} className="icon-button">
              <IoSearchOutline className="icon" />
            </button>
          )}
        </div>
      </div>

      <ul className="restaurant-list">
        {restaurantsList.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
};

export default Body;
