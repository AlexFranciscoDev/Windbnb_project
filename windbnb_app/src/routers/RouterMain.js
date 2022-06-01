import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Properties } from '../components/Properties';
import { SingleProperty } from '../components/SingleProperty';

export const RouterMain = ({properties, setProperties}) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Properties properties={properties} setProperties={setProperties}/>}></Route>
                <Route path="/property/:id" element={<SingleProperty />}></Route>
                <Route path="*" element={<h2>404, Not found</h2>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
