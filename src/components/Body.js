import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [filteredList, setFilteredList] = useState(resList);

  const filterRestaurants = () => {
    setFilteredList(
      resList.filter((item) => item.card.card.info.avgRating > 4.4)
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredList?.map((list) => (
          <RestaurantCard key={list.card.card.info.id} resList={list} />
        ))}
      </div>
    </div>
  );
};

export default Body;
