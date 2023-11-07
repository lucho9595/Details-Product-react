import React from 'react';
import { Card } from '../components/Card';
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Pagina Principal</h1>
      <Card />
    </div>
  )
}
