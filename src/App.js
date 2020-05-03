import React, { Component } from "react";
import "./App.css";
import tasks_data from "./samples/task.json"; //datos de la tareas en json
import Tasks from "./components/Tasks"; //componente Tasks
import TaskForm from "./components/TaskForm"; //componenete TaskForm

class App extends Component {
  state = {
    tasks: tasks_data, //le paso los datos de las tareas desde task.json
  };
  render() {
    //llamo al comp. TASKS que listara todas las tareas disponibles, le paso los datos de tasks
    return (
      <div>
        <TaskForm />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
