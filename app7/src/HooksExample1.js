import React, { useEffect, useState } from "react";

function HooksExample1(){

    // counter state
    let [count, setCount] = useState(1);

    // tradiotnal style
    /*React.useEffect(()=>{
        console.log("Use Effect Hook Called");
    }); */

    useEffect(()=>{
        console.log("Use Effect Hook Called");
    });

    return <>
        <h1>Hooks Example </h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(Math.ceil(Math.random() * 100))}>Update</button>
    </>
}

export default HooksExample1;