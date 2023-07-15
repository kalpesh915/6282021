function VariableExample1(){
    let count = 1;

    function updateCount(){
        count++;
        console.log(count);
    }
    
    return <>
        <h1>Variable Example</h1>
        <h1>Value of Count is {count}</h1>
        <button onClick={updateCount}>Update Count</button>
    </>
}

export default VariableExample1;