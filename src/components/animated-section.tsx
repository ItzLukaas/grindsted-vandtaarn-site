"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  id,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px 72px 0px" }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.44,
        ease: [0.25, 0.1, 0.25, 1],
        delay: reduceMotion ? 0 : delay,
      }}
      className={[className, id ? "scroll-mt-28" : ""].filter(Boolean).join(" ")}
    >
      {children}
    </motion.section>
  );
}
