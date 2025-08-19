import { useFetch } from "../hooks/useFetch";
import { data, Link } from "react-router";
import { ProductItem } from "./ProductItem";
import "./style.css";

function ProductList(){
    const [data, load, error] = useFetch('https://dummyjson.com/products');
    return (
        <>
           <ProductItem data={{data, load, error}}/>
        </>
    );
}

export default ProductList;