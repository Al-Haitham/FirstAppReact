import { FaBoxOpen } from "react-icons/fa";

const Cart=({productsCart,dispatch})=>{
    return(
        <div className="container">
            <h2>Gérer mon Panier</h2>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-danger" onClick={()=>dispatch({type:"CLEAR"})}>Vider panier</button>
            </div>

            {
                productsCart.length===0?<p><FaBoxOpen />Votre panier est vide</p>
                :(
                    <>
                        <table className="table table-tripped w-75 mx-auto">
                            <thead>
                                <tr className="text-center bg-dark text-white">
                                    <th>Nom</th>
                                    <th>Prix</th>
                                    <th>Quantité</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productsCart.map((p,pos)=>(
                                        <tr key={pos} className="text-center">
                                            <td>{p.nom}</td>
                                            <td>${p.prix.toFixed(2)}</td>
                                            <td><button className="btn btn-success btn-sm me-2" onClick={()=>dispatch({type:"INCREMENT_QTE",payload:p})}>+</button>
                                            {"  "}{p.qte}{"  "}
                                            <button className="btn btn-warning btn-sm me-2" onClick={()=>dispatch({type:"DECREMENT_QTE",payload:p})}>-</button>
                                            </td>
                                            <td>${(p.prix*p.qte).toFixed(2)}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:p})}>Supprimer</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="w-75 mx-auto d-flex justify-content-end">
                            {productsCart.reduce((acc,item)=>acc+item.prix*item.qte,0)} DH
                        </div>


                    </>
                )
            }
        </div>
    )
}

export default Cart;