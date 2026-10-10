import ProductCard from "./ProductCard";

const ProductList=({produits=[],dispatch})=>{
    return (
        
            <div className="d-flex flex-wrap row">
                {
                    produits.map((p,pos)=>(
                        <div className="mb-2">
                        <ProductCard key={pos} produits={p} dispatch={dispatch}/>
                        </div>)
                    )
                }
            </div>
        
    )
}

export default ProductList;