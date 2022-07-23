import styles from './GamePage.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedGamePage from '../AnimatedPage/AnimatedGamePage';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import { ReactComponent as Up } from "../../Resources/image/up.svg";
import { ReactComponent as Down } from "../../Resources/image/down.svg";
import { ReactComponent as Like } from "../../Resources/image/like.svg";
import Slider from '../../Components/Slider/Slider';
import games from '../../utils/games';
import AnimatedText from '../AnimatedPage/AnimatedText';
import { ReactComponent as Add } from "../../Resources/image/add.svg";
import AddedToCartBig from '../../Components/AddedToCart/AddedToCartBig';
import Cart from '../../Components/Cart/Cart';

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
    allGames,
    extended,
    setExtended,
    handleAddToCart,
    handleLike,
    textExtended,
    setTextExtended,
    handleOpenCart,
    handleCloseCart,
    cartDisplayed
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

  const extendText = () => {
    setTextExtended(!textExtended);
  }

  const handleExtend = (e) => {
    if (document.getElementById("20").innerHTML === "More") {
      document.getElementById("20").className="aboutBottom";
    } else if (document.getElementById("20").innerHTML === "Hide") {
        document.getElementById("20").className="aboutBottomClosed";
    }
    setExtended(!extended);
    if (textExtended === false) {
      setTimeout(extendText, 500);
    } else {
        setTextExtended(!textExtended);
    }
  }

  return (
    <>
        <div className={styles.gamepage}>
            {cartDisplayed ? <Cart 
              cartDisplayed={cartDisplayed} 
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
              cart={cart}
              cartAmount={cartAmount}
            /> : null}

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
              handleOpenCart={handleOpenCart}
              handleCloseCart={handleCloseCart}
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
                    incrementCarousel={incrementCarousel}
                    decrementCarousel={decrementCarousel}
                    carouselState={carouselState}
                    setCarouselState={setCarouselState}
                    hoverState={hoverState}
                    handleHover={handleHover}
                  />
                  <div className={styles.gameInfo}>
                    <div className={styles.about}>
                      <div className={styles.aboutTop}>
                        <h2>About</h2>
                        <p>{selectedGame.desc}</p>
                      </div>
                      <div className={extended ? `${styles.conditionalOpen} ${styles.aboutBottom}` : `${styles.conditionalClose} ${styles.aboutBottomClosed}`} id="about">
                        <AnimatedText>
                             <div className={textExtended ? styles.open : styles.closed}>
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
                      <div className={styles.infos}>
                          <h3>{selectedGame.price}</h3>
                          <button id={selectedGame.id} onClick={handleLike}>
                              <Like 
                                className={selectedGame.isLiked ? styles.liked : styles.like}
                              />
                          </button>
                      </div>
                      {selectedGame.inCart ? <AddedToCartBig /> : <button id="21" onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ color: hoverState[21].hovered ? "#92f" : "#999999" }} onClick={handleAddToCart}>
                        Add to cart
                        <Add className={styles.add} style={{ fill: hoverState[21].hovered ? "#92f" : "#999999" }}/>
                      </button>}
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