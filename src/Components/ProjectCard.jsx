import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, tags }) => {
  return (
    <motion.div
      className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
        transition={{ duration: 0.4 }}
      />
      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs text-gray-700 bg-orange-100 px-3 py-1 rounded"
              whileHover={{ scale: 1.1, backgroundColor: "#f4a44f" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
