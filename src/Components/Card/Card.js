import styles from './Card.module.css';
import React from 'react';
import { ReactComponent as Like } from "../../Resources/image/like.svg";
import { ReactComponent as Add } from "../../Resources/image/add.svg";
import { motion } from "framer-motion";
import AddToCart from '../AddToCart/AddToCart';
import AddedToCart from '../AddedToCart/AddedToCart';
import AnimatedCard from '../../Containers/AnimatedPage/AnimatedCard';
import { useLocation } from 'react-router-dom';

const Card = props => {
    const { 
        game,
        handleAddToCart,
        handleHover,
        hoverState,
        handleLike,
        handleHoverGame,
        handleSelectGame
      } = props;

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const location = useLocation();

    return (
          <motion.div 
            className={hoverState[1].selected === false ? styles.card : game.id === 26 ? styles.fifa : game.id === 12 ? styles.tombraider : game.id === 3 ? styles.mariokart : game.id === 11 ? styles.minecraft : styles.cardHome}
            onClick={handleSelectGame}
            id={game.id}
            style={{ margin: 0, padding: 0 }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img src={game.cover} className={styles.img} alt="Game Cover Image" />
    
            <div className={styles.price}>
                    {game.inCart ? <AddedToCart /> : <AddToCart 
                                          game={game} 
                                          handleHoverGame={handleHoverGame} 
                                          handleAddToCart={handleAddToCart} 
                                        />
                    }
                ${game.price}
            </div>
            <h2 className={styles.name}>{game.name}</h2>
            <button 
              className={styles.like} 
              id={game.id} 
              onClick={handleLike} 
              aria-label="Like"
            >
                <Like 
                  style={{ fill: game.isLiked ? "#F53333" : "#cccccc" }} 
                  className={styles.likeSVG}
                />
            </button>
          </motion.div>
    );
  }
  
  export default Card;