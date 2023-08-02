import { useParams } from "react-router-dom";

function Printer(){
    const {fname} = useParams("fname");
    const {lname} = useParams("lname");
    return <>
        <h1>Welcome {fname} {lname}</h1>
    </>
}

export default Printer;