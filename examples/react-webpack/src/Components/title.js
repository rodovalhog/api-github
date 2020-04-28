"use strict "
import React, {PropTypes} from "react"

const Title = ({title}) => (
    <div>
         <h2>
            {title}
        </h2>
    </div>
)
Title.propTypes = {
    title: PropTypes.string.isRequired
}
export default Title