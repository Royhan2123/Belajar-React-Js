import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

Header();

// cara memanggil function lain harus menggunakan tag HTML 
// contohnya seperti kita memanggil function HEADER();
// <Header/> <-- seperti itu kira kira memanggil function lain di dalam function.
function App() {
  return (
    <div className="App">
      <Header /> 
    </div>
  );
}

export default App;
