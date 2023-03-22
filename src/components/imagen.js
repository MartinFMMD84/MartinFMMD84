import React from 'react';

const Imagen = (props)=>{ // no tiene acceso a this
   
    const {strDrinkThumb,strDrink,strInstructions} = props.imagen;

   
   
    return(
       <div className="col-12 col-sm-6 col-md-4 col-log-3 mb-4">
            <div className="card">
              <img src={strDrinkThumb} alt={strDrink} className="card-img-top"/>
              <div className="card-body">
                  <p className="card-text">Nombre: {strDrink}</p>
                  <p className="card-text">Receta: {strInstructions}</p>
              </div>
            </div>

       </div>
   )
}

export default Imagen;