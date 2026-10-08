import {useReducer} from "react";
import {BrowserRoute,Route,Routes} from "react-router-dom";
import ProductList from "./Pages/ProductList";
import ProductForm from "./Pages/ProductForm";

const products = [
    {
    id: 1,
    name: "Laptop HP",
    price: 7500,
    category: "Informatique",
    stock: 10,
    },
    {
    id: 2,
    name: "iPhone 15",
    price: 9500,
    category: "Téléphone",
    stock: 5,
    },
    {
    id: 3,
    name: "Casque Sony",
    price: 1200,
    category: "Audio",
    stock: 15,
    },
]