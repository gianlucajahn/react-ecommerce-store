import styles from './Card.module.css';
import React from 'react';

const Card = props => {
    const { 
        game,
        handleSelectGame,
        handleAddToCart,
        handleHover
      } = props;

    return (
      <div className={styles.card}>
        <img src={require(`../../Resources/image/gameFootage/${game.surname}.jpg`)} />

        <div className={styles.price}>
            <div>
                Add to cart 
            </div>
            {game.price}
        </div>
        <h2 className={styles.name}>{game.name}</h2>
      </div>
    );
  }
  
  export default Card;