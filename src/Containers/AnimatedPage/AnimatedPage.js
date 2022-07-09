import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { opacity: 0, x: -150 },
    animate: { opacity: 1, x: 0, transition: { x: { type: "spring", duration: 1, bounce: 0.4 }} },
    exit: { opacity: 0, x: 150, transition: { x: { type: "spring", duration: 0.45, bounce: 0.3 }} },
}

const AnimatedPage = ({children}) => {
    return (
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;