import React, { useContext } from 'react';

import {ModalContext} from '../context/ModalContext'

const Receta = ({receta}) => {

    const {setId} = useContext(ModalContext)

    return (
        <div className='col-md-4 mb-2'>
            <div className='card'>
                <h2 className='card-header'>{receta.strDrink}</h2>
                <img className='card-img-top' src={receta.strDrinkThumb} alt={receta.strDrink}/>

                <div className='card-body'>
                    <button className='btn btn-primary btn-block' onClick={()=>{setId(receta.idDrink)}}>Ver Receta</button>
                </div>
            </div>
        </div>
    );
}
 
export default Receta;