/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Khan from "../public/Team/Khan.svg";
import teamMembers from "../content";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";

function Team() {
  return (
    <motion.section
      id="team"
      className="bg-white dark:bg-black w-full px-7 my-10 py-[2rem] md:my-20 md:min-h-screen md:px-20 md:py-[7rem]"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Heading */}
      <div>
        <h3 className="font-bold text-black dark:text-white text-[1.75rem] md:text-3xl leading-[1.5]">
          Lab Members
        </h3>
        <p className="text-black dark:text-white text-[1.1rem] md:text-[1.2rem] pt-8">
          Collectives that have transcended and sees the possibilities of
          linking the physical with the digital.
        </p>
      </div>

      {/* Founder Card */}
      <section className="flex flex-col gap-24 lg:flex-row md:flex-1 lg:gap-48 w-full mt-[7rem] lg:items-start lg:justify-start">
        <div className="w-full text-center lg:text-left lg:w-1/2">
          <Image
            src={Khan}
            alt="Khan-Founder"
            width={385}
            height={385}
            quality={100}
            priority
          />

          <div className="my-2">
            <h5 className="text-[1rem] text-amber font-semibold">
              Founder / Idealist
            </h5>
            <p className="mt-1 text-[1.2rem] text-black dark:text-white">
              Temujin khan
            </p>
            <p className="mt-1 text-[1.2rem] text-[#FFD700]">
              As: Davidson Smart
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="mt-10">
            <p className="text-[1.1rem] md:text-[1.2rem] text-black dark:text-white mb-7">
              On August 30th 2021, while on his hospital bed although his
              movements was trapped his mind not. His mind wonder to the vision
              “4coloured rings labs”. A lab born to transcend the power of art
              itself.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 w-full my-5 mt-7 lg:mt-[10rem]">
        {teamMembers.map((teamMember: any): any => {
          return (
            <TeamCard
              key={teamMember.id}
              image={teamMember.image}
              title={teamMember.title}
              name={teamMember.name}
              alias={teamMember.alias}
            />
          );
        })}
      </section>
    </motion.section>
  );
}

export default Team;
