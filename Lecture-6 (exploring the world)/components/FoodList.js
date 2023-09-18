import '../styles/FootList.css';

import RestaurantCard from './RestaurantCard';
function FoodList({restaurantList}){
    console.log('res  list',restaurantList==undefined? "Undefined hai ye": " chal rha");
    if(restaurantList?.length === 0)
        return <h1>No restaurants match your filter</h1>

    return (
        <div id="foodlist">
            { restaurantList.map((restaurant,i)=>{
                return <RestaurantCard key={i} restaurant={restaurant}/>
            }) }

        </div>
    )
}
export default FoodList;