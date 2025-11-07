import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Ava Thompson', role: 'Head of Product, NovaSoft', text: 'We replaced 4 tools and cut meeting time in half. The team finally feels in sync.', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Daniel Kim', role: 'CTO, PixelForge', text: 'Fast, clean, and delightful. The live presence and boards are game-changers.', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Priya Patel', role: 'Operations, BlueWave', text: 'Setup was instant. Our onboarding flow is now effortless and measurable.', avatar: 'https://i.pravatar.cc/100?img=11' },
  { name: 'Luis Garcia', role: 'Engineering Manager, AeroLab', text: 'The analytics helped us visualize bottlenecks and improve cycle time by 22%.', avatar: 'https://i.pravatar.cc/100?img=15' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Loved by modern teams</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Hear from folks shipping great work with Unified.</p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[280px] sm:min-w-[360px] rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="#D4AF37" color="#D4AF37" />)}
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">“{t.text}”</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
