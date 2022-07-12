import React from 'react'
import '../css/testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img src={require(`../img/testimonio-${props.imagen}.png`)} alt={`foto de ${props.nombre}`} className='imagen-testimonio' />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'> <b>{props.nombre}</b> en <b>{props.pais}</b> </p>
                <p className='cargo-testimonio'>{props.cargo} en <strong> {props.empresa} </strong></p>
                <p className='texto-testimonio'> "{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;
