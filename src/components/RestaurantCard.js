import React from "react";
import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resList?.card.card.info;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
