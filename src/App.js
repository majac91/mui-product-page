import React, {useState} from 'react';
import './App.css';

import data from './data/data.json';
import CartCtx from "./context/CartContext";
import AddButtonCtx from "./context/AddButtonContext";

import Header from "./components/Header/Header";
import ProductMain from "./components/ProductMain/ProductMain";
import ProductDescription from "./components/ProductDescription/ProductDescription";

function App() {
  const [cartItems, setCartItems] = useState(data.cart.items);
  const [inputValue, setInputValue] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <CartCtx.Provider value={[cartItems, setCartItems, inputValue, setInputValue]}>
      <AddButtonCtx.Provider value={[isButtonVisible, setIsButtonVisible, isClicked, setIsClicked]}>
        <Header/>
        <ProductMain/>
        <ProductDescription/>
      </AddButtonCtx.Provider>
    </CartCtx.Provider>
  );
}

export default App;
