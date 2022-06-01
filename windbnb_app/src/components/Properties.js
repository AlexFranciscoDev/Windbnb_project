import React from 'react';
import data from '../data.json';
import { useEffect, useState } from 'react';
import { Property } from './Property';

export const Properties = ({properties, setProperties}) => {
    useEffect(() => {
        getProperties();
    }, []);

    // Search properties state
    const [searchValue, setSearchValue] = useState("hola");
    // Get properties
    const getProperties = () => {
        setProperties(data.properties)
        return data;
    }
    return (
        <>
            {/* List of properties*/}
            <div className='properties'>
                {properties.map(property => {
                    return (<Property
                        key={property.id}
                        property={property} />)
                })}

            </div>
        </>
    )
}
