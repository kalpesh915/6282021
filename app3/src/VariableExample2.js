import { useState } from "react";

function VariableExample2(){
    // declare state named count
    // let [stateName, stateUpdateFunction] = useState(default value);
    let [count, setCount] = useState(0);
    return <>
        <h1>Example of State in React JS</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update</button>
    </>
}

export  default VariableExample2;