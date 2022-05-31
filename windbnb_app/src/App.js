import './App.css';
import './assets/css/navbar.css';
import { FaAirbnb } from 'react-icons/fa';
import { Search } from './components/Search';
import { Property } from './components/Property';
import data from './data.json';
import { useEffect, useState } from 'react';
import { SearchResults } from './components/SearchResults';


function App() {

  useEffect(() => {
    getProperties();
  }, []);

  // Search properties state
  const [searchValue, setSearchValue] = useState("hola");
  // Properties
  const [properties, setProperties] = useState([]);
  // Get properties
  const getProperties = () => {
    setProperties(data.properties)
    return data;
  }

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logoTitle"><FaAirbnb />windbnb</h1>
        <Search setSearchValue={setSearchValue} getProperties={getProperties} properties={properties} setProperties={setProperties} />
      </nav>
      {/* List of properties*/}
      <div className='properties'>
        {properties.map(property => {
          return (<Property
            key={property.id}
            property={property} />)
        })}

      </div>
      <footer>
        Created by alexFranciscoDev, &copy; 2022
      </footer>
    </div>
  );
}

export default App;
