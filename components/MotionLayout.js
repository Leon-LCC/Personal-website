import { motion } from "framer-motion";


const MotionLayout = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }

    return (
        <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 1, type: 'easeInOut' }} style={{ position: 'relative' }}>
            {children}
        </motion.div>
    );
}

export default MotionLayout;