import { motion } from 'motion/react';
import { Zap, Globe, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden px-6">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/5 rounded-full mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              MAY 24, 2024 <span className="w-1 h-1 bg-zinc-700 rounded-full" /> LIVE UPDATES
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white leading-[1] max-w-5xl mx-auto">
            The Future of <span className="text-brand">Intelligence</span> Decoded.
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 font-medium">
            Internal documents suggest the next generation of model architectures will prioritize context retention over raw parameter count.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-8 py-3 rounded-md text-sm font-bold shadow-lg shadow-white/5"
            >
              Deploy Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 text-white border border-white/5 px-8 py-3 rounded-md text-sm font-bold"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
