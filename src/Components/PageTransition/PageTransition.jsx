import { motion } from 'framer-motion';

const SmoothTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothTransition;