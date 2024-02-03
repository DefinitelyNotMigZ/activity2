import React from "react";
import './design.css';

function Sort() {
    return (
        <div className="sortdiv">
            <label className="sort1">SORT BY</label>
            <select className="select1">
                <option>Best Selling</option>
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
                <option>Date, new to old</option>
                <option>Date, old to new</option>
            </select>
        </div>
    )
}

export default Sort