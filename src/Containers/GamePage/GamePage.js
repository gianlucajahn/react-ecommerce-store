import styles from './GamePage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import { ReactComponent as Up } from "../../Resources/image/up.svg";
import { ReactComponent as Down } from "../../Resources/image/down.svg";
import Slider from '../../Components/Slider/Slider';
import games from '../../utils/games';
import AnimatedText from '../AnimatedPage/AnimatedText';

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
  const [extended, setExtended] = useState(true);

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

  const handleExtend = (e) => {
    setExtended(!extended);
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
                      <div className={extended ? styles.aboutBottom : styles.aboutBottomClosed}>
                        <AnimatedText>
                             <div className={extended ? styles.open : styles.closed}>
                                 <a href={selectedGame.link} target="_blank">{selectedGame.name} Website</a>
                                 <h4>Released: {selectedGame.release}</h4>
                                 <h4>Platforms: {selectedGame.platforms}</h4>
                                 <h4>Main Genre: {selectedGame.genre}</h4>
                                 <h4>Developers: {selectedGame.developers}</h4>
                                 <h4 className={styles.lastChild}>Publishers: {selectedGame.publishers}</h4>
                             </div>
                        </AnimatedText>

                        <button id="20" onClick={handleExtend} onMouseEnter={handleHover} onMouseLeave={handleHover} className={hoverState[20].hovered ? styles.buttonHovered : styles.buttonNotHovered}>
                          {extended ? "Hide" : "More"}
                          {extended ? <Up  className={styles.up} style={{ fill: hoverState[20].hovered ? "#fff" : "#cccccc" }}/> : <Up className={styles.down} style={{ fill: hoverState[20].hovered ? "#fff" : "#cccccc" }}/>}
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