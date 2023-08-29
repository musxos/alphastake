import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Promotion() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.section
      ref={targetRef}
      className="relative bg-black py-32 lg:py-64"
    >
      <motion.div 
      style={{ opacity }}
      className="container mx-auto px-2 z-50">
        <motion.img
          initial={{ scale: 0.5, opacity: 0, x: 50 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
          src="/line.png"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 50, maxHeight: 0 }}
          whileInView={{ opacity: 1, y: 0, maxHeight: 1000 }}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <p className="text-white leading-normal text-4xl lg:text-[110px] mt-20 font-bold">
            EM<span className="text-gradient-1">POWERING</span> GROUNDBREAKING{" "}
            <br /> PROJECTS SHAPING THE FUTURE OF{" "}
            <span className="text-gradient-1">WEB3</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
