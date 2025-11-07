import React, { useEffect, useState } from 'react';
import { Moon, Sun, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved ? saved === 'dark' : prefersDark;
    setDark(initialDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0d12] dark:text-slate-100 selection:bg-yellow-300/40 selection:text-slate-900">
      <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg/10 shadow-black/10 dark:shadow-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-white/5' : ''}`}>        
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold text-lg">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-600 shadow-inner" />
            <span>Unified</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-yellow-500 transition-colors">Features</a>
            <a href="#demo" className="hover:text-yellow-500 transition-colors">Demo</a>
            <a href="#testimonials" className="hover:text-yellow-500 transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setDark(v => !v)}
              aria-label="Toggle dark mode"
              className="inline-flex items-center justify-center rounded-full p-2 bg-white/70 dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10 backdrop-blur hover:ring-2 ring-yellow-500"
            >
              {dark ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-slate-700"/>}
            </motion.button>
            <a href="#get-started" className="ml-1 hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 px-4 py-2 text-slate-900 font-semibold shadow hover:brightness-105 transition">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="scroll-smooth">{children}</main>

      <footer className="mt-24 border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-600" />
              <span className="font-semibold">Unified Collaboration</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">All your teamwork in one place. Built for focus, speed, and clarity.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="space-y-1">
                <li><a href="#features" className="hover:text-yellow-500">Features</a></li>
                <li><a href="#demo" className="hover:text-yellow-500">Demo</a></li>
                <li><a href="#testimonials" className="hover:text-yellow-500">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <div className="flex gap-3">
                <a aria-label="GitHub" href="#" className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:text-yellow-500"><Github size={18}/></a>
                <a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:text-yellow-500"><Twitter size={18}/></a>
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-black/5 dark:bg-white/10 hover:text-yellow-500"><Linkedin size={18}/></a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Stay in the loop</h4>
            <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
              <input type="email" required placeholder="you@company.com" className="w-full rounded-xl bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 px-4 py-2 outline-none focus:ring-2 ring-yellow-500"/>
              <button className="rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-600 px-4 py-2 text-slate-900 font-semibold shadow hover:brightness-105">Join</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 pb-8">© {new Date().getFullYear()} Unified. All rights reserved.</div>
      </footer>

      {/* Floating helper button (chatbot feel) */}
      <motion.button
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 p-4 shadow-2xl text-slate-900"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Layout;
