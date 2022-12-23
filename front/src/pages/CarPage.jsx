import { useState, useEffect } from "react";

const CarPage=()=>{
    const [carsList,setCarsList]= useState([]);

    

    useEffect(()=>{
        const getCars=async()=>{
            const data=await fetch('http://localhost:3030/cars/all');
            const json =await data.json()
            setCarsList(json)
        }
        getCars()
    },[])
    

    return(
        <div>
               <pre><code>
                {JSON.stringify(carsList,undefined,3)}
                </code></pre>
        </div>
    )
}

export default CarPage;