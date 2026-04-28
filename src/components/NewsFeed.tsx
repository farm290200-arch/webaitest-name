import { useState, useEffect } from 'react';
import { fetchLatestAINews, AINewsItem } from '../services/aiService';
import { NewsCard } from './NewsCard';
import { RefreshCcw, LayoutGrid, List, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function NewsFeed() {
  const [news, setNews] = useState<AINewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLatestAINews();
      setNews(data);
    } catch (err) {
      setError('System connection interrupted. Failed to synchronize with news nodes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-brand font-black text-[10px] uppercase tracking-[0.2em]">
              Trending Real-Time Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase italic">
              Global Stream
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900 px-4 py-2 rounded-full border border-white/5">
            <button 
              onClick={loadNews}
              disabled={loading}
              className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
              id="refresh-feed"
            >
              <RefreshCcw className={cn("w-3.5 h-3.5", loading && "animate-spin")} />
              {loading ? 'Synchronizing...' : 'Snyc Pulse'}
            </button>
            <div className="h-4 w-[1px] bg-zinc-800"></div>
            <div className="flex gap-4">
              <button className="text-brand">
                 <LayoutGrid className="w-4 h-4" />
              </button>
              <button className="text-zinc-600 hover:text-white transition-colors">
                 <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl flex items-center gap-4 mb-10">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            <p className="text-red-500 font-mono text-xs uppercase tracking-wider">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && news.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-white/5 border border-white/10 rounded-xl animate-pulse" />
            ))
          ) : (
            <>
              {news.map((item, index) => (
                <NewsCard key={item.id} news={item} index={index} />
              ))}
            </>
          )}
        </div>

        {!loading && news.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-white/30 font-mono text-sm uppercase tracking-widest italic">No pulse detected in current sector.</p>
          </div>
        )}
      </div>
    </section>
  );
}
