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
                <p className="title" style={{textAlign:"center", fontSize:"1.4rem"}}>{item.title}</p>
                <div className="product-txt">
                    <p className="price" style={{fontSize:'1.2rem', color:"black"}}>$ {item.price}</p>
                    <p className="rating" style={{color:"gray"}}>{item.rating}</p>
                </div>
                <p style={{textAlign:'left', color:"black"}}>View Details..</p>
            </div>
            </Link>
        )}
        </div>
        </>
    );
}