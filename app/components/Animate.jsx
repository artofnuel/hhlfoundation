"use client";
import React from "react";
import { motion } from "framer-motion";

export const Animate = ({ children }) => {
  const componentVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.6, 0.01, -0.05, 0.95],
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };
  return (
    <motion.section
      variants={componentVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};
