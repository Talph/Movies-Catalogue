import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="search">
        <input
            className="search-input form-control"
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
)