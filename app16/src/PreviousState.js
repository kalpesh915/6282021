import { useState } from "react";

function PreviousState(){
    let [count, setCount] = useState(0);
    return <>
        <h1>Example of Previous State</h1>
        <h1>Value of Count is {count}</h1>
        {/* <button onClick={()=>setCount(Math.ceil(Math.random() * 100))}>Update Count</button> */}
        <button onClick={()=>setCount((previous)=>{
            console.log("Previous Value is "+previous);
            return Math.ceil(Math.random() * 100);
        })}>
            Update Count
        </button>
    </>
}

export default PreviousState;