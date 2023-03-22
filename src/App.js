import logo from './logo.svg';
import './App.css';
import './divmensaje.js';
import React, { Component } from "react"
import Buscador from './components/buscador'
import Trago from './components/trago'

{/* 
function App() {
  return (
    <div className="App">
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React xxx GITHUB desde XII 21.03.2023
        </a>
        <div className="active">Holaaaa!</div>
        <div id="like_button_container">xxx1</div>
      </header>
    </div>
  );

}*/}

class App extends Component{

 state = {
   termino:'',
   imagenes : []
 }

 consultarApi=()=>{
  
   const termino = this.state.termino; 

   console.log('llamo ' + termino);
   const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${termino}`;
 
   fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.drinks}
      ))
  };


 datosBusqueda = (termino) =>{
  this.setState({
    termino
  }, ()=>{
    this.consultarApi();
  })
 }

  render(){
    return(
          <div className="app container">
            <div className="jumbotron" >
                <p  className="lead text-center">Buscador de Tragos</p>
                <Buscador  datosBusqueda={this.datosBusqueda}></Buscador>
            </div> 
            <Trago imagenes={this.state.imagenes}> </Trago>
          </div> 
    );
  }

}


export default App;
