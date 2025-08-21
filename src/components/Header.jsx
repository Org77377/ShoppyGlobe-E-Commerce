import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useSelector } from 'react-redux';
import { useState } from "react";
import "./style.css";


function Header() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="navbar-container">
                <div className="nav-logo">
                    <p><b>Shoppy Store</b></p>
                </div>

                <div className="hamburger" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-items ${isOpen ? "open" : ""}`}>
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
                <Link to={"/cart"}>
                    <div className="cart">
                        <FaShoppingCart />
                        <span>{totalItems}</span>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Header;