import { useState, useEffect } from "react";
import { MENU_API_URL } from "../config";
import { MENU_ITEM_TYPE_KEY } from "../config";



function useRestaurant(id) {
  console.log("userestaurant imported:", id);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  

  async function getRestaurantInfo() {
    const data = await fetch(MENU_API_URL + id);
    const json = await data.json();
    // const json = await MENU_DATA;
    console.log("useres working");
    console.log("use res json", json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    console.log("useres menu:", menuItemsData);
    setMenuItems(menuItemsData);
    }

    console.log('res',restaurant)
    console.log('menu',menuItems)
    return [restaurant, menuItems];
}
export default useRestaurant;
