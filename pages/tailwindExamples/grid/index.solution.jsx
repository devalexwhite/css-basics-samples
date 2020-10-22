import React from 'react'
import styles from './styles.module.css'

export default function GridPage() {
    return (
        <main>
            <div className={`${styles.wall} grid grid-cols-3 grid-rows-2 gap-lg`}>
                <div className={styles.frame}>
                    <div className={styles.picture}>
                        👽
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.picture}>
                        🦇
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.picture}>
                        🧟‍♂️
                    </div>
                </div>
                <div className={styles.frame}>
                    <div className={styles.picture}>
                        🧛‍♂️
                    </div>
                </div>
            </div>
        </main>
    )
}