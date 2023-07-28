import { useEffect, useState } from "react";

function HooksExample2(){

    useEffect(()=>{
        console.log("use Effect Called");
        // never update state or props in useEffect
        //setCount(count + 1);
    });

    let [count, setCount] = useState(0);
    return <>
        <h1>Hooks Example 2</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
}

export default HooksExample2;