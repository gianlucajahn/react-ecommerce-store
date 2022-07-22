import styles from './Slider.module.css';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Left } from "../../Resources/image/left.svg";
import { ReactComponent as Right } from "../../Resources/image/right.svg";
import { useLocation } from 'react-router-dom';
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

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
  const slideRef = React.createRef();
  const location = useLocation();
  let indicatorList = document.getElementsByClassName('indicator');

  useEffect(() => {
    const selectedGameIndex = allGames.findIndex(game => "/" + game.surname === location.pathname);
    setSelectedGame(allGames[selectedGameIndex]);
  }, []);

  const properties = {
    duration: 6000,
    autoplay: false,
    transitionDuration: 800,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (i) => <div className={styles.indicator}>
                           {i + 1}
                       </div>
  };

  const slideImages = [
    selectedGame.footage[0],
    selectedGame.footage[1],
    selectedGame.footage[2],
    selectedGame.footage[3]
  ];

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  return (
        <div className={styles.slider}>
          <Slide ref={slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className={styles.slide}>
                <img className={styles.currentImg} src={each} alt="sample" />
              </div>
            ))}
          </Slide>
    
            <button className={styles.backwards} onClick={back} id="22" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Left 
                  className={styles.left} 
                  style={{ fill: hoverState[22].hovered ? "#fff" : "#ccc" }}
                />
            </button>
    
            <button className={styles.forward} onClick={next} id="23" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <Right
                  className={styles.right} 
                  style={{ fill: hoverState[23].hovered ? "#fff" : "#ccc" }}
                />
            </button>
            <div className={styles.selectorContainer}>

            </div>
        </div>
  );
}

export default Slider;