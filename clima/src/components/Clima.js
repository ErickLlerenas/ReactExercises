import React from 'react';

function Clima({resultado}){
    //Extrar valores
    const {name, main} = resultado;

    if(!name)return null;

    //Restar grados Kelvin
    const Kelvin = 273.15;
return(
    <div className="card-panel white col s12">
        <div className="black-text">
            <h2>El clima de {name} es:</h2>
            <p className="temperatura">
            {parseInt(main.temp - Kelvin,10)} &#x2103;
            </p>
            <p>Temperatura máxima: {parseInt(main.temp_max - Kelvin,10)} &#x2103;</p>
            <p>Temperatura mínima: {parseInt(main.temp_min - Kelvin,10)} &#x2103;</p>
        </div>
    </div>
)
}
export default Clima;