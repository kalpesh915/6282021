import { useRef } from "react";

function ReferenceExample1(){
    let fnameRef = useRef();

    function updateFname(){
        //alert(fnameRef.current.value);
        fnameRef.current.value = "IANT Rajkot";
        fnameRef.current.style = "color:white; background-color:brown; padding:10px;";
    }

    return <>
        <h1>Reference Example 1</h1>
        <input type="text" ref={fnameRef}></input>
        <hr></hr>
        <button className="btn btn-primary" onClick={()=>updateFname()}>Update</button>
    </>
}

export default ReferenceExample1;