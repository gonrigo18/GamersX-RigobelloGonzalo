import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  return (

    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

