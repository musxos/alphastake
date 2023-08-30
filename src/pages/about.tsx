import { Navbar } from "@/components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const position = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <main>
      <motion.div
        ref={targetRef}
        style={{ scale, opacity, y: position }}
        className="h-screen bg-white -z-10 relative"
      >
        <div className="flex flex-col h-full justify-between container mx-auto text-center py-32 lg:py-64">
          <h1 className="text-6xl lg:text-8xl font-bold">ABOUT</h1>
          <h1 className="text-6xl lg:text-8xl font-bold">ALPHASTAKE LABS</h1>
        </div>
      </motion.div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center py-16 lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          className="container mx-auto px-2"
        >
          <p className="text-2xl lg:text-[90px] leading-normal text-center font-bold">
            ALPHASTAKE LABS IS AN EVOLVING WEB3 INCUBATOR THAT PROVIDES
            RESOURCES, SUPPORT, & MENTORSHIP TO EARLY-STAGE STARTUPS SHAPING THE
            FUTURE OF WEB3 TECHNOLOGIES.
          </p>
        </motion.div>
      </motion.div>
      <div className="min-h-screen py-16 lg:py-32">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 border-y">
            <div className="border-r grid-col-1 lg:pr-8 py-16">
              <motion.p
                initial={{ opacity: 0, x: 50, color: "#fff" }}
                whileInView={{ opacity: 1, x: 0, color: "#000" }}
                transition={{ duration: 1 }}
                className="lg:text-left text-center text-2xl lg:text-[70px] leading-normal font-bold"
              >
                Leading the way in web3 incubation and decentralized Tech
              </motion.p>
            </div>
            <div className="grid-cols-1 py-16 lg:pl-8 text-2xl lg:text-[30px] lg:text-left text-center">
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-20"
              >
                At AlphaStake, we recognize the immense potential of
                decentralization to reshape industries and revolutionize the way
                we interact with digital systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Our mission is to identify, support, and incubate the most
                promising startups and entrepreneurs who are leveraging
                decentralized tech to build transformative solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mb-20"
              >
                Through strategic partnerships, and constant support, we create
                an environment that fosters growth and collaboration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                We also believe we can drive forward the adoption and mainstream
                integration of decentralized apps (DApps).
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-16 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-2"
        >
          <h1 className="text-4xl lg:text-[200px] font-bold whitespace-nowrap mb-12 leading-normal">
            OUR ROADMAP
          </h1>

          <button className=" px-16 lg:px-32 py-8 lg:py-12 bg-black rounded-xl text-white font-bold text-2xl">
            Coming Soon
          </button>
        </motion.div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto">
          <div className="py-32 lg:py-64 text-white text-center font-bold">
            <h1 className="text-6xl lg:text-[120px] leading-normal">
              LET&rsquo;S BUILD{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gradient-1"
              >
                WEB3
              </motion.span>{" "}
              TOGETH
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-gradient-1 "
              >
                ER
              </motion.span>
            </h1>
          </div>
          <div className="py-64">
            <div className="flex items-center text-center lg:items-baseline lg:flex-row flex-col gap-44">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">Home</h3>
                <h3 className="text-4xl font-bold">About</h3>
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">Privacy Policy</h3>
                <h3 className="text-4xl font-bold">Terms of Use</h3>
              </div>
              <div className="flex flex-col gap-8 lg:ml-auto text-center lg:text-right">
                <h3 className="text-4xl font-bold">Twitter</h3>
                <h3 className="text-4xl font-bold">Telegram</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
