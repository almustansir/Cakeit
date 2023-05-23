import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import CatagoryPage from "./pages/CatagoryPage";
import ContactsPage from "./pages/ContactsPage";
import FavoritePage from "./pages/FavoritePage";
import OrdersPage from "./pages/OrdersPage";
import UserProfilePage from "./pages/UserProfilePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/catagory" element={<CatagoryPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/usr/:username" element={<UserProfilePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
