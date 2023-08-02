import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Printer from './Printer';

function App() {
  const studentData = [
    {roll : 123, fname: "Keshvi", lname : "Purohit", city : "Rajkot"},
    {roll : 124, fname: "Pranjal", lname : "Chandravadiya", city : "Rajkot"},
    {roll : 125, fname: "Amee", lname : "Popat", city : "Rajkot"},
    {roll : 126, fname: "Bhavik", lname : "Thakar", city : "Rajkot"},
    {roll : 127, fname: "Vishal", lname : "Thakar", city : "Rajkot"}
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <ul className='navbar-nav'>
            {
              studentData.map((student)=>
                <li className='nav-item'><Link className='nav-link' to={"/printer/"+student.fname+"/"+student.lname}>{student.fname}</Link></li>
              )
            }
          </ul>
        </nav>

        <Routes>
          <Route path='/printer/:fname/:lname' element={<Printer></Printer>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
