import React, { useState } from 'react';
import './Menu.css'

const Menu = ({ onSearch }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };


  return (
    <div className='menu-section'>
      
      <div className="primis-logo">

        <div className="primis-logo-image">
          <img src="./primis_logo.png" alt="" />
        </div>

        <div className="primis-logo-name">PRIMIS</div>

      </div>

      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search order..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>


    </div>
  )
}

export default Menu
