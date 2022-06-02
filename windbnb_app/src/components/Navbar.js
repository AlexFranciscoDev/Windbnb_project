import React from 'react'
import { FaAirbnb } from 'react-icons/fa';
import { Search } from './Search';
import { useEffect, useState } from 'react';
import data from '../data.json';

export const Navbar = () => {
    // Search properties state
    useEffect(() => {
        getProperties();
    }, []);
    
    const [searchValue, setSearchValue] = useState("hola");
  
  // Properties
  const [properties, setProperties] = useState([]);
  
  // Get properties
  const getProperties = () => {
    setProperties(data.properties)
    return data;
  }
  return (
    <nav className="navbar">
        <h1 className="logoTitle">
          <FaAirbnb />windbnb
        </h1>
        <Search setSearchValue={setSearchValue} getProperties={getProperties} properties={properties} setProperties={setProperties} />
      </nav>
  )
}
