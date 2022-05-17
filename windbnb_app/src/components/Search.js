import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const Search = () => {
    return (
        <form className="searchForm">
          <input type="text" name="search" className="search" placeholder='Search'/>
          <button type="submit" className='submitSearch'><FaSearch /></button>
        </form>
    )
}
