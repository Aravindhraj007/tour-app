import React from "react";
import Places from "../components/Places/Places";
import data from '../data/data.json'

const PlacesRoute = () => {
  // {priceValue, locationName}
  return (
    <>
      <div className="pt-14">
        <Places 
          items={data.Placedatas}
        />
      </div>
    </>
  );
};

export default PlacesRoute;
