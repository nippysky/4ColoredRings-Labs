/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Link } from "react-scroll";

import { IoMdMoon } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { HiCollection } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import ProductsCard from "./ProductsCard";

import Passengers from "../public/Products/Passengers.png";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [productsMenu, setProductsMenu] = useState(false);
  const [mounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  if (productsMenu === true) {
    // Disable Scroll
    typeof document !== "undefined" &&
      (document.body.style.overflow = "hidden");
  } else {
    // Enable Scroll
    typeof document !== "undefined" && (document.body.style.overflow = "auto");
  }

  return (
    <section>
      <motion.header
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="bg-white dark:bg-black px-5 lg:px-20"
      >
        <div className="flex flex-1 w-full">
          {/* Logo */}
          <div className="w-1/2 lg:w-[10%] items-center mt-2">
            <a href="/" className="cursor-pointer">
              <Image
                src={"/HeadFoot/Passenger.GIF"}
                alt={"Passenger Logo"}
                width={150}
                height={50}
                priority
              />
            </a>
          </div>

          {/* Section Links */}
          <div className="hidden lg:flex lg:gap-10 lg:w-[70%] lg:text-black dark:lg:text-white lg:font-semibold lg:items-center lg:justify-center">
            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="doings"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                >
                  Objectives
                </Link>
              </span>
            </div>

            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="birth"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={400}
                >
                  Lab Birth
                </Link>
              </span>
            </div>

            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Team
                </Link>
              </span>
            </div>

            <div>
              <span className="cursor-pointer md:hover:text-black md:hover:border-b-2 border-royal dark:border-gold dark:md:hover:text-white">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Join Us
                </Link>
              </span>
            </div>
          </div>

          {/* Apps and Theme Mode */}
          <div className="w-1/2 lg:w-[20%] flex gap-[2.3rem] items-center justify-end text-black dark:text-white font-semibold">
            <div>
              <button
                className="flex items-center"
                onClick={() => {
                  if (theme === "light") {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
              >
                <div className="hidden lg:inline relative right-1">
                  {theme === "dark" ? "Return" : "Jump"}
                </div>
                <div>
                  {theme === "dark" ? (
                    <ImSun size={25} />
                  ) : (
                    <IoMdMoon size={25} />
                  )}
                </div>
              </button>
            </div>

            <div>
              <button onClick={() => setProductsMenu(true)} className="flex">
                <span className="hidden lg:inline relative right-2">
                  Collection
                </span>
                <span>
                  <HiCollection size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* PRODUCTS MENU MODAL */}
      {productsMenu && (
        <motion.section
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="fixed bg-white dark:bg-black inset-0 z-50 w-full px-5 lg:px-20"
        >
          <div className="w-full h-[50px] flex justify-between items-center text-royal dark:text-gold font-semibold">
            {/* TITlE */}
            <div>
              <span className="bg-gradient-to-r from-royalGrad1 via-royalGrad3 to-royalGrad3 dark:from-goldenGrad1 dark:via-goldenGrad3 dark:to-goldenGrad3 text-gradient text-[1.5rem] lg:text-[2rem] font-extrabold">
                Collections
              </span>
            </div>
            {/* END OF TITLE */}

            {/* CLOSE BUTTON */}
            <div
              className="flex w-[100px] h-[45px] cursor-pointer pt-1"
              onClick={() => setProductsMenu(false)}
            >
              <span className="relative top-2 right-1">Close</span>
              <span>
                <IoClose size={40} />
              </span>
            </div>
            {/* END OF CLOSE BUTTON */}
          </div>

          <section className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 my-10">
            <ProductsCard link={""} image={Passengers} name={"Passengers"} />
          </section>
        </motion.section>
      )}
      {/* END OF PRODUCTS MENU MODAL */}
    </section>
  );
}

export default Navbar;
