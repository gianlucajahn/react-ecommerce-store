import styles from './Grid.module.css';
import React from 'react';
import Card from '../Card/Card';

const Grid = () => {
    const games = [
        "Cyberpunk",
        "Battlefield",
        "Life-Is-Strange",
        "Mario-Kart"
    ];

    return (
      <div className={styles.gridContainer}>
        <Card game={games[0]} />
        <Card game={games[1]} />
        <Card game={games[2]} />
        <Card game={games[3]} />
      </div>
    );
  }
  
  export default Grid;