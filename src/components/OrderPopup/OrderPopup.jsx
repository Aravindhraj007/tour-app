import React, { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { OrderContext } from "../../context/OrderContext";
import { NotificationContext } from "../../context/NotificationContext";

const OrderPopup = () => {
  const {handleNotification} = useContext(NotificationContext)
  const {
    orderPopup, 
    handleOrderPopup, 
    city, 
    price, 
    person, 
    totalRate, 
    setPerson, 
    setTotalRate,
    setName,
    setPhNumber,
    setResult,
    name,
    phNumber,
  } = useContext(OrderContext)
  const bookMsg = "Your order placed successfully"

  const handleBook = (e) => {
    e.preventDefault();
    localStorage.setItem('tour', JSON.stringify({name: name[0].toUpperCase()+name.slice(1, name.length), phNumber, city, price, person, totalRate}))
    setResult({name: name[0].toUpperCase()+name.slice(1, name.length), phNumber, city, price, person, totalRate})
    handleNotification(bookMsg)
    handleOrderPopup()
    console.log("first")
  }

  useEffect(()=>{
    setTotalRate(Number(price) * Number(person))
  }, [person]) 
  
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <form className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[450px]"
          onSubmit={handleBook}>
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-black/70 font-bold">
                  Book Your Trip
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={handleOrderPopup}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <label className="opacity-70">Location</label>
              <input
                type="text"
                placeholder="city"
                value={city}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800  px-3 py-1 mb-4"
              />
              <label className="opacity-70">Name</label>
              <input
                type="text"
                placeholder="Name"
                onChange={e=>setName(e.target.value)}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              />
              <label className="opacity-70">Phone number</label>
              <input
                type="tel"
                placeholder="Phone number"
                onChange={e=>setPhNumber(e.target.value)}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              />
              <label><span className="opacity-70">Per person price: </span><b>₹{price}</b></label><br /><br />
              <label className="opacity-70">Number of person</label>
              <input
                type="number"
                defaultValue={person}
                onChange={event=>setPerson(event.target.value.replace(/\+|-/ig, ''))}
                min={1}
                placeholder="Person"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 mb-4"
              /><br />
              <label className="opacity-70">Total Rate:  <b>₹{totalRate || price}</b></label>
              <br /><br/>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
    
  );
};

export default OrderPopup;

