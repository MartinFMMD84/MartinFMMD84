import React, { Component } from 'react';
import Imagen from './imagen';
 
class Trago extends Component {
    mostrarImagenes = () =>{
        const imagenes = this.props.imagenes;
        console.log('imagenes',imagenes);
        if (imagenes.length === 0 ) return  null;
        return(
         <React.Fragment>
            <div className="col-12 p-5 roe">
                {imagenes.map(imagen=>(
                    <Imagen 
                     key={imagen.idDrink}
                     imagen={imagen} />
                ))}
            </div>  
          </React.Fragment>
        )
    }
    render() { 
        return (
           <React.Fragment>
               {this.mostrarImagenes()}
           </React.Fragment>
        );
    }
}
 
export default Trago;