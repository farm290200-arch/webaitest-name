import { Brain, Search, Terminal, Newspaper, Cpu, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-brand rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">
            AI.PULSE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Feed', icon: Newspaper },
            { label: 'Benchmarks', icon: Brain },
            { label: 'Lab', icon: Cpu },
            { label: 'Glossary', icon: Terminal },
          ].map((item, i) => (
            <button
              key={item.label}
              className={cn(
                "text-sm font-medium transition-colors",
                i === 0 ? "text-white border-b-2 border-brand pb-1" : "text-zinc-400 hover:text-white"
              )}
              id={`nav-item-${item.label.toLowerCase().replace(' ', '-')}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search AI insights..."
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-brand/50 w-48 lg:w-64 transition-all"
            />
          </div>
          <button 
            className="p-2 text-white/60 hover:text-brand transition-colors md:hidden"
            id="mobile-menu-trigger"
          >
            <Terminal className="w-6 h-6" />
          </button>
          <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-black font-bold text-xs px-4 py-2 rounded uppercase tracking-wider hover:bg-brand/90 transition-colors"
            id="subscribe-button"
          >
            Real-time Feed
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
