import styles from './Grid.module.css';
import React from 'react';
import Card from '../Card/Card';

const Grid = props => {
    const {
        shownGames,
        reviewDisplay,
        handleLike
    } = props;

    return (
    <>
      <div className={styles.reviews} style={{ display: reviewDisplay ? "flex" : "none" }}>
          <h2>There are no reviews yet!</h2>
          <h3>You can add some, soon.</h3>
      </div>
      <div className={styles.gridContainer} style={{ display: reviewDisplay ? "none" : "grid" }}>
        {shownGames.map((game, i) => {
            return <Card game={game} key={i} handleLike={handleLike} />
        })}
      </div>
    </>
    );
  }
  
  export default Grid;