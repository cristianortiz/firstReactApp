import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    posts: [],
  };

  //metodo que se asegura que esten cargados los datos antes de renderizar la aplicacion
  async componentDidMount() {
    //obtengo datos desde un servidor externo
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //console.log(res);
    //segun la consola los datos vienen en formato RedeableStream, lo paso a json
    const data = await res.json();

    this.setState({ posts: data }); //actualizo el estado del arreglo posts con los datos externos
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((posts) => {
          //itero el array posts del objeto state para mostrar en pantalla
          return (
            <div key={posts.id}>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
