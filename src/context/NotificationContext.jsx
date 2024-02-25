import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = createContext()

export const NotificationContextProvider = ({children}) => {
    const handleNotification = (msg) => {
        toast.success(msg || "Successfull", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    return <NotificationContext.Provider value={{
        handleNotification,
    }}>
        {children}
    </NotificationContext.Provider>
}
