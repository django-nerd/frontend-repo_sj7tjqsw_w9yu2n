import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-[#0b0d12]/60 dark:via-[#0b0d12]/40 dark:to-[#0b0d12]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs backdrop-blur shadow">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            5,000+ teams collaborating
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            All your teamwork in one unified space.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Chat, collaborate, and create — without switching between apps.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#get-started"
              className="inline-flex justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-600 px-6 py-3 text-slate-900 font-semibold shadow-lg"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#demo"
              className="inline-flex justify-center rounded-xl px-6 py-3 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
            >
              Watch Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
