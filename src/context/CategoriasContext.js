import React, { useState, createContext, useEffect } from 'react';

//crea context
export const CategoriasContext = createContext()

//crea provider
const CategoriasProvider = (props) => {

    //set state
    const [categorias, setCategorias] = useState([])

    useEffect( () => {
        
        const callApi = async ()=>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const query = await fetch(url)
            const result = await query.json()
            setCategorias(result.drinks)
        }
        callApi()

    }, [])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider