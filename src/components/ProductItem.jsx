import { useEffect, useState } from "react";
import { Link } from "react-router";

export function ProductItem(data){
    const newData = data.data.data.products;
    const newLoad = data.data.load;
    const newError = data.data.error;
    const [search, setSearch] = useState("");
    
    return(
        <>
            {/* <p>{newObj.products.map((item)=>item.title)}</p> */}
            <div className="head-bar">
                <h1>Browse our products</h1>
                <input type="text" placeholder="search products" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className="product-cont">
           {newLoad ? <p style={{textAlign: 'center'}}>Data is loading.....</p>:
            newData.filter((item)=>{
                return search === "" ? item : item.title.toLowerCase().includes(search.toLowerCase())
            }).map((item,ind)=>
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