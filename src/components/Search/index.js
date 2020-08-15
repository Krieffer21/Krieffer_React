import React from "react";
import "./style.css";

function Search (props) {
    return (
        <form className="col-12">
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an employee"
            id="search"
          />
        </div>
      </form>  
    );
}

export default Search;
