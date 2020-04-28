"use strict"

import React, {PropTypes} from "react"

const Lista = ({classname, array}) => (
    <div>
        <ul className={classname}>

        { array.map((repo, index) => (
               <li key={index}>
                   <a href={repo.link}> {repo.name} </a>
               </li>
           ) ) }
        </ul>
    </div>
)
Lista.propTypes = {
    classname: PropTypes.string,
    array: PropTypes.array
}
export default Lista