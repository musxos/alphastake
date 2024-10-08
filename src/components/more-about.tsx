import { motion } from "framer-motion";

export function MoreAbout() {
  return (
    <section className="min-h-screen bg-black py-16 lg:py-32">
      <div className="container mx-auto px-2">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl lg:text-[110px] text-center text-white font-bold"
        >
          MORE ABOUT <br /> ALPHASTAKE{" "}
          <span className="text-gradient-1">LABS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-white/80 text-3xl lg:text-[60px] mt-36 leading-tight"
        >
          AlphaStake Labs is a forward-thinking web3 company dedicated to
          unlocking the full potential of projects within the web3 community.
          With a strong emphasis on incubating revolutionary web3 projects, we
          are at the forefront of ushering in the next generation of
          decentralized solutions.
        </motion.p>
      </div>
    </section>
  );
}
