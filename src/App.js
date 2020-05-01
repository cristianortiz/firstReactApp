import React from "react";
import "./App.css";

/*modelo de componentes de React, una aplicacion esta subdivida en componentes reutilzables, podemos escribir
un componente de diversas formas, como funcion explicita, funcion flecha, clase JS */
//funcion explicita
function HelloWorld() {
  return <div id="hello">Soy el componente 'Hello world'</div>;
}

function App() {
  return (
    <div>
      Componente APP llama componente HelloWorld:
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}
export default App;
