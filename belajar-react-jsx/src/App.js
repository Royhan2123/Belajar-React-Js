import "./App.css";

const iniArray = ["Fundamental ", "React ", "Core "];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// cara menampilkan variabel ke dalam html dengan cara menggunakan kurung kurawal {};
// const name = "Hello My name is : ";
// {nama_variabel} --> contoh : <p> {name} Royhan <p/>  

function Header() {
  return (
    <>
      <header>
        <img
          src="/assets/react-core-concepts.png"
          alt="Stylized atom"
          className="cover-image"
        />
        <h1>React Essentials</h1>
        <p>
          {iniArray[getRandomInt(2)]} React concepts you will need for almost any app you
          are going to build!
        </p>
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;
