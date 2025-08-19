import { useParams, useLocation} from "react-router";
import "./style.css"; 

export function ProductDetail(){
    const {product} = useParams();
    const location = useLocation();
    const state = location.state[0].products;
    const load = location.state[1];
    return(
        <>

            {load ? <p>Loading....</p>: 
                <div className="product-container">
                    <div className="product-image">
                        <img src={state[product].thumbnail} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h1 className="product-title">{state[product].title}</h1>
                        <p className={`product-stock ${state[product].stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                        {state[product].stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="product-description">{state[product].description}</p>
                        <p className="product-price">${state[product].price}</p>
                        <p className="product-rating">Rating: {state[product].rating} / 5</p>
                        <p className="product-category">Category: {state[product].category}</p>
                        <button className="add-cart">Add to cart</button>
                    </div>
                </div>
            };
            
        </>
    );
}