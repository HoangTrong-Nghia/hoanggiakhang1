import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
} from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  ArrowRight, 
  Send, 
  MessageSquare, 
  ArrowUp,
  Search,
  Tag,
  Briefcase,
  Layers,
  CheckCircle,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  NAV_LINKS, 
  HERO_SLIDES, 
  STATS, 
  PRODUCT_CATEGORIES, 
  SERVICES, 
  WHY_CHOOSE_US, 
  BLOG_POSTS, 
  PARTNERS 
} from './data';
import { Logo } from './components/Logo';
import { BEARINGS_CATALOG, Product } from './productsData';
import { FastenersCatalog } from './components/FastenersCatalog';
import { ToolsCatalogComponent } from './components/ToolsCatalog';
import { FluidPowerCatalog } from './components/FluidPowerCatalog';
import { LubricantsCatalog } from './components/LubricantsCatalog';
import { PalletWarehouseCatalog } from './components/PalletWarehouseCatalog';

// Helper to render basic markdown for blog content
const renderBoldText = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\//g); // fallback regex
  const partsRegex = text.split(/\*\*(.*?)\*\*/g);
  return partsRegex.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i} className="text-[#B8860B] font-semibold">{part}</strong>;
    }
    return part;
  });
};

const RenderBlogMarkdown = ({ content }: { content: string }) => {
  if (!content) return null;
  const lines = content.split('\n');
  return (
    <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-sm">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="text-[#B8860B] font-display text-xl font-bold italic mt-8 mb-4 border-b border-white/5 pb-2">
              {trimmed.replace('### ', '')}
            </h4>
          );
        }
        if (trimmed.startsWith('#### ')) {
          return (
            <h5 key={idx} className="text-white font-sans text-base font-bold mt-6 mb-3">
              {trimmed.replace('#### ', '')}
            </h5>
          );
        }
        if (trimmed.startsWith('*  ') || trimmed.startsWith('* ')) {
          const raw = trimmed.startsWith('*  ') ? trimmed.replace('*  ', '') : trimmed.replace('* ', '');
          return (
            <ul key={idx} className="list-disc pl-6 text-gray-300 space-y-1 my-2">
              <li className="font-light">{renderBoldText(raw)}</li>
            </ul>
          );
        }
        if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ')) {
          const match = trimmed.match(/^(\d+\.\s+)(.*)$/);
          const num = match ? match[1] : '';
          const raw = match ? match[2] : trimmed;
          return (
            <div key={idx} className="flex gap-2.5 items-start pl-4 text-gray-300 my-4">
              <span className="text-gold font-mono font-bold shrink-0">{num}</span>
              <p className="flex-1 font-light">{renderBoldText(raw)}</p>
            </div>
          );
        }
        if (trimmed === '---') {
          return <hr key={idx} className="my-8 border-white/5" />;
        }
        if (trimmed === '') {
          return <div key={idx} className="h-2" />;
        }
        return (
          <p key={idx} className="text-gray-300 font-light text-justify leading-relaxed">
            {renderBoldText(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

// --- SHARED COMPONENTS ---

const SectionHeading = ({ children, subtitle, light = false, center = true }: { children: React.ReactNode, subtitle?: string, light?: boolean, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block text-gold font-semibold tracking-widest text-sm uppercase mb-3"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-display font-bold leading-tight ${light ? 'text-white' : 'text-navy-dark'}`}
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className={`h-1 bg-gold mt-4 ${center ? 'mx-auto' : ''}`}
    />
  </div>
);

const FloatButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a 
        href={COMPANY_INFO.socials.zalo}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl relative"
      >
        <span className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-25"></span>
        <MessageSquare size={28} />
      </motion.a>
      <motion.a 
        href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <Phone size={24} />
      </motion.a>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-navy-dark rounded-full flex items-center justify-center text-white shadow-lg border border-gold/30"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);
  const newsSliderRef = useRef<HTMLDivElement>(null);

  // Bearing Product Catalog and Inquiry States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('Tất cả');
  const [quickInquiryName, setQuickInquiryName] = useState('');
  const [quickInquiryPhone, setQuickInquiryPhone] = useState('');
  const [quickInquiryNotes, setQuickInquiryNotes] = useState('');
  const [quickInquirySuccess, setQuickInquirySuccess] = useState(false);

  // Partner Contact Form States
  const [partnerName, setPartnerName] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerCompany, setPartnerCompany] = useState('');
  const [partnerField, setPartnerField] = useState('Hệ thống Vòng bi - Ổ bi');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  // States to toggle visibility of commercial catalogs (hidden by default to avoid clutter)
  const [showBearingCatalog, setShowBearingCatalog] = useState(false);
  const [showFastenersCatalog, setShowFastenersCatalog] = useState(false);
  const [showToolsCatalog, setShowToolsCatalog] = useState(false);
  const [showFluidPowerCatalog, setShowFluidPowerCatalog] = useState(false);
  const [showLubricantsCatalog, setShowLubricantsCatalog] = useState(false);
  const [showPalletCatalog, setShowPalletCatalog] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handlePartnerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName || !partnerPhone) return;

    const subject = `Yêu cầu hợp tác & Tư vấn: ${partnerField}`;
    const body = `Họ tên: ${partnerName}
Số điện thoại: ${partnerPhone}
Email: ${partnerEmail || 'N/A'}
Quý doanh nghiệp: ${partnerCompany || 'N/A'}
Lĩnh vực tư vấn: ${partnerField}

Chi tiết yêu cầu:
${partnerMessage || 'N/A'}`;

    window.location.href = `mailto:hoanggiakhangtrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setPartnerSuccess(true);
    setTimeout(() => {
      setPartnerSuccess(false);
      setPartnerName('');
      setPartnerPhone('');
      setPartnerEmail('');
      setPartnerCompany('');
      setPartnerField('Hệ thống Vòng bi - Ổ bi');
      setPartnerMessage('');
    }, 5000);
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white overflow-x-hidden">
      {/* 1. TOP BAR */}
      <div className="bg-navy-dark text-white py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[11px] border-b border-white/10 hidden md:flex">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-gold" />
            <span>{COMPANY_INFO.hotline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-gold" />
            <span>{COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            <span>{COMPANY_INFO.address.split(',').slice(-2).join(',')}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href={COMPANY_INFO.socials.facebook} className="hover:text-gold transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-gold transition-colors"><Youtube size={16} /></a>
          <a href={COMPANY_INFO.socials.zalo} className="hover:text-gold transition-colors font-bold uppercase tracking-widest px-2">Zalo</a>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR */}
      <nav className={`sticky top-0 z-[100] transition-all duration-300 bg-navy-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 ${isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'}`}>
        <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo layout="horizontal" iconSize={52} />
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="text-white hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1.5"
                >
                  {link.name} {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-gold py-2">
                    {link.dropdown.map(sub => (
                      <a 
                        key={sub.name} 
                        href={sub.href}
                        className="block px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy-dark hover:bg-gold/10 hover:text-gold transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-widest hidden sm:block shadow-lg"
            >
              Yêu cầu báo giá
            </motion.button>
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <a 
                      href={link.href} 
                      onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                      className="text-white text-lg font-bold flex items-center justify-between"
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <div className="pl-4 flex flex-col gap-4 border-l border-gold/30">
                        {link.dropdown.map(sub => (
                          <a 
                            key={sub.name} 
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white/60 hover:text-gold text-sm font-medium"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gold text-white py-4 rounded-sm font-bold uppercase w-full tracking-widest"
                >
                  Yêu cầu báo giá
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 3. HERO SLIDER */}
      <section id="home" className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-navy-dark/60 z-10" />
            <img 
              src={HERO_SLIDES[currentHero].image} 
              alt={HERO_SLIDES[currentHero].title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-110 animate-zoom-slow"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center px-4 md:px-12 pt-20">
          <div className="container mx-auto">
            <motion.div 
              key={`content-${currentHero}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-5 py-2 bg-gold/20 backdrop-blur-md border border-gold/50 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-8">
                Uy tín – Chất lượng – Toàn diện
              </span>
              <h2 className="text-4xl md:text-7xl font-display font-medium text-white leading-[1.1] mb-8">
                {HERO_SLIDES[currentHero].title}
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light mb-12 leading-relaxed max-w-2xl">
                {HERO_SLIDES[currentHero].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 group transition-all shadow-2xl"
                >
                  Khám phá ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest backdrop-blur-sm transition-all"
                >
                  Liên hệ tư vấn
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-4">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentHero(idx)}
              className={`w-12 h-1.5 transition-all duration-700 ${currentHero === idx ? 'bg-gold w-24' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>

        {/* 4. STATS (Over Hero) */}
        <div className="absolute -bottom-2 md:-bottom-20 left-0 w-full z-30 px-4">
          <div className="container mx-auto px-0 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gold/10 overflow-hidden">
              {STATS.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 md:p-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left ${idx !== STATS.length - 1 ? 'lg:border-r border-gray-100' : ''} ${idx % 2 === 0 ? 'border-r sm:border-r-0' : ''} ${idx >= 2 ? 'border-t lg:border-t-0' : ''}`}
                >
                  <div className="bg-gold/10 p-4 rounded-xl text-gold flex-shrink-0">
                    <stat.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-display font-medium text-navy-dark leading-none mb-2 italic">{stat.value}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DANH MỤC SẢN PHẨM */}
      <section id="products" className="pt-48 pb-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <SectionHeading subtitle="Danh mục vật tư">ĐA DẠNG SẢN PHẨM CHẤT LƯỢNG CAO</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  if (cat.id === 1) {
                    setShowBearingCatalog(true);
                    setTimeout(() => {
                      document.getElementById('bearing-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (cat.id === 2) {
                    setShowFastenersCatalog(true);
                    setTimeout(() => {
                      document.getElementById('fasteners-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (cat.id === 3) {
                    setShowToolsCatalog(true);
                    setTimeout(() => {
                      document.getElementById('tools-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (cat.id === 4) {
                    setShowFluidPowerCatalog(true);
                    setTimeout(() => {
                      document.getElementById('fluid-power-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (cat.id === 5) {
                    setShowLubricantsCatalog(true);
                    setTimeout(() => {
                      document.getElementById('lubricants-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (cat.id === 6) {
                    setShowPalletCatalog(true);
                    setTimeout(() => {
                      document.getElementById('pallet-catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="group relative h-[420px] overflow-hidden rounded-sm bg-navy-dark hover-lift cursor-pointer"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                  <div className="w-14 h-14 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-gold transition-all duration-500 shadow-xl">
                    <cat.icon size={26} />
                  </div>
                  <h3 className="text-2xl font-display font-medium italic mb-2">{cat.title}</h3>
                  <p className="text-gold font-bold text-[11px] uppercase tracking-widest mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{cat.brand}</p>
                  <div className="flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-[0.2em] group-hover:text-gold transition-colors">
                    Xem danh mục chi tiết <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DYNAMIC SHOWER: Ổ BI & VÒNG BI DETAILED COMMERCIAL CATALOG */}
        {showBearingCatalog && (
          <div id="bearing-catalog" className="container mx-auto px-4 md:px-12 mt-32 pt-20 border-t border-navy-dark/10 relative">
            <div className="text-center mb-12">
              <span className="inline-block text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-3">
                Trang Thương Mại & Cung Ứng
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-dark leading-tight">
                DANH MỤC CHI TIẾT: Ổ BI & VÒNG BI
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-4 font-light text-sm md:text-base">
                Tìm kiếm sản phẩm, lọc theo thương hiệu toàn cầu và gửi yêu cầu tư vấn báo giá trực tiếp phục vụ nhu cầu sản xuất công nghiệp.
              </p>
              <div className="h-1 bg-[#B8860B] w-24 mx-auto mt-6" />
            </div>

            {/* SEARCH & FILTERS BAR */}
            <div className="bg-[#0A1628] rounded-xl p-6 md:p-8 shadow-2xl mb-12 border border-[#B8860B]/20">
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                    <Search size={18} />
                  </span>
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên ổ bi, mã series, ứng dụng..."
                    className="w-full bg-navy-dark/50 border border-[#B8860B]/30 rounded-sm py-3.5 pl-11 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all text-sm font-sans"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Brand Selection Filters */}
                <div className="flex flex-wrap gap-2 items-center justify-center w-full lg:w-auto">
                  <span className="text-[11px] font-bold text-[#B8860B] uppercase tracking-wider mr-2 hidden xl:inline">Thương hiệu:</span>
                  {['Tất cả', 'SKF', 'NSK', 'FAG', 'NTN', 'Koyo', 'Timken', 'INA'].map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                        selectedBrand === brand 
                          ? 'bg-[#B8860B] text-white shadow-lg' 
                          : 'bg-navy-dark/40 text-gray-300 hover:bg-navy-dark/80 hover:text-white border border-white/5'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtering summary stats */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 border-t border-white/5 pt-4">
                <div>
                  Hiển thị <span className="text-[#B8860B] font-bold">
                    {BEARINGS_CATALOG.products.filter(p => {
                      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                           p.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                           p.applications.toLowerCase().includes(searchQuery.toLowerCase());
                      const matchesBrand = selectedBrand === 'Tất cả' || p.brands.includes(selectedBrand);
                      return matchesSearch && matchesBrand;
                    }).length}
                  </span> trên tổng số <span className="text-white font-bold">{BEARINGS_CATALOG.products.length}</span> loại gối đỡ & vòng bi.
                </div>
                {(searchQuery || selectedBrand !== 'Tất cả') && (
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedBrand('Tất cả');
                    }}
                    className="text-[#B8860B] hover:underline font-bold uppercase tracking-wider mt-2 sm:mt-0"
                  >
                    Xóa các bộ lọc
                  </button>
                )}
              </div>
            </div>

            {/* PRODUCT CARD GRID (3 cols Desktop / 2 cols Tablet / 1 col Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BEARINGS_CATALOG.products
                .filter(p => {
                  const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                       p.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                       p.applications.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesBrand = selectedBrand === 'Tất cả' || p.brands.includes(selectedBrand);
                  return matchesSearch && matchesBrand;
                })
                .map((product) => (
                  <motion.div
                    key={product.id}
                    layoutId={`product-card-${product.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="flex flex-col bg-[#0A1628] rounded-sm overflow-hidden border border-[#B8860B]/10 hover:border-[#B8860B]/50 transition-all duration-300 shadow-xl group h-full"
                  >
                    {/* Image block */}
                    <div className="relative h-56 overflow-hidden bg-navy-dark/60 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent z-10" />
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shadow-md ${
                          product.status === "Còn hàng" 
                            ? "bg-green-500/10 text-green-400 border border-green-500/30" 
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${product.status === "Còn hàng" ? "bg-green-400 animate-pulse" : "bg-amber-400"}`} />
                          {product.status}
                        </span>
                      </div>

                      {/* Series Mini Tag */}
                      <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-[#B8860B]/30 px-3 py-1 font-mono text-[10px] text-white">
                        Series: {product.series.split(' / ')[0]}
                      </div>
                    </div>

                    {/* Meta parameters content */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#B8860B] transition-colors line-clamp-2">
                          {product.name}
                        </h4>

                        {/* Series fully */}
                        <div className="flex gap-2 items-center text-xs text-gray-400 mb-4 font-mono">
                          <Layers size={12} className="text-[#B8860B]" />
                          <span>Dải mã: {product.series}</span>
                        </div>

                        {/* Brands list */}
                        <div className="mb-4">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Thương hiệu phân phối:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {product.brands.map((b) => (
                              <span 
                                key={b} 
                                className="px-2 py-0.5 bg-white/5 border border-white/5 text-[10px] text-[#B8860B] font-bold rounded-sm uppercase tracking-wider hover:bg-white/10"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Application text */}
                        <div className="text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-4 mb-6">
                          <p className="font-bold text-[10px] text-white uppercase tracking-wider mb-1">Ứng dụng tiêu biểu:</p>
                          <span className="line-clamp-2 italic text-gray-300">"{product.applications}"</span>
                        </div>
                      </div>

                      {/* Click detailed actions */}
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setQuickInquirySuccess(false);
                          setQuickInquiryName('');
                          setQuickInquiryPhone('');
                          setQuickInquiryNotes('');
                        }}
                        className="w-full bg-transparent hover:bg-[#B8860B] text-[#B8860B] hover:text-white border border-[#B8860B]/50 hover:border-[#B8860B] py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Xem chi tiết <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* If empty state matches filters */}
            {BEARINGS_CATALOG.products.filter(p => {
              const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                   p.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                   p.applications.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesBrand = selectedBrand === 'Tất cả' || p.brands.includes(selectedBrand);
              return matchesSearch && matchesBrand;
            }).length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-[#0A1628]/40 border border-[#B8860B]/10 rounded-xl"
              >
                <AlertCircle size={48} className="text-[#B8860B] mx-auto mb-4" />
                <p className="text-white font-bold text-lg mb-2">Không tìm thấy sản phẩm phù hợp</p>
                <p className="text-gray-400 font-light text-sm max-w-md mx-auto">
                  Hãy thử thay đổi từ khóa tìm kiếm hoặc chọn "Tất cả" thương hiệu để hiển thị đầy đủ danh sách.
                </p>
              </motion.div>
            )}

            {/* Collapse Button inside the expanded view for better UX */}
            <div className="mt-16 text-center border-t border-navy-dark/5 pt-12">
              <button
                onClick={() => {
                  setShowBearingCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-100 hover:bg-[#B8860B] text-gray-700 hover:text-white border border-gray-200 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Ổ bi & Vòng bi
              </button>
            </div>
          </div>
        )}

        {/* --- PREMIUM PORTAL MODAL DIALOG --- */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="bg-[#0A1628] border border-[#B8860B]/30 rounded-lg max-w-4xl w-full text-white overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/40 hover:bg-[#B8860B] text-white flex items-center justify-center rounded-full transition-all border border-white/10"
                >
                  <X size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Side: Product Media */}
                  <div className="relative h-64 md:h-full min-h-[300px] bg-navy-dark/70">
                    <img 
                      src={selectedProduct.imageUrl} 
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A1628] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className={`px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full inline-flex items-center gap-1.5 shadow-lg ${
                        selectedProduct.status === "Còn hàng" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/40" 
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${selectedProduct.status === "Còn hàng" ? "bg-green-400 animate-ping" : "bg-amber-400"}`} />
                        {selectedProduct.status}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Specifications and Quick Quote Form */}
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-[#B8860B] font-bold uppercase tracking-[0.25em] block mb-2">Thông Số Bản Quyền Sản Phẩm</span>
                      <h3 className="text-2xl font-bold font-sans text-white mb-6 leading-tight">
                        {selectedProduct.name}
                      </h3>

                      {/* Parameters Grid */}
                      <div className="space-y-4 border-b border-white/5 pb-6 mb-6">
                        <div className="grid grid-cols-3 text-sm">
                          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">Series mã:</span>
                          <span className="col-span-2 text-[#B8860B] font-mono font-medium">{selectedProduct.series}</span>
                        </div>
                        <div className="grid grid-cols-3 text-sm">
                          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">Trục cốt (Bore):</span>
                          <span className="col-span-2 text-white font-mono">{selectedProduct.bore_diameter}</span>
                        </div>
                        <div className="grid grid-cols-3 text-sm">
                          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">Hãng sẵn kho:</span>
                          <span className="col-span-2 text-white font-bold tracking-wide">
                            {selectedProduct.brands.join(', ')}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 text-sm">
                          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">Ứng dụng:</span>
                          <span className="col-span-2 text-gray-300 font-light italic">"{selectedProduct.applications}"</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Consultation Inquiry Form */}
                    <div className="bg-navy-dark/40 border border-[#B8860B]/10 p-5 rounded-sm">
                      <h4 className="text-xs font-bold text-[#B8860B] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Send size={14} /> Gửi yêu cầu tư vấn báo giá ngay
                      </h4>

                      {quickInquirySuccess ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center py-4 bg-green-500/10 border border-green-500/30 rounded-sm"
                        >
                          <CheckCircle className="text-green-400 mx-auto mb-2" size={32} />
                          <p className="text-xs text-white font-bold uppercase tracking-wider">Gửi thành công!</p>
                          <p className="text-[11px] text-gray-400 mt-1">Đội ngũ kỹ sư HGK sẽ Zalo/Hotline hỗ trợ Quý khách trong vòng tối đa 2 giờ.</p>
                        </motion.div>
                      ) : (
                        <form onSubmit={(e) => {
                          e.preventDefault();
                          if (!quickInquiryName || !quickInquiryPhone) return;

                          const subject = `Yêu cầu báo giá Vòng bi - Ổ bi: ${selectedProduct ? selectedProduct.name : 'Vật tư ổ đỡ'}`;
                          const body = `Họ tên khách hàng: ${quickInquiryName}
Số điện thoại: ${quickInquiryPhone}

Nội dung yêu cầu chi tiết:
- Thiết bị quan tâm: ${selectedProduct ? selectedProduct.name : 'Gối đỡ / Vòng bi'}
- Nhóm: ${selectedProduct ? selectedProduct.group : 'Vòng bi'}
- Ghi chú: ${quickInquiryNotes || 'N/A'}`;

                          window.location.href = `mailto:hoanggiakhangtrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                          setQuickInquirySuccess(true);
                        }} className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              type="text" 
                              required
                              placeholder="Họ tên của bạn *"
                              value={quickInquiryName}
                              onChange={(e) => setQuickInquiryName(e.target.value)}
                              className="bg-navy-dark/80 border border-white/10 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-[#B8860B] transition-colors"
                            />
                            <input 
                              type="tel" 
                              required
                              placeholder="Số Zalo / SĐT liên hệ *"
                              value={quickInquiryPhone}
                              onChange={(e) => setQuickInquiryPhone(e.target.value)}
                              className="bg-navy-dark/80 border border-white/10 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-[#B8860B] transition-colors"
                            />
                          </div>
                          <textarea 
                            rows={2}
                            placeholder="Ghi chú về số lượng hoặc yêu cầu đặc thù về kích thước trục, hãng bôi trơn..."
                            value={quickInquiryNotes}
                            onChange={(e) => setQuickInquiryNotes(e.target.value)}
                            className="w-full bg-navy-dark/80 border border-white/10 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-[#B8860B] transition-colors"
                          />
                          <button
                            type="submit"
                            disabled={!quickInquiryName || !quickInquiryPhone}
                            className="w-full bg-[#B8860B] hover:bg-[#B8860B]/80 disabled:opacity-50 text-white font-bold py-2.5 rounded-sm uppercase tracking-widest text-[10px] transition-colors flex items-center justify-center gap-2 shadow-lg"
                          >
                            <span>Gửi Yêu Cầu Cho Gối Đỡ / Vòng Bi Này</span>
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- PREMIUM BLOG POST DETAIL DIALOG --- */}
        <AnimatePresence>
          {selectedBlogPost && (
            <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBlogPost(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                className="bg-[#0D1F3C] border border-[#B8860B]/30 rounded-xl w-full max-w-4xl max-h-[90vh] text-white overflow-hidden shadow-2xl relative z-10 flex flex-col"
              >
                {/* Close Button top-right */}
                <button 
                  onClick={() => setSelectedBlogPost(null)}
                  className="absolute top-5 right-5 z-50 w-10 h-10 bg-black/60 hover:bg-[#B8860B] text-white flex items-center justify-center rounded-full transition-all border border-white/10 shadow-lg cursor-pointer"
                  title="Đóng cửa sổ"
                >
                  <X size={20} />
                </button>

                {/* Main scrollable body */}
                <div className="overflow-y-auto flex-1">
                  {/* Banner Image */}
                  <div className="relative h-72 md:h-96 w-full">
                    <img 
                      src={selectedBlogPost.image} 
                      alt={selectedBlogPost.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] via-[#0D1F3C]/60 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:on-8 md:right-8 z-20">
                      <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-3 py-1 border border-gold/30 rounded-full inline-flex items-center gap-1.5 mb-3">
                        <Clock size={10} /> {selectedBlogPost.date}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-display font-medium italic text-white drop-shadow-md leading-tight">
                        {selectedBlogPost.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Text Content */}
                  <div className="p-6 md:p-12">
                    {/* Rendered content */}
                    {selectedBlogPost.content ? (
                      <RenderBlogMarkdown content={selectedBlogPost.content} />
                    ) : (
                      <p className="text-gray-300 font-light text-base leading-relaxed">
                        {selectedBlogPost.excerpt}
                      </p>
                    )}

                    {/* Bottom Action / Inquiry */}
                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center bg-[#0A1628]/40 p-6 rounded-lg border border-white/5">
                      <div className="text-center md:text-left">
                        <h4 className="font-display italic text-[#B8860B] text-lg mb-1">Cổ phần hóa vật tư kỹ thuật Hoàng Gia Khang</h4>
                        <p className="text-xs text-gray-400 font-light">Quý doanh nghiệp cần tư vấn chuyên sâu về các chủng loại vòng bi NTN hoặc vật dụng phụ trợ?</p>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedBlogPost(null);
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-3 bg-[#B8860B] hover:bg-[#B8860B]/80 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all focus:outline-none cursor-pointer text-center whitespace-nowrap"
                      >
                        Liên Hệ Chuyên Gia Ngay
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="bg-[#0A1628] px-8 py-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>HOÀNG GIA KHANG - TÀI LIỆU CHUYÊN NGÀNH</span>
                  <button onClick={() => setSelectedBlogPost(null)} className="text-[#B8860B] hover:underline uppercase cursor-pointer">
                    [ Đóng bài đọc ]
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- DETAILED FASTENERS CATALOG COMPONENT --- */}
        {showFastenersCatalog && (
          <div id="fasteners-catalog" className="relative mt-16">
            <FastenersCatalog />
            {/* Collapse Button inside the expanded view for better UX */}
            <div className="container mx-auto px-4 md:px-12 mt-16 text-center pb-12">
              <button
                onClick={() => {
                  setShowFastenersCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1F3C] hover:bg-[#B8860B] text-gray-200 hover:text-white border border-white/10 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Bulong - Đai ốc - Vít
              </button>
            </div>
          </div>
        )}

        {/* --- DETAILED TOOLS CATALOG COMPONENT --- */}
        {showToolsCatalog && (
          <div id="tools-catalog" className="relative mt-16">
            <ToolsCatalogComponent />
            {/* Collapse Button inside the expanded view for better UX */}
            <div className="container mx-auto px-4 md:px-12 mt-16 text-center pb-12">
              <button
                onClick={() => {
                  setShowToolsCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1F3C] hover:bg-[#B8860B] text-gray-200 hover:text-white border border-white/10 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Máy & Dụng Cụ
              </button>
            </div>
          </div>
        )}

        {/* --- DETAILED FLUID POWER CATALOG COMPONENT --- */}
        {showFluidPowerCatalog && (
          <div id="fluid-power-catalog" className="relative mt-16">
            <FluidPowerCatalog />
            {/* Collapse Button inside the expanded view for better UX */}
            <div className="container mx-auto px-4 md:px-12 mt-16 text-center pb-12">
              <button
                onClick={() => {
                  setShowFluidPowerCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1F3C] hover:bg-[#B8860B] text-gray-200 hover:text-white border border-white/10 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Khí Nén - Thủy Lực
              </button>
            </div>
          </div>
        )}

        {/* --- DETAILED LUBRICANTS CATALOG COMPONENT --- */}
        {showLubricantsCatalog && (
          <div id="lubricants-catalog" className="relative mt-16">
            <LubricantsCatalog />
            {/* Collapse Button inside the expanded view for better UX */}
            <div className="container mx-auto px-4 md:px-12 mt-16 text-center pb-12">
              <button
                onClick={() => {
                  setShowLubricantsCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1F3C] hover:bg-[#B8860B] text-gray-200 hover:text-white border border-white/10 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Dầu Mỡ Bôi Trơn
              </button>
            </div>
          </div>
        )}

        {/* --- DETAILED PALLET & WAREHOUSE CATALOG COMPONENT --- */}
        {showPalletCatalog && (
          <div id="pallet-catalog" className="relative mt-16">
            <PalletWarehouseCatalog />
            {/* Collapse Button inside the expanded view for better UX */}
            <div className="container mx-auto px-4 md:px-12 mt-16 text-center pb-12">
              <button
                onClick={() => {
                  setShowPalletCatalog(false);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D1F3C] hover:bg-[#B8860B] text-gray-200 hover:text-white border border-white/10 hover:border-[#B8860B] text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 cursor-pointer shadow-sm"
              >
                Thu gọn danh mục Pallet - Kệ & Vật Tư Kho Bãi
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. VỀ CHÚNG TÔI */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-sm overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=2071" 
                  alt="Industrial warehouse" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[5/4] object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-10 md:-right-10 right-0 z-20 bg-gold p-10 text-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center min-w-[240px]"
              >
                <h4 className="text-6xl font-display font-bold italic mb-1 leading-none">10+</h4>
                <p className="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap mt-4">Năm đồng hành phát triển</p>
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[20px] border-gold/5 -z-10" />
            </div>

            <div className="lg:w-1/2">
              <SectionHeading subtitle="Về Hoàng Gia Khang" center={false}>
                Đối tác Chiến lược <br /> & Kỹ thuật Công nghiệp
              </SectionHeading>
              
              <div className="space-y-6 text-gray-500 text-lg font-light leading-relaxed mb-12">
                <p>
                  Khởi nguồn từ sứ mệnh đồng hành cùng sự phát triển bền vững của doanh nghiệp, 
                  <strong className="text-navy-dark font-medium"> Hoàng Gia Khang</strong> đã vươn mình trở thành biểu tượng của sự tin cậy trong lĩnh vực cung ứng vật tư tại miền Trung.
                </p>
                <p>
                  Chúng tôi không chỉ cung cấp linh kiện; chúng tôi mang đến những giải pháp được may đo riêng biệt, 
                  giúp khách hàng tối ưu hóa hiệu suất thiết bị và tiết kiệm chi phí vận hành tối đa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                {["Hàng chính hãng CO/CQ", "Giao hàng thần tốc", "Giá xưởng cạnh tranh", "Bảo trì chuyên sâu"].map((feat) => (
                  <div key={feat} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                      <ChevronRight size={14} />
                    </div>
                    <span className="font-bold text-navy-dark uppercase text-[11px] tracking-widest">{feat}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ gap: '1.5rem' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-navy-dark text-white px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[11px] flex items-center gap-4 group transition-all shadow-xl"
              >
                Hợp tác cùng chúng tôi <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-gold" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DỊCH VỤ NỔI BẬT */}
      <section id="services" className="py-32 bg-navy-dark text-white relative">
        <div className="container mx-auto px-4 md:px-12">
          <SectionHeading subtitle="Hệ sinh thái dịch vụ" light>GIẢI PHÁP KỸ THUẬT CHUYÊN SÂU</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/5 rounded-sm overflow-hidden hover:bg-white/10 transition-all duration-500 group flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={service.image} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 right-6 w-12 h-12 border border-gold/50 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                    0{idx + 1}
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-medium italic mb-6 text-gold group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                  <p className="text-white/50 mb-10 font-light text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {service.points.map(pt => (
                      <div key={pt} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/70">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-auto py-5 border border-gold/20 hover:border-gold hover:bg-gold/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all rounded-sm flex items-center justify-center gap-2 group/btn">
                    Liên hệ tư vấn <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TẠI SAO CHỌN HGK */}
      <section className="py-32 bg-cream text-navy-dark overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <SectionHeading subtitle="Cam kết của chúng tôi">SỰ KHÁC BIỆT TẠO NÊN THƯƠNG HIỆU</SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 mt-16">
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-gold mb-6 mx-auto shadow-sm group-hover:shadow-2xl group-hover:bg-navy-dark group-hover:text-gold transition-all duration-500 group-hover:-translate-y-2">
                  <item.icon size={32} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FORM BÁO GIÁ NHANH */}
      <section id="contact" className="py-32 bg-[#081e35] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-2/5">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Kênh kết nối trực tiếp</span>
              <h2 className="text-4xl md:text-6xl font-display font-medium italic text-white mb-10 leading-tight">Yêu cầu báo giá <br /> Phản hồi thần tốc.</h2>
              
              <div className="space-y-10 group">
                {[
                  { icon: Phone, title: "Đường dây nóng", content: COMPANY_INFO.hotline, sub: "Hỗ trợ kỹ thuật k24/7" },
                  { icon: Mail, title: "Kênh thư điện tử", content: COMPANY_INFO.email, sub: "Gửi hồ sơ thầu/yêu cầu chi tiết" },
                  { icon: MapPin, title: "Văn phòng & Xưởng", content: COMPANY_INFO.address, sub: "Huế, Việt Nam" }
                ].map(info => (
                  <div key={info.title} className="flex gap-8 hover:translate-x-4 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-gold group-hover:border-gold/30 transition-all shadow-xl flex-shrink-0">
                      <info.icon size={26} />
                    </div>
                    <div>
                      <h5 className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">{info.title}</h5>
                      <p className="text-white text-xl font-medium tracking-tight mb-1">{info.content}</p>
                      <p className="text-gold text-[10px] font-bold uppercase tracking-widest">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-t-8 border-gold"
              >
                <div className="mb-12">
                  <h3 className="text-3xl font-display font-bold italic text-navy-dark mb-4 group cursor-default">
                    Gửi yêu cầu hợp tác <span className="text-gold group-hover:ml-4 transition-all">→</span>
                  </h3>
                  <p className="text-gray-400 text-sm font-light">Chúng tôi thấu hiểu nhu cầu của bạn và cam kết phản hồi sớm nhất.</p>
                </div>

                {partnerSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 bg-green-500/10 border border-green-500/20 rounded-sm p-6"
                  >
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-display font-medium text-navy-dark tracking-wide uppercase">Gửi Yêu Cầu Thành Công!</h4>
                    <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                      Hệ thống đã chuẩn bị thư gửi đến <strong>hoanggiakhangtrading@gmail.com</strong>. HGK sẽ liên hệ quý khách qua Hotline/Zalo trong thời gian sớm nhất.
                    </p>
                  </motion.div>
                ) : (
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handlePartnerFormSubmit}>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Danh xưng / Họ tên *</label>
                      <input 
                        type="text" 
                        required 
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        placeholder="Ông/Bà Nguyễn Văn A" 
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Số liên lạc *</label>
                      <input 
                        type="tel" 
                        required 
                        value={partnerPhone}
                        onChange={(e) => setPartnerPhone(e.target.value)}
                        placeholder="0833xxxxxx" 
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Thư điện tử</label>
                      <input 
                        type="email" 
                        value={partnerEmail}
                        onChange={(e) => setPartnerEmail(e.target.value)}
                        placeholder="contact@company.com" 
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Tên quý doanh nghiệp</label>
                      <input 
                        type="text" 
                        value={partnerCompany}
                        onChange={(e) => setPartnerCompany(e.target.value)}
                        placeholder="Công ty TNHH..." 
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-medium" 
                      />
                    </div>
                    <div className="flex flex-col gap-3 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Lĩnh vực cần tư vấn</label>
                      <select 
                        value={partnerField}
                        onChange={(e) => setPartnerField(e.target.value)}
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-bold uppercase tracking-widest cursor-pointer whitespace-nowrap overflow-hidden"
                      >
                        <option value="Hệ thống Vòng bi - Ổ bi">Hệ thống Vòng bi - Ổ bi</option>
                        <option value="Vật tư Ngũ kim - Bulong">Vật tư Ngũ kim - Bulong</option>
                        <option value="Thiết bị Khí nén - Thủy lực">Thiết bị Khí nén - Thủy lực</option>
                        <option value="Chế tạo Máy - Băng tải">Chế tạo Máy - Băng tải</option>
                        <option value="Sản xuất Pallet công nghiệp">Sản xuất Pallet công nghiệp</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-3 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-dark/40">Chi tiết yêu cầu</label>
                      <textarea 
                        value={partnerMessage}
                        onChange={(e) => setPartnerMessage(e.target.value)}
                        placeholder="Xin vui lòng mô tả nhu cầu..." 
                        rows={4} 
                        className="bg-cream p-5 rounded-sm border-0 focus:ring-2 focus:ring-gold transition-all text-sm font-medium resize-none shadow-inner" 
                      />
                    </div>
                    <motion.button 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="md:col-span-2 bg-gold hover:bg-gold-dark text-white p-6 rounded-sm font-bold uppercase tracking-[0.3em] text-xs shadow-2xl flex items-center justify-center gap-4 group transition-all"
                    >
                      Xác nhận gửi thông tin <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TIN TỨC */}
      <section id="news" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex-1">
              <SectionHeading subtitle="Tạp chí công nghiệp" center={false}>KIẾN THỨC & TIN TỨC MỚI NHẤT</SectionHeading>
            </div>
            <div className="flex items-center gap-3 self-end md:self-center">
              <span className="text-xs text-gray-400 font-medium mr-2 hidden sm:inline-block">
                Vuốt ngang để đọc thêm ({BLOG_POSTS.length} bài)
              </span>
              <button 
                onClick={() => {
                  if (newsSliderRef.current) {
                    newsSliderRef.current.scrollBy({ left: -440, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full border border-gray-200 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-navy-dark hover:text-gold transition-all duration-300 shadow-xs"
                title="BÀI TRƯỚC"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => {
                  if (newsSliderRef.current) {
                    newsSliderRef.current.scrollBy({ left: 440, behavior: 'smooth' });
                  }
                }}
                className="w-11 h-11 rounded-full border border-gray-200 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-navy-dark hover:text-gold transition-all duration-300 shadow-xs"
                title="BÀI TIẾP THEO"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div 
            ref={newsSliderRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {BLOG_POSTS.map((post, idx) => (
              <motion.article 
                key={post.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                onClick={() => setSelectedBlogPost(post)}
                className="group cursor-pointer flex flex-col w-[300px] sm:w-[350px] md:w-[410px] shrink-0 snap-start bg-[#FAF8F4]/40 hover:bg-white p-5 rounded-md border border-gray-100/80 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 sm:h-56 overflow-hidden rounded-sm mb-6 relative shadow-md">
                  <img src={post.image} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-sm font-bold text-[9px] uppercase tracking-[0.15em] shadow-md">
                    Chuyên gia chia sẻ
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold font-bold text-[9px] uppercase tracking-[0.15em] mb-3">
                  <Clock size={11} className="mt-[-1px]" /> {post.date}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-medium italic text-navy-dark mb-4 group-hover:text-gold transition-colors leading-tight line-clamp-2 min-h-[3rem]">
                  {post.title}
                </h3>
                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 min-h-[4rem]">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3 text-navy-dark font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.25em] group-hover:text-gold transition-all w-fit relative">
                  Đọc toàn văn <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ĐỐI TÁC */}
      <section className="py-24 border-t border-gray-100 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center">
            <h5 className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-16 italic underline decoration-gold/30 underline-offset-8">Thương hiệu phân phối chiến lược</h5>
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-x-12 gap-y-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
              {PARTNERS.map(brand => (
                <span key={brand} className="text-2xl md:text-3xl font-display font-black tracking-tighter text-navy-dark hover:text-gold hover:scale-110 transition-all cursor-default text-center">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-navy-dark text-white pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-20 border-b border-white/5">
            <div className="lg:col-span-1">
              <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer mb-8">
                <Logo layout="vertical" iconSize={80} />
              </div>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-10 italic">
                "{COMPANY_INFO.slogan}" <br /><br />
                Đơn vị tiên phong vận hành tại khu vực miền Trung, giải quyết mọi bài toán vật tư công nghiệp hóc búa.
              </p>
              <div className="flex items-center gap-5">
                <a href={COMPANY_INFO.socials.facebook} className="w-11 h-11 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-white hover:-translate-y-1 transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-11 h-11 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-white hover:-translate-y-1 transition-all"><Youtube size={20} /></a>
                <a href={COMPANY_INFO.socials.zalo} className="w-11 h-11 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-gold hover:text-white hover:-translate-y-1 transition-all font-bold text-xs">Z</a>
              </div>
            </div>

            <div>
              <h5 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-10 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-0.5 after:bg-gold">Giải pháp Sản phẩm</h5>
              <ul className="space-y-6 text-white/40 font-medium uppercase text-[10px] tracking-widest">
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Vòng bi - Ổ bi chuyên dụng</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Vật tư ngũ kim cao cấp</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Hệ thống Khí nén - Thủy lực</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Dầu nhờn - Mỡ bôi trơn</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Bulong - Đai ốc tiêu chuẩn</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-10 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-0.5 after:bg-gold">Dịch vụ Chiến lược</h5>
              <ul className="space-y-6 text-white/40 font-medium uppercase text-[10px] tracking-widest">
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Thiết kế & Chế tạo máy</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Gia công Pallet gỗ chuẩn ISPM 15</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Giải pháp Pallet nhựa PVC</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Tư vấn vận hành xưởng</a></li>
                <li><a href="#" className="hover:text-gold transition-all flex items-center gap-3">Cơ khí chính xác CNC</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-10 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-10 after:h-0.5 after:bg-gold">Thông tin Trụ sở</h5>
              <ul className="space-y-8 text-white/50 text-sm font-light">
                <li className="flex gap-5 group">
                  <MapPin size={22} className="text-gold shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{COMPANY_INFO.address}</span>
                </li>
                <li className="flex gap-5 group">
                  <Phone size={22} className="text-gold shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-white transition-colors">Tel: {COMPANY_INFO.hotline}</span>
                </li>
                <li className="flex gap-5 group">
                  <Mail size={22} className="text-gold shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{COMPANY_INFO.email}</span>
                </li>
                <li className="pt-8 border-t border-white/5">
                  <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold mb-3">Mã số thuế doanh nghiệp</p>
                  <p className="text-2xl font-display font-medium italic text-white">{COMPANY_INFO.taxCode}</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
              © 2025 Hoàng Gia Khang Management. <span className="hidden md:inline">|</span> Developed by HGK Creative Tech
            </p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING BUTTONS */}
      <FloatButtons />
    </div>
  );
}
