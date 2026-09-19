import { useState } from "react";
import Product from "./Product";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Ordinateur",
      price: 8000
    },
    {
      name: "Téléphone",
      price: 4000
    },
    {
      name: "Casque",
      price: 500
    },
    {
      name: "Clavier",
      price: 300
    }
  ];

  function selectProduct(product) {
    setSelectedProduct(product);
  }

  return (
    <main className="app">
      <h1>Liste des produits</h1>

      <div className="products">
        {products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            onSelect={selectProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="selected">
          <h2>Produit sélectionné :</h2>
          <p>{selectedProduct.name}</p>

          <h2>Prix :</h2>
          <p>{selectedProduct.price} DH</p>
        </div>
      )}
    </main>
  );
}

export default App;