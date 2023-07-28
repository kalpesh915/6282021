import React from "react";
class PureComponentExample1 extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Pure Component Example</h1>
            <h1>Count is {this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count : this.state.count + 1})}>Update</button> */}
            <button onClick={()=>this.setState({count :  10})}>Update</button>
        </>
    }
}

export default PureComponentExample1;