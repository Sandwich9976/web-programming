import styles from "./AsteroidCardContent.module.css"

export type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: number;
    size: number;
}

export const AsteroidCardContent = (props: AsteroidCardContentProps) =>{
    const {name, date, distance, size} = props
    return (<div>
                <div className={styles.contentName}>{name}</div>
                <div className={styles.contentWrapper}>
                    <div className={styles.contentDate}>Дата: {date}</div>
                    <div className={styles.contentDistance}>Расстояние: {distance} км</div>
                    <div className={styles.contentSize}>Размер: {size} км</div>
                </div>
            </div>)

} 