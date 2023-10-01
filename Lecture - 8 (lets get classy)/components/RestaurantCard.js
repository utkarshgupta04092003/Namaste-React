import '../styles/FoodItem.css';
import { IMG_CDN_URL } from '../config';
import { Link } from 'react-router-dom';
  function RestaurantCard({restaurant}){

      console.log('res: ',restaurant)
      const {id,name,cuisines, cloudinaryImageId, avgRating, costForTwo} = restaurant.info;
      
    return(
        <>
          <div id="food-item">
              <div id="food-image">
                <Link to={'restaurant/'+id}>
                  <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
                </Link>
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



