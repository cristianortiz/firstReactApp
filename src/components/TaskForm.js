/*componente que crea un formulario para ingresar nuevas tareas uso los eventos del form y de sus inputs para controlar
de forma dinamica el estado de cada uno*/
import React, { Component } from "react";

export default class TaskForm extends Component {
  //objeto que guarda el contenido de los inputs del formulario cuando se teclea en ellos
  state = {
    title: "",
    description: "",
  };

  //metodo en notacion flecha para procesar el evento submit del formulario
  onSubmit = (event) => {
    console.log(this.state); //verifico el estado del los input del formulario al presionar 'Enviar'
    event.preventDefault(); //evito que se recargue la pagina al presionar 'Enviar'
    //uso el mtodo addTask() del componente App a traves de props
    this.props.addTask(this.state.title, this.state.description);
  };
  //escucha el evento onChange de cualquier input del formulario
  onChange = (event) => {
    //imprimo en consola la ejecucion del evento onChange
    // console.log(event.target.value);
    /* como ambos inputs usan onChange  cada input se identifica con 'name' asi no interfieren en sus estados */
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          onChange={this.onChange}
          value={this.state.title}
          type="text"
          placeholder="Escribe una Tarea"
        />
        <br />
        <br />
        <textarea
          name="description"
          onChange={this.onChange}
          value={this.state.description}
          placeholder="Describe la tarea a realizar"
        ></textarea>
        <input type="submit" />
      </form>
    );
  }
}
