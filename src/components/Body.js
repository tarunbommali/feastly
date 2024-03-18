import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/restaurantsList";
import { useState } from "react";

const Body = () => {
    const [searchInput, setSearchInput] = useState(''); // Set initial state to an empty string
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsList); // Removed extra brackets

    const onClickSearch = () => {
        const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())); // Corrected function name to includes
        setFilteredRestaurants(filteredRestaurantsList);
    }

    return (
        <div className='app-container'>
            <div className="body-header">
            <h1>Top restaurants in Hyderabad</h1> 
               <div>

                <input type="search" placeholder="Search" className="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /> {/* Corrected onChange function */}
                <button onClick={onClickSearch} className="search">Search</button> {/* Corrected onClick function */}
                </div>
                
            </div>
            
            <ul className="restaurant-list">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </ul>
        </div>
    );
};

export default Body;
