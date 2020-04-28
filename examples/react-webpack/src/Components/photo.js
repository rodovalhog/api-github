"use strict"

import React, {PropTypes} from "react"

const Photo = ({link, classname}) => (
    <div>
        <img className={classname} src={link} />
    </div>
)
Photo.propTypes = {
    link: PropTypes.string.isRequired,
    className: PropTypes.string
}
export default Photo