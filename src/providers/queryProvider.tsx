'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { ReactNode } from "react"

const queryClient = new QueryClient()

type IProps = {
    children: ReactNode;
  }

export const QueryProvider: React.FC<IProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
