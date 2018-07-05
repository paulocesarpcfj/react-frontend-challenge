import React from 'react';

const SearchBar = props => (
    <input
        className="search"
        name="search"
        onChange={event => props.filterResults(event.target.value)}
        placeholder="Type to search..."
    />
)

export default SearchBar;