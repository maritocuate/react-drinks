import React, {useContext} from 'react';

import {CategoriasContext} from '../context/CategoriasContext'

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext)

    return (
        <form className='col-12'>
            <fieldset className='text-center'>
                <legend>Busca bebidas</legend>
            </fieldset>

            <div className='row'>
                <div className='col-md-4'>
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='buscar por ingrediente'
                    ></input>
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                    >
                        <option value=''>--Selecciona--</option>
                        {
                            categorias.map((item, i)=>(
                                <option value='' key={i}>{item.strCategory}</option>
                            ))
                        }
                    </select>
                </div>

                <div className='col-md-4'>
                    <input
                        className='btn btn-primary btn-block'
                        type='submit'
                        value='Buscar'
                    ></input>
                </div>
            </div>

        </form>
    );
}
 
export default Formulario;