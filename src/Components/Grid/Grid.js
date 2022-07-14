import styles from './Grid.module.css';
import React, { useEffect } from 'react';
import Card from '../Card/Card';
import AnimatedPage from '../../Containers/AnimatedPage/AnimatedPage';

const Grid = props => {
    const {
        shownGames,
        reviewDisplay,
        handleLike,
        handleHoverGame,
        handleAddToCart,
        loading,
        setLoading
    } = props;

    return (
    <>
      <div className={styles.reviews} style={{ display: reviewDisplay ? "flex" : "none" }}>
          <h2>There are no reviews yet!</h2>
          <h3>You can add some, soon.</h3>
      </div>
      <div className={styles.gridContainer} style={{ display: reviewDisplay ? "none" : "grid" }} id="test">
        {shownGames.map((game, i) => {
            return <Card game={game} key={i} handleLike={handleLike} handleHoverGame={handleHoverGame} handleAddToCart={handleAddToCart} />
        })}
      </div>
    </>
    );
  }
  
  export default Grid;