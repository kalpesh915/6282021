import logo from './logo.svg';
import './App.css';
import Printer from './Printer';
import FragmentExample1 from './FragmentExample1';
import Temprature from './Temprature';
import ReferenceExample1 from './ReferenceExample1';
import ReferenceExample2 from './ReferenceExample2';
import ParentComponent from './ParentComponent';

function App() {
  const students = [
    {roll : 111, fname : "Amee", lname : "Popat", city :"Rajkot", college : "Atmiya Unversity", course : "Diploma in Com. Eng."},
    {roll : 112, fname : "Pranjal", lname : "Chandravadiya", city :"Rajkot", college : "Atmiya Unversity", course : "Diploma in Com. Eng."},
    {roll : 113, fname : "Vishal", lname : "Thakar", city :"Rajkot", college : "Atmiya Unversity", course : "Diploma in Com. Eng."},
    {roll : 114, fname : "Bhavik", lname : "Thakar", city :"Rajkot", college : "Marwadi University", course : "BE in Com. Eng."},
    {roll : 115, fname : "Keshvi", lname : "Purohit", city :"Rajkot", college : "AVPTI", course : "Diploma in Com. Eng."},
    {roll : 116, fname : "Viraj", lname : "Bhatti", city :"Rajkot", college : "RK Unversity", course : "BE in Com. Eng."},
  ];

  function toCelcius(fahrenheit){
    alert("Temprature in Celcuis is "+ (fahrenheit - 32) * 5/ 9);
  }

  return (
    <div className="App">
      {/* {
        students.map((student)=>
         <Printer data={student}></Printer>)
      } */}

      {/* <FragmentExample1></FragmentExample1> */}

      {/* <Temprature convertor={toCelcius}></Temprature> */}

      {/* <ReferenceExample1></ReferenceExample1> */}
      {/* <ReferenceExample2></ReferenceExample2> */}
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
