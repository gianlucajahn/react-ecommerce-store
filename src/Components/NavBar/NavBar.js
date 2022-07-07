import React from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { ReactComponent as Cart } from "../../Resources/image/cart.svg";

const NavBar = props => {
  const { browsing } = props;

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_left}>
            <div className={styles.logodiv}>
                <Logo className={styles.svg} />
                <h3>Game Store</h3>
            </div>
    
            <div className={styles.pathdiv}>
                {browsing ? 
                  <>
    
                  </>
                  
                  :
                  
                  <>
                    <Browse className={styles.svg} />
                    <h3>Browse Store</h3>
                  </>
                }
            </div>
        </div>

        <div className={styles.navbar_right}>
          <Cart className={styles.svg} />
          <h3>Cart: 0</h3>
        </div>
      </div>
    </>
  );
}

export default NavBar;