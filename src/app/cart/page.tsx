'use client'
import styles from "./page.module.scss";
import cart from '../../../assets/image/cart2.svg'
import trash from '../../../assets/image/trash.svg'
import arrow from '../../../assets/image/arrow.svg'
import Image from "next/image";
import CartItem from "@/components/CartItem/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "@/redux/slices/cartSlice";
import React from "react";


const Card: React.FC = () => {
    const {items, totalPrice} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0)

  return (
    <div className={styles.content}>
      <div className={styles.container}>
            <div className={styles.cartTop}>
                <div className={styles.cartTop__left}>
                    <Image width={29} height={29} src={cart} alt="cart"/>
                    <p>Корзина</p>
                </div>
                <div onClick={() => dispatch(clearItems())} className={styles.cartTop__right}>
                    <Image src={trash} alt="trash"/>
                    <p>Очистить корзину</p>
                </div>
            </div>
            <div className={styles.cartItems}>
                {items.map(item => <CartItem {...item} />)}
            </div>
            <div className={styles.cartBottom}>
                <div className={styles.blockFirst}>
                    <p className={styles.total}>Всего пицц:<span> {totalCount} шт.</span></p>
                    <p className={styles.titlePrice}>Сумма заказа:<span> {totalPrice} ₽</span></p>
                </div>
                <div className={styles.blockSecond}>
                    <button className={styles.btn1}>
                        <Image src={arrow} alt="arrow"/>
                        <p>Вернуться назад</p>
                    </button>
                    <button className={styles.btn2}>
                        <p>Оплатить нельзя</p>
                    </button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Card;
