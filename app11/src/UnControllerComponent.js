import { useRef } from "react";

function UnControllerComponent(){
    let fnameRef = useRef();

    function  printData(){
        console.log(fnameRef.current.value);
    }
    return <>
        <h1>Un Controlled Component</h1>
        <input type="text" ref={fnameRef}></input>
        <button onClick={()=>printData()}>Click Me</button>
    </>
}

export default UnControllerComponent;