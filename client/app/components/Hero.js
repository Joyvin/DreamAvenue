import { FaAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-10 py-5 px-18 lg:flex-row lg:gap-14 lg:text-left xl:gap-40 lg:pt-28 lg:pb-28">
      <div className="py-4 pl-4 self-stretch flex flex-col items-start flex-[1_0_0] lg:pl-32">
        <div className="py-4 flex flex-col items-start gap-4 lg:py-0 pl-4">
          <motion.div
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
            }}
          >
            <a href="/">
              <div className="flex py-1 px-2 items-start gap-2.5 rounded-[2.3125rem] border-2 border-[#f9cb6f] bg-white">
                <p className="font-normal pl-2">About Us</p>
                <div className="zoom-in">
                  <figure>
                    <img src="/Arrow.svg" />
                  </figure>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.h1
            initial={{ y: "-2rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
            }}
            className="font-bold text-4xl leading-[3rem] tracking-[-0.06rem] md:leading-[3.75rem] 2xl:leading-[4.5rem] 2xl:text-6xl md:text-5xl text-white"
          >
            <span className="text-[#f9cb6f]">Dream Avenue -</span> Real Estate Chain
          </motion.h1>
          <motion.p
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
            }}
            className="font-normal text-white"
          >
            <i>
              <span className="text-[#f9cb6f]">Dream Avenue</span>
            </i>{" "}
            is more than just an app, it's a comprehensive solution created for
            individuals to challenge their friends and have fun.
          </motion.p>
        </div>
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
            delay: 0.5,
          }}
          className="flex flex-row gap-4 py-1 pl-4 md:py-4"
        >
          <button className="py-2.5 px-5 rounded-lg bg-white border border-[#D0D5DD]">
            <a href="/sign-up">
              <div className="flex gap-3">
                <div className="zoom-in">
                  <figure className="pt-1">
                    <FaAddressBook />
                  </figure>
                </div>
                <div>Get Started</div>
              </div>
            </a>
          </button>
          <button className="py-2.5 px-5 rounded-lg bg-[#f9cb6f] text-white">
            <a href="#">Contact Us</a>
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{
          duration: 4,
          type: "spring",
          delay: 0.5,
        }}
        className="w-[20rem] h-[20rem] m-auto md:ml-0 md:mb-0 md:mt-0 md:mr-40 sm:w-[25rem] sm:h-[25rem] lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem] overflow-hidden rounded-[5rem]"
      >
            <img className="w-full h-full" src="/house2.png" alt="" />
      </motion.div>
      {/* <img class="mr-10 lg:h-[30rem] lg:w-[36rem] 2xl:h-[30rem] 2xl:w-[36rem] md:h-[30rem] md:w-[28rem]" src={CompC} alt="Main-img" /> */}
    </div>
  );
}