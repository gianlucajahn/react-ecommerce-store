import styles from './Grid.module.css';
import React from 'react';
import Card from '../Card/Card';

const Grid = props => {
    const {
        shownGames
    } = props;

    return (
      <div className={styles.gridContainer}>
        {shownGames.map((game, i) => {
            return <Card game={game} key={i} />
        })}
      </div>
    );
  }
  
  export default Grid;