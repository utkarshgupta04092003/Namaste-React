import "../styles/Body.css";
import { useEffect, useState } from "react";

import { API_URL } from "../config";
import FoodList from "./FoodList";
import Shimmer from "./Shimmer";
import { API_DATA } from "./Data";

function filterData(searchText, restaurants) {
//   console.log("working",restaurants);
  const data = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())

  );
  return data;
}

function Body() {
  // searchTxt is a local state, usestate is a function with a speciality of rerendering when value is changed
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  
  // called once to call the function getRestaurants
  useEffect(() => {
    getRestaurants();
  }, []);

  // get the restaurant details from swiggy api
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log('ERROR',error);
    }
  }
  

  return (restaurants.length === 0)? (<Shimmer/>) : (
    <div id="body">
      <div id="body-searchbar">
        <input
          type="text"
          placeholder="Search food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {
            {
              let filteredData = filterData(searchText, restaurants);
              setFilteredRestaurants(filteredData);
            }
          }}
        >
          <i className="fas fa-search"></i>
        </button>
        {/* serach icon */}
      </div>

      <FoodList restaurantList={filteredRestaurants} />
    </div>
  );
}

export default Body;
