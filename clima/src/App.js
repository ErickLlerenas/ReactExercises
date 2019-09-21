import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import Clima from "./components/Clima"; 

function App() {
  //State principal
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({})
  useEffect(() => {
    //Ejecuta ComponentDidMount & ComponentDidUpdate

    const consultarAPI = async () => {
      const appID = "f6e4fa93248121b4dea479fb60a8b35d";
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

      //consultar URL
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
    };

    if (ciudad === "") return;

    consultarAPI();
  }, [ciudad, pais]);
 
  const datosConsulta = datos => {
    //Validar que ambos campos esten

    if (datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }

    //Ciudad y Pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  //Cargar un componente condicionalmente
  let componente;
  if (error) {
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else if(resultado.cod === "404"){
    componente = <Error mensaje="La ciudad no existe en nuestro registro"/>
  } else {
    componente = <Clima resultado={resultado}/>;
  }

  return (
    <div className="App">
      <Header titulo="Clima API" />

      <div className="contenedor-form ">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
