import styles from './Browse.module.css';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';

const Browse = props => {
  const { 
          handleHover,
          hoverState
        } = props;
    
    const navigate = useNavigate();
    const [browsing, setBrowsing] = useState(true);
    const [landingPage, setLandingPage] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("none");
    
    const handleBrowse = () => {
        navigate('/browse');
    }
    
    const handleHome = () => {
        navigate('/');
    }

    return (
      <div className={styles.Browse}>
        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          browsing={browsing}
          landingPage={landingPage}
        />

        <AnimatedPage>
            <div className={styles.browseContent}>
              <div className={styles.filters}>
                <h2>Filters</h2>
              </div>

              <div className={styles.list}>
                <h1>Trending and interesting</h1>
                <p>Based on player counts and ratings</p>

                <div className={styles.applied}>
                  <button className={styles.filterButton}>Order by: <span>{currentFilter}</span></button>
                  
                  <div className={styles.displayStyle}>
                    <p>Display options:</p>
                    <button className={styles.desktop}>

                    </button>

                    <button className={styles.mobile}>

                    </button>
                  </div>
                </div>

                <div className={styles.grid}>

                </div>
              </div>
            </div>
        </AnimatedPage>
      </div>
    );
  }
  
  export default Browse;