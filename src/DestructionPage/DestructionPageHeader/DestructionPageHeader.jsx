import { Link } from 'react-router-dom';
import React from "react";
import styles from './DestructionPageHeader.module.css'


export const DestructionPageHeader = () => {
    return <div className={styles.homeHeader}>
        <div className={styles.title}>
            <div className={styles.name}>ARMAGGEDON V</div>
            <div className={styles.description}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>

        <div className={styles.links}>
            <Link to={'/'} style={{ color: "black"}}>Астероиды</Link>
            <Link to={'/toDestroy'} style={{ textDecoration: 'none', color: "black", fontWeight: "bold"}}>Уничтожение</Link>
        </div>
    </div>
} 