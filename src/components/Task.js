//componente para encapsular los datos de una sola tarea
import React, { Component } from "react";

class Task extends Component {
  //metodo para dar estilo de forma dinamica segun eventos JS
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
export default Task;
//estilo css a traves de un objeto JS
const btnDelete = {
  fontSize: "15px",
  background: "#ea2027",
  border: "none",
  padding: "10px",
  borderRadius: "10%",
};
