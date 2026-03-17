import React from "react";
import { motion } from "framer-motion";

const StartInfoCard = ({ count, label }) => {
  return (
    <motion.div
      className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-r from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5 shadow-sm hover:shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Animated count number */}
      <motion.h4
        className="text-4xl md:text-5xl font-medium text-[#ac573f]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        viewport={{ once: true }}
      >
        {count}
      </motion.h4>

      {/* Label text animation */}
      <motion.p
        className="text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default StartInfoCard;
