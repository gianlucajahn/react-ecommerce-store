import styles from './Cart.module.css';
import React, { useState } from 'react';

const Cart = props => {
    const {
        cartAmount,
        cart,
        handleOpenCart,
        handleCloseCart,
        cartDisplayed
    } = props;

    const [total, setTotal] = useState(0);

    return (
        <div className={styles.cartWindow}>
            <div className={styles.back} onClick={handleCloseCart}>

            </div>
            <div className={styles.cart}>
                <div className={styles.top}>
                    <div className={styles.topHeader}>
                        <h2>{cartAmount >= 1 ? cartAmount > 1 ? `${cartAmount} games` : "1 game" : "No games added"}</h2>
                        <h3>Clear</h3>
                    </div>
    
                    <div className={styles.topGames}>
    
                    </div>
                </div>
    
                <div className={styles.bottom}>
                    <div>
                        <h3>Total: ${total}</h3>
                        <button>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Cart;