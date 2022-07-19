import styles from './Slider.module.css';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { ReactComponent as Left } from "../../Resources/image/left.svg";
import { ReactComponent as Right } from "../../Resources/image/right.svg";
import { useLocation } from 'react-router-dom';

const Slider = props => {
  const {
    selectedGame,
    setSelectedGame,
    allGames
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
          src={selectedGame.footage[footageIndex] === 0 ? "" : selectedGame.footage[footageIndex]}
        />

        <Left 
          className={styles.left} 
        />

        <Right
          className={styles.right} 
        />
    </div>
  );
}

export default Slider;