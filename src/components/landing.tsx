import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function Landing() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgPosition = useTransform(scrollYProgress, [0, 1], [0, 500]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value, bgPosition.get());
  });

  return (
    <motion.section
      ref={targetRef}
      style={{ y: bgPosition }}
      className="relative h-screen bg-[url(/background.png)] bg-center bg-cover flex items-center justify-center -z-10"
    >
      <motion.img
        style={{ scale, opacity }}
        className="w-80 h-80 lg:w-[512px] lg:h-[512px] object-contain"
        src="/logo.png"
        alt=""
      />
    </motion.section>
  );
}
