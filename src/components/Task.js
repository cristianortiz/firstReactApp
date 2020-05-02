//componente para encapsular los datos de una sola tarea
import React, { Component } from "react";

class Task extends Component {
  render() {
    //extraigo desde props los datos de una tarea
    const { task } = this.props;
    return (
      <div>
        {task.title} - {task.description} -{task.done} - {task.id}
        <input type="checkbox" />
        <button>x</button>
      </div>
    );
  }
}
export default Task;
