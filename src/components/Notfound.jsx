import { useRouteError } from "react-router";
import { Link } from "react-router";
import "./style.css";

export function NotFound(){
    const errData = useRouteError();
    
    return(
        <>
        <div className="errCont">
            <h1>{errData.status} Oops Error Occured..</h1>
            <p>{errData.error.message}</p>
            <p>You can browse products <Link to={"/"}><b><u>here</u></b></Link></p>
        </div>
        </>
    );
}