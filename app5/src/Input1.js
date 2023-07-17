import { useState } from "react";

function Input1(){
    let [fname, setFname] = useState();
    let [lname, setLname] = useState();

    return <>
        <h1>Form Handling Example</h1>
        <form>
            <div>
                <label htmlFor="fname">Enter First Name</label>
                <input type="text" name="fname" id="fname" required onKeyUp={(event)=>setFname(event.target.value)}></input>
            </div>

            <div>
                <label htmlFor="lname">Enter Last Name</label>
                <input type="text" name="lname" id="lname" required onKeyUp={(event)=>setLname(event.target.value)}></input>
            </div>
        </form>

        <h1>Welcome {fname} {lname}</h1>
    </>
}

export default Input1;