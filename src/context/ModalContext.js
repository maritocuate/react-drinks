import React, { createContext, useState } from 'react';

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [id, setId] = useState(null)

    return (
        <ModalContext.Provider value={{setId}}>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;