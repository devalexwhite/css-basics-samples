import React from 'react'
import styles from './styles.module.css'

export default function GridPage() {
    return (
        <main>
            <div className={styles.background}>
                <button className={`${styles.button} group hover:shadow-sm`}>
                    <span className={`${styles.phone} group-hover:opacity-0`}>☎️</span>
                    Who You Gonna Call?
                    <span className={`${styles.ghost} group-hover:opacity-100`}>👻</span>
                </button>
            </div>
        </main>
    )
}