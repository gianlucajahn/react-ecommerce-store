import styles from './Slider.module.css';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Left } from "../../Resources/image/left.svg";
import { ReactComponent as Right } from "../../Resources/image/right.svg";
import { ReactComponent as Dot } from "../../Resources/image/dot.svg";
import { useLocation } from 'react-router-dom';

const Slider = props => {
  const {
    selectedGame,
    setSelectedGame,
    allGames,
    incrementCarousel,
    decrementCarousel,
    carouselState,
    setCarouselState,
    hoverState,
    handleHover
  } = props;

  const [footageIndex, setFootageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const selectedGameIndex = allGames.findIndex(game => "/" + game.surname === location.pathname);
    setSelectedGame(allGames[selectedGameIndex]);
  }, []);

  return (

        <div className={styles.slider}>
            <img 
              className={styles.currentImg} 
              src={selectedGame.footage[carouselState]}
            />
    
            <button className={styles.backwards} onClick={decrementCarousel} id="22" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Left 
                  className={styles.left} 
                  style={{ fill: hoverState[22].hovered ? "#fff" : "#ccc" }}
                />
            </button>
    
            <button className={styles.forward} onClick={incrementCarousel} id="23" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Right
                  className={styles.right} 
                  style={{ fill: hoverState[23].hovered ? "#fff" : "#ccc" }}
                />
            </button>
    
            <div className={styles.selectorContainer}>
                <button id="0" onClick={(e) => setCarouselState(0)}>
                    <Dot className={carouselState === 0 ? styles.dotSelected : styles.dot} />
                </button>
                <button id="1" onClick={(e) => setCarouselState(1)}>
                    <Dot className={carouselState === 1 ? styles.dotSelected : styles.dot} />
                </button>
                <button id="2" onClick={(e) => setCarouselState(2)}>
                    <Dot className={carouselState === 2 ? styles.dotSelected : styles.dot} />
                </button>
                <button id="3" onClick={(e) => setCarouselState(3)}>
                    <Dot className={carouselState === 3 ? styles.dotSelected : styles.dot} />
                </button>
            </div>
        </div>
  );
}

export default Slider;