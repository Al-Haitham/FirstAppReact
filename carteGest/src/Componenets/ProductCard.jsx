const ProductCard=({produit,dispatch})=>{
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={produit.image} className="card-img-top" alt={produit.nom} />
                <div className="card-body">
                    <h5 className="card-title">{produit.nom}</h5>
                    <p className="card-text">{produit.description}</p>
                    <p className="card-price">${produit.prix.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}