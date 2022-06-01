import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import data from '../data.json'
import '../assets/css/singleProperty.css'

export const SingleProperty = () => {
  const parameters = useParams();
  // Find the object by id
  const propertiesData = data.properties;
  let propertyFound = propertiesData.find(property => property.id === parseInt(parameters.id));
  
  return (
    <div className='container'>
      
      <img className="imgProperty" src={process.env.PUBLIC_URL + propertyFound.img} alt="propiedad1" />
      <h1 className="imgTitle">{propertyFound.title}</h1>
      <div className='details'>
      <p className="rating"><FaStar style={{ color: "#FF385C" }} /> {propertyFound.rating}</p>
      <p><b>{propertyFound.price} €</b>/per night</p>
      </div>
      <br />
      <p>{propertyFound.description}</p>
      <Link to="/">All properties</Link>
    </div>
    // TODO: BUSCAR DESDE FORM Y REDIRECCIONAR A INICIO CON PARAMETRO DE ID PROPERTY
  )
}
