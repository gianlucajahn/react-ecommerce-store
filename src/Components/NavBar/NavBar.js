import React from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { ReactComponent as Cart } from "../../Resources/image/cart.svg";
import { ReactComponent as GitHub } from "../../Resources/image/github.svg";
import { motion } from "framer-motion";

const NavBar = props => {
    const { browsing,
            handleHover,
            hoverState
          } = props;
    
    const variants = {
        hidden: { opacity: 1, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

  return (
    <>
      <motion.div 
        className={styles.navbar}
        animate="visible"
        initial="hidden"
        variants={variants}
        transition={{ y: { type: "spring" }, duration: 1 }}
      >
        <div className={styles.navbar_left}>
            <div className={styles.logodiv} id="0"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                <Logo className={styles.svg} style={{ fill: hoverState[0].hovered ? "#fff" : "#cccccc" }}/>
                <h3 style={{ color: hoverState[0].hovered ? "#fff" : "#cccccc" }}>Game Store</h3>
            </div>
    
            <div className={styles.pathdiv} id="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                {browsing ? 
                  <>
    
                  </>
                  
                  :
                  
                  <>
                    <Browse className={styles.svg} style={{ fill: hoverState[1].hovered ? "#fff" : "#cccccc" }}/>
                    <h3 style={{ color: hoverState[1].hovered ? "#fff" : "#cccccc" }}>Browse Store</h3>
                  </>
                }
            </div>
        </div>

        <div className={styles.navbar_right}>
            <div className={styles.githubdiv} id="2"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                <GitHub className={styles.gh} style={{ fill: hoverState[2].hovered ? "#fff" : "#cccccc" }}/>
                <h3 style={{ color: hoverState[2].hovered ? "#fff" : "#cccccc" }}>GitHub</h3>
            </div>

            <div className={styles.cartdiv} id="3"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                <Cart className={styles.svg} style={{ fill: hoverState[3].hovered ? "#fff" : "#cccccc" }}/>
                <h3 style={{ color: hoverState[3].hovered ? "#fff" : "#cccccc" }}>Cart: 0</h3>
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;