import styles from './AddToCart.module.css';
import React from 'react';
import { ReactComponent as Add } from "../../Resources/image/add.svg";
import AnimatedCardNoInit from '../../Containers/AnimatedPage/AnimatedCardNoInit';

const AddToCart = props => {
    const {
        game,
        handleHoverGame,
        handleAddToCart
    } = props;

    return (
          <div className={styles.addToCart} onMouseEnter={handleHoverGame} onMouseLeave={handleHoverGame} id={game.id} onClick={handleAddToCart}>
            <h4 style={{ color: game.isHovered ? "#92f" : "#999" }}>Add to cart</h4>
            <Add className={styles.add} style={{ fill: game.isHovered ? "#92f" : "#999" }} />
          </div>
    );
  }
  
  export default AddToCart;