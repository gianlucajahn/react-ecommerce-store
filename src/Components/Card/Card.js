import styles from './Card.module.css';
import React from 'react';
import { ReactComponent as Like } from "../../Resources/image/like.svg";

const Card = props => {
    const { 
        game,
        handleSelectGame,
        handleAddToCart,
        handleHover,
        handleLike
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
        <button className={styles.like} id={game.id} onClick={handleLike}>
            <Like 
              style={{ fill: game.isLiked ? "#ed4956" : "#cccccc" }} 
              className={styles.likeSVG}
            />
        </button>
      </div>
    );
  }
  
  export default Card;