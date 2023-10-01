
export function filterData(searchText, restaurants) {
//   console.log("working",restaurants);
    const data = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())

    );
    return data;
}