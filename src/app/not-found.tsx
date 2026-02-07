import styles from './page.module.scss'

const NotFound = () => {
    return(
        <div className={styles.notFound}>
            <h2>Ничего не найдено</h2>
            <p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
        </div>
    )
}

export default NotFound