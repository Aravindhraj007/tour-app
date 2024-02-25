import React, { useContext, useEffect } from 'react'
import { OrderContext } from '../context/OrderContext'
import { MdDelete } from "react-icons/md"
import { NotificationContext } from '../context/NotificationContext'

function OrderPage () {
  const {handleNotification} = useContext(NotificationContext)
  const {result, setResult} = useContext(OrderContext)
  const deleteMsg = "Your order deleted"
  
  const handleDeleteBook = () => {
    handleNotification(deleteMsg);
    localStorage.removeItem('tour');
    setResult({})
  }
  return (
    <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Order Page
          </h1>

          {result.name ? 
          <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">

          <div className="space-y-2 p-3">
            <div className="flex items-center justify-between py-2 pr-5 !mt-3">
              <h1 className="line-clamp-1 font-bold text-xl pl-5 pr-5 pt-5 text-[#0287a8]">{result.city} Tour</h1>
              <p className='cursor-pointer text-2xl' onClick={handleDeleteBook}><MdDelete /></p>
            </div>
            <h3 className="line-clamp-1 font-bold text-xl pl-5 pr-5 ">{result.name}, </h3>
            <p className="line-clamp-2 font-bold pl-5 pr-5">Phone Number :  {result.phNumber}</p>
            <p className="line-clamp-2 font-bold pl-5 pr-5">Number of Person :  {result.person}</p>
            <p className="line-clamp-2 font-bold pl-5 pr-5">Per-Person Price :  ₹{result.price}</p>
            <div className="flex items-center justify-between border-t-2 py-2 p-5 !mt-3">
              <div className="text-xl font-bold">
                <p>Total Amount</p>
              </div>
              <div>
                <p className="text-2xl font-bold">₹{result.totalRate}</p>
              </div>            
            </div>
            
          </div>
        </div> :
        <p className='p-5 text-xl'>Empty, No Tour Package 😔.</p>
        }
          
        </div>
      </div>
  )
}

export default OrderPage