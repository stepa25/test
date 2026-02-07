'use client'
import { useData } from "@/hooks/useData"
import React from "react"

type IProps = {
    params: number;
}

const Product: React.FC<IProps> = ({params}) => {
    const { data } = useData()

    const item: { name: string, price: number } = data && data.find(obj => obj.id === Number(params.id))

    if (!item) {
        return <>'Загрузка...'</>
    }

    return(
        <div>
            {item.name}
            {item.price}
        </div>
    ) 
}

export default Product