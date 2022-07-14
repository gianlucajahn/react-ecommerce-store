import { motion } from "framer-motion";
import React from "react";
import styles from "./AnimatedCard.module.css";

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { opacity: { type: "spring", duration: 2, bounce: 0.4 }} }
}

const AnimatedCard = ({children}) => {
    return (
        <motion.div style={{ margin: 0, padding: 0 }}
          variants={animations}
          initial="initial"
          animate="animate"
        >
            {children}
        </motion.div>
    )
}

export default AnimatedCard;