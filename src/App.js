import React from "react";
import "./index.css";
import NavBar from "./components/Nav/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NotFound404 from "./components/NotFound404/NotFound404";
import CartWidget from "./components/Cart/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  return (
    <BrowserRouter>

      <NavBar />


      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/error" element={<NotFound404 />} />
        <Route path="/cart" element={<CartWidget />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;

