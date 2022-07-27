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
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import Cart from '../../Components/Cart/Cart';
import AnimatedHome from '../AnimatedPage/AnimatedHome';
import AnimatedHomeBottom from '../AnimatedPage/AnimatedHomeBottom';

const Home = props => {
  const {
    shownGames,
    cartAmount,
    cart,
    cartDisplayed,
    handleOpenCart,
    handleCloseCart,
    clearCart,
    handleRemoveFromCart
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
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -150 },
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
              handleRemoveFromCart={handleRemoveFromCart}
      /> : null}
        <div className={styles.home}>

                <video autoPlay muted loop className={styles.video}>
                  <source src={require("../../Resources/image/piltover.mp4")} type="video/mp4" />
                </video>

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

                <div className={styles.home_content}>
                  <h1>Game Store</h1>
                  <p className={styles.intro}>The best destination to buy new games to competitive prices. 24 hour support, "best price" guarantee and a flawless UX. Wish for more? Tell us <span className={styles.here}>here</span> or checkout our <span className={styles.careers}>careers.</span></p>
                </div>

                <div className={styles.buttons}>
                  <h2>Explore our store</h2>
                  <button>Browse</button>
                  <button>Play Dice</button>
                  <button>GitHub</button>
                </div>
        </div>
    </div>
  );
}

export default Home;