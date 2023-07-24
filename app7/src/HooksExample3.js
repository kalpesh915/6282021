import React, { useEffect, useState } from "react";

function HooksExample3(){

    // counter state
    let [count1, setCount1] = useState(1);
    let [count2, setCount2] = useState(1);

    useEffect(()=>{
        console.log("Use Effect Hook Called 1");
    }, [count1]);
   
    useEffect(()=>{
        console.log("Use Effect Hook Called 2");
    }, [count2]);

    return <>
        <h1>Hooks Example </h1>
        <h1>Count 1 is {count1}, Count 2 is {count2}</h1>
        <button onClick={()=>setCount1(Math.ceil(Math.random() * 100))}>Update count 1</button>
        <button onClick={()=>setCount2(Math.ceil(Math.random() * 100))}>Update count 2</button>
    </>
}

export default HooksExample3;