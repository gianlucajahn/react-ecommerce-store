import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Credibility } from "../../Resources/image/credible.svg";
import { ReactComponent as Availability } from "../../Resources/image/available.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Browse } from "../../Resources/image/browse.svg";

const Home = () => {
  return (
    <div className={styles.main}>
        <div className={styles.home}>
            <NavBar />
    
            <div className={styles.home_content}>
                <h1>Game Store</h1>
                <h2>„Heaven for gaming deals“ — IGN</h2>
            </div>
        </div>

        <div className={styles.buttons}>
            <button>
                <Credibility className={styles.svg} />
                <div>
                    <h3>Credible Shop</h3>
                    <p>Excellenct Score</p>
                </div>
            </button>

            <button>
                <Availability className={styles.svg} />
                <div>
                    <h3>High Availability</h3>
                    <p>24-hour Support</p>
                </div>
            </button>

            <button>
                <Reviews className={styles.svg} />
                <div>
                    <h3>Great Reviews</h3>
                    <p>9.4 / 10 Avg. Score</p>
                </div>
            </button>
        </div>

        <div className={styles.home_cred}>
            <button>
                <Browse />
                Browse
            </button>
        </div>
    </div>
  );
}

export default Home;