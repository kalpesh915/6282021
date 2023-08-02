import Home from './Home';
import About from './About';
import Products from './Products';
import Feedback from './Feedback';
import Contact from './Contact';
import Error404 from './Error404';
import { BrowserRouter, Link, Route, Routes, redirect} from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [status, setStatus] = useState(true);

  function changeStatus(){
    setStatus(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
      {
        status ? <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <ul className='navbar-nav'>         
          <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/products">Products</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/feedback">Feedback</Link></li>
          <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
        </ul>
      </nav>

      :
        <Error404></Error404>
      }
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={changeStatus}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
