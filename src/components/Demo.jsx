import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckSquare, Calendar, Folder } from 'lucide-react';

const tabs = [
  { key: 'chat', label: 'Chat', icon: MessageSquare },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'meetings', label: 'Meetings', icon: Calendar },
  { key: 'files', label: 'Files', icon: Folder },
];

const Demo = () => {
  const [active, setActive] = useState('chat');
  const [online, setOnline] = useState(128);

  React.useEffect(() => {
    const id = setInterval(() => {
      setOnline(v => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const nv = Math.max(87, Math.min(512, v + delta));
        return nv;
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">See it in action</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Click between tabs to preview the workspace.</p>
          </div>
          <div className="text-sm rounded-full border border-black/10 dark:border-white/10 px-3 py-1 bg-white/70 dark:bg-white/5 backdrop-blur">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/> {online} online</span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-3">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${active === key ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-300'}`}
              >
                <Icon size={16} /> {label}
                {active === key && (
                  <motion.span layoutId="bubble" className="absolute inset-0 -z-0 rounded-xl bg-yellow-300/40 dark:bg-yellow-300/20" />
                )}
              </button>
            ))}
          </div>

          <div className="relative mt-4 min-h-[240px] rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <AnimatePresence mode="wait">
              {active === 'chat' && (
                <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-6 grid gap-3">
                  <div className="text-xs text-slate-500"># general</div>
                  <div className="rounded-xl p-3 bg-black/5 dark:bg-white/10 w-fit">Hey team! Standup in 5 ⏱️</div>
                  <div className="rounded-xl p-3 bg-gradient-to-tr from-yellow-300/40 to-amber-400/30 text-slate-900 w-fit">On my way! 🚀</div>
                  <div className="rounded-xl p-3 bg-black/5 dark:bg-white/10 w-fit">Sharing the brief now…</div>
                </motion.div>
              )}
              {active === 'tasks' && (
                <motion.div key="tasks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-6">
                  <div className="grid sm:grid-cols-3 gap-4">
                    {['Backlog','In Progress','Done'].map((col, i)=> (
                      <div key={i} className="rounded-xl p-3 bg-black/5 dark:bg-white/10">
                        <div className="font-semibold text-sm mb-2">{col}</div>
                        <div className="space-y-2">
                          <div className="rounded-lg p-2 bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10">Design call UI</div>
                          <div className="rounded-lg p-2 bg-white/80 dark:bg-white/10 border border-black/5 dark:border-white/10">Implement presence</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {active === 'meetings' && (
                <motion.div key="meetings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-6 grid place-items-center text-center">
                  <div className="rounded-2xl p-6 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10">
                    <div className="text-sm">Next: Sprint Review</div>
                    <div className="text-2xl font-bold mt-1">Today, 3:30 PM</div>
                    <button className="mt-4 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-4 py-2 text-slate-900 font-semibold">Join call</button>
                  </div>
                </motion.div>
              )}
              {active === 'files' && (
                <motion.div key="files" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-6 grid sm:grid-cols-3 gap-4">
                  {['Spec.pdf','Roadmap.xlsx','Pitch.pptx'].map((f,i)=> (
                    <div key={i} className="rounded-xl p-4 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                      <div className="text-sm font-medium">{f}</div>
                      <div className="text-xs text-slate-500 mt-1">Updated 2d ago</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
