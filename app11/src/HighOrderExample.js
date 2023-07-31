import { useState } from "react";

function HighOrderExample(){
    return <>
        <RedComponent data={Printer}></RedComponent>
        <GreenComponent data={Printer}></GreenComponent>
        <BlueComponent data={Printer}></BlueComponent>
    </>
}


function Printer(){
    let [count, setCount] = useState(0);
    return <>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update Count</button>
    </>
}

function RedComponent(props){
    return <>
        <div style={{backgroundColor:"Red", padding:"20px"}}>
            <props.data></props.data>
        </div>
    </>
}

function GreenComponent(props){
    return <>
        <div style={{backgroundColor:"green", padding:"20px"}}>
            <props.data></props.data>
        </div>
    </>
}

function BlueComponent(props){
    return <>
        <div style={{backgroundColor:"blue", padding:"20px"}}>
            <props.data></props.data>
        </div>
    </>
}

export default HighOrderExample;