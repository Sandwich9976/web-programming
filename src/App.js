import logo from './logo.svg';
import './App.css';
import {ClassComp} from './ClassComp/ClassComp';
import {Func} from './Func/Func';
import {TestFunc} from './TestFunc/TestFunc'
import {TestFunc_2} from './TestFunc_2/TestFunc_2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make an Edit <code>src/App.js</code> and become happier.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactor here
        </a>
      </header>
      <ClassComp></ClassComp>
      <Func></Func>
      <TestFunc/>
      <TestFunc_2/>
    </div>
  );
}

export default App;
