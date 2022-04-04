import React, {useState} from 'react';
import './App.css';

import data from './data/data.json';
import CartCtx from "./context/CartContext";
import AddButtonCtx from "./context/AddButtonContext";

import Header from "./components/Header/Header";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductAbout from "./components/ProductAbout/ProductAbout";

function App() {
  const [cartItems, setCartItems] = useState(data.cart.items);
  const [inputValue, setInputValue] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <CartCtx.Provider value={[cartItems, setCartItems, inputValue, setInputValue]}>
      <AddButtonCtx.Provider value={[isButtonVisible, setIsButtonVisible]}>
        <Header/>
        <ProductMain/>
        <ProductAbout/>
      </AddButtonCtx.Provider>
    </CartCtx.Provider>
  );
}

export default App;
