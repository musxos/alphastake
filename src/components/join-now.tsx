import { motion } from "framer-motion";

export function JoinNow() {
  return (
    <section className=" bg-white py-32">
      <div className="container mx-auto flex flex-col justify-center">
        <h2 className="text-7xl lg:text-[180px] text-center font-bold">
          JOIN NOW
        </h2>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white bg-black rounded-[20px] px-8 py-5 text-xl w-max mx-auto mt-12"
        >
          Partner with Alphastake
        </motion.button>
      </div>
    </section>
  );
}
