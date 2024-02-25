import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import data from '../../data/data.json'

const Places = ({items}) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          {items.length > 0 ?
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <PlaceCard
                key={index}
                {...item}
              />
            ))}
          </div> :
          <p>No places found</p>  
        }
        </section>
      </div>
    </>
  );
};

export default Places;
