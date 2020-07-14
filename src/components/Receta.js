import React from 'react';

const Receta = ({receta}) => {
    return (
        <div className='col-md-4 mb-2'>
            <div className='card'>
                <h2 className='card-header'>{receta.strDrink}</h2>
                <img className='card-img-top' src={receta.strDrinkThumb} alt={receta.strDrink}/>

                <div className='card-body'>
                    <button className='btn btn-primary btn-block'>Ver Receta</button>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;