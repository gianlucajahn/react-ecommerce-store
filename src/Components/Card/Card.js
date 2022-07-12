import styles from './Card.module.css';
import React from 'react';

const Card = props => {
    const { game 
      } = props;

    return (
      <div className={styles.card}>
        <img src={require(`../../Resources/image/${game}.jpg`)} />

        <div className={styles.price}>
            <div>
                Add to cart +
            </div>
            $69.99
        </div>
        <h2 className={styles.name}>{game}</h2>
      </div>
    );
  }
  
  export default Card;