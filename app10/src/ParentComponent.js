import { useRef } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(){

    let fnameRef = useRef();

    function updateData(){
        fnameRef.current.value = "IANT Rajkot";
        fnameRef.current.style = "color:white; background-color:brown; padding: 20px;";
    }

    
    return <>
        <h1>Forward Ref Example</h1>
        <ChildComponent ref={fnameRef}></ChildComponent>
        <button className="btn btn-primary" onClick={()=>updateData()}>Update Data</button>
    </>
}

export default ParentComponent;