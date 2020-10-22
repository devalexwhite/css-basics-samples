import React from 'react'
import styles from './styles.module.css'

export default function CenteringPage() {
    return (
        <main>
            <div className={`${styles.graveyard} flex justify-center items-center`}>
                <div className={styles.ghost}>
                👻
                </div>
            </div>
        </main>
    )
}