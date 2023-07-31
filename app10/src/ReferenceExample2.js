import React, { createRef } from "react";
class ReferenceExample2 extends React.Component{
    constructor(){
        super();
        this.fnameRef = createRef();
    }

    updateFname(){
        this.fnameRef.current.value = "IANT Rajkot";
        this.fnameRef.current.style = "color:white; background-color:brown; padding:10px;";
    }

    render(){
        return <>
            <h1>Example of Reference in Class Component</h1>
            <input type="text" ref={this.fnameRef}></input>
            <hr></hr>
            <button className="btn btn-primary" onClick={()=>this.updateFname()}>Update</button>
        </>
    }
}

export default ReferenceExample2;