import { useEffect } from 'react';
import './cdn.css';
import { useState } from "react";

function APICRUD(){

    // API URL
    const APIURL = "http://localhost:3000/students";

    let [studentData, setStudentData] = useState([]);

    let [uid, setUid] = useState();
    let [fname, setFname] = useState();
    let [lname, setLname] = useState();
    let [city, setCity] = useState();
    let [email, setEmail] = useState();
    let [phone, setPhone] = useState();
    let [status, setStatus] = useState(true);


    // function for handling form submit event
    function handleSubmit(event){
        //alert("Called");
        event.preventDefault();

        if(status){
            // code for add new Data
            fetch(APIURL, {
                method : "POST",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, city, email, phone})
            }).then((response)=>{
                response.json().then((result)=>{
                    alert("New Data Inserted with "+result.id+" id");
                    resetForm();
                    getAllData();
                })
            });
        }else{
            // code for update existing data
            fetch(APIURL+"/"+uid,{
                method : "PUT",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                },
                body : JSON.stringify({fname, lname, city, email, phone})
            }).then((response)=>{
                response.json().then((result)=>{
                    alert("Data Updated with "+uid);
                    resetForm();
                    getAllData();
                })
            })
        }
    }
    
    // function for reset form
    function resetForm(){
        setUid(0);
        setFname("");
        setLname("");
        setCity("");
        setEmail("");
        setPhone("");
        setStatus(true);
    }
    
    // function for load all data
    function getAllData(){
        fetch(APIURL).then((response)=>{
            response.json().then((result)=>{
                setStudentData(result);
                //console.log(studentData);
            })
        });
    }

    // call getAllData() when page load first time
    useEffect(()=>{
        getAllData();
    }, []);

    // function for delete data
    function deleteData(id){
        //alert(id);
        if(window.confirm("Are you sure to delete this Data with "+id+" ID??")){
            fetch(APIURL+"/"+id,{
                method : "DELETE",
                headers : {
                    "content-type" : "application/json",
                    "accept" : "application/json"
                }
            }).then((response)=>{
                response.json().then((result)=>{
                    //alert("Data Deleted with ID "+id);
                    getAllData();
                });
            })
        }
    }

    // get record for edit data
    function getDataforEdit(id){
        fetch(APIURL+"/"+id).then((response)=>{
            response.json().then((result)=>{
                setUid(id);
                setFname(result.fname);
                setLname(result.lname);
                setCity(result.city);
                setEmail(result.email);
                setPhone(result.phone);

                setStatus(false);
            })
        });
    }

   
    return <>
        <div className="container-fluid">
            <h1 className="text-center text-white bg-primary p-4">API CRUD with JSON Server</h1>

            <div className="row">
                <div className="col-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="my-2 form-floating">
                            <input type="text" name="fname" id="fname" required className="form-control" placeholder="Enter First Name" value={fname} onChange={(event)=>setFname(event.target.value)}></input>
                            <label className="form-lable" htmlFor="fname">Enter First Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="text" name="lname" id="lname" required className="form-control" placeholder="Enter Last Name" value={lname} onChange={(event)=>setLname(event.target.value)}></input>
                            <label className="form-lable" htmlFor="lname">Enter Last Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="text" name="city" id="city" required className="form-control" placeholder="Enter City Name" value={city} onChange={(event)=>setCity(event.target.value)}></input>
                            <label className="form-lable" htmlFor="city">Enter City Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="email" name="email" id="email" required className="form-control" placeholder="Enter Email Address" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                            <label className="form-lable" htmlFor="email">Enter Email Address</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="text" name="phone" id="phone" required className="form-control" placeholder="Enter Phone Number" value={phone} onChange={(event)=>setPhone(event.target.value)}pattern="\d{10,13}"></input>
                            <label className="form-lable" htmlFor="phone">Enter Phone Number</label>
                        </div>

                        <div className="my-2 form-floating">
                            {
                                status ? <>
                                    <input type="submit" value="Add New Data" className="btn btn-primary"></input>
                                    <input type="reset" value="Reset" className="btn btn-danger mx-2"></input>
                                </> : <>
                                    <input type="submit" value="Save Data" className="btn btn-primary"></input>
                                    <input type="button" value="Cancel" className="btn btn-danger mx-2" onClick={resetForm}></input>
                                </>
                            }
                        </div>
                    </form>
                </div>

                <div className="col-md-9">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    studentData.map((student, id)=> <tr key={id}>
                                        <td>{student.fname}</td>
                                        <td>{student.lname}</td>
                                        <td>{student.city}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>
                                            <button className='btn btn-primary mx-2' onClick={()=>getDataforEdit(student.id)}><i className='fa fa-pen'></i></button>
                                            <button className='btn btn-danger' onClick={()=>deleteData(student.id)}><i className='fa fa-trash'></i></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default APICRUD;