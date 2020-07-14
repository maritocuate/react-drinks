import React, { useState, createContext } from 'react';

//crea context
export const CategoriasContext = createContext()

//crea provider
const CategoriasProvider = (props) => {

    //set state
    const [hola, setHola] = useState('hello world')

    return(
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider