'use client'
import Image from 'next/image'
import styles from './Header.module.scss'
import logo from '../../../assets/image/logo.svg'
import { CartButton } from '../CartButton/CartButton'
import Link from 'next/link'
import Search from '../Search/search'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <div className={styles.headerLogo}>
                        <Image className={styles.logo} src={logo} sizes='38px' alt='Logo Pizza'/>
                        <div>
                            <h1>next pizza</h1>
                            <p>самая вкусная пиZZа во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search/>
                <Link href={'/cart'}><CartButton/></Link>
            </div>
        </header>
    )
}