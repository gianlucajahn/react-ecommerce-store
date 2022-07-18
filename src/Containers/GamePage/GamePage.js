import styles from './GamePage.module.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import NavBar from '../../Components/NavBar/NavBar';

const GamePage = props => {
  const {
    handleHover,
    hoverState,
    handleHome,
    browsing,
    landingPage,
    cartAmount,
    cart,
    search,
    searching,
    handleSearch,
    handleSearchSubmit
  } = props;
  let { gameId } = useParams();

  return (
    <div className={styles.gamepage}>
        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          handleHome={handleHome}
          browsing={browsing}
          landingPage={landingPage}
          cartAmount={cartAmount}
          search={search}
          searching={searching}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
    </div>
  );
}

export default GamePage;