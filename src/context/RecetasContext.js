import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [query, setQuery] = useState({
        ingrediente: '',
        categoria: ''
    })
    const {ingrediente, categoria} = query
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        if(categoria==="" || categoria===undefined) return
        
        const callApi = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`
            const result = await axios(url)

            setRecipes(result.data.drinks)
        }
        callApi()

    }, [query])

    return (
        <RecetasContext.Provider value={{setQuery, recipes}}>
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;