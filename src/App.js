import React from "react";
import Theme from "./Theme/Theme";
import OrdersHistory from "./ui/components/ordersHistory/ordersHistory";
import Preferences from "./ui/components/orderPreferences/orderPreferences";
import NavMenu from "./ui/components/navMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Cliente from "./Cliente";
import PurchaseConfirmation from "./ui/components/PurchaseConfirmation/PurchaseConfirmation";
import Opinions from './ui/components/opinions/List_opinion';

import Navbar from "./ui/components/client/components/navBar/Navbar";
import DataProvider from "./ui/components/client/components/context/DataContext";
import Home from "./ui/components/client/components/home/Home";
import CartContent from "./ui/components/client/components/cartContent/CartContent";
import ProductDetails from "./ui/components/client/components/productDetails/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import InfoFacSend from "./ui/components/infoFacSend/InfoFacSend";
import SendInitialOrder from "./ui/components/sendInitialOrder/SendInitialOrder";
import OptSend from "./ui/components/optSend/OptSend";
import ConfirmOrder from "./ui/components/confirmOrder/ConfirmOrder";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavMenu />
        <Cliente />
        <DataProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartContent />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
      <OrdersHistory />
      <PurchaseConfirmation />
      <Opinions />
      <Theme>
        <NavMenu />
        <SendInitialOrder />
        <OptSend />
        <InfoFacSend />
        <ConfirmOrder />
        <Cliente />
        <PurchaseConfirmation />
        <Opinions />
      </Theme>
    </ThemeProvider>
  );
}

export default App;