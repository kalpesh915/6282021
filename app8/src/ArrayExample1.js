function ArrayExample1(){
    const students = [
        {roll : 121, fname : "Kaishvi", lname : "Purohit", city : "Rajkot"},
        {roll : 122, fname : "Thakar", lname : "Bhavik", city : "Rajkot"},
        {roll : 123, fname : "Thakar", lname : "Vishal", city : "Rajkot"},
        {roll : 124, fname : "Pranjal", lname : "Chandaravadiya", city : "Rajkot"},
        {roll : 125, fname : "Amee", lname : "Popat", city : "Rajkot"}
    ];
    return <>
        <h1>Array Example in React JS</h1>

        {
            // JS code
            students.map((student)=>
            <tr>
                <td>{student.roll}</td>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.city}</td>
            </tr>)
        }
    </>
}
export default ArrayExample1;