import { useMemo, useState } from "react";

function PureComponentExample2(){

    let [count, setCount] = useState(0);

    useMemo(()=>{
        console.log("Use Memo Called");
    }, [count]);

    return <>
        <h1>Use Memo Hook is used to create Pure Component in Functional Component</h1>
        <h1>Count is {count}</h1>
        {/* <button onClick={()=>setCount(count + 1)}>Update </button> */}
        <button onClick={()=>setCount(10)}>Update </button> 
    </>
}

export default PureComponentExample2;