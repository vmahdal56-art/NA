import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Lock, 
  Share2, 
  Smartphone, 
  Download, 
  HelpCircle, 
  Twitter, 
  Instagram, 
  Youtube, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Twitch,
  ArrowDownCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Siren, 
  Brain, 
  ShieldAlert, 
  AlertTriangle, 
  BookOpen, 
  Cpu, 
  Navigation, 
  Globe, 
  Sparkles, 
  Flame, 
  Heart, 
  Users, 
  Smile, 
  Gamepad2, 
  Cherry, 
  MapPin, 
  Check, 
  X, 
  Crown, 
  Info, 
  XCircle, 
  Send,
  FileText, 
  Anchor, 
  ShoppingCart, 
  Ghost, 
  ExternalLink, 
  Apple, 
  Clock, 
  Star, 
  Phone,
  Battery, 
  Wifi, 
  Signal, 
  Music, 
  Wind 
} from 'lucide-react';

// ---------------------------------------------------------
// DATABASE IMPORT FROM DNA
// ---------------------------------------------------------

import { 
    ORCHARD_DATA, 
    GENESIS_POINTS, 
    INITIALS, 
    ASSETS, 
    AXIOM, 
    DIRECTOR_FULL_TEXT,
    FOOTER_LINKS 
} from './ManifestoDatabase';

// ---------------------------------------------------------
// LOCAL UI RADAR DATA
// ---------------------------------------------------------

const RADAR_USERS = [
  { 
      id: 1, 
      name: "Alpha", 
      score: 98, 
      intent: "🍍", 
      x: 30, 
      y: 35 
  },
  { 
      id: 2, 
      name: "Snake", 
      score: 12, 
      intent: "🐍", 
      x: 75, 
      y: 20 
  },
  { 
      id: 3, 
      name: "Beta", 
      score: 94, 
      intent: "🍌", 
      x: 55, 
      y: 70 
  },
  { 
      id: 4, 
      name: "Gamma", 
      score: 88, 
      intent: "🍑", 
      x: 82, 
      y: 55 
  }
];

// ---------------------------------------------------------
// MASTER MATRIX CONFIGURATION
// ---------------------------------------------------------

const MATRIX_FEATURES = [
    { 
        name: "Radar Range", 
        t1: "30m", 
        t2: "100m", 
        t3: "500m", 
        t4: "1km", 
        t5: "Global", 
        t6: "God Mode" 
    },
    { 
        name: "Active Fruits", 
        t1: "1", 
        t2: "2", 
        t3: "3", 
        t4: "4", 
        t5: "All", 
        t6: "All" 
    },
    { 
        name: "See Who Liked", 
        t1: false, 
        t2: false, 
        t3: true, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Ghost Mode", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Travel (Teleport)", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: false, 
        t5: true, 
        t6: true 
    },
    { 
        name: "No Ads", 
        t1: false, 
        t2: true, 
        t3: true, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Super Likes/Day", 
        t1: "0", 
        t2: "1", 
        t3: "3", 
        t4: "5", 
        t5: "10", 
        t6: "∞" 
    },
    { 
        name: "Rewind (Undo)", 
        t1: false, 
        t2: false, 
        t3: true, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Priority Listing", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Incognito", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Read Receipts", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: true, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Founder Badge", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: false, 
        t5: true, 
        t6: true 
    },
    { 
        name: "Hendy Zone Access", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: false, 
        t5: false, 
        t6: true 
    },
    { 
        name: "Legacy Transfer", 
        t1: false, 
        t2: false, 
        t3: false, 
        t4: false, 
        t5: false, 
        t6: true 
    },
    { 
        name: "Support Level", 
        t1: "Bot", 
        t2: "Email", 
        t3: "24h", 
        t4: "1h", 
        t5: "Direct", 
        t6: "VIP" 
    }
];

// ---------------------------------------------------------
// FAQ SYSTEM
// ---------------------------------------------------------

const FAQ_DATA = [
    { 
        q: "Is this a dating app?", 
        a: "NO. It is a Reality Operating System. We verify intent via hardware, not text." 
    },
    { 
        q: "Why London Zone 1?", 
        a: "We conquer territory strategically. Zone 1 is the proving ground for the Matrix." 
    },
    { 
        q: "What is the 12-Fruit Oath?", 
        a: "A binding protocol. If you pick Pineapple (Serious), you physically cannot interact with Banana (Fling)." 
    },
    { 
        q: "Is my data safe?", 
        a: "We do not sell data. We are funded by the 10% Jarmila Heart-Cut, not ads." 
    }
];

// ---------------------------------------------------------
// UI COMPONENTS
// ---------------------------------------------------------

const SocialDock = () => (
  <div className="flex gap-4 md:gap-6 mt-10 justify-center md:justify-start flex-wrap opacity-60 hover:opacity-100 transition-opacity">
    <a href="https://x.com/nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Twitter size={24} className="text-slate-500 hover:text-[#1DA1F2]" />
    </a>
    <a href="https://instagram.com/nearauraapp" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Instagram size={24} className="text-slate-500 hover:text-[#E1306C]" />
    </a>
    <a href="https://tiktok.com/@nearauraapp" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Music size={24} className="text-slate-500 hover:text-[#00f2ea]" />
    </a>
    <a href="https://youtube.com/@nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Youtube size={24} className="text-slate-500 hover:text-[#FF0000]" />
    </a>
    <a href="https://facebook.com/nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Facebook size={24} className="text-slate-500 hover:text-[#1877F2]" />
    </a>
    <a href="https://linkedin.com/company/nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Linkedin size={24} className="text-slate-500 hover:text-[#0A66C2]" />
    </a>
    <a href="https://pinterest.com/nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <Wind size={24} className="text-slate-500 hover:text-[#E60023]" />
    </a>
    <a href="https://wa.me/message/nearaura" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
        <MessageCircle size={24} className="text-slate-500 hover:text-[#25D366]" />
    </a>
  </div>
);

// ---------------------------------------------------------

const WaitlistForm = () => {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => { 
        e.preventDefault(); 
        if(email) setJoined(true); 
    };
    
    if(joined) return (
        <div className="text-[#22D3EE] font-black uppercase tracking-widest bg-[#22D3EE]/10 p-6 rounded-xl border border-[#22D3EE]">
            Aura Secured. Welcome to the Queue.
        </div>
    );
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">Join the Sovereign Queue</h3>
            <div className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL..." 
                    className="bg-white/5 border border-white/20 p-4 rounded-lg w-full text-white placeholder-slate-500 focus:border-[#F97316] outline-none font-mono text-sm" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button type="submit" className="bg-[#F97316] text-black px-6 font-black uppercase hover:bg-white transition-colors rounded-lg">
                    <Send size={20} />
                </button>
            </div>
            <p className="text-[10px] text-slate-500 uppercase">You are joining 142 other founders waiting for launch.</p>
        </form>
    );
};

// ---------------------------------------------------------

const ReferralActions = () => {
    const shareText = "I found the end of swiping. Join me in the Sovereign Orchard. NearAura.";
    const url = "https://huddleme-staging.web.app";
    return (
        <div className="flex gap-4 justify-center mt-6">
            <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + url)}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-black px-6 py-3 rounded-full font-black uppercase text-xs flex items-center gap-2 hover:bg-white transition-colors">
                <MessageCircle size={16}/> Share via WhatsApp
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" className="bg-[#1877F2] text-white px-6 py-3 rounded-full font-black uppercase text-xs flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <Facebook size={16}/> Share on Facebook
            </a>
        </div>
    );
};

// ---------------------------------------------------------

const JarmilaAssistant = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
            {open && (
                <div className="mb-4 bg-black/90 border border-[#22D3EE] p-4 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.3)] backdrop-blur-xl w-64 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                        <div className="w-8 h-8 rounded-full bg-[#22D3EE] flex items-center justify-center text-black font-black text-xs">J</div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Jarmila AI</h4>
                            <p className="text-[10px] text-[#22D3EE] uppercase tracking-wider">Guardian Online</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="flex items-center gap-3 p-3 rounded-lg bg-red-900/30 hover:bg-red-600 text-red-200 hover:text-white transition-all text-xs font-bold uppercase tracking-widest border border-red-900">
                            <Siren size={16} className="animate-pulse"/> SOS / IZS (112)
                        </button>
                        <button className="flex items-center gap-3 p-3 rounded-lg bg-[#22D3EE]/10 hover:bg-[#22D3EE] text-[#22D3EE] hover:text-black transition-all text-xs font-bold uppercase tracking-widest border border-[#22D3EE]/30">
                            <Brain size={16}/> Psycho Aid
                        </button>
                        <button className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white text-slate-300 hover:text-black transition-all text-xs font-bold uppercase tracking-widest border border-white/10">
                            <Info size={16}/> Protocol Info
                        </button>
                    </div>
                </div>
            )}
            <button onClick={() => setOpen(!open)} className="w-16 h-16 rounded-full bg-black border-2 border-[#22D3EE] shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center justify-center hover:scale-110 transition-transform group relative overflow-hidden">
                <div className="absolute inset-0 bg-[#22D3EE] opacity-10 group-hover:opacity-30 transition-opacity"></div>
                <img src={ASSETS.jarmila} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="AI" onError={(e) => {e.currentTarget.style.display='none'}} />
                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping"></div>
            </button>
        </div>
    );
};

// ---------------------------------------------------------

const MatrixTable = () => (
    <div className="overflow-x-auto pb-10">
        <div className="min-w-[1200px] grid grid-cols-7 gap-0 text-center border border-white/10 bg-black/50 rounded-3xl backdrop-blur-md overflow-hidden relative">
            
            <div className="p-6 text-left font-black text-xs text-slate-500 uppercase tracking-widest border-b border-white/10 bg-black/80 sticky left-0 z-10">
                Feature Matrix
            </div>
            <div className="p-6 font-bold text-xs text-slate-500 uppercase tracking-widest border-b border-white/10">
                Tourist
            </div>
            <div className="p-6 font-bold text-xs text-slate-400 uppercase tracking-widest border-b border-white/10">
                Resident
            </div>
            <div className="p-6 font-bold text-xs text-slate-300 uppercase tracking-widest border-b border-white/10">
                Citizen
            </div>
            <div className="p-6 font-bold text-xs text-white uppercase tracking-widest border-b border-white/10">
                Patriot
            </div>
            
            <div className="p-6 border-b border-[#F97316] bg-[#F97316]/10 relative">
                <div className="absolute top-0 left-0 w-full bg-[#F97316] text-black text-[9px] font-black uppercase py-1 tracking-widest">
                    Best Value / 40x ROI
                </div>
                <div className="font-black text-sm text-[#F97316] uppercase tracking-widest flex flex-col items-center gap-2 mt-2">
                    <Zap size={24} className="animate-pulse"/> Founder
                </div>
            </div>
            
            <div className="p-6 border-b border-[#22D3EE] bg-[#22D3EE]/10 relative">
                <div className="absolute top-0 left-0 w-full bg-[#22D3EE] text-black text-[9px] font-black uppercase py-1 tracking-widest">
                    Elite Status
                </div>
                <div className="font-black text-sm text-[#22D3EE] uppercase tracking-widest flex flex-col items-center gap-2 mt-2">
                    <Crown size={24}/> Sovereign
                </div>
            </div>

            {MATRIX_FEATURES.map((f, i) => (
                <React.Fragment key={i}>
                    <div className="text-left p-4 border-b border-white/5 font-bold text-slate-300 uppercase text-xs tracking-wider flex items-center bg-black/40 sticky left-0 z-10">
                        {f.name}
                    </div>
                    
                    <div className="p-4 border-b border-white/5 flex justify-center items-center text-slate-600">
                        {typeof f.t1 === 'boolean' ? (f.t1 ? <Check size={16} className="text-slate-500"/> : <X size={16}/>) : <span className="font-bold text-[10px]">{f.t1}</span>}
                    </div>
                    
                    <div className="p-4 border-b border-white/5 flex justify-center items-center text-slate-500">
                        {typeof f.t2 === 'boolean' ? (f.t2 ? <Check size={16} className="text-slate-400"/> : <X size={16}/>) : <span className="font-bold text-[10px]">{f.t2}</span>}
                    </div>
                    
                    <div className="p-4 border-b border-white/5 flex justify-center items-center text-slate-400">
                        {typeof f.t3 === 'boolean' ? (f.t3 ? <Check size={16} className="text-slate-300"/> : <X size={16}/>) : <span className="font-bold text-[10px]">{f.t3}</span>}
                    </div>
                    
                    <div className="p-4 border-b border-white/5 flex justify-center items-center text-white">
                        {typeof f.t4 === 'boolean' ? (f.t4 ? <Check size={16} className="text-white"/> : <X size={16} className="text-slate-700"/>) : <span className="font-bold text-[10px]">{f.t4}</span>}
                    </div>
                    
                    <div className="p-4 border-b border-[#F97316]/20 flex justify-center items-center bg-[#F97316]/5 text-[#F97316]">
                        {typeof f.t5 === 'boolean' ? (f.t5 ? <CheckCircle2 size={20} className="text-[#F97316] drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]"/> : <X size={16} className="text-slate-800"/>) : <span className="font-black text-xs">{f.t5}</span>}
                    </div>
                    
                    <div className="p-4 border-b border-[#22D3EE]/20 flex justify-center items-center bg-[#22D3EE]/5 text-[#22D3EE]">
                        {typeof f.t6 === 'boolean' ? (f.t6 ? <CheckCircle2 size={20} className="text-[#22D3EE] drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"/> : <X size={16} className="text-slate-800"/>) : <span className="font-black text-xs">{f.t6}</span>}
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
);

// ---------------------------------------------------------

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const launchDate = new Date("2026-02-14T00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;
            if (distance < 0) { clearInterval(timer); return; }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex gap-4 md:gap-8 justify-center mt-10 animate-fade-in-up">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center group cursor-default">
                    <div className="text-3xl md:text-5xl font-black text-white bg-black/40 border border-[#F97316]/30 rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:border-[#F97316] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all">
                        {value < 10 ? `0${value}` : value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-3 font-bold group-hover:text-[#F97316] transition-colors">{unit}</div>
                </div>
            ))}
        </div>
    );
};

// ---------------------------------------------------------

const TrolleyVsOrchard = () => (
    <div className="grid md:grid-cols-2 gap-0 border border-white/10 rounded-[40px] overflow-hidden mt-20 max-w-5xl mx-auto bg-[#050505]">
        <div className="bg-zinc-900/30 p-10 md:p-20 flex flex-col items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity border-b md:border-b-0 md:border-r border-white/10 relative">
            <div className="absolute top-6 left-6 text-[10px] font-black uppercase text-red-500 tracking-widest">
                The Old World
            </div>
            <ShoppingCart size={80} className="text-slate-600 mb-6"/>
            <h3 className="text-3xl font-black text-slate-500 uppercase line-through decoration-red-900 decoration-4">
                THE TROLLEY
            </h3>
            <p className="text-xs text-slate-600 uppercase tracking-widest mt-4 mb-8">
                Shopping for Humans
            </p>
            <ul className="text-xs text-slate-500 space-y-4 text-left font-mono">
                <li className="flex items-center gap-3"><X size={12} className="text-red-900"/> Infinite Choice Paralysis</li>
                <li className="flex items-center gap-3"><X size={12} className="text-red-900"/> Data Harvesting (Ads)</li>
                <li className="flex items-center gap-3"><X size={12} className="text-red-900"/> Disposable Connections</li>
            </ul>
        </div>
        <div className="bg-black p-10 md:p-20 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute top-6 right-6 text-[10px] font-black uppercase text-[#F97316] tracking-widest">
                The New World
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-[#22D3EE]/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Apple size={80} className="text-[#F97316] mb-6 animate-pulse"/>
            <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                THE ORCHARD
            </h3>
            <p className="text-xs text-[#22D3EE] uppercase tracking-widest mt-4 mb-8 font-bold">
                Picking with Intent
            </p>
            <ul className="text-xs text-slate-300 space-y-4 text-left relative z-10 font-mono">
                <li className="flex items-center gap-3"><Check size={12} className="text-[#F97316]"/> 12-Fruit Oath Protocol</li>
                <li className="flex items-center gap-3"><Check size={12} className="text-[#F97316]"/> 48-Hour Intent Lock</li>
                <li className="flex items-center gap-3"><Check size={12} className="text-[#F97316]"/> Sovereign Integrity</li>
            </ul>
        </div>
    </div>
);

// ---------------------------------------------------------

const DownloadButtons = () => (
    <div className="flex flex-col md:flex-row gap-4 mt-12 animate-fade-in-up justify-center items-center relative z-20">
        <button className="bg-white/5 border border-white/10 text-slate-500 px-6 py-4 rounded-xl flex items-center gap-4 cursor-not-allowed hover:bg-white/5 transition-colors w-64 grayscale opacity-50">
            <Smartphone size={30}/>
            <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-widest">Download on</div>
                <div className="text-sm font-black text-white">APP STORE</div>
            </div>
            <span className="text-[8px] bg-white/10 px-2 py-1 rounded ml-auto">SOON</span>
        </button>
        <button className="bg-white/5 border border-white/10 text-slate-500 px-6 py-4 rounded-xl flex items-center gap-4 cursor-not-allowed hover:bg-white/5 transition-colors w-64 grayscale opacity-50">
            <Smartphone size={30}/>
            <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-widest">Get it on</div>
                <div className="text-sm font-black text-white">GOOGLE PLAY</div>
            </div>
            <span className="text-[8px] bg-white/10 px-2 py-1 rounded ml-auto">SOON</span>
        </button>
        <a href="https://huddleme-staging.web.app/app" target="_blank" rel="noreferrer" className="bg-[#22D3EE] text-black border border-[#22D3EE] px-8 py-4 rounded-xl flex items-center gap-4 hover:bg-white hover:border-white transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] w-64 hover:scale-105">
             <Ghost size={30} className="animate-pulse"/>
             <div className="text-left">
                <div className="text-[9px] uppercase font-bold tracking-widest">Try Live</div>
                <div className="text-lg font-black">DEMO APP</div>
            </div>
        </a>
    </div>
);

// ---------------------------------------------------------
// MAIN APPLICATION COMPONENT
// ---------------------------------------------------------

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleExit = () => { 
      window.location.href = "https://www.google.com"; 
  };

  const currentFruit = ORCHARD_DATA.find(f => f.id === selectedFruit);

  const getHexColor = (colorClass: string) => {
     if(colorClass.includes('#')) return colorClass.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#333';
     if(colorClass.includes('pink')) return '#EC4899';
     if(colorClass.includes('yellow')) return '#EAB308';
     if(colorClass.includes('emerald')) return '#10B981';
     if(colorClass.includes('purple')) return '#A855F7';
     if(colorClass.includes('red')) return '#EF4444';
     if(colorClass.includes('green')) return '#22C55E';
     return '#FFFFFF';
  };
  
  const hexColor = currentFruit ? getHexColor(currentFruit.color) : '#333';
  const glowIntensity = selectedFruit === 'hendy' ? '0 0 100px #22D3EE' : `0 0 60px ${hexColor}`;

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#F97316] overflow-x-hidden text-left relative scroll-smooth">
      
      {/* 🔱 GLOBAL NAVIGATION HEADER */}
      <nav className="fixed top-0 w-full z-[100] bg-black/95 border-b border-white/10 px-6 py-4 flex flex-col lg:flex-row justify-between items-center backdrop-blur-xl gap-4 shadow-2xl">
        <div className="flex items-center gap-6 w-full lg:w-auto justify-center lg:justify-start">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img src={ASSETS.logo} alt="NearAura" className="w-12 h-12 object-contain hover:scale-110 transition-transform" onError={(e) => { e.currentTarget.style.display='none'; }}/>
             <div className="h-8 w-[1px] bg-[#F97316]/50 hidden md:block"></div>
             <p className="hidden md:block text-[12px] font-mono text-[#F97316] uppercase tracking-widest font-bold typing-effect">
                {AXIOM.motto}
             </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 lg:gap-10 justify-center text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase w-full lg:w-auto">
            <a href="#orchard" className="hover:text-[#F97316] transition-colors cursor-pointer">ORCHARD</a>
            <a href="#charity" className="hover:text-[#EC4899] transition-colors cursor-pointer flex items-center gap-2"><Heart size={12}/> CHARITY</a>
            <a href="#director" className="hover:text-[#22D3EE] transition-colors cursor-pointer">DIRECTOR</a>
            <a href="#launch" className="hover:text-white transition-colors cursor-pointer">LAUNCH</a>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
            <a href="https://www.indiegogo.com" target="_blank" rel="noreferrer" className="bg-[#F97316] text-black px-6 py-3 font-[1000] text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(249,115,22,0.6)] rounded-sm skew-x-[-10deg] flex items-center gap-2 animate-pulse whitespace-nowrap">
               <Zap size={14}/> INDIEGOGO
            </a>
            <button onClick={handleExit} className="border border-white/20 text-slate-500 px-4 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-red-900 hover:text-white hover:border-red-900 transition-all rounded-sm flex items-center gap-2">
               EXIT
            </button>
        </div>
      </nav>

      {/* 🔱 MAIN CONTENT AREA */}
      <main className="pt-32 relative">
        
        {/* JARMILA AI FLOATING COMPONENT */}
        <JarmilaAssistant />

        {/* HERO SECTION / IPHONE VISUALIZER */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative border-b border-white/5 overflow-hidden pb-20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#222_1px,transparent_1px)] bg-[length:30px_30px]" />
          <img src={ASSETS.hero_overlay} className="absolute top-1/4 left-10 w-64 opacity-20 pointer-events-none animate-pulse hidden xl:block" alt="" />

          {/* IPHONE LANDSCAPE INTERFACE */}
          <div className="relative z-10 scale-90 md:scale-100 transition-transform">
              <div className="relative bg-black border-8 border-gray-800 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] p-2 w-[340px] md:w-[600px] aspect-video mx-auto overflow-hidden ring-4 ring-gray-900">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-30"></div>
                  <div className="absolute top-2 left-6 right-6 flex justify-between text-[10px] text-white/50 z-20 font-mono">
                      <span>14:02</span>
                      <div className="flex gap-2"><Signal size={10}/><Wifi size={10}/><Battery size={10}/></div>
                  </div>
                  
                  {/* SCREEN VIRTUAL DISPLAY */}
                  <div className="w-full h-full bg-black relative flex items-center justify-center overflow-hidden rounded-[2.5rem]">
                       {/* DYNAMIC SPECTRUM AURA BACKGROUND */}
                       <div className="absolute -inset-10 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-spin-slow duration-[10s] pointer-events-none"></div>
                       
                       <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] z-20">
                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                               <div className="w-[60%] h-[60%] rounded-full overflow-hidden border-2 border-[#22D3EE]/20 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                   <img src={ASSETS.jarmila} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Jarmila" onError={(e) => { e.currentTarget.style.display='none'; }}/>
                               </div>
                           </div>
                           
                           {/* SOVEREIGN FRUIT NODE SVG SYSTEM */}
                           <svg viewBox="0 0 300 300" className="w-full h-full absolute inset-0 z-30">
                             <defs>
                                <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor={hexColor} stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                                </radialGradient>
                             </defs>
                             <circle cx="150" cy="150" r="140" fill="url(#auraGlow)" className={pulse ? 'animate-pulse' : ''} pointerEvents="none" />
                             <path d="M150,50 C120,50 100,80 100,120 C100,150 110,170 120,180 L120,200 C120,220 90,230 90,250 L210,250 C210,230 180,220 180,200 L180,180 C190,170 200,150 200,120 C200,80 180,50 150,50 Z" fill="none" stroke={hexColor} strokeWidth="1" strokeOpacity="0.5" pointerEvents="none" />
                             
                             {ORCHARD_DATA.map((fruit, index) => { 
                                const angle = (index * 30 - 90) * (Math.PI / 180); 
                                const cx = 150 + 130 * Math.cos(angle); 
                                const cy = 150 + 130 * Math.sin(angle); 
                                return (
                                    <g 
                                        key={fruit.id} 
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            setSelectedFruit(fruit.id); 
                                        }} 
                                        className="hover:scale-125 transition-transform cursor-pointer" 
                                        style={{pointerEvents: 'auto'}}
                                    >
                                        <circle cx={cx} cy={cy} r="18" fill="#000" stroke={getHexColor(fruit.color)} strokeWidth="2" className="hover:fill-white/10" />
                                        <text x={cx} y={cy} dy="6" textAnchor="middle" fontSize="16">{fruit.icon}</text>
                                    </g>
                                ); 
                             })}
                           </svg>
                       </div>
                  </div>
              </div>
          </div>

          <h1 className="text-[10vw] font-black italic leading-[0.8] uppercase tracking-tighter text-white mb-4 drop-shadow-2xl mt-10">
            THE END OF <br/> 
            <span className="bg-gradient-to-r from-[#22D3EE] via-[#A855F7] to-[#F97316] bg-clip-text text-transparent">SWIPING.</span>
          </h1>

          <DownloadButtons />
          
          <div className="mt-10 mb-10">
              <div className="text-[10px] uppercase tracking-[0.5em] text-[#F97316] mb-4 font-black animate-pulse">
                London D-Day: Valentine 2026
              </div>
              <CountdownTimer />
          </div>

          <div className="h-[250px] mt-10 w-full max-w-xl flex items-center justify-center px-4">
             {selectedFruit ? (
               <div className={`text-center animate-fade-in-up w-full`}>
                 <h2 className={`text-4xl md:text-5xl font-black uppercase ${currentFruit?.color} mb-4 tracking-tighter`}>
                    {currentFruit?.label}
                 </h2>
                 <p className="text-lg md:text-xl text-white font-bold italic mb-6 italic">
                    "{currentFruit?.desc}"
                 </p>
                 <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-[10px] uppercase tracking-widest text-slate-400 bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="flex items-center gap-2">
                        <Check size={12} className="text-green-500"/> Mix: {currentFruit?.mix}
                    </span>
                    <span className="flex items-center gap-2 text-red-400">
                        <XCircle size={12}/> Ban: {currentFruit?.ban}
                    </span>
                 </div>
               </div>
             ) : (
                <p className="text-slate-500 text-xs uppercase tracking-[0.5em] animate-pulse">
                    Select a Fruit Node to Decrypt Intent
                </p>
             )}
          </div>
        </section>

        {/* 🔱 LEAD GENERATION SYSTEM */}
        <section className="bg-[#08080A] py-20 px-4 border-b border-white/10 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-10 tracking-tighter">
                    Get Early Access
                </h2>
                <WaitlistForm />
                <div className="mt-20 pt-10 border-t border-white/10">
                    <h3 className="text-[#F97316] font-black uppercase tracking-[0.3em] mb-4">Spread the Truth</h3>
                    <ReferralActions />
                </div>
            </div>
        </section>

        {/* 🔱 O2 ARENA CASE STUDY SECTION */}
        <section className="py-40 px-6 bg-[#0A0A0C] border-b border-white/10 relative overflow-hidden">
            <img src={ASSETS.orbit_bg} className="absolute -right-20 top-0 w-96 opacity-10 rotate-45 pointer-events-none" alt="" />
            <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                    <h3 className="text-[#EC4899] font-black uppercase tracking-[0.5em] mb-4 text-sm">The O2 Arena Incident</h3>
                    <h2 className="text-5xl md:text-8xl font-black italic leading-none mb-8 uppercase">
                        "Are you just <br/> another <br/> <span className="text-slate-700 line-through">dating app?</span>"
                    </h2>
                </div>
                <div className="border-l-4 border-[#22D3EE] pl-10">
                    <h2 className="text-5xl md:text-8xl font-black italic text-[#22D3EE] mb-8 uppercase leading-none">
                        NO. <br/> WE ARE <br/> GENESIS.
                    </h2>
                    <p className="text-lg font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        We killed the swipe. We restored the truth. <br/>
                        Welcome to the first <span className="text-white">Reality Operating System</span>.
                    </p>
                </div>
            </div>
        </section>

        {/* 🔱 DUAL RADAR VISUALIZER */}
        <section id="radar" className="grid lg:grid-cols-2 border-b border-white/10 bg-black">
          <div className="p-10 md:p-20 border-r border-white/10 relative overflow-hidden">
            <h3 className="text-4xl md:text-6xl font-black italic mb-20 text-[#22D3EE] uppercase relative z-10">Radar A: Intent Sync</h3>
            <div className="relative aspect-square max-w-[500px] border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-12 shadow-[0_0_100px_rgba(34,211,238,0.1)]">
              <div className="absolute inset-0 border-r-4 border-[#22D3EE] animate-spin rounded-full opacity-50" />
              {RADAR_USERS.map((u) => (
                <div key={u.id} className="absolute z-20" style={{ left: `${u.x}%`, top: `${u.y}%` }}>
                  <div className={`w-16 h-16 rounded-full border-2 bg-black flex items-center justify-center text-3xl shadow-xl ${u.score > 80 ? 'border-[#22D3EE]' : 'border-red-600'}`}>
                    {u.intent}
                  </div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black font-black text-[9px] px-2 py-0.5 uppercase whitespace-nowrap">
                    {u.score}% SOUL
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#22D3EE] font-black tracking-[0.3em] uppercase text-xs">Biometric Sync Active • 100M Radius</p>
          </div>
          
          <div className="p-10 md:p-20 relative overflow-hidden bg-[#050505]">
            <h3 className="text-4xl md:text-6xl font-black italic mb-20 text-[#F97316] uppercase relative z-10">Radar B: Zone Matrix</h3>
            <div className="relative aspect-square max-w-[500px] border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-12 bg-[#111] overflow-hidden">
               <img src={ASSETS.heatmap_path} className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000" alt="London Zone 1" onError={(e) => e.currentTarget.style.display = 'none'} />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/10 via-transparent to-[#8B5CF6]/10 pointer-events-none"></div>
               <span className="text-[15vw] font-black italic text-white/5 tracking-tighter absolute uppercase select-none z-10 pointer-events-none">LDN</span>
            </div>
            <p className="text-[#F97316] font-black tracking-[0.3em] uppercase text-xs">London Zone 1 • Heatmap Live</p>
          </div>
        </section>

        {/* 🔱 SUBSCRIPTION MATRIX SYSTEM */}
        <section id="matrix" className="py-60 px-6 bg-[#0A0A0C] border-b border-white/10 relative overflow-hidden">
          <img src={ASSETS.noise_texture} className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none" alt="" />
          <div className="max-w-[1600px] mx-auto relative z-10">
            <h2 className="text-5xl md:text-8xl font-black italic text-white mb-20 uppercase tracking-tighter text-center">
                THE <span className="text-[#D4AF37]">MATRIX</span>
            </h2>
            <MatrixTable />
            <div className="grid md:grid-cols-2 gap-10 mt-20 text-left">
                <div className="bg-[#F97316]/5 border border-[#F97316] p-10 rounded-2xl">
                    <h4 className="text-[#F97316] font-black text-2xl uppercase mb-4 flex items-center gap-2"><Zap/> FOUNDER STATUS</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">Reserved for the first 1,000 believers who support the Genesis. Includes <strong className="text-white">Global Roaming</strong>, <strong className="text-white">40x Multiplier</strong> on future revenue share, and permanent <strong className="text-white">Gold Badge</strong>.</p>
                    <button className="bg-[#F97316] text-black font-black uppercase text-xs px-4 py-2 rounded">Apply for Founder</button>
                </div>
                <div className="bg-[#22D3EE]/5 border border-[#22D3EE] p-10 rounded-2xl">
                    <h4 className="text-[#22D3EE] font-black text-2xl uppercase mb-4 flex items-center gap-2"><Crown/> SOVEREIGN ELITE</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">The highest echelon of integrity. Requires <strong className="text-white">Soul Score 95+</strong> and biometric verification. Grants access to <strong className="text-white">God Mode</strong>, <strong className="text-white">Hendy Zone</strong>, and private concierge support.</p>
                    <button className="bg-[#22D3EE] text-black font-black uppercase text-xs px-4 py-2 rounded">View Criteria</button>
                </div>
            </div>
          </div>
        </section>

        {/* 🔱 ORCHARD GRID VISUALIZER */}
        <section id="orchard" className="py-40 px-6 bg-[#08080A] border-b border-white/10">
            <h2 className="text-center text-5xl md:text-8xl font-black italic text-white mb-20 uppercase tracking-tighter">THE <span className="text-[#F97316]">ORCHARD</span> GRID</h2>
            <TrolleyVsOrchard />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto mt-20">
                {ORCHARD_DATA.map((item) => (
                    <div key={item.id} className={`p-8 bg-white/5 border ${item.border} rounded-[30px] hover:bg-white/10 transition-all group min-h-[250px] flex flex-col justify-between relative overflow-hidden`} onClick={() => setSelectedFruit(item.id)}>
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                            <ShieldCheck size={32} className={item.color.replace('text-', 'text-')} />
                        </div>
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div><h3 className={`text-2xl font-black italic uppercase ${item.color} mb-2`}>{item.label}</h3><p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.desc}</p></div>
                    </div>
                ))}
            </div>
        </section>

        {/* 🔱 JARMILA FUND SECTION */}
        <section id="charity" className="py-20 md:py-40 px-6 bg-[#0A0005] border-b border-white/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
                <div className="flex-1 text-center md:text-left">
                    <Heart size={100} className="text-[#EC4899] mb-10 animate-pulse mx-auto md:mx-0" />
                    <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase mb-6 tracking-tighter">THE <span className="text-[#EC4899]">JARMILA</span> FUND</h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl italic">"Economy of Mercy." <br/><br/>We do not just build tech; we heal wounds. <strong className="text-white"> 10% of every transaction</strong> flows directly to victims of digital violence. Honesty has a cost. We pay it together.</p>
                    <div className="flex gap-10 justify-center md:justify-start">
                        <div><div className="text-4xl font-black text-[#EC4899]">10%</div><div className="text-[10px] uppercase tracking-widest text-slate-500">Revenue Cut</div></div>
                        <div><div className="text-4xl font-black text-white">100%</div><div className="text-[10px] uppercase tracking-widest text-slate-500">Transparency</div></div>
                    </div>
                </div>
                <div className="flex-1 w-full border border-white/10 p-10 rounded-3xl bg-black/50 backdrop-blur-md">
                    <h3 className="text-[#EC4899] font-black uppercase mb-4 text-sm tracking-widest flex items-center gap-2"><Zap size={14}/> Active Mission</h3>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">Currently supporting legal defense for victims of cyber-stalking and identity theft in Central Europe (Prague / Berlin).</p>
                    <button className="w-full py-4 bg-[#EC4899]/10 border border-[#EC4899] text-[#EC4899] font-black uppercase text-xs hover:bg-[#EC4899] hover:text-white transition-all rounded-sm tracking-widest uppercase">View Transparent Ledger</button>
                </div>
            </div>
        </section>

        {/* 🔱 CORE GENESIS PROTOCOL POINTS */}
        <section className="px-6 md:px-10 py-60 bg-[#0A0A0C] text-white text-left border-t border-white/5">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-[10vw] font-[1000] italic leading-[0.8] mb-40 text-[#22D3EE] uppercase tracking-tighter">THE SOVEREIGN PROTOCOL</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-32">
              {GENESIS_POINTS.map((p) => (
                <div key={p.id} className="border-l-[6px] border-white/10 pl-10 group hover:border-[#22D3EE] transition-all">
                  <span className="block text-6xl font-[1000] italic text-slate-800 group-hover:text-[#22D3EE] mb-6 transition-colors">{p.id}</span>
                  <h4 className="text-3xl font-[1000] mb-6 tracking-tighter uppercase leading-none">{p.t}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose text-justify">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔱 DIRECTOR SAY / ARCHITECT MANIFESTO */}
        <section id="director" className="bg-[#000] text-white py-40 px-6 border-t border-white/20" >
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-5xl md:text-8xl font-black italic text-[#22D3EE] uppercase tracking-tighter mb-20 text-center uppercase">DIRECTOR SAY</h2>
                <div className="border-l-4 border-[#22D3EE] pl-8 md:pl-20 py-4 bg-[#050505] p-10 rounded-r-[40px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none"><Crown size={200} className="text-[#22D3EE]"/></div>
                    <div className="flex items-center gap-6 mb-10 relative z-10">
                        <div className="w-16 h-16 bg-[#22D3EE] rounded-full flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">VM</div>
                        <div><h4 className="font-black text-white uppercase text-xl">Viktor Mahdal</h4><p className="text-[#22D3EE] text-[10px] uppercase tracking-widest font-bold">Director & Architect</p></div>
                    </div>
                    <div className="font-mono text-justify text-slate-300 relative z-10 space-y-6">
                        {DIRECTOR_FULL_TEXT.map((block, i) => {
                            if (block.type === 'h1') return <h3 key={i} className="text-white font-black text-2xl uppercase border-b border-white/20 pb-2 mb-4">{block.text}</h3>;
                            if (block.type === 'h2') return <h4 key={i} className="text-[#22D3EE] font-black text-xl uppercase mt-8 mb-2">{block.text}</h4>;
                            if (block.type === 'h3') return <h5 key={i} className="text-white font-bold text-lg uppercase mt-4">{block.text}</h5>;
                            return <p key={i} className="text-sm md:text-base leading-relaxed">{block.text}</p>;
                        })}
                        <div className="text-[#F97316] font-black text-xl mt-10 uppercase tracking-[0.5em] animate-pulse">TRUTH WINS.</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 🔱 PATENT TICKER BAR */}
        <div className="bg-[#22D3EE] text-black py-3 overflow-hidden border-y border-white/10 relative z-20">
             <div className="flex gap-10 animate-marquee whitespace-nowrap font-black uppercase tracking-widest text-xs md:text-sm items-center justify-center">
                 <span className="flex items-center gap-2"><Lock size={14}/> Patent Pending: Decentralized Proximity Integrity Network™</span>
                 <span>•</span>
                 <span>US Patent Office Application #2026-NA</span>
                 <span>•</span>
                 <span className="flex items-center gap-2"><ShieldAlert size={14}/> Hardware ID Exile Protocol</span>
             </div>
        </div>

        {/* 🔱 LAUNCH CTA SECTION */}
        <section id="launch" className="py-40 px-6 bg-[#050505] text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-[#F97316] font-black text-6xl md:text-9xl uppercase italic tracking-tighter mb-6">THE LAUNCH</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-12 uppercase tracking-widest font-bold text-sm">London Zone 1 Deployment. Be a Founder.</p>
                <a href="https://www.indiegogo.com" target="_blank" rel="noreferrer" className="bg-[#F97316] text-black px-10 md:px-16 py-6 md:py-8 font-[1000] text-xl md:text-3xl uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_100px_rgba(249,115,22,0.5)] rounded-full inline-flex items-center gap-4 hover:scale-105 active:scale-95">
                    <Zap size={32} className="animate-pulse"/> BACK US ON INDIEGOGO
                </a>
            </div>
        </section>

        {/* 🔱 FAQ ACCORDION SECTION */}
        <section id="faq" className="py-20 px-6 bg-[#08080A] border-t border-white/10">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-black text-white uppercase mb-10 text-center tracking-tighter">FAQ</h2>
                <div className="grid gap-6">
                    {FAQ_DATA.map((item, i) => (
                        <div key={i} className="border border-white/10 p-6 rounded-xl hover:border-[#22D3EE]/30 transition-colors bg-black/50 group">
                            <h3 className="text-[#22D3EE] font-black uppercase text-xs md:text-sm mb-3 group-hover:text-white transition-colors">{item.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>
      </main>

      {/* 🔱 MASTER FOOTER SYSTEM (CEO + 3 COLS + INITIALS) */}
      <footer className="bg-black py-40 px-6 border-t border-white/20 text-center md:text-left" id="contact">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-20">
            {/* 1. IDENTITY & ARCHITECT */}
            <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
                <img src={ASSETS.logo} alt="NearAura" className="w-24 h-24 object-contain mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]" onError={(e) => { e.currentTarget.style.display='none'; }}/>
                <p className="text-slate-500 font-bold uppercase text-sm leading-relaxed mb-6 text-center md:text-left">
                    The end of lonely swiping.<br/> Built on the promise to Jarmila.<br/> Secured by the Sovereign Eight.
                </p>
                <div className="mb-6 p-4 border border-[#22D3EE]/30 rounded-lg bg-[#22D3EE]/5 w-full">
                    <p className="text-[10px] uppercase text-[#22D3EE] font-black tracking-widest mb-1">CEO & Architect</p>
                    <p className="text-white font-bold text-sm uppercase">Viktor Mahdal</p>
                    <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-2">
                        <MapPin size={10}/> London Zone 1 HQ
                    </p>
                </div>
                <SocialDock />
            </div>
            
            {/* 2-4. DYNAMIC LINK COLUMNS FROM DNA MATRIX */}
            {FOOTER_LINKS.map((col, i) => (
                <div key={i} className="flex flex-col items-center md:items-start">
                    <h4 className="text-[#22D3EE] font-black uppercase tracking-[0.2em] mb-10 text-sm">{col.title}</h4>
                    <ul className="space-y-6">
                        {col.links.map(link => (
                            <li key={link} className="text-slate-400 font-black uppercase text-xs hover:text-white cursor-pointer tracking-widest transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-[#22D3EE] rounded-full opacity-50"></span> {link}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* SOVEREIGN EIGHT INITIALS BAR */}
        <div className="text-center mt-40 pt-20 border-t border-white/10 opacity-30 hover:opacity-100 transition-opacity">
            <div className="text-[#D4AF37] font-black text-4xl md:text-9xl tracking-[1em] mb-10 select-none overflow-hidden uppercase">
                {INITIALS}
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-black text-slate-600">
                <span>NearAura Ltd.</span>
                <span className="hidden md:block">•</span>
                <span>© 2026 Sovereign Logic</span>
                <span className="hidden md:block">•</span>
                <span>All Rights Reserved</span>
                <span className="hidden md:block">•</span>
                <span>House of Fame</span>
            </div>
        </div>
      </footer>
    </div>
  );
}