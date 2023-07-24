import React, { useEffect, useState } from "react";

function HooksExample2(){

    // counter state
    let [count, setCount] = useState(1);

    useEffect(()=>{
        console.log("Use Effect Hook Called 1");
        // never update state values from useEffect
        //setCount(Math.ceil(Math.random() * 100));
    }, [count]);
   
    useEffect(()=>{
        console.log("Use Effect Hook Called 2");
    }, []);

    return <>
        <h1>Hooks Example </h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(Math.ceil(Math.random() * 100))}>Update</button>
    </>
}

export default HooksExample2;