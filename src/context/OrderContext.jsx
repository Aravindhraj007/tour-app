import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export const OrderContextProvider = ({children}) => {
    const [orderPopup, setOrderPopup] = useState(false)
    const [city, setCity] = useState('' )
    const [price, setPrice] = useState(0)
    const [person, setPerson] = useState(1)
    const [name, setName] = useState('')
    const [phNumber, setPhNumber] = useState('')
    const [totalRate, setTotalRate] = useState(0)
    const [result, setResult] = useState({})
    
    useEffect(() => {
        setResult(JSON.parse(localStorage.getItem('tour')) || {})
    }, [])

    const clickBookTour = (location, price) => {
        setCity(location)
        setPrice(price)
        setTotalRate(price)
        handleOrderPopup()
        console.log(location, price)
    }
    
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    return <OrderContext.Provider value={{
        orderPopup,
        setOrderPopup,
        handleOrderPopup,
        clickBookTour,
        setPerson,
        setTotalRate,
        setName,
        setPhNumber,
        setResult,
        result,
        name,
        phNumber,
        city,
        price,
        person,
        totalRate,
    }}>
        {children}
    </OrderContext.Provider>
}