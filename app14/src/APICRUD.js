function APICRUD(){
    const APIURL = "http://localhost:3000/students";

    function addNewData(){
        let fname = prompt("Enter first name");
        let lname = prompt("Enter last name");
        let city = prompt("Enter City");
        
        // POST Code for add new Data in JSON via josn-server API

        fetch(APIURL, {
            method : "POST",
            headers : {
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body : JSON.stringify({fname, lname, city})
        }).then((response)=>{
            response.json().then((result)=>{
                alert("New Data Inseted with ID "+result.id);
            });
        });
    }

    // GET method for get all data from JSON API
    function getAllData(){
        fetch(APIURL,{
            method : "GET"
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result);
            });
        });
    }

    // update Data with PUT method with json-server API
    function updateData(){
        const id = prompt("Enter ID for update data");
        let fname = prompt("Enter first name");
        let lname = prompt("Enter last name");
        let city = prompt("Enter City");

        fetch(APIURL+"/"+id,{
            method : "PUT",
            headers : {
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body : JSON.stringify({fname, lname, city})
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Data Updated");
            })
        })
    }

    // Delete Data with delete method of json server API
    function deleteData(){
        const id = prompt("Enter ID to delete data");

        fetch(APIURL+"/"+id, {
            method : "DELETE"
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Data Deleted with ID "+id);
            })
        });
    }

    return <>
        <h1>API CRUD Operation</h1>
        <hr></hr>

        <button onClick={()=>addNewData()}>Add New Data</button>
        <button onClick={()=>getAllData()}>View All Data</button>
        <button onClick={()=>updateData()}>Update Data</button>
        <button onClick={()=>deleteData()}>Delete Data</button>
    </>
}

export default APICRUD;