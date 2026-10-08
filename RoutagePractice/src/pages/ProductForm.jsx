import {useNAvigate, useParams} from "react-router-dom";
import {useState} from "react";

const FormProduct=({products, dispatch})=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const isEdit=id!==null? true:false;
    const productToEdit=products.find(
        (product)=>product.id===Number(id)
    );
    const [formData,setFormData]=useState({
        name: productToEdit.name?productToEdit.name:"",
        price: productToEdit?.price ||"",
        category: productToEdit?.category ||"",
        stock: productToEdit?.stock ||"",
    });
    const [errors,setErrors]=useState({})
    const handleChange=(e)=>{
        const {name, value}=e.target;

        setFormData({...formData,[name]:value});
    };

    const validate=()=>{
        const newErrors={};
        if (!formData.name.trim()){
            newErrors.name="nom est obligatoire"
        }

        if (!formData.price){
            newErrors.price="prix est obligatoire"
        }

        if (!formData.category.trim()){
            newErrors.category="categorie est obligatoire"
        }

        if (!formData.stock || Number(formData.stock)<0){
            newErrors.stock="stock est obligatoire"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (validate()===false){
            return;
        }
        const product={
            name: formData.trim(),
            price: Number(formData.price),
            category: formData.category(),
            stock:Number(formData.stock()),
        };
         if (isEdit===true){
            let newVP={...product,id:Number(id)};
            dispatch({type:"UPDATE_PRODUCT",payload:newVP});
         }

         navigate("/products");
    };
    return(
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>
                        {isEdit?"Modifier":"Ajouter"}
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="form-label">Nom du produit</label>
                            <input type="text" name="name" value={formData.name} onChange={handeChange} className="form-control"/>
                            {errors.name?(
                                <div className="text-danger">{errors.name}</div>
                            ):""}
                        </div>
                        <div>
                            <label className="form-label">Prix</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}