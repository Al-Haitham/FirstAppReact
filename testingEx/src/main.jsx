import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produits from './Produits.jsx'
import ProdCard from './ProdCard.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produits/>
  </StrictMode>,
)
