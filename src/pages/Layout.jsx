import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <OrderPopup />
      <StyledContainer />
    </>
  );
};

export default Layout;

const StyledContainer  = styled(ToastContainer)`
  

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-image: linear-gradient(to right, #0287a8, #00c3c7);
  }
`
