import logo from './logo.svg';
import './App.css';
import Input1 from './Input1';
import Input2 from './Input2';
import Input3 from './Input3';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
        {/* <Input1></Input1> */}
        {/* <Input2></Input2> */}
        {/* <Input3></Input3> */}
        <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
