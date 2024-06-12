import "./App.css";
import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxUiImg from "./assets/jsx-ui.png";
import stateMgmtImg from "./assets/state-mgmt.png";

const iniArray = ["Fundamental ", "React ", "Core "];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// cara menampilkan variabel ke dalam html dengan cara menggunakan kurung kurawal {};
// const name = "Hello My name is : ";
// {nama_variabel} --> contoh : <p> {name} Royhan <p/>

function Header() {
  const description = iniArray[getRandomInt(2)];
  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" className="cover-image" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
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
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <br/>
            <ul>
              <CoreConcept
                title="Components"
                description="The core UI building block."
                img={componentImg}
              />
              <CoreConcept
                title="Config"
                description="Config Image "
                img={configImg}
              />
              <CoreConcept
                title="Jsx Ui"
                description="Jsx UI Image"
                img={jsxUiImg}
              />
              <CoreConcept
                title="State "
                description="Image State"
                img={stateMgmtImg}
              />
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

const CoreConcept = (props) => {
  return (
    <>
      <li>
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
        <p> {props.description} </p>
      </li>
    </>
  );
};

export default App;
