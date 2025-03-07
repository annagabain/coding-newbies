import logo from './logo.svg';
import './App.css';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="App-new-logo" alt="logo" />

        <h1>REGISTER</h1>
        <p>
          Contact me for registration and questions about the course at anna.gabain@outlook.com
        </p>
        {/* <Register/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
