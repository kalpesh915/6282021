import React from "react";
class PropsInClass extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <>
            <h1>Props in Class Component</h1>
            <h1>Count is {this.props.data}</h1>
        </>
    }
}

export default PropsInClass;