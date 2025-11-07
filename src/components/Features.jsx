import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Video, Bot, Kanban, FileStack, Cloud, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Real-time Chat & Video Calls',
    desc: 'Low-latency messaging, HD calls, and seamless screen sharing.',
    icons: [MessageSquare, Video],
    gradient: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'Smart Task Boards & AI Assistant',
    desc: 'Automate routine work with AI and streamline sprints with Kanban.',
    icons: [Kanban, Bot],
    gradient: 'from-violet-400/20 to-fuchsia-400/20',
  },
  {
    title: 'File Sharing & Cloud Integration',
    desc: 'Secure storage, previews, and integrations with your favorite clouds.',
    icons: [FileStack, Cloud],
    gradient: 'from-amber-300/20 to-yellow-400/20',
  },
  {
    title: 'Team Analytics Dashboard',
    desc: 'Measure velocity, balance workloads, and celebrate wins.',
    icons: [BarChart3],
    gradient: 'from-sky-400/20 to-indigo-400/20',
  },
];

const FeatureCard = ({ title, desc, icons, gradient }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br ${gradient} p-[1px]`}
    >
      <div className="rounded-2xl h-full bg-white/70 dark:bg-[#0b0d12]/60 backdrop-blur p-6">
        <div className="flex gap-2 mb-4">
          {icons.map((Icon, i) => (
            <div key={i} className="p-2 rounded-xl bg-black/5 dark:bg-white/10">
              <Icon size={18} />
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Designed for flow, built for scale</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Everything your team needs to move fast — with clarity and control.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
