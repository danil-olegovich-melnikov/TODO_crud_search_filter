import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({filterValue, setFilterValue}) => {
    return (
        <div className="btn-group">
            <button className={"btn " + (filterValue === '' ? 'btn-info' : 'btn-outline-secondary')}
                    onClick={() => setFilterValue('')}>
                All list
            </button>
            <button className={"btn " + (filterValue === false ? 'btn-info' : 'btn-outline-secondary')}
                    onClick={() => setFilterValue(false)}>
                Active list
            </button>
            <button className={"btn " + (filterValue === true ? 'btn-info' : 'btn-outline-secondary')}
                    onClick={() => setFilterValue(true)}>
                Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;

