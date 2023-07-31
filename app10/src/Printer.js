function Printer(props){
    return <>
        <div className="bg-primary text-white p-5 text-center my-2">
            <h1 className="display-1">{props.data.fname} {props.data.lname}</h1>
            <p className="h3">Welcome to {props.data.college} of {props.data.city} your Roll No. is {props.data.roll} your selected Course is {props.data.course}</p>
            <p></p>
        </div>
    </>
}

export default Printer;