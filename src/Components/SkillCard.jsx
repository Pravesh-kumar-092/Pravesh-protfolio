import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-[#fce8d4] p-4 shadow-sm hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex gap-3 items-start">
        {/* Icon */}
        <motion.div
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#fdeddd] to-[#ffffff] rounded-[7px]"
          whileHover={{ rotate: 8, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {icon}
        </motion.div>

        {/* Skill Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-black font-medium">{skillName}</p>
            <p className="text-xs text-amber-600 font-medium">{progress} %</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#fce8d4] rounded-md h-[5px] relative mt-2 overflow-hidden">
            <motion.div
              className="bg-amber-800 h-[5px] rounded-md"
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="text-xs text-gray-600 text-justify leading-5 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SkillCard;
