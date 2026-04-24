/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg/92 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-primary flex items-center justify-center rounded-sm rotate-45 shadow-lg">
            <div className="w-6 h-6 border border-white rotate-[-45deg]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-accent-primary leading-tight">వాస్తు గృహం</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-text-muted">Vastu Griham Interiors</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {['Home', 'About', 'Services', 'Projects', 'Process', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-accent-gold transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all teak-shadow border border-transparent hover:border-accent-gold">
            Book Free Consultation
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-border lg:hidden flex flex-col p-6 space-y-4"
          >
            {['Home', 'About', 'Services', 'Projects', 'Process', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                {item}
              </a>
            ))}
            <button className="bg-cta text-white px-6 py-3 rounded-full text-sm font-semibold">
              Book Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppCTA = () => (
  <motion.a 
    href="https://wa.me/91XXXXXXXXXX"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 group"
  >
    <MessageCircle className="w-6 h-6" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-semibold">
      Chat on WhatsApp
    </span>
  </motion.a>
);

const Hero = () => {
  const headline = "Designing Homes That Feel Like Andhra.".split(" ");

  return (
    <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
      {/* Background Watermark: Telugu Text */}
      <div className="absolute top-20 left-10 text-[140px] font-serif opacity-[0.03] select-none pointer-events-none rotate-[-5deg] whitespace-nowrap text-accent-gold">
        మీ ఇల్లు మీ గుర్తింపు
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[7fr_5fr] gap-12 items-center">
        <div className="relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-transparent mb-8"></div>
          <h1 className="text-5xl lg:text-[64px] font-serif font-semibold text-text-primary leading-[1.05] mb-8">
            Designing Homes That <br />
            <span className="italic text-accent-primary">Feel Like Andhra.</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg lg:text-xl text-text-muted font-normal max-w-lg mb-10 leading-relaxed"
          >
            From Kondapalli-inspired pooja rooms to open-plan family living — we craft interiors that honour your roots and your future.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-16"
          >
            <button className="bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-accent-primary/20 flex items-center justify-center">
              Explore Our Work <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-surface">
                  <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="User" />
                </div>
              ))}
              <div className="pl-4 text-xs font-medium text-text-muted">1,200+ Satisfied Families</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-white z-0"
        >
          <div className="absolute inset-0 bg-accent-primary/10 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
            alt="Luxurious modern-traditional living room" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 bg-accent-gold text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 z-20">
            <span className="text-3xl font-serif">12</span>
            <div className="text-[10px] leading-tight uppercase font-bold tracking-tighter">
              Years of Excellence <br/> in Andhra Pradesh
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WorkTicker = () => {
  const blogs = [
    { title: "Unlimited Furniture Ideas for Vijayawada Flats", date: "April 2025" },
    { title: "Interior Design Trends for Telugu Homes", date: "March 2025" },
    { title: "How We Transformed a 3BHK in Guntur", date: "Feb 2025" },
  ];

  return (
    <section className="bg-surface py-12 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center">
          <div className="flex-shrink-0">
            <div className="flex -space-x-4 mb-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-border overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="avatar" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-text-primary">1,200+ Satisfied Families</p>
          </div>

          <div className="flex-grow flex gap-8 overflow-x-auto pb-4 no-scrollbar">
            {blogs.map((blog, i) => (
              <div key={i} className="min-w-[320px] bg-white p-6 rounded-xl teak-shadow flex flex-col justify-between group cursor-pointer border border-transparent hover:border-accent-gold transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-text-muted uppercase tracking-widest mb-3">
                    <div className="w-6 h-6 rounded-full bg-border overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="homeowner" />
                    </div>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-accent-primary transition-colors">
                    {blog.title}
                  </h3>
                </div>
                <div className="mt-4 text-accent-gold flex items-center text-sm font-bold">
                  View More <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => (
  <section id="services" className="py-24 max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-start">
    <div className="lg:sticky lg:top-32">
      <div className="w-12 h-1 bg-accent-gold mb-6" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-4 block">Our Services</span>
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary leading-tight mb-8">
        Discover The Quality Of Our Work Through Real Homes.
      </h2>
      <p className="text-lg text-text-muted mb-10 leading-relaxed">
        Every Telugu home has a story — a pooja room that anchors the family, a verandah where evenings are spent. We design around your life, not against it.
      </p>
      <button className="bg-cta text-white px-8 py-4 rounded-full font-semibold teak-shadow hover:bg-cta-hover transition-colors">
        Get Started
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[4/5] rounded-2xl overflow-hidden teak-shadow group"
      >
        <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interior Consultation" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-accent-primary/20" />
        <div className="absolute bottom-4 left-4 text-white text-sm font-bold uppercase tracking-widest">[Design Planning Stage]</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative aspect-[1/1] rounded-2xl overflow-hidden teak-shadow group sm:mt-8"
      >
        <img src="https://images.unsplash.com/photo-1556912177-f13350117079?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Modular Kitchen" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-accent-primary/20" />
        <div className="absolute bottom-4 left-4 text-white text-sm font-bold uppercase tracking-widest whitespace-nowrap">[Premium Modular Kitchen]</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative aspect-[1/1] rounded-2xl overflow-hidden teak-shadow group sm:-mt-8"
      >
        <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Traditional Pooja/Living" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-accent-primary/20" />
        <div className="absolute bottom-4 left-4 text-white text-sm font-bold uppercase tracking-widest">[Heritage-Inspired Lounge]</div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative aspect-[4/5] rounded-2xl overflow-hidden teak-shadow group"
      >
        <img src="https://images.unsplash.com/photo-1519710192734-6725a397441a?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luxury Kids Bedroom" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-accent-primary/20" />
        <div className="absolute bottom-4 left-4 text-white text-sm font-bold uppercase tracking-widest">[Bespoke Kids Bedroom]</div>
      </motion.div>
    </div>
  </section>
);

const StatsBar = () => {
  return (
    <section className="bg-bg py-10 border-y border-border mb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Stat 1 */}
        <div className="bg-surface p-8 rounded-2xl flex flex-col justify-between border border-border teak-shadow h-48">
          <span className="text-accent-teal font-bold text-xs uppercase tracking-widest">Vastu Compliant</span>
          <div className="font-serif text-3xl text-text-primary">Traditional <br/> Wisdom</div>
          <div className="text-accent-gold text-xl font-bold">99% Accuracy</div>
        </div>
        
        {/* Service Bento 1 */}
        <div className="bg-white p-8 rounded-2xl flex flex-col gap-4 shadow-sm border border-border teak-shadow h-48 group hover:border-accent-primary transition-all">
          <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center text-xl">
            🪵
          </div>
          <h3 className="font-bold text-text-primary">Teak Woodwork</h3>
          <p className="text-xs text-text-muted leading-relaxed">Premium Burma Teak & craftsmanship from local artisans.</p>
          <a href="#" className="text-xs font-bold text-accent-primary underline">Learn More</a>
        </div>

        {/* Service Bento 2 */}
        <div className="bg-white p-8 rounded-2xl flex flex-col gap-4 shadow-sm border border-border teak-shadow h-48 group hover:border-accent-primary transition-all">
          <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center text-xl">
            🏺
          </div>
          <h3 className="font-bold text-text-primary">Cultural Accents</h3>
          <p className="text-xs text-text-muted leading-relaxed">Integrating Kalamkari, Kondapalli, and motifs into modern spaces.</p>
          <a href="#" className="text-xs font-bold text-accent-primary underline">Learn More</a>
        </div>

        {/* WhatsApp Sidebar Bento */}
        <div className="bg-text-primary p-8 rounded-2xl flex flex-col justify-between text-white relative overflow-hidden h-48">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-teal opacity-20 blur-2xl"></div>
          <div className="text-xs font-semibold text-accent-gold uppercase tracking-widest">Connect Now</div>
          <div className="text-lg font-serif">Start Your Dream Home Project Today</div>
          <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 rounded-full font-bold text-sm">
             WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-16">
      <div>
        <div className="w-12 h-1 bg-accent-teal mb-6" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-teal mb-4 block">Portfolio</span>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary leading-tight mb-6">
          Explore Our Latest Project, Where Andhra Meets Modern.
        </h2>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Cutting-edge design rooted in Telugu living — teak, terracotta, and light.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1 sm:col-span-2 relative h-[300px] sm:h-[500px] rounded-3xl overflow-hidden group teak-shadow">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1616137466211-f939a420be83?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover" 
              alt="Heritage Modern living space" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 text-white pointer-events-none">
              <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block">[Grand Heritage Residence — Vijayawada]</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">The Teak Manor</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden group teak-shadow">
            <motion.img 
              whileHover={{ scale: 1.08 }}
              src="https://images.unsplash.com/photo-1617806118233-f8e137453f9c?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover" 
              alt="Luxury Dining room" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">[Elegant Marble & Wood Dining]</div>
          </div>
          <div className="relative h-64 rounded-3xl overflow-hidden group teak-shadow">
            <motion.img 
              whileHover={{ scale: 1.08 }}
              src="https://images.unsplash.com/photo-1616594868515-430c5e7b57ac?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover" 
              alt="Master Bedroom" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">[Royal Teak Master Suite]</div>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-border teak-shadow">
           <h3 className="text-2xl font-serif font-bold mb-4">Luxury Family Home — Vijayawada, 2024</h3>
           <p className="text-text-muted mb-6">A seamless blend of vastu compliance, teak woodwork, and natural stone — designed for a joint family of three generations.</p>
           <button className="text-accent-primary font-bold flex items-center hover:translate-x-2 transition-transform">
             View More <ArrowRight className="ml-2 w-4 h-4" />
           </button>
        </div>
      </div>

      <aside className="space-y-8">
        <h3 className="text-2xl font-serif font-bold text-text-primary pb-4 border-b border-border">Featured Projects</h3>
        
        {[
          { title: "South Indian Luxury Living — Guntur", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80", label: "[Guntur Project]" },
          { title: "Bespoke Commercial Space — Vizag", img: "https://images.unsplash.com/photo-1582037928867-67709cf89334?auto=format&fit=crop&q=80", label: "[Vizag Boutiquestore]" },
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 teak-shadow">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-700" 
                alt={item.title} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-primary/10 pointer-events-none" />
              <div className="absolute bottom-2 right-2 text-[10px] text-white opacity-60 uppercase pointer-events-none">{item.label}</div>
            </div>
            <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-accent-primary transition-colors">{item.title}</h4>
            <button className="text-sm font-bold text-accent-gold flex items-center">
              View More <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        ))}

        <div className="p-8 bg-accent-primary rounded-3xl text-white teak-shadow">
          <h3 className="text-2xl font-serif font-bold mb-4">Ready to Refresh Your Space?</h3>
          <p className="opacity-80 mb-6 text-sm">Let’s combine traditional Telugu aesthetics with your modern vision.</p>
          <button className="w-full bg-white text-accent-primary py-3 rounded-full font-bold hover:bg-surface transition-colors">
            Contact Us Today
          </button>
        </div>

        <div className="pt-12">
           <h3 className="text-2xl font-serif font-bold text-text-primary mb-8 underline decoration-accent-gold underline-offset-8">Client Stories</h3>
           <div className="relative">
              <p className="font-serif italic text-xl text-text-muted leading-relaxed mb-6">
                "They understood our Telugu lifestyle perfectly — the pooja room, the guest room for in-laws, the open kitchen for our joint family. Exceptional work."
              </p>
              <div className="flex items-center space-x-4">
                <img src="https://i.pravatar.cc/150?u=44" className="w-12 h-12 rounded-full border-2 border-accent-gold" alt="Padmavathi" />
                <div>
                  <h4 className="font-bold text-text-primary">Padmavathi Reddy</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest">Homeowner, Vijayawada</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] bg-bg px-2 py-1 rounded-full border border-border text-text-muted font-bold">Reliable</span>
                <span className="text-[10px] bg-bg px-2 py-1 rounded-full border border-border text-text-muted font-bold">Impactful</span>
              </div>
           </div>
        </div>
      </aside>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-text-primary text-bg pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-12 mb-12 flex-wrap gap-8">
        <div className="flex items-center gap-12">
          <div>
            <div className="text-accent-gold font-serif text-2xl">మీ కలల ఇల్లు — మా పని</div>
            <div className="text-[10px] text-text-muted uppercase tracking-widest mt-1 italic opacity-60">"Your dream home is our duty"</div>
          </div>
          <div className="hidden md:block h-12 w-px bg-white/10"></div>
          <div className="text-[13px] text-text-muted leading-relaxed">
            Bhavanipuram, Vijayawada, AP 520012<br/>
            contact@vastugriham.in | +91 98480 12345
          </div>
        </div>
        <div className="flex space-x-6">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-accent-gold transition-colors" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-accent-gold transition-colors" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-accent-gold transition-colors" />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-16 mb-16">
        <div>
          <div className="flex flex-col mb-6">
            <span className="text-3xl font-serif font-bold text-white">వాస్తు గృహం</span>
            <span className="text-xs uppercase tracking-[0.2em] text-accent-gold mt-1">Vastu Griham Interiors</span>
          </div>
          <p className="text-text-muted text-sm max-w-sm">
            Premium interior design rooted in Andhra culture. We bring your vision to life with traditional craftsmanship and modern flair.
          </p>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
           <ul className="space-y-4 text-sm text-text-muted">
             {['About', 'Services', 'Portfolio', 'Process', 'Blog'].map(link => (
               <li key={link}><a href="#" className="hover:text-accent-gold transition-colors">{link}</a></li>
             ))}
           </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
           <ul className="space-y-4 text-sm text-text-muted">
             <li>Vijayawada Offices</li>
             <li>Vizag Studio</li>
             <li>Tirupati Partner</li>
           </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-text-muted mb-4">Interior inspiration for Telugu homes.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 pl-4">
             <input type="email" placeholder="Your email" className="bg-transparent border-none outline-none text-sm w-full py-2 placeholder:text-text-muted" />
             <button className="bg-accent-primary text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-accent-gold transition-all shrink-0 uppercase tracking-wider">
               Subscribe
             </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-text-muted uppercase tracking-widest">
        <p>© 2025 Vastu Griham Interiors. Registered in Andhra Pradesh.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg selection:bg-accent-gold selection:text-white font-sans">
      <Navbar />
      <Hero />
      <WorkTicker />
      <ServicesGrid />
      <StatsBar />
      <PortfolioSection />
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}
