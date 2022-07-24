import React, { useState } from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Credibility } from "../../Resources/image/credible.svg";
import { ReactComponent as Availability } from "../../Resources/image/available.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";
import { hover } from '@testing-library/user-event/dist/hover';
import { motion, AnimatePresence } from "framer-motion";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AnimatedHome from '../AnimatedPage/AnimatedHome';
import AnimatedHomeBottom from '../AnimatedPage/AnimatedHomeBottom';
import Cart from '../../Components/Cart/Cart';
import Card from '../../Components/Card/Card';
import games from '../../utils/games';

const Home = props => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleAddToCart,
    handleLike,
    handleHoverGame,
    handleSelectGame
  } = props;

  const [browsing, setBrowsing] = useState(false);
  const [landingPage, setLandingPage] = useState(true);
  const [hoverState, setHoverState] = useState([
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: true
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
        hovered: false,
        selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    }
  ]);

  const navigate = useNavigate();

  const handleHover = (e) => {
    let newHoverState = hoverState[e.target.id];
    newHoverState.hovered = !newHoverState.hovered;

    setHoverState([
        ...hoverState, hoverState[e.target.id] = newHoverState
    ]);
  }

  const handleBrowse = () => {
    setBrowsing(true);
    navigate('/browse');
  }

  const handleHome = () => {
    setBrowsing(false);
    navigate('/');
  }

  const variants = {
    hidden: { opacity: 1, x: -150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 150 },
  }

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <div className={styles.main}>
      {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed} 
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
              handleHover={handleHover}
              hoverState={hoverState}
              clearCart={clearCart}
      /> : null}
        <div className={styles.home}>
            <NavBar 
              handleHover={handleHover} 
              hoverState={hoverState}
              browsing={browsing}
              handleBrowse={handleBrowse}
              handleHome={handleHome}
              landingPage={landingPage}
              cartAmount={cartAmount}
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
            />
              <AnimatedHome>
                <motion.div className={styles.home_content}>
                    <h1>Game Store</h1>
                    <div>
                      <img className={styles.ign} src={require("../../Resources/image/ign.png")} />
                      <h2>Heaven for gaming deals</h2>
                    </div>
                </motion.div>
              </AnimatedHome>

              <motion.div>
                  <Card         
                    game={games[0]}
                    handleAddToCart={handleAddToCart}
                    handleHover={handleHover}
                    handleLike={handleLike}
                    handleHoverGame={handleHoverGame}
                    handleSelectGame={handleSelectGame}
                    hoverState={hoverState}
                  />

                  <Card         
                    game={games[3]}
                    handleAddToCart={handleAddToCart}
                    handleHover={handleHover}
                    handleLike={handleLike}
                    handleHoverGame={handleHoverGame}
                    handleSelectGame={handleSelectGame}
                    hoverState={hoverState}
                  />
    
                  <Card         
                    game={games[26]}
                    handleAddToCart={handleAddToCart}
                    handleHover={handleHover}
                    handleLike={handleLike}
                    handleHoverGame={handleHoverGame}
                    handleSelectGame={handleSelectGame}
                    hoverState={hoverState}
                  />
    
                  <Card         
                    game={games[12]}
                    handleAddToCart={handleAddToCart}
                    handleHover={handleHover}
                    handleLike={handleLike}
                    handleHoverGame={handleHoverGame}
                    handleSelectGame={handleSelectGame}
                    hoverState={hoverState}
                  />
                                
                  <Card         
                    game={games[11]}
                    handleAddToCart={handleAddToCart}
                    handleHover={handleHover}
                    handleLike={handleLike}
                    handleHoverGame={handleHoverGame}
                    handleSelectGame={handleSelectGame}
                    hoverState={hoverState}
                  />
              </motion.div>
        </div>

            <motion.div 
              className={styles.buttons}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ x: { type: "spring" }, duration: 1.5 }}
            >
                <button id="4" className={styles.parent}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                >
                    <Credibility className={styles.svg} style={{ fill: hoverState[4].hovered ? "#000000" : "#cccccc" }}/>
                    <div>
                        <h3 style={{ color: hoverState[4].hovered ? "#000000" : "#cccccc" }}>Credible Shop</h3>
                        <p style={{ color: hoverState[4].hovered ? "#000000" : "#cccccc" }}>Excellenct Score</p>
                    </div>
                </button>
    
                <button id="5" className={styles.parent}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <Availability className={styles.svg} style={{ fill: hoverState[5].hovered ? "#000000" : "#cccccc" }}/>
                    <div>
                        <h3 style={{ color: hoverState[5].hovered ? "#000000" : "#cccccc" }}>High Availability</h3>
                        <p style={{ color: hoverState[5].hovered ? "#000000" : "#cccccc" }}>24-hour Support</p>
                    </div>
                </button>
    
                <button id="6" className={styles.parent}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <Reviews className={styles.svg} style={{ fill: hoverState[6].hovered ? "#000000" : "#cccccc" }}/>
                    <div>
                        <h3 style={{ color: hoverState[6].hovered ? "#000000" : "#cccccc" }}>Great Reviews</h3>
                        <p style={{ color: hoverState[6].hovered ? "#000000" : "#cccccc" }}>9.4 / 10 Avg. Score</p>
                    </div>
                </button>
            </motion.div>

            <AnimatedHomeBottom>
                <motion.div 
                  className={styles.home_cred}
                >
                    <button onClick={handleBrowse}>
                        <div>
    
                        </div>
                        Browse
                    </button>
                </motion.div>
            </AnimatedHomeBottom>
    </div>
  );
}

export default Home;