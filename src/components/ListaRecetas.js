import React, {useContext, Fragment} from 'react';
import Receta from './Receta'

import {RecetasContext} from '../context/RecetasContext'

const ListaRecetas = () => {

    const { recipes } = useContext(RecetasContext)

    return (
        <Fragment>
        {
            recipes.map(item => (
                <Receta key={item.idDrink} receta={item}/>
            ))
        }
        </Fragment>
    );
}
 
export default ListaRecetas;