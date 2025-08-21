import { useFetch } from "../hooks/useFetch";
// import { data, Link } from "react-router";
import { ProductItem } from "./ProductItem";
import "./style.css";

function ProductList() {
    // fetch data from url and pass it as prop to child component
    const [data, load, error] = useFetch('https://dummyjson.com/products');
    return (
        <>
            <ProductItem data={{ data, load, error }} />
        </>
    );
}

export default ProductList;