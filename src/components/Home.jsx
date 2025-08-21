import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./style.css";

export function Home() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=8");
                const data = await res.json();
                setProducts(data.products);
            } catch (err) {
                console.error("Failed to fetch products", err);
            } finally {
                setLoad(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className="homepage">
            <div className="hero-banner">
                <div className="hero-content">
                    <h1>Best @Shoppy Store</h1>
                    <p>Discover the best deals on top-rated products.</p>
                    <Link to="/products" className="hero-btn">Shop Now</Link>
                </div>
            </div>

            <div className="featured-section">
                <h2>Featured Products</h2>
                {load ?
                    <p style={{ textAlign: 'center' }}>The best products are one the way.....</p> :
                    <div className="product-grid">
                        {products.map((product, ind) => (
                            <div className="product-card" key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p className="price">${product.price}</p>
                                <p className="short-desc">{product.description.slice(0, 50)}...</p>
                                <Link to={`/product/${ind}`} className="view-btn">View Details</Link>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

