import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Contador from "./components/Contador"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {


  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="propiedad" />
      <Contador/>
    </div>
  );
}