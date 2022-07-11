import styles from './Browse.module.css';
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import { ReactComponent as Grid } from "../../Resources/image/grid.svg";
import { ReactComponent as Columns } from "../../Resources/image/columns.svg";
import Filters from '../../Components/Filters/Filters';

const Browse = props => {
  const { 
          handleHover,
          hoverState
        } = props;
    
    const navigate = useNavigate();
    const [browsing, setBrowsing] = useState(true);
    const [landingPage, setLandingPage] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("none");
    const [grid, setGrid] = useState(true);
    
    const handleBrowse = () => {
        navigate('/browse');
    }
    
    const handleHome = () => {
        navigate('/');
    }

    const handleLayoutSwitch = (e) => {
      if (e.target.id == "grid") {
        setGrid(true);
      } else {
        setGrid(false);
      }
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
              <Filters />

              <div className={styles.list}>
                <h1>Trending and interesting</h1>
                <p>Based on player counts and ratings</p>

                <div className={styles.applied}>
                  <button className={styles.filterButton}>Order by: <span>{currentFilter}</span></button>
                  
                  <div className={styles.displayStyle}>
                    <p>Display options:</p>
                    <button className={styles.displayBtn}>
                      <Grid 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#e5e5e5" : "#6f6f6f" }}
                        onClick={handleLayoutSwitch} 
                        id="grid"
                      />
                    </button>

                    <button className={styles.displayBtn}>
                      <Columns 
                        className={styles.displayItem} 
                        style={{ fill: grid ? "#6f6f6f" : "#e5e5e5" }}
                        onClick={handleLayoutSwitch} 
                        id="columns"
                      />
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