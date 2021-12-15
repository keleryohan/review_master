import React from 'react'
import styles from './styles.module.css'

const HomePage = () => (
  <div className={styles.mainContainer}>
    <h1 className={styles.title}>Home Page</h1>
    <div className={styles.row}>
      <a href='games'>
        <h2>Games</h2>
      </a>
      <a href='movies'>
        <h2>Movies</h2>
      </a>
    </div>
  </div>
)

export default HomePage
