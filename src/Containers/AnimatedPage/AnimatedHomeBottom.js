import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { opacity: 0, y: 125 },
    animate: { opacity: 1, y: 0, transition: { y: { type: "spring", duration: 1, bounce: 0.5 }} },
    exit: { opacity: 0, y: 125, transition: { y: { type: "tween", duration: 0.5, bounce: 0.3 }} },
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