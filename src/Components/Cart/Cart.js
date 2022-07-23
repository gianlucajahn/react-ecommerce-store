import styles from './Cart.module.css';
import React, { useState } from 'react';
import { ReactComponent as Right } from "../../Resources/image/arrowRight.svg";

const Cart = props => {
    const {
        cartAmount,
        cart,
        handleOpenCart,
        handleCloseCart,
        cartDisplayed,
        handleHover,
        hoverState,
        clearCart
    } = props;

    const [total, setTotal] = useState(0);
    let newTotal = 0;
    cart.forEach((item, i) => {
        let priceAsNumber = parseFloat(item.price);
        let currentTotal = parseFloat(newTotal);
        newTotal = (priceAsNumber + currentTotal).toFixed(2);

        if (i === cart.length) {
            setTotal(newTotal);
        }
    })

    return (
        <div className={styles.cartWindow}>
            <div className={styles.back} onClick={handleCloseCart}>

            </div>
            <div className={styles.cart}>
                <div className={styles.top}>
                    <div className={styles.topHeader}>
                        <h2>{cartAmount >= 1 ? cartAmount > 1 ? `${cartAmount} games` : "1 game" : "No games added"}</h2>
                        <h3 onClick={clearCart}>{cartAmount >= 1 ? "Clear" : ""}</h3>
                    </div>
    
                    <div className={styles.topGames}>
    
                    </div>
                </div>
    
                <div className={styles.bottom}>
                        <h3>Total: ${newTotal}</h3>
                        <button id="24" onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ color: hoverState[24].hovered ? "#92f" : "#fff" }}>
                            Checkout
                            <Right 
                              className={styles.right}
                              style={{ fill: hoverState[24].hovered ? "#92f" : "#fff" }}
                            />
                        </button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Cart;