import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/king3.png";
import LogoR from "../assets/LogoR.png";
import LogoF from "../assets/LogoF.png";
import LogoP from "../assets/LogoP.png";
import LogoA from "../assets/LogoA.png";
import { STATS } from "../Utils/data";
import StartInfoCard from "../Components/StartInfoCard";
import Resume from "../assets/Saurabh_Verma_resume_web_Developer.pdf";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        {/* Left Side */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl lg:text-2xl font-medium text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            👋 Hi, I'm Pravesh Kumar
          </motion.h3>

          <motion.h1
            className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-[#f4a44f] to-[#ac573f] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building Scalable & User Centric
          </motion.h1>

          {/* Type Animation */}
          <TypeAnimation
            className="w-full lg:w-[480x] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-2 bg-gradient-to-r from-[#f4a44f] to-[#ac573f] bg-clip-text text-transparent"
            sequence={[
              "Web Development",
              1000,
              "Android Application",
              1000,
              "UI/UX Designer",
              1000,
              "Game Development",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <motion.p
            className="w-full lg:w-[500px] text-sm lg:text-base mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm a passionate Full Stack Frontend Developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js, and
            TailwindCSS.
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none action-btn-outline btn-scale-anim"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              <a href={Resume} download="Pravesh Kumar Resume">
                Download Resume
              </a>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Image}
            alt="Profile Pic"
            className="profile-pic"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Tech Logos */}
          {[LogoR, LogoF, LogoP, LogoA].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt=""
              className={`icon-image ${
                index === 0
                  ? "-left-10 bottom-20"
                  : index === 1
                  ? "left-5 md:left-10 -bottom-2"
                  : index === 2
                  ? "left-[110px] md:left-[150px] -bottom-6"
                  : "left-[200px] md:left-[255px] -bottom-9 md:-bottom-10"
              }`}
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="flex gap-12 mt-16 md:mt-24 flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {STATS.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <StartInfoCard count={item.count} label={item.label} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
