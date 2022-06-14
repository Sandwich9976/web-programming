import { Route, Routes, Link } from 'react-router-dom';
import { MainPart } from './MainPart/MainPart';
import React from 'react';



function App() {
  return (
    <div>
      <header>
        <Link to={'/'}>Home </Link>
        <Link to={'about'}>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<MainPart />} />
        <Route path='about' element={<label>Testing text about our company</label>} />
      </Routes>
    </div>
  );
}
 
export default App;