import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrderContextProvider } from "./context/OrderContext.jsx";
import { NotificationContextProvider } from "./context/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationContextProvider>
      <OrderContextProvider>
        <App />
      </OrderContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>
);
