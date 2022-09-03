import React from "react";
import "./index.css";
import Navbar from "./components/Nav/Navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound404 from "./components/NotFound404/NotFound404";
import Category from "./components/Category/Category"
import CartWidget from "./components/Cart/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  return (
    <BrowserRouter>

      <Navbar />


      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Category/:categoryId" element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/*" element={<NotFound404 />} />
        <Route path="/Cart" element={<CartWidget />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;

