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

        <button className={styles.backwards}>
            <Left 
              className={styles.left} 
            />
        </button>

        <button className={styles.forward}>
            <Right
              className={styles.right} 
            />
        </button>
    </div>
  );
}

export default Slider;