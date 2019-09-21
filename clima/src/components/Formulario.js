import React, {useState} from 'react';

function Formulario({datosConsulta}){

    //State del componente
    //Busqueda = state
    //guardarBusqueda = this.setState({})
    const [busqueda,guardarBusqueda] = useState({
        ciudad: '',
        pais:''
    })
    const hamdleChange = (e) =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
            
        })
    }

    const consultarClima = (e) =>{
        e.preventDefault();

        //pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda)
    }
    
    return(
        <form onSubmit={consultarClima} autocomplete="off">
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" onChange={hamdleChange}/>
                <label htmlFor="ciudad" autocomplete="off">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={hamdleChange} name="pais">
                     <option value="">Selecciona un país</option>
                     <option value="US">Estados Unidos</option>
                     <option value="MX">México</option>
                     <option value="AR">Argentina</option>
                     <option value="CO">Colombia</option>
                     <option value="CR">Costa Rica</option>
                     <option value="ES">España</option>
                     <option value="PE">Perú</option>
                </select>

            </div>
            <div className="input-field col s12">
                <button type="submit" className="waves-effect waves-light btn btn-large  black-text yellow accent-4">Buscar Clima</button>
            </div>
        </form>
    );
}

export default Formulario;