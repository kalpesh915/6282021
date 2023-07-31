import { useState } from "react";

function Temprature(props){
    let [celcuis, setCelcius] = useState(0);
    return <>
        <h1>Calculate Tempratur</h1>
        <input type="number" value={celcuis} onChange={(event)=>setCelcius(event.target.value)}></input>
        <hr></hr>
        <button className="btn btn-primary" onClick={()=>props.convertor(celcuis)}>Calculate</button>
    </>
}
export default Temprature;