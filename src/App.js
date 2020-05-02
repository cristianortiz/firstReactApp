import React from "react";
import "./App.css";

/*modelo de componentes de React, una aplicacion esta subdivida en componentes reutilzables, podemos escribir
un componente de diversas formas, como funcion explicita, funcion flecha, clase JS */
//funcion explicita
/* function HelloWorld(props) {
  //props, un objeto con datos, para personalizar el renderizado de un mismo componente
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      Soy el componente 'Hello world' {props.mytext}
    </div>
  );
} */
//componente en forma de clase, cambia la forma de usar los props, con this, por el ambito de la clase
class HelloWorld extends React.Component {
  //manejo estados del componente con este objeto state
  state = {
    show: true,
  };
  //metodo para cambiar el estado de show a traves del evento onClick,notacion flecha evita escribir el bind en Onclick
  togleShow = () => {
    //cambia alternadamente a true/false el valor de show al presionar los botones
    this.setState({ show: !this.state.show });
  };
  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          Soy el componente 'Hello world' {this.props.mytext}
          <button onClick={this.togleShow}>Toggle state.show a false</button>
        </div>
      );
    } else {
      return (
        <h3>
          'state.show:false' =>No hay elementos que mostrar
          <button onClick={this.togleShow}>Toggle state.show a true</button>
        </h3>
      );
    }
  }
}

function App() {
  return (
    <div>
      <h2> Componente APP llama a 3 componentes "HelloWorld": </h2>
      <HelloWorld
        mytext=" 1 y tengo el prop 'mytext'"
        subtitle="soy el prop 'subtitle' y estoy dentro de un h3"
      />
      <HelloWorld
        mytext=" 2 con otro valor para el prop 'mytext'"
        subtitle="soy el prop 'subtitle' del 2do comp. 'Helloworld'"
      />
      <HelloWorld
        mytext=" 3 ultimo valor para prop 'mytext'"
        subtitle="soy el prop 'subtitle' del 3er comp. 'Helloworld'"
      />
    </div>
  );
}
export default App;
