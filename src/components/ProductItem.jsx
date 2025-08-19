import { Link } from "react-router";

export function ProductItem(data){
    const newData = data.data.data;
    const newLoad = data.data.load;
    const newError = data.data.error;

    return(
        <>
            {/* <p>{newObj.products.map((item)=>item.title)}</p> */}
            <h1>Product Item page...</h1>
            <div className="product-cont">
           {newLoad ? <p>loading.....</p>: 
           newData.products.map((item,ind)=>
            <Link key={item.id} to={`/product/${ind}`} state={[newData, newLoad]}>
            <div key={item.id} className="prduct-card">
                <img src={item.thumbnail} alt="" />
                <p className="title">{item.title}</p>
                <p className="price">{item.price}</p>
            </div>
            </Link>
        )}
        </div>
        </>
    );
}