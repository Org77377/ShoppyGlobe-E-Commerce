import { useParams, useLocation} from "react-router";
import "./style.css"; 
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxStore/features/cartSlice';

export function ProductDetails() {
    const {product} = useParams();
    // const location = useLocation();
    // const state = location.state[0].products;
    // const load = location.state[1];

    const [load, loadStatus] = useState(true);
    const [listData, setData] = useState(null);

// cart value update whenever item is added 
// function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(
        {
        id: listData.products[product].id,
        name: listData.products[product].title,
        price: listData.products[product].price,
        image: listData.products[product].thumbnail,
    }));
  };

// fetching the data from url and displaying it
        useEffect(()=>{
            async function fetchData(){
            try{
                const data = await fetch("https://dummyjson.com/products");
                if (!data.ok) {
                    throw new Error(`HTTP error! status: ${data.status}`);
                }
                const result = await data.json();
                setData(result);
            }catch(err){
                alert("Error occured");
                console.error("error loading the data", err)
            }finally{
                loadStatus(false)
            }
        }
            fetchData();
        },[product]); 

        // console.log(listData);
    return(
        <>
            {load ? <p>Loading....</p>: 
                <div className="product-container">
                    <div className="product-image">
                        <img src={listData.products[product].thumbnail} />
                    </div>
                    <div className="product-details">
                        <h1 className="product-title">{listData.products[product].title}</h1>
                        <p className={`product-stock ${listData.products[product].stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                        {listData.products[product].stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="product-description">{listData.products[product].description}</p>
                        <p className="product-price">${listData.products[product].price}</p>
                        <p className="product-rating">Rating: {listData.products[product].rating} / 5</p>
                        <p className="product-category">Category: {listData.products[product].category}</p>
                        <button className="add-cart" onClick={handleAdd}>Add to cart</button>
                    </div>
                </div>
            }; 
        </>
    );
}