/**
 * NEAR AURA SOVEREIGN ENCYCLOPEDIA (DNA STORAGE)
 * Version: ROYAL_ORCHARD_GLOBAL_SECURE_V3
 * Security Level: QUANTUM / GOOGLE SENTINEL
 * The Single Source of Truth.
 */

// --- ASSETS DNA ---
import logoPng from './logo.png';
import image1 from './image_1.svg';
import image3 from './image_3.svg';
import image4 from './image_4.svg';
import ogImage from './og-image.svg';

// SLOT PRO FOTKU JARMILY (odkomentujte, az budete mit soubor jarmila.png v src)
// import jarmilaPng from './jarmila.png'; 

export const ASSETS = {
  logo: logoPng,
  // Fallback logika: Pokud nemate fotku, pouzije se logo.
  jarmila: logoPng, // Jakmile nahrajete fotku, zmente na: jarmilaPng || logoPng
  hero_overlay: image1,
  orbit_bg: image3,
  noise_texture: image4,
  og_image: ogImage,
  heatmap_path: '/heatmap.svg' 
};

export const INITIALS = "JV JM PM LA PM LH YM VM";

export const AXIOM = {
  motto: "ENTER THE ORCHARD. PICK YOUR TRUTH.",
  law: "One Deception. Zero Warnings. Permanent Hardware Exile.",
  legacy: "We build this to honor Jarmila. Technology must serve the Truth."
};

// --- FOOTER LINKS (3x6 MATRIX) ---
export const FOOTER_LINKS = [
    {
        title: "THE ECOSYSTEM",
        links: [
            "The Orchard Protocol",
            "Director's Manifesto",
            "Jarmila Fund (10%)",
            "London Zone 1 Map",
            "Roadmap 2026",
            "Founder Status"
        ]
    },
    {
        title: "SOVEREIGN TECH",
        links: [
            "Hardware ID Exile",
            "Google Cloud Sentinel", // ZMĚNA
            "Anti-Ghosting AI",
            "12-Fruit Oath",
            "Quantum Encryption", // ZMĚNA
            "Offline Mode (Beta)"
        ]
    },
    {
        title: "LEGAL & CONDUCT",
        links: [
            "Terms of Service",
            "Privacy Policy",
            "Code of Conduct",
            "Patent #2026-NA",
            "Copyright & IP",
            "Law Enforcement Guide"
        ]
    }
];

// --- DIRECTOR TEXT (SECURITY ADDED) ---
export const DIRECTOR_FULL_TEXT = [
    { 
      type: 'h3', 
      text: "THE ORIGIN: 50 POUNDS & A DREAM" 
    },
    { 
      type: 'p', 
      text: "NearAura was not born in a boardroom. It was born from a broken heart and a 50-pound ticket to the unknown." 
    },
    { 
      type: 'h3', 
      text: "The Blood & Code" 
    },
    { 
      type: 'p', 
      text: "In late 2011, the world lost Jarmila. Her departure left a void that could not be filled, only transformed. This platform is not a startup, it is a sacrifice. It is the result of 1,800 hours of sleepless nights and over 250,000 lines of sovereign code written in pursuit of one thing: Truth." 
    },
    { 
      type: 'h3', 
      text: "The Spark in the Tube" 
    },
    { 
      type: 'p', 
      text: "Amidst the millions of passing faces in London, a vision emerged. We let potential soulmates walk past us simply because we lack a safe way to say: 'I see you.' The thought 'If you read this...' was the first line of code." 
    },
    { 
      type: 'h2', 
      text: "THE SECURITY PLEDGE" // NOVÁ SEKCE
    },
    { 
      type: 'p', 
      text: "Let me be clear: I am the Architect, but I am not the Big Brother. Your data is not on a home server. It is secured by Google Cloud & IBM Quantum-Ready infrastructure. It is encrypted end-to-end. Not even I can read your chats. This is a fortress, not a playground." 
    },
    { 
      type: 'h2', 
      text: "THE SOLUTION: REALITY OS" 
    },
    { 
      type: 'p', 
      text: "We do not trust text. We trust Hardware IDs, Biometrics, and Proximity. If the system says you are there, you are there. This is not a dating app. It is a Truth Protocol." 
    }
];

// --- ORCHARD DATA ---
export const ORCHARD_DATA = [
  // --- TIER 1: ROYAL & COMMITMENT ---
  { 
    id: 'hendy', 
    label: 'Hendy', 
    sub: 'Royal Soul', 
    icon: '👑', 
    color: 'text-[#22D3EE]', 
    border: 'border-[#22D3EE]', 
    desc: 'Elite Integrity Score.', 
    mix: 'All High Soul.', 
    ban: 'Liars.' 
  },
  { 
    id: 'pineapple', 
    label: 'Pineapple', 
    sub: 'Serious', 
    icon: '🍍', 
    color: 'text-[#D4AF37]', 
    border: 'border-[#D4AF37]', 
    desc: 'Serious Relationship. 48h Intent Lock.', 
    mix: 'Hendy, Pear.', 
    ban: 'Banana, Peach.' 
  },
  { 
    id: 'pear', 
    label: 'Pear', 
    sub: 'Family', 
    icon: '🍐', 
    color: 'text-emerald-400', 
    border: 'border-emerald-400', 
    desc: 'Taken / Family. No Dating.', 
    mix: 'Coconut, Orange.', 
    ban: 'Flings.' 
  },
  
  // --- TIER 2: IDENTITY & INTIMACY ---
  { 
    id: 'mango', 
    label: 'Mango', 
    sub: 'Queer', 
    icon: '🥭', 
    color: 'text-purple-400', 
    border: 'border-purple-400', 
    desc: 'Safe Queer Space / LGBTQ+.', 
    mix: 'Mango, Hendy.', 
    ban: 'Intolerant.' 
  },
  { 
    id: 'banana', 
    label: 'Banana', 
    sub: 'Intimacy M', 
    icon: '🍌', 
    color: 'text-yellow-400', 
    border: 'border-yellow-400', 
    desc: 'Male Intimacy (Physical).', 
    mix: 'Peach, Banana.', 
    ban: 'Family.' 
  },
  { 
    id: 'peach', 
    label: 'Peach', 
    sub: 'Intimacy F', 
    icon: '🍑', 
    color: 'text-pink-500', 
    border: 'border-pink-500', 
    desc: 'Female Intimacy (Physical).', 
    mix: 'Banana, Peach.', 
    ban: 'Family.' 
  },

  // --- TIER 3: COMMUNITY & ACTION ---
  { 
    id: 'orange', 
    label: 'Orange', 
    sub: 'Friends', 
    icon: '🍊', 
    color: 'text-[#F97316]', 
    border: 'border-[#F97316]', 
    desc: 'Pure Friendship. Platonic.', 
    mix: 'All except Intimacy.', 
    ban: 'Sex.' 
  },
  { 
    id: 'grape', 
    label: 'Grape', 
    sub: 'Groups', 
    icon: '🍇', 
    color: 'text-[#A855F7]', 
    border: 'border-[#A855F7]', 
    desc: 'Work, Networking, Groups.', 
    mix: 'All.', 
    ban: 'Intimacy.' 
  },
  { 
    id: 'coconut', 
    label: 'Coconut', 
    sub: 'DIY Help', 
    icon: '🥥', 
    color: 'text-slate-200', 
    border: 'border-slate-200', 
    desc: 'Neighborly Help & DIY.', 
    mix: 'All.', 
    ban: 'None.' 
  },
  { 
    id: 'melon', 
    label: 'Melon', 
    sub: 'Hobby', 
    icon: '🍈', 
    color: 'text-green-400', 
    border: 'border-green-400', 
    desc: 'Sports & Hobbies.', 
    mix: 'Interest.', 
    ban: 'None.' 
  },
  { 
    id: 'cherry', 
    label: 'Cherry', 
    sub: 'Meetup', 
    icon: '🍒', 
    color: 'text-red-500', 
    border: 'border-red-500', 
    desc: 'Quick Meetup / Event.', 
    mix: 'All.', 
    ban: 'None.' 
  },
  
  // --- TIER 4: SPECIAL ZONES ---
  { 
    id: 'youth', 
    label: 'Youth', 
    sub: 'Skibidi (15-18)', 
    icon: '👻', 
    color: 'text-white', 
    border: 'border-white', 
    desc: 'Restricted Youth World.', 
    mix: 'Youth Only.', 
    ban: 'Adults.' 
  }
];

export const SAFETY_DATA = [
  { id: 'izs', label: 'SOS Alert', icon: 'Siren', color: 'bg-red-600' },
  { id: 'soul', label: 'Soul AI', icon: 'Brain', color: 'bg-indigo-600' },
  { id: 'report', label: 'Report Snake', icon: 'ShieldAlert', color: 'bg-slate-700' },
  { id: 'adult', label: 'Adult 18+', icon: 'AlertTriangle', color: 'bg-zinc-800' }
];

export const GENESIS_POINTS = [
    { 
      id: "01", 
      t: "100m Radar Proximity", 
      h: "Truth Over Distance", 
      d: "NearAura rejects digital pen-pals. We only connect you with Sovereigns within 100 meters." 
    },
    { 
      id: "02", 
      t: "The 12-Fruit Oath", 
      h: "Locked Intent Protocol", 
      d: "Your word is your bond. If you choose Pineapple (Serious), you cannot see Banana (Fling)." 
    },
    { 
      id: "03", 
      t: "Soul Score Algorithm", 
      h: "The Math of Integrity", 
      d: "Soul Score is not popularity. It is a calculation of your honesty and reliability." 
    },
    { 
      id: "04", 
      t: "Hardware Exile Protocol", 
      h: "Permanent Digital Death", 
      d: "A standard ban is a joke. NearAura bans the physical device (HWID). One lie = brick." 
    },
    { 
      id: "05", 
      t: "Jarmila Heart-Cut (10%)", 
      h: "Economy of Mercy", 
      d: "Every interaction carries Jarmila's promise. 10% of revenue goes directly to victims." 
    },
    { 
      id: "06", 
      t: "No Swiping Monopoly", 
      h: "Breaking the Dopamine Loop", 
      d: "Swiping is for cattle. The Orchard is for Sovereigns. You choose fruits, you don't judge faces." 
    },
    { 
      id: "07", 
      t: "Identity Sync Biometrics", 
      h: "The Soul Face", 
      d: "Your identity is anchored to your biology. No fake profiles, no catfishing." 
    },
    { 
      id: "08", 
      t: "London Zonal Matrix", 
      h: "Strategic Territory Control", 
      d: "We launch in Zone 1 & 2. We conquer territory, not demographics." 
    },
    { 
      id: "09", 
      t: "40x Founder Multiplier", 
      h: "Reward for Builders", 
      d: "The Sovereign Eight hold master-keys. Early adopters receive permanent revenue multipliers." 
    },
    { 
      id: "10", 
      t: "The Daughter Protocol", 
      h: "Shield for Sisters", 
      d: "A specialized code for YM. Women and young girls have absolute priority in threat detection." 
    },
    // --- UPDATED SECURITY POINT ---
    { 
      id: "11", 
      t: "Google Cloud Sentinel", 
      h: "Fortress Architecture", 
      d: "We are not a home server. Your data is fragmented & encrypted (E2EE) on Google & IBM Cloud infrastructure. No admin backdoors. Quantum-ready security." 
    },
    { 
      id: "12", 
      t: "Intent Locking System", 
      h: "48-Hour Reality", 
      d: "Focus in a world of distraction. Once you pick a fruit, you are locked for 48 hours." 
    },
    { 
      id: "13", 
      t: "The Golden 8 Council", 
      h: "Family Governance", 
      d: "Belongs to the Family. The direction of the Orchard is guided by the DNA, not investors." 
    },
    { 
      id: "14", 
      t: "Anti-Ghosting Logic", 
      h: "Social Accountability", 
      d: "Silence has consequences. If you ghost a Sovereign, your Soul Score bleeds." 
    },
    { 
      id: "15", 
      t: "Real-Time Heatmaps", 
      h: "Visual Proof of Truth", 
      d: "See where Sovereigns gather. The Heatmap shows intent clusters, not individual locations." 
    },
    { 
      id: "16", 
      t: "Genesis Legacy", 
      h: "Built for 2026 and Beyond", 
      d: "Truth prevails within the Orchard. We are preparing for the future of digital human connection." 
    }
];