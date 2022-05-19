import React from 'react';
import { FaAirbnb, FaStar } from 'react-icons/fa';
import "../assets/css/property.css"

export const Property = ({property}) => {
    return (
        <div className='property'>
            <img  src={process.env.PUBLIC_URL + property.img} alt="propiedad1" />
            <div className="details">
                <h3 className="title">{property.title}</h3>
                <span className="rating"><FaStar style={{color: "#FF385C"}}/> {property.rating}</span>
            </div>
            <p className="description">{property.description}</p>
            <p className="price">{property.price} €/noche</p>
        </div>
    )
}
