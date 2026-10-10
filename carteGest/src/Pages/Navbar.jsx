import {Link} from "react-router-dom";

const Navbar=({productsCart})=>{
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                My Shop
                </Link>
                <div className="navbar-nav d-flex flex-row gap-4 align-items-center">
                    <Link to="/products">
                    Produits
                    </Link>
                    <Link to="/cart" className="nav-link me-3 position-relative">
                    Cart
                    <span className="badge bg-danger position-absolute top-0">{productsCart.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;