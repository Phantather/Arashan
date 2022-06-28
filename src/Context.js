import React, {createContext, useState} from "react"


export const CustomContext = createContext();


export const Context = (props) => {

    const [coast, setCoast] = useState('north');


    const value = {
        coast,
        setCoast
    };
    return <CustomContext.Provider value={value}>
        {props.children}
        </CustomContext.Provider>
};