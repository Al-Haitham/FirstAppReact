import { useState,useReducer, useEffect} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductList from "./Componenets/ProductList";
import Cart from "./Componenets/Cart";
import Navbar from "./Pages/Navbar";
import {initialState, CartReducer} from "./CartReducer";
import axios from 'axios'

const App=()=>{
  const [produits, setProduits]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/produits").then((Response)=>setProduits(Response.data))
  },[])
  const [state,dispatch]=useReducer(CartReducer,initialState);
  return(
    <BrowserRouter>
      <Navbar productsCart={state.cart} />
      <Routes>
        <Route path="/" element={<ProductList dispatch={dispatch} produits={produits}/>}/>
        <Route path="/products" element={<ProductList dispatch={dispatch} produits={produits}/>}/>
        <Route path="/cart" element={<Cart dispatch={dispatch} productCart={state.cart}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App