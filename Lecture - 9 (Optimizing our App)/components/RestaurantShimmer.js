import "../styles/MenuShimmer.css";
import "../styles/ShimmerAnimation.css";
function RestaurantShimmer() {
  return (
    <div id="menushimmer-container">
      <div id="menushimmer-top">
        <div id="menushimmer-restaurant-details">
          <div id="menushimmer-details-img" className="animation">
            <img src="" alt="" />
          </div>
          <div id="menushimmer-details-detail">
            <h1 id="menushimmer-name" className="animation"></h1>
            <div id="menushimmer-cuisines" className="animation"></div>
            <div id="menushimmer-star-rate">
              <div id="menushimmer-star" className="animation"></div> |
              <div id="menushimmer-time" className="animation"></div> |
              <div id="menushimmer-rate" className="animation"></div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div id="menushimmer-bottom">
        <h3 className="menushimmer-rec animation"></h3>
        <p className="menushimmer-rec animation"> </p>

        {Array(10).fill("").map((item, index) => (
          <div className="menushimmer-rec-card" key={index}>
            <div className="menushimmer-rec-card-left">
              <h3 className="menushimmer-card-heading animation"></h3>
              <p className="animation"></p>
              <p className=" animation"></p>
              <div className="menushimmer-add-btn  animation" type=""></div>
            </div>
            <div className="menushimmer-rec-card-right  animation"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RestaurantShimmer;

// <div id="top">
{
  /* <div id="restaurant-details">


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
</div> */
}
