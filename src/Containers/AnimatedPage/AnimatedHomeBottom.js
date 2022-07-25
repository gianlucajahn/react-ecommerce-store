import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { opacity: 0, y: 175 },
    animate: { opacity: 1, y: 0, transition: { y: { type: "spring", duration: 0.9, bounce: 0.4 }} },
    exit: { opacity: 0, y: 175, transition: { y: { type: "tween", duration: 0.6, bounce: 0.3 }} },
}

const AnimatedHomeBottom = ({children}) => {
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

export default AnimatedHomeBottom;