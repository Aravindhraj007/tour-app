import React from "react";
import Places from "../components/Places/Places";

const PlacesRoute = () => {
  // {priceValue, locationName}
  return (
    <>
      <div className="pt-14">
        <Places 
        priceValue={1000}
        locationName={''}
        />
      </div>
    </>
  );
};

export default PlacesRoute;
