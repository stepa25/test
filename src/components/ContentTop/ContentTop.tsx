import styles from './ContentTop.module.scss'
import Categories from '../Categories/Categories'
import Sort from '../Sort/Sort'
import React from 'react'

export const ContentTop: React.FC = () => {
    return (
        <div className={styles.contentTop}>
            <Categories />
            <Sort />
        </div>
    )
}