import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import "./style.css";

function Header(){
    return(
        <> 
            <div className="navbar-container">
                <div className="nav-logo">
                    <p><b>Shoppy Store</b></p>
                </div>
                <div className="nav-items">
                    <ul>
                        <Link to={"/home"}>
                            <li>Home</li>
                        </Link>
                        <Link to={"/products"}>
                            <li>Shop</li>
                        </Link>
                        <Link to={"/about"}>
                            <li>About</li>
                        </Link>
                    </ul>
                </div>

                <div className="cart">
                    <FaShoppingCart/>
                </div>
            </div>
        </>
    );
}

export default Header;