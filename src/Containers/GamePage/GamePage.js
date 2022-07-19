import styles from './GamePage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import Slider from '../../Components/Slider/Slider';
import games from '../../utils/games';

const GamePage = props => {
  const {
    handleHover,
    hoverState,
    handleHome,
    landingPage,
    cartAmount,
    cart,
    search,
    searching,
    handleSearch,
    handleSearchSubmit,
    browsing,
    handleBrowse,
    selectedGame,
    setSelectedGame,
    setHoverState,
    allGames
  } = props;

  let { gameId } = useParams();
  const location = useLocation();
  const [carouselState, setCarouselState] = useState(0);

  const incrementCarousel = (e) => {
    if (carouselState === 3) {
      setCarouselState(0);
    } else {
      setCarouselState(carouselState + 1);
    }
  }

  const decrementCarousel = (e) => {
    if (carouselState === 0) {
      setCarouselState(3);
    } else {
      setCarouselState(carouselState - 1);
    }
  }

  return (
    <>
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

            <AnimatedGamePage>
              <div className={styles.gamepageContent}>
                <header>
                    <button 
                      style={{ color: hoverState[19].hovered ? "#92f" : "#cccccc" }} 
                      className={styles.goBack}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      onClick={handleBrowse}
                      id="19"
                    >
                        <Arrow style={{ fill: hoverState[19].hovered ? "#92f" : "#cccccc" }} className={styles.arrow} />
                        Store
                    </button>

                    <h1>{selectedGame.name}</h1>
                </header>

                <section className={styles.game}>
                  <Slider 
                    selectedGame={selectedGame}
                    setSelectedGame={setSelectedGame}
                    allGames={allGames}
                  />
                  <div className={styles.gameInfo}>
                    <div className={styles.about}>
                      <div className={styles.aboutTop}>
                        <h2>About</h2>
                        <p>{selectedGame.desc}</p>
                      </div>
                      <div className={styles.aboutBottom}>
                        <a href={selectedGame.link} target="_blank">{selectedGame.name} Website</a>
                        <h4>Released: {selectedGame.release}</h4>
                        <h4>Platforms: {selectedGame.platforms}</h4>
                        <h4>Main Genre: {selectedGame.genre}</h4>
                        <h4>Developers: {selectedGame.developers}</h4>
                        <h4>Publishers: {selectedGame.publishers}</h4>

                        <button>

                          Hide
                        </button>
                      </div>
                    </div>

                    <div className={styles.addToCart}>

                    </div>
                  </div>
                </section>
              </div>
            </AnimatedGamePage>
        </div>
    </>
  );
}

export default GamePage;