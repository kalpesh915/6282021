function EventExample1(){

    function Greetings(){
        alert("Welcome to world of React JS");
    }

    function Greetings1(username){
        alert("Welcome "+username+" to React JS");
    }

    return<>
        {/* <button onClick={Greetings()}>Click Me</button> */}
        {/* <button onClick={Greetings}>Click Me</button> */}
        {/* <button onClick={()=>Greetings1("Amee Popat")}>Click Me</button> */}
    </>
}

export default EventExample1;