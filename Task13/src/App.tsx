import "./App.css"
import { Route, Link, Routes } from 'react-router-dom';
import { MainPart } from './MainPart/MainPart';
import { AboutPart } from './AboutPart/AboutPart';

function App() {
  return (
    <div>
      <header>
        <Link to={'/'}>Home </Link>
        <Link to={'about'}>About</Link>
      </header>
      <Routes>
        <Route path='/' element={<MainPart />} />
        <Route path='about' element={<AboutPart />}/>
        </Routes>
    </div>
  );
}
<div> Test text</div>

export default App;
