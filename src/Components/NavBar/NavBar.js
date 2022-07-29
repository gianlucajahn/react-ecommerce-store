import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { ReactComponent as Cart } from "../../Resources/image/cart.svg";
import { ReactComponent as GitHub } from "../../Resources/image/github.svg";
import { ReactComponent as Search } from "../../Resources/image/search.svg";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = props => { 
    const {
        handleHover,
        hoverState,
        handleHome,
        handleBrowse,
        browsing,
        landingPage,
        cart,
        cartAmount,
        search,
        searching,
        handleSearch,
        handleSearchSubmit,
        handleOpenCart,
        handleCloseCart
    } = props;
    
    const variants = {
        hidden: { opacity: 1, y: 15 },
        visible: { opacity: 1, y: 0 },
    }

    const searchVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

  const location = useLocation();

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
                <Logo className={styles.svg} style={{ fill: "#fff" }}/>
                <h3>Game Store</h3>
            </div>
    
            <div className={styles.pathdiv} id="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                {browsing ? 
                  <>
                    <motion.div 
                      animate="visible"
                      initial={location.pathname === "/react-ecommerce-store/browse" ? "hidden" : "visible"}
                      variants={searchVariants}
                      transition={{ opacity: { type: "spring" }, duration: 0.01, delay: 0.25 }}
                      className={styles.searchdiv}
                    >
                      <form onSubmit={handleSearchSubmit}>
                        <input 
                          placeholder="Search games..."
                          value={search}
                          onChange={handleSearch}
                        >

                        </input>
                        <input 
                          type="submit" 
                          hidden 
                          className={styles.submit} 
                        />
                        <button type="submit">
                            <Search 
                              className={styles.svg}
                              style={{ fill: hoverState[7].hovered ? "#fff" : "#cccccc" }} 
                              onMouseEnter={handleHover}
                              onMouseLeave={handleHover}
                              id="7"
                              aria-label='Search'
                            />
                        </button>
                      </form>
                    </motion.div>
                  </>
                  
                  :
                  
                  <div className={styles.browsediv}>
                    <Browse 
                      className={styles.svg} 
                      style={{ fill: "#fff" }}/>
                    <h3 onClick={handleBrowse}>Browse Store</h3>
                  </div>
                }
            </div>
        </div>

        <div className={styles.navbar_right}>
            <div 
              className={styles.githubdiv} 
              id="2"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
                <GitHub className={styles.gh} />
                <h3>gianlucajahn</h3>
            </div>

            <div 
              className={styles.cartdiv} 
              id="3"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              onClick={handleOpenCart}
            >
                <Cart 
                  onClick={handleOpenCart} 
                  className={styles.svg2} 
                  style={{ fill: cartAmount ? "#90ee90" : "transparent", stroke: cartAmount ? "" : "#fff", strokeWidth: "34px" }}
                />
                <h3 onClick={handleOpenCart}>Cart: {cartAmount}</h3>
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavBar;