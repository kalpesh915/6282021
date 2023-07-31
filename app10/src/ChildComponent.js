import { forwardRef } from "react";
function ChildComponent(props, ref){
    return <>
        <input type="text" className="form-control" ref={ref}></input>
    </>
}

export default forwardRef(ChildComponent);