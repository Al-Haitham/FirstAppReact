const ProdCard = (props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                alignItems: "left",
                width: "auto",
                color: "#333",
                backgroundColor: "#eeeef5",
                borderRadius: "12px",
                padding: "16px 20px",
                margin: "20px auto",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                fontFamily: "'Segoe UI', sans-serif",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}>
                <p style={{ margin: "0 0 8px 0" , fontSize: "32px" , fontWeight: "bold" }}>{props.nom}</p>
                <p style={{ margin: "0 0 8px 0" , fontSize: "24px" , color: "#908bdf" }}>prix : {props.prix}</p>
                <p style={{ margin: "0 0 8px 0" , fontSize: "16px" }}>Categorie : {props.categorie}</p>
                <p style={{ margin: "0" , fontSize: "16px" }}>Disponibilité : {props.disponible?"Disponible":"non disponible"}</p>
            </div>
            
        
    );
};

export default ProdCard;