import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewsFeed } from './components/NewsFeed';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen Selection:bg-brand/30 selection:text-white">
      <Navbar />
      <div className="fixed top-[73px] w-full z-40 bg-black text-zinc-400 py-1.5 overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                MSFT +1.2%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                NVDA +4.8%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                GOOGL -0.3%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] italic text-zinc-600">
                Global AI Index Node • Hash: 0xf82a...91
              </span>
            </div>
          ))}
        </div>
      </div>
      <main>

        <Hero />
        <NewsFeed />
        
        {/* Call to Action Section */}
        <section className="py-24 px-6 border-y border-white/5 bg-[#0a0a0b] relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 px-8 py-16 bg-brand/5 border border-brand/20 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
              Daily Intelligence Brief
            </h2>
            <p className="text-zinc-500 mb-10 text-lg max-w-xl mx-auto font-medium">
              Join 45,000+ engineers receiving the latest AI research and breakthroughs every single morning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <input 
                type="email" 
                placeholder="system-node@human.com"
                className="w-full sm:w-80 bg-black/40 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand transition-all font-medium text-sm"
              />
              <button 
                className="w-full sm:w-auto bg-brand text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-widest hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20"
                id="join-network"
              >
                Join Pulse
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

