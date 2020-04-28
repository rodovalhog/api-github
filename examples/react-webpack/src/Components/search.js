"use strict"
import React, {PropTypes} from "react"



const Search = ({classname, type, placeHolder, handleSearch}) => (
    <div>
        <input 
        className={classname}
            type={type} 
            placeholder={placeHolder}
            onKeyUp={handleSearch}
      
            />
        
    </div>
)
Search.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeHolder: PropTypes.string
}
export default Search