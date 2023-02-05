import React from "react";
import './search-input.css';

const SearchPanel = ({searchValue, setSearchValue}) => {
    return <input
        className="form-control search-input"
        placeholder="Search text"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        />
}

export default SearchPanel