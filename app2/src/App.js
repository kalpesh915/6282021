import logo from './logo.svg';
import './App.css';
import ClassExample1 from './ClassExample1';
import ClassExample2 from './ClassExample2';
import { Amee, Pranjal, Keshvi, Vishal, Vivek, Bhavik, Jekisa } from './Students';
import NestedComponent from './NestedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassExample1></ClassExample1> */}
        {/* <ClassExample1 /> */}
        {/* <ClassExample2></ClassExample2> */}
        {/* <Amee></Amee> */}
        {/* <Vishal></Vishal> */}
        {/* <Pranjal></Pranjal> */}
        {/* <Jekisa></Jekisa> */}
        <NestedComponent></NestedComponent>
      </header>
    </div>
  );
}

export default App;
