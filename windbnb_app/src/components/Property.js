import React from 'react';
import { FaAirbnb, FaStar } from 'react-icons/fa';
import "../assets/css/property.css"

export const Property = ({img}) => {
    return (
        <div className='property'>
            <img  src={img} alt="propiedad1" />
            <div className="details">
                <span className='typeHouse'>Entire house</span>
                <span className="rating"><FaStar style={{color: "#FF385C"}}/> 4.64</span>
            </div>
            <p className="description">House in a remote area</p>
        </div>
    )
}
