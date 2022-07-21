import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0, transition: { opacity: { type: "spring", duration: 0.4, bounce: 0.5, delay: 0.4 }, y: { type: "spring", duration: 1.25, bounce: 0.575, delay: 0.4 }} },
    exit: { opacity: 0, transition: { opacity: { type: "tween", duration: 0.2 }}},
}

const AnimatedText = ({children}) => {
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

export default AnimatedText;