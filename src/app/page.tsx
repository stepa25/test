import { ContentTop } from '@/components/ContentTop/ContentTop'
import styles from './page.module.scss'
import { ContentItems } from '@/components/ContentItems/ContentItems'
import React from 'react'

const MainContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <ContentTop/>
        <ContentItems/>
      </div>
    </div>
  )
}

export default MainContent