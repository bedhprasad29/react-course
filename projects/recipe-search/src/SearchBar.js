import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('')
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleSearchClick = () => {
        onSearch(input)
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} placeholder="Search for recipes" />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;