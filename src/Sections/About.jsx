import React from "react";
import { motion } from "framer-motion";
import PROFILE_PIC from "../assets/king3.png";
import { ABOUT_ME } from "../Utils/data";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      {/* Mobile Title */}
      <motion.h4
        className="block lg:hidden w-[200px] section-title text-left mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* Profile Image */}
        <motion.div
          className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="profile-pic"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>

          <motion.p
            className="text-sm text-justify leading-6 whitespace-pre-line mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {ABOUT_ME.content}
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {ABOUT_ME.socilaLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <item.icon className="text-2xl text-[#ac573f] transition-all duration-300 group-hover:text-[#f4a44f]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
