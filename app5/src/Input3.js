import { useState } from "react";

function Input3(){
   let [student, setStudent] = useState({fname : "", lname : ""});

    function handleSubmit(event){
        event.preventDefault();
        setStudent({fname : event.target.fname.value, lname : event.target.lname.value})
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

        <h1>Welcome {student.fname} {student.lname}</h1>
    </>
}

export default Input3;