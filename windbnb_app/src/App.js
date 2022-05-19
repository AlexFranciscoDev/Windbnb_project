import './App.css';
import  './assets/css/navbar.css';
import { FaAirbnb } from 'react-icons/fa';
import { Search } from './components/Search';
import { Property } from './components/Property';
import data from './data.json';
import { useEffect, useState } from 'react';


function App() {

  useEffect(() => {
    getProperties();
  }, []);

  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    setProperties(data.properties)
    return data;
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logoTitle"><FaAirbnb />windbnb</h1>
        <Search/>
      </nav>
      {/* List of properties*/}
      <div className='properties'>
        {properties.map(property => {
          return (<Property 
            key={property.id}
            property={property}/>)
        })}

      </div>
      <footer>
        Created by alexFranciscoDev, &copy; 2022
      </footer>
    </div>
  );
}

export default App;
