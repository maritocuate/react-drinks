import React, {useContext, useState} from 'react';

import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'

const Formulario = () => {

    //Context
    const {categorias} = useContext(CategoriasContext)
    const {setQuery} = useContext(RecetasContext)

    //Hooks
    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    })

    //Events
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setQuery(busqueda)
    }

    return (
        <form className='col-12' onSubmit={handleSubmit}>
            <fieldset className='text-center'>
                <legend>Busca bebidas</legend>
            </fieldset>

            <div className='row'>
                <div className='col-md-4'>
                    <input
                        name='ingrediente'
                        className='form-control'
                        type='text'
                        placeholder='buscar por ingrediente'
                        onChange={handleChange}
                    ></input>
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={handleChange}
                    >
                        <option value=''>--Selecciona--</option>
                        {
                            categorias.map((item, i)=>(
                                <option value={item.strCategory} key={i}>{item.strCategory}</option>
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