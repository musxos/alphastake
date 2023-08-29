import { motion } from "framer-motion";

export function Tokens() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black py-32"
    >
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        whileInView={{ maxHeight: 1000, opacity: 1 }}
        exit={{ maxHeight: 0, opacity: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-2 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl leading-normal lg:text-[110px] text-center text-white font-bold"
        >
          LABS EMPOWERED BY DYNASWAP{" "}
          <span className="text-gradient-1">TOKENS</span>{" "}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50, color: "#000" }}
          whileInView={{ opacity: 1, y: 0, color: "#fff" }}
          className="text-white/80 text-3xl lg:text-[60px] mt-36 leading-normal"
        >
          AlphaStake Lab’s mission is to provide comprehensive support and
          guidance to web3 ambitious projects, empowering them to unlock their
          full potential. Through our resources, and extensive network within
          the web3 ecosystem, we help catalyze the growth and success of our
          incubatees.{" "}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
