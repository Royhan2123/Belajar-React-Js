import "./App.css";
import { CORE_CONCEPST } from "./data";
import CoreConcept from "./components/Core_Concepts";
import Header from "./components/Header";


/**
 * Disini kita akan menggabungkan semua data dan langsung memanggil nya seperti di bawah ini saja
 * yang dimana sebelumnya --> :
 
  <CoreConcept image={CORE_CONCEPST[0].image} title={CORE_CONCEPST[0].title} 
  description={CORE_CONCEPST[0].description}/>

  menjadi : 
  CoreConcept {...CORE_CONCEPST[0]} />   <--- disini kita menggunakan operator spreat


  yang dimana function CoreConcept nya seperti ini : 
  const CoreConcept = ({image,title,description}) => {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p> {description} </p>
      </li>
    </>
  );
};


 * sebelumnya kita membuatnya dengan props, tetapi disini kita langsung memasukkan var nya seperti
 * contoh di atas 
 */
function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <br />
            <ul>
              
              <CoreConcept {...CORE_CONCEPST[0]} />
              <CoreConcept {...CORE_CONCEPST[1]} />
              <CoreConcept {...CORE_CONCEPST[2]} />
              <CoreConcept {...CORE_CONCEPST[3]} />
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


export default App;
