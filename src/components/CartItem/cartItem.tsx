'use client'
import styles from "./cartItem.module.scss";
import chicken from "../../../assets/image/Pizza/miniChicken.png";
import plus from "../../../assets/image/cartPlus.svg";
import minus from "../../../assets/image/minus.svg";
import close from "../../../assets/image/close.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "@/redux/slices/cartSlice";
import React, { useEffect } from "react";


type ICartItem = {
  name: string;
  count: number;
  price: number;
  id: number;
  imageUrl: string;
}

const CartItem: React.FC<ICartItem> = ({name, count, price, id}) => {
  const dispatch = useDispatch()
  const {items, totalPrice} = useSelector(state => state.cart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
  }, [items])

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__description}>
        <Image src={chicken} alt="chicken"/>
        <div className={styles.cartItem__description_Text}>
          <p className={styles.title}>{name}</p>
          <p className={styles.size}>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={styles.counter}>
        <Image onClick={() => dispatch(minusItem({id}))} src={minus} className={styles.minus} alt="minus"/>
        <span>{count}</span>
        <Image onClick={() => dispatch(addItem({id}))} src={plus} className={styles.plus} alt="plus"/>
      </div>
      <span className={styles.price}>{price} ₽</span>
      <Image onClick={() => dispatch(removeItem({id}))} src={close} className={styles.close} alt="close"/>
    </div>
  );
};

export default CartItem;
