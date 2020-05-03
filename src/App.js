import React, { Component } from "react";
import "./App.css";
import tasks_data from "./samples/task.json"; //datos de la tareas en json
import Tasks from "./components/Tasks"; //componente Tasks
import TaskForm from "./components/TaskForm"; //componenete TaskForm

class App extends Component {
  state = {
    tasks: tasks_data, //le paso los datos de las tareas desde task.json
  };

  //metodo para crear una nueva tarea, se puede usar a traves de propos en cualquier componente
  addTask = (title, description) => {
    //console.log("agregando un nueva tarea...");
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      //al arreglo de estados 'tasks' le agrego una nueva tarea
      tasks: [...this.state.tasks, newTask],
    });
  };
  render() {
    //llamo al comp. TASKS que listara todas las tareas disponibles, le paso los datos de tasks
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
