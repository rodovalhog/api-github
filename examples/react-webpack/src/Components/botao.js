"use strict"

import React, {PropTypes} from "react"

const Botao = ({title, getRepos}) => (
    <div className="action">
        <button
        onClick={getRepos}
        >{title}</button>
    </div>
)
Botao.propTypes = {
    title: PropTypes.string
}
export default Botao    