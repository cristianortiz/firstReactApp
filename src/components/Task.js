//componente para encapsular los datos de una sola tarea
import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  //metodo para dar estilo de forma dinamica al componente
  styleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "blue" : "black", //cambio el color segun si task.done = true/false
    };
  }

  render() {
    //extraigo desde props los datos de una tarea
    const { task } = this.props;
    return (
      <div style={this.styleCompleted()}>
        {task.title} - {task.description} - {task.done} - {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>x</button>
      </div>
    );
  }
}
/*chequea el tipo de datos de los props que usa el componente, 
evita errores de tipo de datos en los props que se pasan entre componentes */
Task.propTypes = {
  //comp task, sus props deben ser objetos
  task: PropTypes.object.isRequired,
};
//estilo css a traves de un objeto JS
const btnDelete = {
  fontSize: "15px",
  background: "#ea2027",
  border: "none",
  padding: "10px",
  borderRadius: "10%",
};
export default Task;
