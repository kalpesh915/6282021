import { useEffect, useState } from "react";

function HooksExample3(){
    let [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("use Effect 1 Called");
    }, [count]);

    useEffect(()=>{
        console.log("use Effect 2 Called");
    }, []);

 
    return <>
        <h1>Hooks Example 3</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
}

export default HooksExample3;