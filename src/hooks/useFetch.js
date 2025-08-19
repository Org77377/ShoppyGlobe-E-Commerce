import { useState, useEffect } from "react";
import { useMemo } from "react";

export function useFetch(url){
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    const [error, setError] = useState("");

    // getting the data from API

    useEffect(()=>{
    //     const finalData = async ()=>{
    //     try{
    //         const apidata = await fetch(url);
    //         const json = await apidata.json();
    //         setData(json); 
    //     }catch(err){
    //         setError(err);
    //     }
    //     setLoad(false);
    // };
    //     finalData();
    
    (async function() {
        try{
            const fetdata = await fetch(url);
            const res = await fetdata.json();
            setData(res);
        }catch(e){
            setError("ohhh data not found")
        }
        setLoad(false);
    } ());
    },[url])

    return [data, load, error];
}