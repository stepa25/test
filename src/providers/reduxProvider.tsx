'use client'
import { store } from "@/redux/store"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"

type IProps = {
  children: ReactNode;
}

export const ReduxProvider: React.FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
