//componente Tasks que lsita todas las teareas creadas en tasks.json, se ayuda de el comp. TASK
import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    //en cada ciclo de map llamamos al componente TASK que a su vez arma los datos de una sola tarea dentro de un div
    return this.props.tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

export default Tasks;
