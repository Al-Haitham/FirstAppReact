function Product({ name, price, onSelect }) {
  function handleSelect() {
    onSelect({
      name: name,
      price: price
    });
  }

  return (
    <div className="product">
      <div>
        <h2>{name}</h2>
        <p>{price} DH</p>
      </div>

      <button onClick={handleSelect}>
        Sélectionner
      </button>
    </div>
  );
}

export default Product;
