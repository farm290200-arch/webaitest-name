import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-brand/20 rounded border border-brand/30">
                <Brain className="w-6 h-6 text-brand" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                AI <span className="text-brand">PULSE</span>
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Monitoring the global intelligence shift. AI Pulse provides curated, Gemini-authenticated insights into the fast-moving world of artificial intelligence.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-2 border border-white/10 rounded hover:border-brand/40 hover:text-brand transition-colors text-white/40">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Sectors</h4>
            <ul className="space-y-4">
              {['Large Language Models', 'Generative Media', 'Edge Computing', 'Bio-Neural AI', 'Robotics'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-brand transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Research Papers', 'Model Ranking', 'Open Source Hub', 'AI Safety Watch', 'Career Node'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-brand transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 AI PULSE CORE INFRASTRUCTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['Privacy Protocol', 'Service Terms', 'Node Status'].map((f) => (
              <a key={f} href="#" className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-brand transition-colors">{f}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
