import React, { Component } from "react";
import "./App.css";
import tasks_data from "./samples/task.json"; //datos de la tareas en json
import Tasks from "./components/Tasks"; //componente Tasks
import TaskForm from "./components/TaskForm"; //componenete TaskForm
import Posts from "./components/Posts"; //componente Posts que carga datos desde una API externa

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
  }; //fin addTask

  //elimina un tarea, se lo pasare al comp Tasks, y luego a Taks, que es donde esta el btn delete
  deleteTask = (id) => {
    //recorro el arreglo de tareas y creo uno nuevo sin la tarea cuyo id se ha recibido
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks }); //actualizo el objeto state quitando las tareas eliminadas
  };

  //cambia el estado de una tarea segun el check del form, recibe el id de una tarea task
  checkTaskDone = (id) => {
    //nuevo arreglo para actualizar el atributo task.donde
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done; //cambio el valor de task.donde por su contrario true/false
      }
      return task;
    });
    //actualizo el estado del arreglo tasks
    this.setState({ tasks: newTasks });
  };

  render() {
    //llamo al comp. TASKS que listara todas las tareas disponibles, con datos y metodos de App a traves de props
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkTaskDone={this.checkTaskDone}
        />
        <Posts />
      </div>
    );
  }
}
export default App;
