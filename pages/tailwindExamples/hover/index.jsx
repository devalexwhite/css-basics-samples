import React from 'react'
import styles from './styles.module.css'

export default function GridPage() {
    return (
        <main>
            <div className={styles.background}>
                <button className={styles.button}>
                    <span className={styles.phone}>☎️</span>
                    Who You Gonna Call?
                    <span className={styles.ghost}>👻</span>
                </button>
            </div>
        </main>
    )
}