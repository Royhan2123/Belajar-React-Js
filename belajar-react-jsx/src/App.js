import "./App.css";
import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPST } from "./data";

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
                title={CORE_CONCEPST[0].title}
                description={CORE_CONCEPST[0].description}
                img={CORE_CONCEPST[0].image}
              />
              <CoreConcept
                 title={CORE_CONCEPST[1].title}
                 description={CORE_CONCEPST[1].description}
                 img={CORE_CONCEPST[1].image}
              />
              <CoreConcept
                 title={CORE_CONCEPST[2].title}
                 description={CORE_CONCEPST[2].description}
                 img={CORE_CONCEPST[2].image}
              />
              <CoreConcept
                title={CORE_CONCEPST[3].title}
                description={CORE_CONCEPST[3].description}
                img={CORE_CONCEPST[3].image}
              />
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

// Disini peran props digunakan sebagai parameter tanpa ada nya tipe data
// yang dimana disini dia harus membutuhkan anak sebagai inang nya
// contoh nya seperti : --> 
/**
 * cosnt User = (props) => {
 * <img src= {props.img} /> <-- untuk nama nya bebas ya sesuai dengan yang di inginkan
 * <p>{props.title}<p/>
 * }
 * 
 * atau bisa langsung seperti ini : 
 * cosnt User = ({img, title}) => {
 * <img src= {img} /> 
 * <p>{title}<p/>
 * }
 */
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
