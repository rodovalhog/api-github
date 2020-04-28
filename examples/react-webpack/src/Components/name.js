"use strict"

import React, {PropTypes} from "react"

const Name = ({link, classname, name, qntRepositorio, qntSeguidores, qntSeguindo}) => (
    <div>
         <h1>
            <a className={classname} href={link}>{name}</a>
        </h1>
        <div className="white ml20"><p>Repositorios: <span>{qntRepositorio}</span> </p>
            <p>seguindo: <span> {qntSeguindo} </span> </p>
            <p>seguidores: <span>{qntSeguidores}</span> </p></div>
        
    </div>
)

Name.propTypes = {
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    qntRepositorio: PropTypes.number.isRequired,
    qntSeguidores: PropTypes.number.isRequired,
    qntSeguindo: PropTypes.number.isRequired
}
export default Name