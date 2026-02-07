'use client'

import React, { ReactNode, useState } from "react"
import { createContext, useContext } from "react"

type IProps = {
    children: ReactNode;
}

type IContext = {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
}

const Context = createContext<IContext>(null)


export const ContextProvider: React.FC<IProps> = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <Context.Provider value={{searchValue, setSearchValue}}>
            {children}
        </Context.Provider>
    )
}

export const useSearch = () => useContext(Context)
