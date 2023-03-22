import React, { Component } from 'react'; {/*command imrc*/}
{/* command cc */}
class Buscador extends Component{   
   
   busquedaRef = React.createRef();

   obtenerDatos = (e) => {
       e.preventDefault();
       //console.log(this.busquedaRef.current.value);
       //tomamos el valor del input
       const termino = this.busquedaRef.current.value;
       // lo enviamos al componente principal app.js
       this.props.datosBusqueda(termino)
   }
   
    render() { 
        return ( <form onSubmit={this.obtenerDatos}>
                  <div className="row" >
                      <div className="form-group col-md-8" >
                          <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca Trago" />
                      </div>
                      <div className="form-group col-md-4" >
                          <input type="submit" className="brn btn-lg btn-danger btn-block" value="Buscar" />
                      </div>
                  </div>
                </form>
        )
    }
}

 
export default Buscador;