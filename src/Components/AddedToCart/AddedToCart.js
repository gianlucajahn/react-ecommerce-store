import styles from './AddedToCart.module.css';
import React from 'react';
import { ReactComponent as Added } from "../../Resources/image/added.svg";
import AnimatedCard from '../../Containers/AnimatedPage/AnimatedCard';

const AddedToCart = props => {
    const {
        game
    } = props;

    return (
        <AnimatedCard>
            <div className={styles.addToCart}>
                <h4>Added</h4>
                <Added className={styles.add} />
            </div>
        </AnimatedCard>
    );
  }
  
  export default AddedToCart;