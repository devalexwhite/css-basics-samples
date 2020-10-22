import React from 'react'
import styles from './styles.module.css'

export default function GridPage() {
    return (
        <main>
            <div className={styles.content}>
                <div className={`${styles.ghost} md:hidden`}>
                    👻
                </div>
                <div className={`${styles.ghost} md:hidden`}>
                    👻
                </div>
                <div className={styles.ghost}>
                    👻
                </div>
            </div>
        </main>
    )
}