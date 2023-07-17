import logo from './logo.svg';
import './App.css';
import PropsInFunction from './PropsInFunction';
import { useState } from 'react';
import PropsInClass from './PropsInClass';
import PropsWithMultiData from './PropsWithMultiData';
import Input1 from './Input1';

function App() {
  let [count, setCount] = useState(0);
  let [fname, setFname] = useState("Amee");
  let [lname, setLname] = useState("Popat");
  let [status, setStatus] = useState(true);

  return (
    <div className="App">
        {/* <PropsInFunction data={count}></PropsInFunction> */}
        {/* <PropsInClass data={count}></PropsInClass> */}
        {/* <button onClick={()=>setCount(count + 1)}>Update</button> */}

        {/* <PropsWithMultiData data={{fn:fname, ln:lname}}></PropsWithMultiData> */}

        {/* <Input1></Input1> */}

        {
          status ? <Input1></Input1> : <h1>Nothing to do</h1>
        }
        {/* <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(false)}>Hide</button> */}

        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
