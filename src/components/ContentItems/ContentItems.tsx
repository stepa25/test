"use client";

import { Pizza } from "../Pizza/Pizza";
import styles from "./ContentItems.module.scss";
import Loader from "../Loader/loader";
import { useSearch } from "@/providers/contextProvider";
import { useData } from "@/hooks/useData";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


export const ContentItems: React.FC = () => {
  const {searchValue} = useSearch()
  const {data, isLoading} = useData()
  const {items, totalPrice} = useSelector(state => state.cart)

  const loader = [...new Array(8)].map((_, index) => <Loader key={index}/>)
  const pizzaItems = data &&
                      data.
                      filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).
                      map(item => <Pizza key={item.id} {...item} />)

  //   const search = searchValue && `search=${searchValue}` 
  //   axios.get(`https://65ddf541dccfcd562f55f1d9.mockapi.io/items?${search}`)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(items))
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
  }, [items])

  return (
    <div className={styles.contentItems}>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
        {isLoading
         ? loader
         : pizzaItems
        }
      </div>
    </div>
  );
};
