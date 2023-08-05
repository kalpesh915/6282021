import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function PreviousProps(){
    let [count, setCount] = useState(0);
    return <>
        <ChildComponent data={count}></ChildComponent>
        <button onClick={()=>setCount(Math.ceil(Math.random() * 100))}>Update Count</button>
    </>
}

function ChildComponent(props){
    const lastValue = useRef();

    useEffect(()=>{
        lastValue.current = props.data;
    });
    const PreviousProps1 = lastValue.current;
    console.log(PreviousProps1);
    return <>
        <h1>Child Component</h1>
        <h1>Count is {props.data}</h1>
    </>
}   

export default PreviousProps;