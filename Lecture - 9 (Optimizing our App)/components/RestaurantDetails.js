import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IMG_CDN_URL, MENU_API_URL } from "../config";
import { MENU_DATA } from "./Data";
import "../styles/RestaurantDetails.css";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantShimmer from "./RestaurantShimmer";
// import { Link } from "react-router-dom";

const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, menuItems] = useRestaurant(id);
  console.log("menuITems: ", menuItems);
  return !restaurant ? (
    <RestaurantShimmer />
  ) : (
    <div>
      <div id="top">
        <div id="restaurant-details">
         
          <div id="details-img">
            <img
              src={IMG_CDN_URL + restaurant.cloudinaryImageId}
              alt="" 
            />
          </div>
          <div id="restaurant-details-detail">
            <h1 id="restaurant-name">{restaurant.name}</h1>
            <div id="restaurant-cuisines">{restaurant.cuisines?.join(", ")}</div>
            <div id="restaurant-star-rate">
              <div id="restaurant-star">{restaurant.avgRating?restaurant.avgRating:"3.5"} <i className="fa-solid fa-star"></i></div> |
              <div id="restaurant-time">{restaurant.sla.slaString}</div> |
              <div id="restaurant-rate">{restaurant.costForTwoMessage}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Recommandation: Menu Items */}
      <div id="bottom">
        <h3>Recommanded</h3>
        <p>{menuItems.length} Items</p>
        
        {menuItems.map((item,index) => (
          <div className="rec-card" key={index}>
            <div className="rec-card-left">
              <h3>{item.name}</h3>
              <p> ₹ {(item.price*0.01)}</p>
              <p>{item.itemAttribute.vegClassifier} | {item.description}</p>
              <button type=""><b>Add +</b></button>

            </div>
            <div className="rec-card-right">
              {/* if image is present then show other wise not */}
              {item.imageId?<img src={IMG_CDN_URL+item.imageId} alt=""/>:""}
                
              
            </div>

            
          </div>
          
        ))}

      </div>
    </div>
  );
};
export default RestaurantDetails;

/*
id
name
cuisines
costForTwoMessage
avgRatingString
cloudinaryImageId

Menu:
name
costForTwoMessage
imageId
description


*/
