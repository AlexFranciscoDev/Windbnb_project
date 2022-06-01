import React from 'react';
import { FaAirbnb, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../assets/css/property.css"

export const Property = ({ property }) => {
    return (
        <div className='property'>

            <img src={process.env.PUBLIC_URL + property.img} alt="propiedad1" />
            <div className="details">
                <Link to={`property/${property.id}`} >
                    <h3 className="title">{property.title}</h3>
                </Link>
                <span className="rating"><FaStar style={{ color: "#FF385C" }} /> {property.rating}</span>
            </div>
            <p className="description">{property.description}</p>
            <p className="price">{property.price} €/noche</p>
        </div>
    )
}
