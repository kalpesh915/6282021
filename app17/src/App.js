import Home from './Home';
import About from './About';
import Contact from './Contact';
import { CommonCode } from './Common';
import { useState } from 'react';

function App() {
  let [themeColor,setThemeColor] = useState({bg :"red", fg : "white"});
  return (
    <CommonCode.Provider value={themeColor}>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <button onClick={()=>setThemeColor({bg:"Brown", fg:"White"})}>Theme 1</button>
      <button onClick={()=>setThemeColor({bg:"red", fg:"White"})}>Theme 2</button>
      <button onClick={()=>setThemeColor({bg:"Black", fg:"White"})}>Theme 3</button>
    </CommonCode.Provider>
    
  );
}

export default App;
