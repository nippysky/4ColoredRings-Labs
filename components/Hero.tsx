import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="w-full h-screen bg-white dark:bg-black flex items-center justify-center z-1 px-5 md:px-20 overflow-hidden">
      <section className="">
        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-[2.3rem] md:text-[3.3rem] font-extrabold text-black dark:text-white text-center"
        >
          4Coloured Rings Labs
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-[1.2rem] md:text-[1.6rem] leading-12 text-center my-8 font-[400]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        >
          Laboratory that transcends art capabilities and its ability to
          simplify communication through, Storytelling, Gamification, Ecosystem
          experience to engage and inspire people across the globe.
        </motion.p>

        {/* Button */}
        <motion.div
          className="text-center"
          initial={{ x: -2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Link href="/">
            <span className="cursor-pointer bg-black py-3.5 px-[3rem] dark:bg-white text-white dark:text-black font-medium rounded-lg relative top-5 text-center">
              Collection
            </span>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center flex mt-20 justify-center gap-10 text-black dark:text-white"
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <span className="cursor-pointer">
            <Link href="">
              <FaDiscord size={30} />
            </Link>
          </span>
          <span className="cursor-pointer">
            <Link href="">
              <FaTwitter size={30} />
            </Link>
          </span>
        </motion.div>
      </section>
    </section>
  );
}

export default Hero;
