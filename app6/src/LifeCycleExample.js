import React from "react";

class LifeCycleExample extends React.Component{
    constructor(){
        super();
        console.log("Constructor Method Called");

        this.state = {
            counter : 1
        }
    }

    render(){
        console.log("Render Method Called");
        return <>
            <h1>Example of Life Cycle Methods</h1>
            <h1>Counter is {this.state.counter}</h1>
            <button onClick={()=>this.setState({counter: this.state.counter + 1})}>Update Count</button>
        </>
    }

    componentDidMount(){
        console.log("Component Did Mount Called");
    }

    componentDidUpdate(){
        console.log("Component Did Update Called");
        // never update state or props in componentdidupdate()
        // this.setState({counter : this.state.counter + 1});

    }

    shouldComponentUpdate(){
        console.log("Should Component Update Called");
        //return true;

        if(this.state.counter %2 == 0){
            return true;
        }else{
            return false;
        }
    }

    componentWillUnmount(){
        console.log("Component will Unmount");
    }
}

export default LifeCycleExample;