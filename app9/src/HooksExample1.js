import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function HooksExample1(){
    let [count, setCount] = useState(0);

    // React.useEffect(()=>{
    //     console.log("Use Effect Called");
    // });

    useEffect(()=>{
        console.log("Use Effect Called 1");
    });

    useEffect(()=>{
        console.log("Use Effect Called 2");
    });

    return <>
        <h1>Hooks Example</h1>
        <h1>State is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update count</button>
    </>
}

export default HooksExample1;