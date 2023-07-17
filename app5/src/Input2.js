import { useState } from "react";

function Input2(){
    let [fname, setFname] = useState();
    let [lname, setLname] = useState();

    function handleSubmit(event){
        event.preventDefault();
        //alert("Called");
        setFname(event.target.fname.value);
        setLname(event.target.lname.value);
    }

    return <>
        <h1>Form Handling Example</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">Enter First Name</label>
                <input type="text" name="fname" id="fname" required ></input>
            </div>

            <div>
                <label htmlFor="lname">Enter Last Name</label>
                <input type="text" name="lname" id="lname" required ></input>
            </div>

            <input type="submit" value="Send Data"></input>
        </form>

        <h1>Welcome {fname} {lname}</h1>
    </>
}

export default Input2;