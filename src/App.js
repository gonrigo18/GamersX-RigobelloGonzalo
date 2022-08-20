import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import CartWidget from "./components/Cart/CartWidget.js"

export default function App() {


  return (
    <div>
      <Navbar/>
      <CartWidget/>
    </div>
  );
}