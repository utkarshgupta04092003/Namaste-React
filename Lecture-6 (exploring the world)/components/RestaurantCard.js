import '../styles/FoodItem.css';
import { IMG_CDN_URL } from '../config';
  function RestaurantCard({restaurant}){

      console.log(restaurant)
      const {name,cuisines, cloudinaryImageId, avgRating, costForTwo} = restaurant.info;
      // console.log('data', data)
      console.log('data',restaurant);
    
    return(
        <>
          <div id="food-item">
              <div id="food-image">
                  <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
                  
              </div>
              <div id="food-name">
                  {name}
              </div>
              <div id="food-type">
                {cuisines.join(', ')}
              </div>
              <div id="food-rate-price">
                  <div id="food-rate">
                    <i className="fa-solid fa-star"></i> {avgRating}
                  </div>
                   <div id="food-price">
                       {costForTwo}

                   </div>
               </div>
          
           </div>
         </>

    )
}
export default RestaurantCard;



