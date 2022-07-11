import React from "react";
import styles from "./Filters.module.css";
import { ReactComponent as Wishlist } from "../../Resources/image/wishlist.svg";
import { ReactComponent as Ratings } from "../../Resources/image/ratings.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Action } from "../../Resources/image/action.svg";
import { ReactComponent as Strategy } from "../../Resources/image/strategy.svg";
import { ReactComponent as RPG } from "../../Resources/image/RPG.svg";
import { ReactComponent as Shooter } from "../../Resources/image/shooter.svg";
import { ReactComponent as Adventure } from "../../Resources/image/adventure.svg";
import { ReactComponent as Puzzle } from "../../Resources/image/puzzle.svg";
import { ReactComponent as Racing } from "../../Resources/image/racing.svg";
import { ReactComponent as Sports } from "../../Resources/image/sports.svg";

const Filters = props => {
    return (
        <div className={styles.filters}>
          <h2>Filters</h2>

          <div className={styles.globalFilters}>
               <div className={styles.filterDiv}>
                 <button className={styles.filterBtn}>
                     <Wishlist 
                       className={styles.filterSVG1} 
                     />
                 </button>
                 Wishlist
               </div>
     
               <div className={styles.filterDiv}>
                 <button className={styles.filterBtn2}>
                     <Ratings
                       className={styles.filterSVG2} 
                     />
                 </button>
                 Ratings
               </div>
     
               <div className={styles.filterDiv}>
                 <button className={styles.filterBtn3}>
                     <Reviews
                       className={styles.filterSVG3} 
                       viewBox="0 0 48 48" 
                       style={{ fill: "#fff" }}
                     />
                 </button>
                 Reviews
               </div>
          </div>

          <div className={styles.genreFilters}>
            <h2>Genres</h2>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn3}>
                    <Action 
                      className={styles.filterSVG3} />
                 </button>
                 Action
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn2}>
                     <Strategy className={styles.filterSVG2} />
                 </button>
                 Strategy
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn3}>
                     <RPG className={styles.filterSVG3} />
                 </button>
                 RPG
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn2}>
                     <Shooter className={styles.filterSVG2} />
                 </button>
                 Shooter
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn2}>
                     <Adventure className={styles.filterSVG2} />
                 </button>
                 Adventure
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn4}>
                     <Puzzle className={styles.filterSVG2} />
                 </button>
                 Puzzle
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn3}>
                     <Racing className={styles.filterSVG3} />
                 </button>
                 Racing
            </div>

            <div className={styles.filterDiv}>
                 <button className={styles.filterBtn4}>
                     <Sports className={styles.filterSVG3} />
                 </button>
                 Sports
            </div>
          </div>
        </div>
    )
}

export default Filters;