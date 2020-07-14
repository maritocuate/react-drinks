import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [id, setId] = useState(null)
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        if(!id) return

        const callApi = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            const result = await axios(url)

            setRecipe(result.data.drinks[0])
        }
        callApi()

        return () => {
            setRecipe({});
        };
    }, [id])

    return (
        <ModalContext.Provider value={{recipe, setId, setRecipe}}>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;