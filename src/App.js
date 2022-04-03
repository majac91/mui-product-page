import React, {useState} from 'react';
import './App.css';

import data from './data/data.json';
import CartCtx from "./context/CartContext";
import AddButtonCtx from "./context/AddButtonContext";

import Header from "./components/Header/Header";
import ProductMain from "./components/ProductMain/ProductMain";

function App() {
  const [cartItems, setCartItems] = useState(data.cart.items);
  const [isButtonVisible, setIsButtonVisible] = useState();
  console.log(isButtonVisible);

  return (
    <CartCtx.Provider value={[cartItems, setCartItems]}>
      <AddButtonCtx.Provider value={[isButtonVisible, setIsButtonVisible]}>
        <Header/>
        <ProductMain/>
      </AddButtonCtx.Provider>
    </CartCtx.Provider>
  );
}

export default App;
