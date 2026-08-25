"use client";
import React from "react";
import { motion } from "framer-motion";

// 1. Fade Up (Spring reveal)
export const MotionFadeUp = ({ children, delay = 0, duration = 0.7, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 2. Slide In Left (From left with blur)
export const MotionSlideLeft = ({ children, delay = 0, duration = 0.75, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: -60, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 3. Slide In Right (From right with blur)
export const MotionSlideRight = ({ children, delay = 0, duration = 0.75, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 4. Zoom & 3D Perspective Pop
export const MotionZoomPop = ({ children, delay = 0, duration = 0.65, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 25 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, type: "spring", stiffness: 120, damping: 15 }}
    className={className}
  >
    {children}
  </motion.div>
);

// 5. 3D Perspective Flip Up
export const MotionFlip3D = ({ children, delay = 0, duration = 0.8, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 30, y: 40 }}
    whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    style={{ perspective: 1000 }}
    className={className}
  >
    {children}
  </motion.div>
);

// 6. Staggered Container for Grid Children
export const MotionStaggerContainer = ({ children, staggerDelay = 0.12, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.05
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 7. Staggered Child Item
export const MotionStaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 35, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);
