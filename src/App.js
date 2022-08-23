import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Contador from "./components/Contador"


export default function App() {


  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Contador/>
    </div>
  );
}