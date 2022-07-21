import { motion } from "framer-motion";
import React from "react";

const animations = {
    initial: { scaleY: 1, scaleX: 1, fill: "#999" },
    animate: { scaleY: 1.225, scaleX: 1.225, fill: "#FD2727", transition: { scaleY: { type: "spring", duration: 1.25, bounce: 0.4 }, scaleX: { type: "spring", duration: 1.25, bounce: 0.4 }} }
}

const AnimatedLike = ({children}) => {
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

export default AnimatedLike;