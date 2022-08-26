import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemList from "./components/ItemlList/ItemList";
import ItemCount from "./components/ItemCount/ItemCount.js"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  return (

    <div>
      <Navbar/>
      <ItemListContainer/>
      <ItemList/>
    </div>
  );
}

export default App;

