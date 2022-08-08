import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { x: { type: "spring", duration: 0.9, bounce: 0.4 }} },
    exit: { opacity: 0, x: -200, transition: { x: { type: "tween", duration: 0.4, bounce: 0.3 }} },
}

const AnimatedGamePage = ({children}) => {
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

export default AnimatedGamePage;