'use client'
import Image from 'next/image';
import styles from './CartButton.module.scss'
import cart from '../../../assets/image/cart.svg'
import { useSelector } from 'react-redux';
import React from 'react';


export const CartButton: React.FC = () => {
  const { items, totalPrice } = useSelector(state => state.cart)

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  return (
    <div className={styles.headerCart}>
      <span>{totalPrice} ₽</span>
      <div></div>
      <div className={styles.delimiter}></div>
      <Image className={styles.cart} src={cart} alt="cart image" />
      <span>{totalCount}</span>
    </div>
  );
};
