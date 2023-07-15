import React from "react";

class StateInClass extends React.Component{
    constructor(){
        super();
        /* declare state here as following 
            this.state = {
                stateName : default value,
                stateName : default value
            }
        */
        this.state = {
            count : 0
        }
    }

    render(){
        return <>
            <h1>State in Class Component</h1>
            <h1>Count is {this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count : this.state.count + 1})}>Update Count</button> */}
            <button onClick={()=>this.setState({count : Math.ceil(Math.random() * 1000)})}>Update Count</button>
        </>
    }
}

export default StateInClass;