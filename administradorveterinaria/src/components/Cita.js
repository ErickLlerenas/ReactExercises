import React from 'react';
import PropTypes from 'prop-types';

const Cita = (props) =>(
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-10">{props.cita.mascota}</h3>
            <p className="card-text"><span>Nombre dueño: </span>{props.cita.propietario}</p>
            <p className="card-text"><span>Fecha: </span>{props.cita.fecha}</p>
            <p className="card-text"><span>Hora: </span>{props.cita.hora}</p>
            <p className="card-text"><span>Sintomas: </span>{props.cita.sintomas}</p>
            <button className="btn btn-danger" onClick={()=> props.eliminarCita(props.cita.id)}>Borrar &times;</button>
        </div>
    </div>
)
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;