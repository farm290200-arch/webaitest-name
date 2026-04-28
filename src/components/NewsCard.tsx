import { formatDistanceToNow, parseISO } from 'date-fns';
import { ExternalLink, ShieldCheck, Clock, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { AINewsItem } from '../services/aiService';
import { cn } from '../lib/utils';

interface NewsCardProps {
  news: AINewsItem;
  index: number;
}

export function NewsCard({ news, index }: NewsCardProps) {
  const categoryColors = {
    Model: 'text-brand border-brand/30 bg-brand/5',
    Hardware: 'text-[#e2e2e4] border-white/10 bg-zinc-800',
    Business: 'text-[#e2e2e4] border-white/10 bg-zinc-800',
    Policy: 'text-[#e2e2e4] border-white/10 bg-zinc-800',
    Breakthrough: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:border-brand/40 hover:bg-zinc-900 transition-all cursor-pointer overflow-hidden"
      id={news.id}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={cn(
          "px-2.5 py-1 text-[9px] font-black uppercase tracking-widest border rounded-md",
          categoryColors[news.category] || 'text-zinc-500 border-white/5 bg-zinc-900'
        )}>
          {news.category}
        </span>
        <div className="flex items-center gap-3 text-zinc-500">
          <div className="flex items-center gap-1.5 font-medium text-[10px]">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatDistanceToNow(parseISO(news.date), { addSuffix: true })}</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-brand transition-colors leading-tight">
        {news.title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
        {news.summary}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-brand" />
          </div>
          <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">{news.source}</span>
        </div>

        <button className="text-brand hover:text-white transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
