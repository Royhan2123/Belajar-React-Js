import './App.css';

function Header(){
  return <>
    <header>
        <img src="/assets/react-core-concepts.png" alt="Stylized atom" className="cover-image" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  </>
}

function App() {
  return <>
      <div className="App">
          <Header/>
      </div>
  </>
}

export default App;