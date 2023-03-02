import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";
import DoCard from "./DoCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import all Icons For The Doings Section
import Ring1 from "../public/Doings/Ring1.svg";
import Ring2 from "../public/Doings/Ring2.svg";
import Ring3 from "../public/Doings/Ring3.svg";
import Ring4 from "../public/Doings/Ring4.svg";
import autobuss from "../public/Doings/autobuss.gif";

function Doings() {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="doings"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[8rem] overflow-hidden"
    >
      <section className="flex flex-col gap-24 lg:flex-row w-full lg:gap-48">
        {/* Focus Div */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h3 className="font-bold text-black dark:text-white text-[1.75rem] md:text-3xl leading-[1.5] capitalize">
            We Want To Build a world
          </h3>
          <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8 mb-5 text-justify">
            A world,ridden by its people. A perfect world is something nearly
            impossible to achieve and a far way out from where humans are today.
            Our idea for a perfect world shall be called “TranscendedEarth” .
            Passengers utopia, taking place very far into the future.
          </p>

          <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8 mb-10 text-justify">
            First things first, there would be some rules to establish and
            passengers for the journey. Hop in to the ridden ecosystem of
            passengers and experience the journey to our digital world from its
            adam
          </p>

          <Button link="">
            <span className="text-black dark:text-white">
              Become A Passenger
            </span>
            <span className="relative left-3 text-black dark:text-white">
              <HiArrowNarrowRight size={25} />
            </span>
          </Button>

          <div className="mt-10">
            <Image
              src={autobuss}
              alt={"passenger gif"}
              width={600}
              height={1200}
              layout="responsive"
              priority
            />
          </div>
        </motion.div>

        {/* Detailed Tile List */}
        <div className="w-full lg:w-1/2">
          <h3 className="font-bold text-black dark:text-white text-[1.75rem] md:text-3xl leading-[1.5] mb-10">
            Objectives
          </h3>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <DoCard
              image={Ring1}
              heading={"Lifestyle"}
              text={
                "Passengers in the ridden ecosystem experience  some basic elements of what our world is like today. However the goal isn’t to leave others behind while some push forward, but instead move everyone forward as a whole."
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <DoCard
              image={Ring2}
              heading={"Economy"}
              text={
                "Currency is always a major factor to consider in a society. Pass Earth wouldn’t be any different, There will be only one acceptable currency in the ridden ecosystem called “ senger -Coin “but however, the will be what is called “The Ring Payment as well”."
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 1.1 }}
          >
            <DoCard
              image={Ring3}
              heading={"Storytelling"}
              text={
                "Everything has a beginning, an origin, and a reason to talk about it."
              }
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <DoCard
              image={Ring4}
              heading={"Community"}
              text={
                "In the ridden - ecosystem , Passengers have complete control and governance to what they wish to earn through gamification. Effort is rewarded accordingly."
              }
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default Doings;
