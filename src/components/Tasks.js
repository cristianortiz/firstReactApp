//componente Tasks que lsita todas las teareas creadas en tasks.json, se ayuda de el comp. TASK
import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    /* en cada ciclo de map llamamos al componente TASK que a su vez arma los datos de una sola tarea dentro de un div
    rebibe datos y metodos de otros componentes atraves de props */
    return this.props.tasks.map((task) => (
      <Task
        task={task}
        key={task.id}
        deleteTask={this.props.deleteTask}
        checkTaskDone={this.props.checkTaskDone}
      />
    ));
  }
}

export default Tasks;
