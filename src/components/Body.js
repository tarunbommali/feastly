import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { useState, useEffect } from "react";

const Body = () => {
    const [searchInput, setSearchInput] = useState(''); // Set initial state to an empty string
    const [restaurantsList, setRestaurantsList] = useState([]); // Removed extra brackets
    const [loading, setLoading] = useState(true); // Added loading state

    const onClickSearch = () => {
        const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())); // Corrected function name to includes
        setRestaurantsList(filteredRestaurantsList);
    };

    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const getRestaurantList = async () => {
        try {
            const response = await fetch(url);
            const res = await response.json();
            const restaurantsList = res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            setRestaurantsList(restaurantsList);
            setLoading(false); // Set loading to false after fetching data
        } catch (error) {
            console.error("Error fetching restaurant list:", error);
            setLoading(false)
        }
    };

    useEffect(() => {
        getRestaurantList();
    }, []);

    return loading ? <ShimmerUi/> :(
        <div className='app-container'>
            <div className="body-header">
                <h1>Top restaurants in Hyderabad</h1>
                <div>
                    <input type="search" placeholder="Search" className="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <button onClick={onClickSearch} className="search">Search</button>
                </div>
            </div>
 
                <ul className="restaurant-list">
                    {restaurantsList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                    ))}
                </ul>
            
        </div>
    );
};

export default Body;
