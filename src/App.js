import React, { Component } from "react";
import "./App.css";
import tasks_data from "./samples/task.json"; //datos de la tareas en json
import Tasks from "./components/Tasks"; //componente Tasks

class App extends Component {
  state = {
    tasks: tasks_data,
  };
  //con met. map recorro el array de tareas importado  insertando cada propiedad en un tag html
  render() {
    return (
      <div>
        {this.state.tasks.map((e) => (
          <p key={e.id}>
            {e.title}- {e.description} - {e.done}
            <Tasks></Tasks>
          </p>
        ))}
      </div>
    );
  }
}
export default App;
