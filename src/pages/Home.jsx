import Popular from "../components/Popular";
import Veget from "../components/Veget";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veget />
      <Popular />
    </motion.div>
  );
}

export default Home;
