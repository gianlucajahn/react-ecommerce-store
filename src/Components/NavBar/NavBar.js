import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { ReactComponent as Cart } from "../../Resources/image/cart.svg";
import { ReactComponent as GitHub } from "../../Resources/image/github.svg";
import { ReactComponent as Search } from "../../Resources/image/search.svg";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const NavBar = props => { 
    const {
        handleHover,
        hoverState,
        handleHome,
        handleBrowse,
        browsing,
        landingPage,
        cart,
        cartAmount
    } = props;
    
    const variants = {
        hidden: { opacity: 1, y: 15 },
        visible: { opacity: 1, y: 0 },
    }

    const searchVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

  return (
    <>
      <motion.div 
        className={styles.navbar}
        animate="visible"
        initial={ landingPage ? "hidden" : "visible"}
        variants={variants}
        transition={{ y: { type: "spring" }, duration: 0.01 }}
      >
        <div className={styles.navbar_left}>
            <div className={styles.logodiv} id="0"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleHome}
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
                    <motion.div 
                      animate="visible"
                      initial="hidden"
                      variants={searchVariants}
                      transition={{ opacity: { type: "spring" }, duration: 0.01, delay: 0.4 }}
                      className={styles.searchdiv}
                    >
                        <input 
                          placeholder="Search games..."
                        >

                        </input>
                        <Search 
                          className={styles.svg}
                          style={{ fill: hoverState[7].hovered ? "#fff" : "#cccccc" }} 
                          onMouseEnter={handleHover}
                          onMouseLeave={handleHover}
                          id="7"
                        />
                    </motion.div>
                  </>
                  
                  :
                  
                  <>
                    <Browse className={styles.svg} style={{ fill: hoverState[1].hovered ? "#fff" : "#cccccc" }}/>
                    <h3 style={{ color: hoverState[1].hovered ? "#fff" : "#cccccc" }} onClick={handleBrowse}>Browse Store</h3>
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
                <Cart className={styles.svg2} style={{ fill: cartAmount ? "#90ee90" : "#0f1011", stroke: cartAmount ? "" : "#fff", strokeWidth: "34px" }}/>
                <h3 style={{ color: hoverState[3].hovered ? "#fff" : "#cccccc" }}>Cart: {cartAmount}</h3>
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;