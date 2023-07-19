import logo from './logo.svg';
import './App.css';
import LifeCycleExample from './LifeCycleExample';
import { useState } from 'react';

function App() {
  let [status, setStatus] = useState(true);
  return (
    <div className="App">
        {
          status ?
          <LifeCycleExample></LifeCycleExample> :
          <h1>Nothing to DO</h1>

        }
        <hr></hr>
        <button onClick={()=>setStatus(!status)}>Toggle Component</button>
    </div>
  );
}

export default App;
