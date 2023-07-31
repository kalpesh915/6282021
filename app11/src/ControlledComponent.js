import { useState } from "react";

function ControlledComponent(){
    
    let [fname, setFname] = useState("Amee Popat");
    return <>
        <h1>Controlled Component</h1>
        <input type="text" value={fname} onChange={(event)=> setFname(event.target.value)}></input>
        <h1>Welcome {fname}</h1>
    </>
}

export default ControlledComponent;