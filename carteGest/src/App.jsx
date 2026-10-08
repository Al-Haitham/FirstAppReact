import { useState,useReducer, useEffect} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductList from "./Components/ProdcutList";
import Cart from "./Components/Cart";
import Navbar from "./Pages/Navbar";
import {initialState, CartReducer} from "./CartReducer";

const [state, dispatch] = useReducer(CartReducer, initialState);

useEffect(()=>{
  fetch("http://localhost:3000/produits").then((res)=>res.json())
                                         .then((data)=>{
                                            dispatch({type:"SET_PRODUCTS",payload:data})
                                         })
},[])

const App=()=>{
  const [state,dispatch]=useReducer(CartReducer,initialState);
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList displatch={dispatch} produits={produits}/>}/>
        <Route path="/products" element={<ProductList dispatch={dispatch} produits={produits}/>}/>
        <Route path="/cart" element={<Cart dispatch={dispatch} productCart={statecart}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App