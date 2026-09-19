import ProdCard from "./ProdCard";

const Produits=() => {
    const listProduits=[{nom:"Produit 1", prix:10, description:"Description du produit 1", categorie:"Catégorie 1"},
                        {nom:"Produit 2", prix:20, description:"Description du produit 2", categorie:"Catégorie 2"},
                        {nom:"Produit 3", prix:30, description:"Description du produit 3", categorie:"Catégorie 3"},
                        {nom:"Produit 4", prix:40, description:"Description du produit 4", categorie:"Catégorie 4"},
                        {nom:"Produit 5", prix:50, description:"Description du produit 5", categorie:"Catégorie 5"}];
                        return(<>
                            
                            {
                            listProduits.map((prod,pos)=>(
                                <ProdCard nom={prod.nom} prix={prod.prix} description={prod.description} categorie={prod.categorie}/>
                            ))}
                            </>
                        )
}

export default Produits;