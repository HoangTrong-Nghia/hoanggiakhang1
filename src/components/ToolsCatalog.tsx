import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  ArrowRight, 
  HelpCircle,
  Cpu,
  Scissors,
  Ruler,
  Wrench,
  TrendingUp,
  SlidersHorizontal,
  Mail,
  Smartphone,
  Check,
  User,
  ShoppingBag
} from 'lucide-react';
import { TOOLS_DATA, ToolProduct } from '../toolsData';

// --- PREMIUM GENERATED REALISTIC IMAGES ---
import powerToolsCategory from '../assets/images/power_tools_category_1779263264367.png';
import cuttingToolsCategory from '../assets/images/cutting_tools_category_1779263281942.png';
import measuringToolsCategory from '../assets/images/measuring_tools_category_1779263300337.png';
import disassemblyToolsCategory from '../assets/images/disassembly_tools_category_1779263317309.png';
import liftingEquipmentCategory from '../assets/images/lifting_equipment_category_1779263333692.png';
import pneumaticToolsCategory from '../assets/images/pneumatic_tools_category_1779263351104.png';

const getToolImage = (group: string) => {
  switch (group) {
    case "Máy cầm tay":
      return powerToolsCategory;
    case "Dụng cụ cắt gọt":
      return cuttingToolsCategory;
    case "Dụng cụ đo lường":
      return measuringToolsCategory;
    case "Dụng cụ tháo lắp":
      return disassemblyToolsCategory;
    case "Thiết bị nâng hạ":
      return liftingEquipmentCategory;
    case "Dụng cụ khí nén":
      return pneumaticToolsCategory;
    default:
      return powerToolsCategory;
  }
};

// Custom inline SVG icons matching different groups for a highly-crafted industrial look
const GroupIcon = ({ group, className = "w-10 h-10" }: { group: string; className?: string }) => {
  switch (group) {
    case "Máy cầm tay":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a2.1 2.1 0 0 0-3-3l-3 3z" />
          <path d="m14 10-8.5 8.5a2.12 2.12 0 1 0 3 3L17 13" />
          <path d="m11.5 7.5-3-3" />
          <path d="m16.5 12.5-3-3" />
          <circle cx="15.5" cy="8.5" r="1.5" className="fill-gold/10" />
        </svg>
      );
    case "Dụng cụ cắt gọt":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l1.5 6H4.5L6 3z" />
          <path d="M5 9v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
          <path d="M12 9v13" />
          <circle cx="12" cy="14" r="2" className="fill-gold/10" />
          <path d="m14 14 3 3" />
          <path d="m10 14-3 3" />
        </svg>
      );
    case "Dụng cụ đo lường":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="10" rx="1" />
          <path d="M6 7v4" />
          <path d="M10 7v4" />
          <path d="M14 7v4" />
          <path d="M18 7v4" />
          <path d="M4 17h16" />
          <circle cx="12" cy="12" r="1" className="fill-gold" />
        </svg>
      );
    case "Dụng cụ tháo lắp":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6" />
          <path d="M22 11h-6" />
        </svg>
      );
    case "Thiết bị nâng hạ":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18" />
          <path d="M10 14h4" />
          <path d="M10 10h4" />
          <path d="M10 6h4" />
          <path d="m6 18 6 4 6-4" />
        </svg>
      );
    case "Dụng cụ khí nén":
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      );
    default:
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3-3a2.1 2.1 0 0 0-3-3l-3 3z" />
          <path d="m14 10-8.5 8.5a2.12 2.12 0 1 0 3 3L17 13" />
        </svg>
      );
  }
};

export const ToolsCatalogComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Tất cả');
  const [selectedBrand, setSelectedBrand] = useState('Tất cả');
  const [selectedPower, setSelectedPower] = useState('Tất cả');
  
  // UI States
  const [comparedProducts, setComparedProducts] = useState<ToolProduct[]>([]);
  const [activeDetailProduct, setActiveDetailProduct] = useState<ToolProduct | null>(null);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<ToolProduct | null>(null);
  const [copiedNoteId, setCopiedNoteId] = useState<number | null>(null);
  const [hoveredAppIndex, setHoveredAppIndex] = useState<number | null>(null);

  // Inquiry form status
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Scroll to top of catalog reference on filter changes
  const catalogTopRef = useRef<HTMLDivElement>(null);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedGroup('Tất cả');
    setSelectedBrand('Tất cả');
    setSelectedPower('Tất cả');
    if (catalogTopRef.current) {
      catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll tracking for filter change
  useEffect(() => {
    if (selectedGroup !== 'Tất cả' || selectedBrand !== 'Tất cả' || selectedPower !== 'Tất cả') {
      if (catalogTopRef.current) {
        catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedGroup, selectedBrand, selectedPower]);

  // Combined Filtering Logic
  const filteredProducts = useMemo(() => {
    return TOOLS_DATA.products.filter(p => {
      // 1. Group check
      if (selectedGroup !== 'Tất cả' && p.group !== selectedGroup) return false;
      
      // 2. Brand check (any of brands matches selected)
      if (selectedBrand !== 'Tất cả') {
        const matchesBrand = p.brands.some(b => b.toLowerCase().includes(selectedBrand.toLowerCase()));
        if (!matchesBrand) return false;
      }

      // 3. Power supply check
      if (selectedPower !== 'Tất cả' && p.power_source !== selectedPower) return false;

      // 4. Search search (matches name or brands)
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(term);
        const matchesBrands = p.brands.some(b => b.toLowerCase().includes(term));
        const matchesGroup = p.group.toLowerCase().includes(term);
        if (!matchesName && !matchesBrands && !matchesGroup) return false;
      }

      return true;
    });
  }, [searchTerm, selectedGroup, selectedBrand, selectedPower]);

  // Handle product comparison toggle
  const toggleComparison = (product: ToolProduct) => {
    setComparedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert("Chỉ có thể so sánh tối đa 3 sản phẩm cùng lúc.");
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;

    const subject = `Yêu cầu báo giá thiết bị: ${activeInquiryProduct ? activeInquiryProduct.name : 'Dụng cụ công nghiệp'}`;
    const body = `Chào Hoàng Gia Khang, tôi cần báo giá thiết bị/dụng cụ:
- Sản phẩm: ${activeInquiryProduct ? activeInquiryProduct.name : 'Dụng cụ công nghiệp'}
- Nhóm: ${activeInquiryProduct ? activeInquiryProduct.group : 'Dụng cụ'}
- Họ tên: ${inquiryName}
- SĐT/Zalo: ${inquiryPhone}
- Email: ${inquiryEmail || 'N/A'}
- Yêu cầu khác: ${inquiryMessage || 'N/A'}`;

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

    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setInquiryMessage('');
      setActiveInquiryProduct(null);
    }, 4000);
  };

  return (
    <div ref={catalogTopRef} className="bg-[#0A1628] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 font-sans relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="inline-block text-gold font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Trang Thiết Bị Cơ Khí & Vật Tư Hoạt Động MRO
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white italic tracking-wide">
            Danh Mục <span className="text-gold">Máy & Dụng Cụ</span> Đơn Vị Hoàng Gia Khang
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-[#A0AEC0] max-w-2xl mx-auto text-sm mt-3 leading-relaxed">
            Hợp tác phân phối trực tiếp các nhóm thiết bị mài mòn, cầm tay chuyên dụng, dụng cụ gia công cắt gọt taro và thiết bị nâng hạ tiêu chuẩn quốc tế từ các hãng danh tiếng Bosch, Makita, Mitutoyo...
          </p>
        </div>

        {/* --- CONTROLS / ADVANCED FILTERS BOARD --- */}
        <div className="bg-[#0D1F3C] border border-white/10 rounded-sm p-6 mb-10 shadow-lg relative">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between">
            
            {/* Search inputs */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#A0AEC0]">
                <Search size={18} />
              </span>
              <input 
                type="text"
                placeholder="Tìm mã máy, loại dụng cụ, thương hiệu (Bosch, Mitutoyo, Dormer...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0A1628] text-white text-sm placeholder-[#A0AEC0] focus:placeholder-white border border-white/10 focus:border-gold rounded-sm pl-11 pr-4 py-3.5 outline-none transition-colors"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#A0AEC0] hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Quick stats and Reset button */}
            <div className="flex items-center gap-4 justify-between lg:justify-end">
              <span className="text-xs text-[#A0AEC0]">
                Tìm thấy <strong className="text-gold text-sm">{filteredProducts.length}</strong> / 20 thiết bị cơ khí
              </span>
              {(selectedGroup !== 'Tất cả' || selectedBrand !== 'Tất cả' || selectedPower !== 'Tất cả' || searchTerm !== '') && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-gold hover:text-[#0A1628] text-xs font-bold uppercase tracking-wider rounded-sm border border-white/10 transition-all duration-300"
                >
                  <RotateCcw size={12} /> Reset bộ lọc
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/10">
            {/* Filter 1: Group */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-2.5 flex items-center gap-1.5">
                <SlidersHorizontal size={12} /> Hạng mục thiết bị / Dụng cụ
              </label>
              <select 
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full bg-[#0A1628] border border-white/10 text-white text-xs px-3.5 py-3 rounded-sm outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {TOOLS_DATA.filters.by_group.map((grp) => (
                  <option key={grp} value={grp}>{grp}</option>
                ))}
              </select>
            </div>

            {/* Filter 2: Brand */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-2.5 flex items-center gap-1.5">
                <Cpu size={12} /> Thương hiệu sản xuất
              </label>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#0A1628] border border-white/10 text-white text-xs px-3.5 py-3 rounded-sm outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {TOOLS_DATA.filters.by_brand.map((br) => (
                  <option key={br} value={br}>{br}</option>
                ))}
              </select>
            </div>

            {/* Filter 3: Power supply / Resource */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold mb-2.5 flex items-center gap-1.5">
                <SlidersHorizontal size={12} /> Nguồn động năng hoạt động
              </label>
              <select 
                value={selectedPower}
                onChange={(e) => setSelectedPower(e.target.value)}
                className="w-full bg-[#0A1628] border border-white/10 text-white text-xs px-3.5 py-3 rounded-sm outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {TOOLS_DATA.filters.by_power.map((pwr) => (
                  <option key={pwr} value={pwr}>{pwr}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick filter pill-tags row */}
          <div className="flex flex-wrap gap-2 mt-5">
            {TOOLS_DATA.filters.by_group.slice(1).map((grp) => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(selectedGroup === grp ? 'Tất cả' : grp)}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 ${
                  selectedGroup === grp 
                    ? 'bg-gold border-gold text-[#0A1628] shadow-md shadow-gold/10' 
                    : 'bg-transparent border-white/10 hover:border-gold text-[#A0AEC0] hover:text-white'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* --- PRODUCTS GRID DISPLAY --- */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#0D1F3C] border border-white/10 rounded-sm p-12 text-center">
            <AlertTriangle className="mx-auto text-gold mb-4" size={40} />
            <h4 className="text-lg font-bold mb-2">Không tìm thấy Máy & Dụng Cụ phù hợp</h4>
            <p className="text-xs text-[#A0AEC0] max-w-md mx-auto mb-6">
              Vui lòng thay đổi từ khóa kiếm tìm hoặc chọn đặt lại các tiêu chí bộ lọc để nhanh chóng quét các vật tư MRO công nghiệp khác.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-gold text-[#0A1628] hover:bg-gold/85 text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              Xem lại toàn bộ danh mục
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => {
              const matchesCompare = comparedProducts.some(comp => comp.id === p.id);
              const hasSafetyNote = !!p.note;
              
              // Custom dynamic tags based on logic
              const isBestSeller = p.id === 1 || p.id === 5 || p.id === 9 || p.id === 13;
              const isNewArrival = p.id === 3 || p.id === 14 || p.id === 19;

              return (
                <motion.div
                  key={p.id}
                  layoutId={`tool-${p.id}`}
                  className="bg-[#0D1F3C] border border-white/5 hover:border-gold/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-gold/5 relative"
                  style={{ contentVisibility: 'auto' }}
                >
                  {/* Glowing thin hover top border */}
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r from-gold via-[#FFD700] to-gold transition-all duration-500 z-30" />

                  {/* Top Image / Illustration Block */}
                  <div className="relative h-48 overflow-hidden border-b border-white/5 bg-[#0A1628]/70">
                    <img 
                      src={getToolImage(p.group)}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-90 group-hover:scale-105"
                    />
                    {/* Multi-layered industrial dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C] via-transparent to-black/40" />

                    {/* Left overlay badge containing Group */}
                    <span className="absolute top-4 left-4 z-20 text-[9px] font-black tracking-widest text-[#0A1628] bg-gold border border-gold/10 px-2 py-1 rounded-sm uppercase">
                      {p.group}
                    </span>

                    {/* Right overlay metadata/tags */}
                    <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1.5">
                      {isBestSeller && (
                        <span className="text-[9px] bg-red-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs animate-pulse shadow-md">
                          BÁN CHẠY
                        </span>
                      )}
                      {isNewArrival && (
                        <span className="text-[9px] bg-blue-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-md">
                          MỚI VỀ
                        </span>
                      )}
                    </div>

                    {/* Bottom overlay parameters */}
                    <span className="absolute bottom-4 left-4 z-20 text-[9px] font-sans font-medium text-white/70 bg-[#0A1628]/80 px-2 py-1 border border-white/5 rounded-xs">
                      ⚡ {p.power_source || "Thủ công"}
                    </span>

                    <span className="absolute bottom-4 right-4 z-20 text-[9px] font-mono text-white/70 bg-[#0A1628]/80 px-2 py-1 border border-white/5 rounded-xs">
                      MÃ ID: {p.id}
                    </span>

                    {/* Hover blueprint/sketch projection overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A1628]/95 backdrop-blur-sm">
                      <div className="text-center">
                        <GroupIcon group={p.group} className="w-12 h-12 mx-auto text-gold mb-2" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gold block">
                          BẢN VẼ KỸ THUẬT
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 pt-2 flex-grow">
                    <h3 className="text-base font-display font-medium italic text-white mb-2 leading-snug group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>

                    {/* Brands tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.brands.map((b, idx) => (
                        <span key={idx} className="inline-flex items-center text-[10px] bg-[#0A1628] border border-white/10 px-2 py-0.5 text-[#A0AEC0] font-mono rounded-sm">
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Tech specs tailored by keys */}
                    <hr className="border-white/5 my-3" />
                    <div className="space-y-1.5">
                      {p.capacity && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Đường kính/Sức chứa:</span>
                          <span className="font-mono text-white/90">{p.capacity}</span>
                        </div>
                      )}
                      {p.power && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Công suất động cơ:</span>
                          <span className="font-mono text-white/90">{p.power}</span>
                        </div>
                      )}
                      {p.disc_size && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Đĩa mài/cắt quy chuẩn:</span>
                          <span className="font-mono text-white/90">{p.disc_size}</span>
                        </div>
                      )}
                      {p.torque_range && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Lực siết momen (torque):</span>
                          <span className="font-mono text-white/90 text-gold">{p.torque_range}</span>
                        </div>
                      )}
                      {p.drive_size && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Kích thước đầu khẩu:</span>
                          <span className="font-mono text-white/90">{p.drive_size}</span>
                        </div>
                      )}
                      {p.material && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Chất liệu phôi cấu tạo:</span>
                          <span className="font-mono text-white/90 text-slate-300">{p.material}</span>
                        </div>
                      )}
                      {p.size_range && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Dải size quy chuẩn:</span>
                          <span className="font-mono text-white/90">{p.size_range}</span>
                        </div>
                      )}
                      {p.thread && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Chuẩn hệ ren taro:</span>
                          <span className="font-mono text-white/90">{p.thread}</span>
                        </div>
                      )}
                      {p.range && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Dải giới hạn đo:</span>
                          <span className="font-mono text-white/90">{p.range}</span>
                        </div>
                      )}
                      {p.resolution && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Độ chia vạch nhỏ nhất:</span>
                          <span className="font-mono text-white/90 text-gold">{p.resolution}</span>
                        </div>
                      )}
                      {p.SWL && (
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#A0AEC0]">Tải trọng làm việc SWL:</span>
                          <span className="font-mono text-red-400 font-bold">{p.SWL}</span>
                        </div>
                      )}
                    </div>

                    {/* Applications collapsible indicator / info link */}
                    <div className="mt-4">
                      <h4 className="text-[11px] uppercase tracking-wider text-gold/80 mb-1">Cơ cấu ứng dụng thực tế:</h4>
                      <p className="text-xs text-[#A0AEC0] line-clamp-2 leading-relaxed">
                        {p.applications}
                      </p>
                    </div>

                    {/* Safety alert warning inside cards */}
                    {hasSafetyNote && (
                      <div className="mt-4 p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] rounded-xs flex items-start gap-1.5">
                        <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
                        <span>{p.note}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom details / actions */}
                  <div className="p-6 pt-0 border-t border-white/5 bg-[#0a1628]/40 space-y-3">
                    <div className="flex items-center justify-between text-xs mt-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${p.status === 'Còn hàng' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
                        <span className="text-[#A0AEC0] text-[10px]">{p.status}</span>
                      </div>

                      {/* Compare toggle input */}
                      <button
                        onClick={() => toggleComparison(p)}
                        className={`text-[10px] font-bold uppercase tracking-wider hover:text-gold transition-colors flex items-center gap-1 ${
                          matchesCompare ? 'text-gold' : 'text-[#A0AEC0]'
                        }`}
                      >
                        {matchesCompare ? '✓ So sánh' : '+ So sánh'}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button
                        onClick={() => setActiveDetailProduct(p)}
                        className="py-2.5 text-center bg-transparent hover:bg-white/5 text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-gold/30 text-[#A0AEC0] hover:text-white rounded-sm transition-all duration-300 cursor-pointer"
                      >
                        Thông số kỹ thuật
                      </button>
                      
                      <button
                        onClick={() => setActiveInquiryProduct(p)}
                        className="py-2.5 text-center bg-gold hover:bg-[#A97605] text-[#0A1628] hover:text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md cursor-pointer"
                      >
                        Nhận Báo Giá
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* --- DYNAMIC PRODUCT COMPARISON DRAW ER (FLOAT) --- */}
        <AnimatePresence>
          {comparedProducts.length > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D1F3C] border-t-2 border-gold shadow-2xl p-4 md:p-6"
            >
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold">
                    {comparedProducts.length}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Chọn so sánh đối chiếu kỹ thuật</h4>
                    <p className="text-xs text-[#A0AEC0]">Tối đa 3 thiết bị / dụng cụ cùng dải</p>
                  </div>
                </div>

                {/* Compared products items row */}
                <div className="flex flex-wrap gap-4 justify-center items-center my-2 md:my-0">
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="bg-[#0A1628] border border-white/10 p-2 pl-3 pr-2.5 rounded-full flex items-center gap-2 text-xs">
                      <GroupIcon group={p.group} className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="font-medium text-white max-w-[150px] truncate">{p.name}</span>
                      <button
                        onClick={() => toggleComparison(p)}
                        className="text-[#A0AEC0] hover:text-red-400 p-0.5 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      // Trigger a detailed layout block overlay
                      setActiveDetailProduct(comparedProducts[0]);
                    }}
                    className="px-5 py-2.5 bg-gold text-[#0A1628] hover:bg-gold/85 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300"
                  >
                    Xem Chi Tiết So Sánh
                  </button>
                  <button
                    onClick={() => setComparedProducts([])}
                    className="text-xs text-[#A0AEC0] hover:text-white underline uppercase tracking-wider"
                  >
                    Hủy tất cả
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- PRODUCT SPECIFICATION DETAILS DIALOG OVERLAY (MODAL) --- */}
        <AnimatePresence>
          {activeDetailProduct && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#0D1F3C] border border-gold/30 rounded-sm max-w-2xl w-full p-6 md:p-8 shadow-2xl relative"
              >
                {/* Close modal */}
                <button
                  onClick={() => setActiveDetailProduct(null)}
                  className="absolute top-4 right-4 text-[#A0AEC0] hover:text-white bg-[#0A1628] hover:bg-gold p-2 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3.5 mb-5">
                  <GroupIcon group={activeDetailProduct.group} className="w-10 h-10" />
                  <div>
                    <span className="text-[10px] text-gold font-bold uppercase tracking-widest block">{activeDetailProduct.group}</span>
                    <h3 className="text-xl font-display font-medium italic text-white leading-tight pr-8">
                      {activeDetailProduct.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  <div className="bg-[#0A1628] border border-white/5 rounded-sm p-4">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5">Quy chuẩn & Thương hiệu phân phối</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDetailProduct.brands.map((b, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-xs text-xs font-mono font-medium text-white border border-white/5">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Complete details specifications matching the exact JSON schema keys */}
                  <div className="bg-[#0A1628] border border-white/5 rounded-sm p-4 space-y-2">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-3">Thông số hoạt động móng/động năng</h4>
                    
                    {activeDetailProduct.power_source && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Nguồn năng lực:</span>
                        <span className="font-mono">{activeDetailProduct.power_source}</span>
                      </div>
                    )}
                    {activeDetailProduct.power && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Mức công suất:</span>
                        <span>{activeDetailProduct.power}</span>
                      </div>
                    )}
                    {activeDetailProduct.capacity && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Công suất khoan/Khối lượng:</span>
                        <span>{activeDetailProduct.capacity}</span>
                      </div>
                    )}
                    {activeDetailProduct.disc_size && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Quy chuẩn đĩa đá mài cắt:</span>
                        <span>{activeDetailProduct.disc_size}</span>
                      </div>
                    )}
                    {activeDetailProduct.torque_range && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Giải lực siết lực:</span>
                        <span className="text-gold font-bold">{activeDetailProduct.torque_range}</span>
                      </div>
                    )}
                    {activeDetailProduct.standards && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Tiêu chuẩn DIN/ISO chế tạo:</span>
                        <span>{activeDetailProduct.standards.join(', ')}</span>
                      </div>
                    )}
                    {activeDetailProduct.material && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Cấu vật liệu cấu thành:</span>
                        <span>{activeDetailProduct.material}</span>
                      </div>
                    )}
                    {activeDetailProduct.thread && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Chuẩn chuỗi ren ren:</span>
                        <span>{activeDetailProduct.thread}</span>
                      </div>
                    )}
                    {activeDetailProduct.range && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Phạm vi giới hạn dải đo:</span>
                        <span>{activeDetailProduct.range}</span>
                      </div>
                    )}
                    {activeDetailProduct.resolution && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Độ phân giải hiển thị:</span>
                        <span className="text-gold font-mono">{activeDetailProduct.resolution}</span>
                      </div>
                    )}
                    {activeDetailProduct.stroke && (
                      <div className="flex justify-between border-b border-white/5 py-1.5 text-xs">
                        <span className="text-[#A0AEC0]">Hành trình pít tông (Stroke):</span>
                        <span>{activeDetailProduct.stroke}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights Bullet-features list */}
                  <div className="bg-[#0A1628] border border-white/5 rounded-sm p-4">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Đặc điểm thiết kế ưu việt</h4>
                    <ul className="space-y-1.5 text-xs text-[#A0AEC0]">
                      {activeDetailProduct.features.map((ft, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-gold w-4 h-4 flex-shrink-0" />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications Block */}
                  <div className="bg-[#0A1628] border border-white/5 rounded-sm p-4">
                    <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Môi trường & Ứng dụng khuyên dùng</h4>
                    <p className="text-xs text-[#A0AEC0] leading-relaxed">
                      {activeDetailProduct.applications}
                    </p>
                  </div>

                  {/* Security/Warning section */}
                  {activeDetailProduct.note && (
                    <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs rounded-sm flex items-start gap-2.5">
                      <AlertTriangle className="flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block uppercase tracking-wider text-[10px] mb-0.5">Lưu ý an toàn / Hiệu chỉnh kỹ thuật:</strong>
                        <span>{activeDetailProduct.note}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex gap-3">
                  <button
                    onClick={() => {
                      setActiveInquiryProduct(activeDetailProduct);
                      setActiveDetailProduct(null);
                    }}
                    className="flex-1 py-3 bg-gold hover:bg-[#A97605] text-[#0A1628] hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer"
                  >
                    Gửi yêu cầu báo giá chính thức
                  </button>
                  <button
                    onClick={() => setActiveDetailProduct(null)}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-xs text-white/80 hover:text-white font-bold uppercase tracking-widest rounded-sm transition-colors border border-white/5"
                  >
                    Quay lại
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- INQUIRY FORM MODAL --- */}
        <AnimatePresence>
          {activeInquiryProduct && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#0D1F3C] border border-gold/30 rounded-sm max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setActiveInquiryProduct(null)}
                  className="absolute top-4 right-4 text-[#A0AEC0] hover:text-white bg-[#0A1628] hover:bg-gold p-2 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="text-center mb-6">
                  <Mail className="mx-auto text-gold mb-2.5" size={32} />
                  <h3 className="text-lg font-display font-medium text-white italic">
                    Yêu Cầu Báo Giá Thiết Bị
                  </h3>
                  <p className="text-xs text-[#A0AEC0] mt-1">
                    Đơn hàng: <strong className="text-gold font-mono">{activeInquiryProduct.name}</strong>
                  </p>
                </div>

                {inquirySuccess ? (
                  <div className="text-center py-6">
                    <CheckCircle className="mx-auto text-emerald-400 mb-4 animate-bounce" size={48} />
                    <h4 className="text-base font-bold text-white mb-2">Đã Sao Chép & Chuyển Zalo!</h4>
                    <p className="text-xs text-amber-300 max-w-sm mx-auto font-medium leading-relaxed">
                      Thông tin yêu cầu đã được sao chép tự động. Quý khách vui lòng dán (Ctrl+V) vào khung chat Zalo kỹ sư Hoàng Gia Khang để nhận báo giá sỉ thiết bị dụng cụ nhanh nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1.5 flex items-center gap-1">
                        <User size={12} /> Họ và Tên đại diện kĩ thuật / mua hàng *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full bg-[#0A1628] text-white text-xs border border-white/10 focus:border-gold rounded-sm px-3 py-3 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1.5 flex items-center gap-1">
                          <Mail size={12} /> Email nhận báo giá *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="tencongty@gmail.com"
                          className="w-full bg-[#0A1628] text-white text-xs border border-white/10 focus:border-gold rounded-sm px-3 py-3 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1.5 flex items-center gap-1">
                          <Smartphone size={12} /> Số điện thoại / Zalo *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          placeholder="09xx xxx xxx"
                          className="w-full bg-[#0A1628] text-white text-xs border border-white/10 focus:border-gold rounded-sm px-3 py-3 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gold mb-1.5 flex items-center gap-1">
                        <ShoppingBag size={12} /> Ghi chú yêu cầu bổ sung (Quy cách, số lượng, thời gian cấp hàng...)
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        placeholder="Hãy cho chúng tôi biết nhu cầu số lượng, thông số kích cỡ bạn đang tìm kiếm cụ thể để rút ngắn thời gian tư vấn quy đổi thiết bị..."
                        className="w-full bg-[#0A1628] text-white text-xs border border-white/10 focus:border-gold rounded-sm px-3 py-3 outline-none resize-none"
                      />
                    </div>

                    <div className="bg-[#0A1628] p-3 border border-white/5 rounded-sm flex items-start gap-2.5 text-[10px] text-[#A0AEC0]">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                      <span>
                        Sản phẩm quy cách phân phối chuẩn ISO của Bosch, Makita, Insize... Hoàng Gia Khang bảo hành chính hãng đầy đủ CO, CQ và hỗ trợ tư vấn lắp ráp kĩ thuật miễn phí.
                      </span>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-gold hover:bg-[#A97605] text-[#0A1628] hover:text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md cursor-pointer"
                      >
                        Gửi Form Liên Hệ Hoàn Tất
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveInquiryProduct(null)}
                        className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors border border-white/5"
                      >
                        Bỏ qua
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
