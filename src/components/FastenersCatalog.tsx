import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  RotateCcw, 
  Layers, 
  CheckCircle, 
  AlertTriangle, 
  Scale, 
  X, 
  ArrowRight, 
  Send, 
  Check, 
  Info,
  SlidersHorizontal,
  Plus
} from 'lucide-react';
import { FASTENERS_DATA, FastenerProduct } from '../fastenersData';

// --- PREMIUM GENERATED REALISTIC IMAGES ---
import fastenerBolts from '../assets/images/fastener_bolts_1779263041086.png';
import fastenerNuts from '../assets/images/fastener_nuts_1779263062174.png';
import fastenerScrews from '../assets/images/fastener_screws_1779263083410.png';
import fastenerAccessories from '../assets/images/fastener_accessories_1779263101970.png';

const getFastenerImage = (group: string) => {
  switch (group) {
    case "Bulong":
      return fastenerBolts;
    case "Đai Ốc":
      return fastenerNuts;
    case "Vít":
      return fastenerScrews;
    case "Phụ Kiện":
      return fastenerAccessories;
    default:
      return fastenerBolts;
  }
};

// --- STYLISH INDUSTRIAL SVG DRAWINGS ---
// We render glowing, highly accurate vector sketches for the products to match high-end manufacturing sites
const FastenerSketch: React.FC<{ group: string; className?: string }> = ({ group, className = "w-24 h-24" }) => {
  const strokeColor = "url(#goldGradientFastener)";
  const fillAccent = "rgba(184, 134, 11, 0.15)";
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} filter drop-shadow-[0_0_8px_rgba(200,150,62,0.3)]`}
    >
      <defs>
        <linearGradient id="goldGradientFastener" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEAA7" />
          <stop offset="50%" stopColor="#F5CD79" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {group === "Bulong" && (
        <g>
          {/* Hex head */}
          <path d="M 35 25 L 65 25 L 80 40 L 65 55 L 35 55 L 20 40 Z" stroke={strokeColor} strokeWidth="2.5" fill={fillAccent} />
          {/* Threads/Shaft */}
          <path d="M 40 55 L 40 85 C 40 88, 60 88, 60 85 L 60 55" stroke={strokeColor} strokeWidth="2.5" fill="none" />
          {/* Shaft thread lines */}
          <line x1="40" y1="62" x2="60" y2="62" stroke={strokeColor} strokeWidth="2" strokeDasharray="1 1" />
          <line x1="40" y1="68" x2="60" y2="68" stroke={strokeColor} strokeWidth="2" />
          <line x1="40" y1="74" x2="60" y2="74" stroke={strokeColor} strokeWidth="2" strokeDasharray="1 1" />
          <line x1="40" y1="80" x2="60" y2="80" stroke={strokeColor} strokeWidth="2" />
          {/* Center line for blueprint feel */}
          <line x1="50" y1="18" x2="50" y2="90" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        </g>
      )}

      {group === "Đai Ốc" && (
        <g>
          {/* Outer hexagonal body */}
          <path d="M 50 15 L 80 32 L 80 68 L 50 85 L 20 68 L 20 32 Z" stroke={strokeColor} strokeWidth="2.5" fill={fillAccent} />
          {/* Circular inner thread opening */}
          <circle cx="50" cy="50" r="20" stroke={strokeColor} strokeWidth="2.5" />
          {/* Thread helical details */}
          <circle cx="50" cy="50" r="15" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="5 3" />
          <path d="M 33 40 L 40 45" stroke={strokeColor} strokeWidth="2" />
          <path d="M 33 60 L 40 55" stroke={strokeColor} strokeWidth="2" />
          <path d="M 67 40 L 60 45" stroke={strokeColor} strokeWidth="2" />
          <path d="M 67 60 L 60 55" stroke={strokeColor} strokeWidth="2" />
          {/* Diagonal blueprint axis */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </g>
      )}

      {group === "Vít" && (
        <g>
          {/* Pan head or countersunk head */}
          <path d="M 28 25 L 72 25 L 62 42 L 38 42 Z" stroke={strokeColor} strokeWidth="2.5" fill={fillAccent} />
          {/* Phillips slot */}
          <path d="M 44 21 L 56 21 M 50 15 L 50 27" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
          {/* Tapered screw shaft */}
          <path d="M 43 42 L 43 75 L 50 88 L 57 75 L 57 42" stroke={strokeColor} strokeWidth="2.5" fill="none" />
          {/* Sharp thread lines sloping upwards */}
          <line x1="43" y1="50" x2="57" y2="47" stroke={strokeColor} strokeWidth="2" />
          <line x1="43" y1="58" x2="57" y2="55" stroke={strokeColor} strokeWidth="2" />
          <line x1="43" y1="66" x2="57" y2="63" stroke={strokeColor} strokeWidth="2" />
          <line x1="44" y1="74" x2="56" y2="71" stroke={strokeColor} strokeWidth="2" />
          {/* Blueprint centerline */}
          <line x1="50" y1="10" x2="50" y2="92" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        </g>
      )}

      {group === "Phụ Kiện" && (
        <g>
          {/* Flat washer outer circle */}
          <circle cx="50" cy="50" r="35" stroke={strokeColor} strokeWidth="2.5" fill={fillAccent} />
          {/* Inner circle opening */}
          <circle cx="50" cy="50" r="16" stroke={strokeColor} strokeWidth="2" />
          {/* Spring split details or washer thickness projection side-view behind it */}
          <circle cx="50" cy="50" r="39" stroke={strokeColor} strokeWidth="1" strokeDasharray="12 18" opacity="0.6" />
          {/* Subtle cotter pin in background */}
          <path d="M 15 80 L 85 20 M 15 85 L 80 20" stroke={strokeColor} strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
          {/* Technical drafting guidelines */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#B8860B" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </g>
      )}
    </svg>
  );
};

// --- HELPER TO GET STRENGTH GRADE BADGE COLORING ---
const getGradeStyles = (grade: string) => {
  const norm = grade.toUpperCase();
  if (norm.includes("4.8") || norm === "6" || norm === "THẾP MỀM") {
    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
  } else if (norm.includes("8.8") || norm === "8") {
    return "bg-sky-500/10 text-sky-400 border-sky-500/30";
  } else if (norm.includes("10.9") || norm === "10" || norm === "B7") {
    return "bg-orange-500/10 text-orange-400 border-orange-500/30";
  } else if (norm.includes("12.9")) {
    return "bg-rose-500/10 text-rose-400 border-rose-500/30";
  } else if (norm.includes("INOX") || norm.includes("304") || norm.includes("316")) {
    return "bg-slate-400/15 text-slate-300 border-slate-500/30";
  }
  return "bg-gray-500/10 text-gray-400 border-gray-500/30";
};

export const FastenersCatalog: React.FC = () => {
  // --- STATE SYSTEM ---
  const [selectedGroup, setSelectedGroup] = useState<string>("Tất cả");
  const [selectedStandard, setSelectedStandard] = useState<string>("Tất cả");
  const [selectedGrade, setSelectedGrade] = useState<string>("Tất cả");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Selection and comparison
  const [comparedIds, setComparedIds] = useState<number[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [detailProduct, setDetailProduct] = useState<FastenerProduct | null>(null);

  // Inquiry form status
  const [inquirySuccess, setInquirySuccess] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>("");
  const [clientContact, setClientContact] = useState<string>("");
  const [clientMessage, setClientMessage] = useState<string>("");

  // --- MULTI-FILTERING LOGIC (CONCURRENT) ---
  const filteredProducts = useMemo(() => {
    return FASTENERS_DATA.products.filter(product => {
      // 1. Group check
      if (selectedGroup !== "Tất cả" && product.group !== selectedGroup) return false;

      // 2. Standard check (matches DIN, ISO, ASTM etc. dynamically)
      if (selectedStandard !== "Tất cả") {
        const standardMatches = product.standards.some(std => 
          std.toUpperCase().includes(selectedStandard.toUpperCase())
        );
        if (!standardMatches) return false;
      }

      // 3. Grade check
      if (selectedGrade !== "Tất cả") {
        const gradeMatches = product.grades.some(grd => 
          grd.toUpperCase().includes(selectedGrade.toUpperCase())
        );
        if (!gradeMatches) return false;
      }

      // 4. Material check
      if (selectedMaterial !== "Tất cả") {
        const materialMatches = product.material.some(mat => 
          mat.toUpperCase().includes(selectedMaterial.toUpperCase())
        );
        if (!materialMatches) return false;
      }

      // 5. Search Text matching (Name, standards, note or applications)
      if (searchQuery.trim() !== "") {
        const queryNorm = searchQuery.toLowerCase();
        const inName = product.name.toLowerCase().includes(queryNorm);
        const inStandards = product.standards.some(std => std.toLowerCase().includes(queryNorm));
        const inApps = product.applications.toLowerCase().includes(queryNorm);
        const inNote = product.note?.toLowerCase().includes(queryNorm);
        if (!inName && !inStandards && !inApps && !inNote) return false;
      }

      return true;
    });
  }, [selectedGroup, selectedStandard, selectedGrade, selectedMaterial, searchQuery]);

  // --- LOGIC: SO SÁNH (COMPARE) ---
  const handleToggleCompare = (id: number) => {
    if (comparedIds.includes(id)) {
      setComparedIds(prev => prev.filter(item => item !== id));
    } else {
      if (comparedIds.length >= 3) {
        alert("Quý khách chỉ so sánh tối đa 3 sản phẩm cùng lúc.");
        return;
      }
      setComparedIds(prev => [...prev, id]);
      setIsCompareOpen(true);
    }
  };

  const comparedProducts = useMemo(() => {
    return FASTENERS_DATA.products.filter(p => comparedIds.includes(p.id));
  }, [comparedIds]);

  // --- ACTION: RESET ALL FILTERS ---
  const handleResetFilters = () => {
    setSelectedGroup("Tất cả");
    setSelectedStandard("Tất cả");
    setSelectedGrade("Tất cả");
    setSelectedMaterial("Tất cả");
    setSearchQuery("");
  };

  // --- SUBMIT COMPONENT INQUIRY ---
  const handleSubmitInquiry = (e: React.FormEvent, productName: string) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;

    const subject = `Yêu cầu báo giá vật tư cơ khí: ${productName}`;
    const body = `Chào Hoàng Gia Khang, tôi cần báo giá sản phẩm:
- Sản phẩm: ${productName}
- Họ tên/Doanh nghiệp: ${clientName}
- SĐT/Zalo liên hệ: ${clientContact}
- Yêu cầu khác: ${clientMessage || 'N/A'}`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(body);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = body;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error(err);
    }

    setInquirySuccess(true);
    window.open("https://zalo.me/0833756356", "_blank");
  };

  return (
    <div id="fasteners-catalog-internal" className="bg-[#0A1628] text-white py-16 px-6 md:px-12 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden mt-12">
      {/* 1. Header Banner */}
      <div className="text-center mb-16">
        <span className="inline-block text-[#B8860B] font-bold tracking-[0.25em] text-xs uppercase mb-3">
          Hệ Thống Phân Cấp Sản Phẩm Chuẩn DIN/ISO
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
          DANH MỤC CHI TIẾT: <span className="italic">BULONG - ĐAI ỐC - VÍT</span>
        </h2>
        <p className="text-[#A0AEC0] max-w-2xl mx-auto mt-4 font-light text-sm md:text-base leading-relaxed">
          Cung cấp trọn gói các vật tư ngũ kim, phụ kiện liên kết cường độ cao, chịu rung động, mạ kẽm nhúng nóng HDG phục vụ lắp ráp máy CNC, kết cấu dầm thép và cơ khí chế tạo.
        </p>
        <div className="h-1 bg-[#B8860B] w-28 mx-auto mt-6" />
      </div>

      {/* 2. Advanced Multi-Filter & Search Dashboard */}
      <div className="bg-[#0D1F3C] rounded-lg p-6 md:p-8 shadow-2xl mb-12 border border-[#B8860B]/20">
        
        {/* Row 1: Search & Group Buttons */}
        <div className="flex flex-col xl:flex-row gap-6 justify-between items-stretch mb-8 pb-6 border-b border-white/5">
          {/* Search bar */}
          <div className="relative flex-grow max-w-xl">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <Search size={18} />
            </span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên sản phẩm, mã chuẩn DIN, ISO, ứng dụng..."
              className="w-full bg-[#0A1628] border border-[#B8860B]/20 rounded-sm py-3.5 pl-11 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all text-sm font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Group tags selector */}
          <div className="flex flex-wrap items-center gap-1.5 min-w-max">
            {FASTENERS_DATA.filters.by_group.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  selectedGroup === group 
                    ? 'bg-[#B8860B] text-white shadow-lg' 
                    : 'bg-[#0A1628]/80 text-gray-300 hover:bg-[#0A1628] hover:text-white border border-white/5'
                }`}
              >
                {group === "Tất cả" ? "Tất Cả Nhóm" : group}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Secondary Dropdown Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Dropdown Standard */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-[#B8860B] tracking-widest block">Theo Tiêu Chuẩn</label>
            <select
              value={selectedStandard}
              onChange={(e) => setSelectedStandard(e.target.value)}
              className="w-full bg-[#0A1628] border border-white/10 rounded-sm p-3 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-[#B8860B] cursor-pointer"
            >
              {FASTENERS_DATA.filters.by_standard.map(std => (
                <option key={std} value={std} className="bg-[#0A1628] uppercase">{std === "Tất cả" ? "Tất cả tiêu chuẩn" : std}</option>
              ))}
            </select>
          </div>

          {/* Dropdown Grade */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-[#B8860B] tracking-widest block">Theo Cấp Bền</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full bg-[#0A1628] border border-white/10 rounded-sm p-3 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-[#B8860B] cursor-pointer"
            >
              {FASTENERS_DATA.filters.by_grade.map(grd => (
                <option key={grd} value={grd} className="bg-[#0A1628] uppercase">{grd === "Tất cả" ? "Tất cả cấp bền" : `Cấp bền ${grd}`}</option>
              ))}
            </select>
          </div>

          {/* Dropdown Material */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-[#B8860B] tracking-widest block">Theo Vật Liệu</label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="w-full bg-[#0A1628] border border-white/10 rounded-sm p-3 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-[#B8860B] cursor-pointer"
            >
              {FASTENERS_DATA.filters.by_material.map(mat => (
                <option key={mat} value={mat} className="bg-[#0A1628] uppercase">{mat === "Tất cả" ? "Tất cả vật liệu" : mat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Meta data counters / Clear actions */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-[#B8860B]" />
            <span>Hiển thị <span className="text-[#B8860B] font-bold">{filteredProducts.length}</span> trên tổng số <span className="text-white font-bold">{FASTENERS_DATA.products.length}</span> sản phẩm Bulong - Ốc - Vít công nghiệp.</span>
          </div>

          {(selectedGroup !== "Tất cả" || selectedStandard !== "Tất cả" || selectedGrade !== "Tất cả" || selectedMaterial !== "Tất cả" || searchQuery) && (
            <button 
              onClick={handleResetFilters}
              className="mt-3 sm:mt-0 flex items-center gap-1.5 text-[#B8860B] hover:text-white transition-colors uppercase font-bold text-[10px] tracking-wider"
            >
              <RotateCcw size={12} /> Khôi phục bộ lọc mặc định
            </button>
          )}
        </div>
      </div>

      {/* 3. Product Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const isComparing = comparedIds.includes(product.id);
            
            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="flex flex-col bg-[#0D1F3C] rounded-sm overflow-hidden border border-[#B8860B]/10 hover:border-[#B8860B]/60 transition-all duration-300 shadow-xl group h-full relative"
              >
                {/* Visual Draft Illustration Block */}
                <div className="relative h-44 overflow-hidden border-b border-white/5 bg-[#0A1628]/70">
                  <img 
                    src={getFastenerImage(product.group)}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-dark/30 mix-blend-multiply" />
                  
                  {/* On hover blueprint sketch projection */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-dark/80 backdrop-blur-sm">
                    <FastenerSketch group={product.group} className="w-24 h-24" />
                  </div>
                  
                  {/* Status Tag */}
                  <span className={`absolute top-4 right-4 z-20 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full flex items-center gap-1 shadow-md ${
                    product.status === "Còn hàng" 
                      ? "bg-green-500/10 text-green-400 border border-green-500/30 bg-navy-dark/80" 
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/30 bg-navy-dark/80"
                  }`}>
                    <span className={`w-1 h-1 rounded-full ${product.status === "Còn hàng" ? "bg-green-400" : "bg-amber-400"}`} />
                    {product.status}
                  </span>

                  {/* Group Ribbon Badge */}
                  <span className="absolute bottom-4 left-4 z-20 text-[9px] font-black tracking-widest text-white/60 bg-[#0A1628] border border-white/10 px-2 py-1 rounded-sm uppercase">
                    MÃ ID: {product.id}
                  </span>
                </div>

                {/* Card Main content parameters */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header: Title + Group Badge */}
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h4 className="text-base font-bold font-sans tracking-tight text-white group-hover:text-[#B8860B] transition-colors leading-snug line-clamp-2 italic">
                        {product.name}
                      </h4>
                      <span className="px-2 py-0.5 bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/40 text-[9px] font-bold uppercase tracking-wider rounded-sm shrink-0 mt-0.5">
                        {product.group}
                      </span>
                    </div>

                    {/* Standard List */}
                    <div className="mb-4">
                      <p className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest mb-1.5">Tiêu chuẩn ban hành:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.standards.map((std) => (
                          <span key={std} className="px-2 py-0.5 bg-white/5 text-[9px] text-[#B8860B] border border-white/5 font-mono rounded-sm font-semibold uppercase">{std}</span>
                        ))}
                      </div>
                    </div>

                    {/* Strength grades list with dynamic colors */}
                    <div className="mb-4">
                      <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest block mb-1.5">Phân cấp độ bền:</span>
                      <div className="flex flex-wrap gap-1">
                        {product.grades.map((grd) => (
                          <span 
                            key={grd} 
                            className={`px-2 py-0.5 border text-[9px] font-mono font-bold rounded-sm uppercase ${getGradeStyles(grd)}`}
                          >
                            Cấp {grd}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Size and Material descriptors */}
                    <div className="grid grid-cols-2 gap-3 text-xs bg-[#0A1628]/50 p-3 rounded-sm border border-white/5 shadow-inner mb-4">
                      <div>
                        <span className="text-[9px] text-[#B8860B] font-bold uppercase tracking-wider block mb-0.5">Kích thước:</span>
                        <span className="text-white font-mono font-medium block">{product.size_range}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#B8860B] font-bold uppercase tracking-wider block mb-0.5">Vật liệu đúc:</span>
                        <span className="text-white font-light block line-clamp-1">{product.material.join(', ')}</span>
                      </div>
                    </div>

                    {/* Application texts */}
                    <div className="text-xs text-gray-300 leading-relaxed border-t border-white/5 pt-3.5 mb-6">
                      <p className="font-extrabold text-[9px] text-gray-400 uppercase tracking-widest mb-1">Ứng dụng tiêu biểu:</p>
                      <span className="line-clamp-2 italic font-light hover:text-white transition-colors cursor-help title-holder" title={product.applications}>
                        "{product.applications}"
                      </span>
                    </div>

                    {/* Special warnings/Technical notes if present */}
                    {product.note && (
                      <div className="mb-6 flex gap-2 items-start bg-yellow-500/5 border border-yellow-500/20 p-2.5 rounded-sm">
                        <AlertTriangle size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                        <span className="text-[10px] text-yellow-300/80 leading-normal line-clamp-2 font-mono italic">
                          {product.note}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar inside Card */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {/* Compare Button & View Detail */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleToggleCompare(product.id)}
                        className={`py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-1.5 border ${
                          isComparing 
                            ? "bg-[#B8860B]/20 text-[#B8860B] border-[#B8860B]" 
                            : "bg-[#0A1628]/50 text-gray-300 border-white/5 hover:border-[#B8860B] hover:text-[#B8860B]"
                        }`}
                      >
                        {isComparing ? (
                          <>
                            <Check size={12} className="text-green-400" />
                            Đã Chọn
                          </>
                        ) : (
                          <>
                            <Scale size={11} />
                            So Sánh
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          setDetailProduct(product);
                          setInquirySuccess(false);
                          setClientName("");
                          setClientContact("");
                          setClientMessage("");
                        }}
                        className="bg-transparent hover:bg-white/5 text-gray-200 border border-white/10 hover:border-white/30 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
                      >
                        Mô Tả Lắp Ráp
                      </button>
                    </div>

                    {/* Main action: Send inquiry */}
                    <button
                      onClick={() => {
                        setDetailProduct(product);
                        setInquirySuccess(false);
                        setClientName("");
                        setClientContact("");
                        setClientMessage("");
                      }}
                      className="w-full bg-[#B8860B] hover:bg-[#B8860B]/80 text-white py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Báo Giá Công Trình <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty States */}
      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24 bg-[#0D1F3C] border border-[#B8860B]/15 rounded-sm p-8"
        >
          <AlertTriangle size={48} className="text-[#B8860B] mx-auto mb-4" />
          <h3 className="text-xl font-bold uppercase mb-2">Không tìm thấy ngũ kim liên quan</h3>
          <p className="text-gray-400 max-w-sm mx-auto text-xs md:text-sm font-light leading-relaxed">
            Hệ thống lọc nâng cao hiện không có sản phẩm nào khớp với các lựa chọn trên. Quý khách vui lòng xóa bớt bộ lọc hoặc gõ từ khóa khác.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 px-6 py-2.5 bg-[#B8860B] text-white hover:bg-[#B8860B]/80 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
          >
            Xem Tất Cả 19 Sản Phẩm
          </button>
        </motion.div>
      )}

      {/* 4. PREMIUM FLOATING COMPARISON PANEL (Collapsible Drawer at bottom screen) */}
      <AnimatePresence>
        {isCompareOpen && comparedIds.length > 0 && (
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 250, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[900] bg-[#0A1628] border-t-2 border-[#B8860B] shadow-2xl p-4 md:p-6 text-white max-h-[70vh] overflow-y-auto"
          >
            <div className="container mx-auto">
              {/* Drawer Top Header controls */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#B8860B] flex items-center justify-center text-[10px] font-bold">
                    {comparedIds.length}
                  </div>
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#B8860B]">Bảng So Sánh Kỹ Thuật Chi Tiết</h4>
                  <span className="text-gray-400 text-[10px] italic hidden md:inline ml-2">(Tối đa 3 loại sản phẩm đồng thời)</span>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setComparedIds([])}
                    className="text-gray-400 hover:text-white text-[10px] uppercase font-bold tracking-wider"
                  >
                    Xóa tất cả chọn
                  </button>
                  <button 
                    onClick={() => setIsCompareOpen(false)}
                    className="p-1 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-sm transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Side-by-Side Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comparedProducts.map((p) => (
                  <div key={p.id} className="bg-[#0D1F3C]/60 border border-white/5 rounded-sm p-4 relative flex flex-col justify-between">
                    {/* Delete comparison item */}
                    <button 
                      onClick={() => handleToggleCompare(p.id)}
                      className="absolute top-3 right-3 p-1 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded"
                    >
                      <X size={14} />
                    </button>

                    <div>
                      {/* Name & Standard */}
                      <div className="mb-4 pr-6">
                        <span className="text-[8px] bg-[#B8860B]/20 text-[#B8860B] font-bold px-1.5 py-0.5 rounded uppercase font-mono mr-2">{p.group}</span>
                        <h5 className="text-xs md:text-sm font-bold inline italic text-white line-clamp-1">{p.name}</h5>
                      </div>

                      {/* Technical Grid lists */}
                      <table className="w-full text-[10px] md:text-xs">
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider w-1/3">Tiêu chuẩn:</td>
                            <td className="py-2 text-white font-mono break-all">{p.standards.join(', ')}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Cấp bền:</td>
                            <td className="py-2 text-white">{p.grades.join(', ')}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Vật liệu:</td>
                            <td className="py-2 text-white">{p.material.join(', ')}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Dải ren/Trục:</td>
                            <td className="py-2 text-white font-mono">{p.size_range}</td>
                          </tr>
                          {p.length_range && (
                            <tr className="border-b border-white/5">
                              <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Chiều dài:</td>
                              <td className="py-2 text-white font-mono">{p.length_range}</td>
                            </tr>
                          )}
                          {p.surface_treatment && (
                            <tr className="border-b border-white/5">
                              <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Bề mặt:</td>
                              <td className="py-2 text-white">{p.surface_treatment.join(', ')}</td>
                            </tr>
                          )}
                          <tr className="border-b border-white/5">
                            <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Ứng dụng:</td>
                            <td className="py-2 text-gray-300 italic line-clamp-2">"{p.applications}"</td>
                          </tr>
                          {p.WLL && (
                            <tr className="border-b border-white/5">
                              <td className="py-2 text-gray-400 font-bold uppercase text-[8px] tracking-wider text-yellow-400">Tải cẩu WLL:</td>
                              <td className="py-2 text-yellow-400 font-mono">{p.WLL}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <button
                      onClick={() => {
                        setDetailProduct(p);
                        setInquirySuccess(false);
                        setClientName("");
                        setClientContact("");
                        setClientMessage("");
                      }}
                      className="w-full bg-[#B8860B] text-white hover:bg-[#B8860B]/80 font-bold uppercase tracking-widest text-[9px] py-2 rounded-sm mt-4 transition-colors text-center"
                    >
                      Báo giá cho loại này
                    </button>
                  </div>
                ))}
                
                {comparedIds.length < 3 && (
                  <div className="hidden md:flex flex-col items-center justify-center border border-dashed border-[#B8860B]/20 bg-neutral-900/10 rounded-sm p-8 text-center min-h-[160px]">
                    <Plus size={24} className="text-[#B8860B] mb-2 cursor-pointer" onClick={() => setIsCompareOpen(false)} />
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Chọn thêm ngũ kim dưới lưới</p>
                    <p className="text-[9px] text-gray-500 mt-1 max-w-[200px] font-light">Bấm vào biểu tượng 'So sánh' trên mỗi thẻ để hiển thị danh sách dồi dào hơn.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. SPEC DETAIL MODAL + REQUEST PROPOSAL FORM */}
      <AnimatePresence>
        {detailProduct && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
            {/* Dark background modal overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailProduct(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-[#0D1F3C] border border-[#B8860B]/30 rounded-lg max-w-4xl w-full text-white overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setDetailProduct(null)}
                className="absolute top-4 right-4 z-50 w-9 h-9 bg-black/50 hover:bg-[#B8860B] text-white flex items-center justify-center rounded-full transition-all border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Visual sketch drawing banner & tags */}
                <div className="relative p-12 bg-[#0A1628] flex flex-col justify-between items-center min-h-[300px] border-r border-[#B8860B]/10">
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-[#B8860B] uppercase tracking-widest">
                    Cơ khí liên kết và kết cấu ghép rãnh
                  </div>

                  {/* Enlarged vector drawing */}
                  <div className="my-auto">
                    <FastenerSketch group={detailProduct.group} className="w-48 h-48" />
                  </div>

                  <div className="text-center w-full">
                    {/* Status component */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-[#B8860B]/20 rounded-full text-[#B8860B]">
                      <span className={`w-2 h-2 rounded-full ${detailProduct.status === "Còn hàng" ? "bg-green-400" : "bg-orange-400 animate-pulse"}`} />
                      Sản phẩm phân phối: {detailProduct.status}
                    </div>
                  </div>
                </div>

                {/* Specification parameters & Inquiry submit form */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-[#0D1F3C]">
                  <div>
                    <span className="text-[9px] text-[#B8860B] font-extrabold uppercase tracking-[0.25em] block mb-1">Hệ Thống Phối Lắp Vật Tư Ngũ Kim</span>
                    
                    <h3 className="text-2xl font-bold font-sans text-white mb-6 leading-tight italic">
                      {detailProduct.name}
                    </h3>

                    {/* Specifications breakdown */}
                    <div className="space-y-3.5 border-b border-white/5 pb-6 mb-6 text-xs md:text-sm">
                      <div className="grid grid-cols-3">
                        <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Bộ tiêu chuẩn:</span>
                        <div className="col-span-2 flex flex-wrap gap-1">
                          {detailProduct.standards.map(std => (
                            <span key={std} className="px-2 py-0.5 bg-black/60 border border-[#B8860B]/20 font-mono rounded text-[#B8860B] font-bold uppercase">{std}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Cấp cường lực:</span>
                        <div className="col-span-2 flex flex-wrap gap-1">
                          {detailProduct.grades.map(grd => (
                            <span key={grd} className="px-2 py-0.5 bg-[#011627] text-white border border-[#B8860B]/20 font-mono rounded font-medium">Cấp {grd}</span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Bản chất vật liệu:</span>
                        <span className="col-span-2 text-white font-medium">{detailProduct.material.join(', ')}</span>
                      </div>

                      <div className="grid grid-cols-3">
                        <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Thông số dải ren:</span>
                        <span className="col-span-2 text-white font-mono font-bold tracking-wide">{detailProduct.size_range}</span>
                      </div>

                      {detailProduct.length_range && (
                        <div className="grid grid-cols-3">
                          <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Hệ chiều dài:</span>
                          <span className="col-span-2 text-white font-mono">{detailProduct.length_range}</span>
                        </div>
                      )}

                      {detailProduct.surface_treatment && (
                        <div className="grid grid-cols-3">
                          <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Mạ phủ bề mặt:</span>
                          <span className="col-span-2 text-white font-light">{detailProduct.surface_treatment.join(', ')}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-3">
                        <span className="text-gray-400 font-bold uppercase text-[9px] tracking-wider">Phạm vi cơ cấu:</span>
                        <span className="col-span-2 text-gray-300 font-light italic leading-snug">"{detailProduct.applications}"</span>
                      </div>

                      {detailProduct.WLL && (
                        <div className="grid grid-cols-3">
                          <span className="text-yellow-400 font-bold uppercase text-[9px] tracking-wider">Tải cẩu WLL:</span>
                          <span className="col-span-2 text-yellow-400 font-mono font-bold">{detailProduct.WLL}</span>
                        </div>
                      )}
                    </div>

                    {detailProduct.note && (
                      <div className="flex gap-2.5 items-start bg-yellow-500/5 border border-yellow-500/20 p-3.5 rounded-sm mb-6">
                        <Info size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-yellow-400 font-black uppercase tracking-wider mb-0.5">Lưu ý phối ghép kỹ thuật:</p>
                          <p className="text-[11px] text-gray-300 leading-normal italic font-mono">{detailProduct.note}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FORM REQUEST */}
                  <div className="bg-[#0A1628] border border-[#B8860B]/20 p-5 rounded-sm">
                    <h4 className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Send size={12} /> Yêu cầu gửi báo giá & tài liệu công nghiệp
                    </h4>

                    {inquirySuccess ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-5 bg-emerald-500/10 border border-emerald-500/30 rounded-sm"
                      >
                        <CheckCircle className="text-emerald-400 mx-auto mb-2" size={32} />
                        <p className="text-xs text-white font-bold uppercase tracking-wider">Đã Sao Chép & Chuyển Zalo!</p>
                        <p className="text-[11px] text-amber-300 mt-1 max-w-xs mx-auto font-medium leading-relaxed">Thông tin đã sao chép tự động. Quý khách vui lòng dán (Ctrl+V) vào Zalo kỹ sư Hoàng Gia Khang để nhận báo giá sỉ tiến độ cam kết.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={(e) => handleSubmitInquiry(e, detailProduct.name)} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <input 
                            type="text" 
                            required
                            placeholder="Tên doanh nghiệp / Họ tên *"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="bg-[#0D1F3C] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition-colors"
                          />
                          <input 
                            type="text" 
                            required
                            placeholder="Số điện thoại / SĐT Zalo *"
                            value={clientContact}
                            onChange={(e) => setClientContact(e.target.value)}
                            className="bg-[#0D1F3C] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition-colors"
                          />
                        </div>
                        <textarea 
                          rows={2}
                          placeholder="Nhập kích cỡ riêng biệt, khối lượng cần lấy (tấn/hộp), quy cách mạ phủ hoặc đóng gói..."
                          value={clientMessage}
                          onChange={(e) => setClientMessage(e.target.value)}
                          className="w-full bg-[#0D1F3C] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#B8860B] transition-colors"
                        />
                        <button
                          type="submit"
                          disabled={!clientName || !clientContact}
                          className="w-full bg-[#B8860B] hover:bg-[#B8860B]/80 disabled:opacity-50 text-white font-bold py-2.5 rounded-sm uppercase tracking-widest text-[9px] transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                          <span>Gửi yêu cầu đặt hàng & báo giá</span>
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
    </div>
  );
};
