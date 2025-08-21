import { useRouteError } from "react-router";
import { Link } from "react-router";
import "./style.css";

export function NotFound() {
    // error data from RouteError hook
    const errData = useRouteError();

    return (
        <>
        {/* showing error message and code */}
            <div className="errCont">
                <h1>{errData.status} Oops Error Occured..</h1>
                <p>{errData.error.message}</p>
                <p>You can browse products <Link to={"/"}><b><u>here</u></b></Link></p>
            </div>
        </>
    );
}