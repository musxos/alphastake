import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 h-20 lg:h-32 bg-white w-full z-50"
    >
      <div className="flex justify-between items-center h-full container mx-auto px-4">
        <img className="w-32 lg:w-72" src="alphastake.png" alt="" />

        <div className="flex items-center gap-4 lg:gap-12">
          <Link href="/" className="text-xl lg:text-4xl">
            Home
          </Link>
          <Link href="/about" className="text-xl lg:text-4xl">
            About
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
