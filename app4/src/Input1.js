import { useState } from "react";

function Input1(){
    let [username, setUsername] = useState();
    return <>
        <h1>Input Example</h1>
        <input type="text" onChange={(event)=> setUsername(event.target.value)}></input>
        <h1>Welcome {username}</h1>
    </>
}

export default Input1;