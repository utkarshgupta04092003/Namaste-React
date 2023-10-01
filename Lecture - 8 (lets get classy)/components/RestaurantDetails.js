import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_API_URL } from "../config";
import { MENU_DATA } from "./Data";
import Shimmer from "./Shimmer";
const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const MENU_ITEM_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  async function getRestaurantInfo() {
    const data = await fetch("https://corsproxy.io/?" + MENU_API_URL + id);
    const json = await data.json();
    // const json = await MENU_DATA;
    console.log("working");
    console.log("json", json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    // console.log("menu:", menuItemsData);
    setMenuItems(menuItemsData);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div >
      <div>
        <h1>Restaurant Id: {id}</h1>
        {restaurant.name},
        {restaurant.id},
        {restaurant.areaName},
        {restaurant.city},
        {restaurant.cuisines?.join(",")},
        {restaurant.avgRating}
        {/* {restaurant.menu} */}
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="loading image"
          style={{ width: "400px" }}
        />
      </div>
      <div>
        {/* {menuItems[0].name} */}
        <ul>
        {menuItems.map((item) =>(
        <li>{item.name}</li>))}
            
        </ul>
      </div>
    </div>
  );
};
export default RestaurantDetails;
