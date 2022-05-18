import './App.css';
import  './assets/css/navbar.css';
import { FaAirbnb } from 'react-icons/fa';
import { Search } from './components/Search';
import { Property } from './components/Property';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logoTitle"><FaAirbnb />windbnb</h1>
        <Search/>
      </nav>
      {/* List of properties*/}
      <section className='properties'>
        <Property img={require("./assets/img/propiedad1.jpg")}/>
        <Property img={require("./assets/img/propiedad1.jpg")}/>
        <Property img={require("./assets/img/propiedad1.jpg")}/>
        <Property img={require("./assets/img/propiedad1.jpg")}/>
        <Property img={require("./assets/img/propiedad1.jpg")}/>
        <Property img={require("./assets/img/propiedad1.jpg")}/>

      </section>
      <footer>
        Created by alexFranciscoDev, &copy; 2022
      </footer>
    </div>
  );
}

export default App;
