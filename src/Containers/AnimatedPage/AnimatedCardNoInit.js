import { motion } from "framer-motion";
import React from "react";
import styles from "./AnimatedCard.module.css";

const animations = {
    initial: { opacity: 1 },
    animate: { opacity: 1, transition: { opacity: { type: "spring", duration: 2, bounce: 0.4 }} },
    exit: { opacity: 0, transition: { opacity: { type: "spring", duration: 2, bounce: 0.3 }} },
}

const AnimatedCardNoInit = ({children}) => {
    return (
        <motion.div style={{ margin: 0, padding: 0 }}
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default AnimatedCardNoInit;