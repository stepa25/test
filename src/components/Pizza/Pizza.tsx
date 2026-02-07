"use client";
import Image from "next/image";
import styles from "./Pizza.module.scss";
import plus from "../../../assets/image/plus.svg";
import React, { useState } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";


type IPizzaProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  types: number[];
  sizes: number[]
}

export const Pizza: React.FC<IPizzaProps> = ({id, imageUrl, name, price, types, sizes }) => {
  const {push} = useRouter()
  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
  const addedCount = cartItem ? cartItem.count : 0

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <div className={styles.pizzaBlock}>
      <Image onClick={() => push(`/pizzas/${id}`)} src={imageUrl} priority width={260} height={260} alt="pizza" />
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.selector}>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => setActiveType(index)}
              className={cn({
                [styles.active]: activeType === index,
                [styles.disabled]: !types.includes(index),
              })}
              key={index}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={cn({
                [styles.active]: activeSize === index,
                [styles.disabled]: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>От {price} ₽</div>
        <div
          onClick={() => dispatch(
            addItem({
              id,
              name,
              price,
              imageUrl,
              type: availableTypes[activeType],
              size: availableSizes[activeSize]
            })
          )}
          className={styles.button}
        >
          <Image className={styles.plus} src={plus} alt="plus" />
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};
