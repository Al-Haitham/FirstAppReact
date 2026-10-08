import ProductCard from "./ProductCard";

const ProductList=({produits,dispatch})=>{
    return (
        <div className="container">
            <div className="row">
                {
                    produits.map((p,pos)=><ProductCard key={pos} produits={p} dispatch={dispatch}/>)
                }
            </div>
        </div>
    )
}

export default ProductList;