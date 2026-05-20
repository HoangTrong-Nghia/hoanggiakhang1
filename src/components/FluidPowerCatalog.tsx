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
  SlidersHorizontal,
  Mail,
  Smartphone,
  Check,
  User,
  ShoppingBag,
  Layers,
  Activity,
  Droplet,
  Wind
} from 'lucide-react';
import { FLUID_POWER_DATA, FluidPowerProduct } from '../fluidPowerData';

// --- PREMIUM GENERATED REALISTIC IMAGES ---
import pneumaticPower from '../assets/images/pneumatic_power_1779263793887.png';
import pneumaticValve from '../assets/images/pneumatic_valve_1779263815908.png';
import pneuHydraCategory from '../assets/images/pneumatic_hydraulic_category_1779262511872.png';
import lubricatingOil from '../assets/images/lubricating_oil_category_1779262536010.png';

const getFluidPowerImage = (group: string) => {
  switch (group) {
    case "Khí nén - Nguồn lực":
      return pneumaticPower;
    case "Van khí nén":
      return pneumaticValve;
    case "Xi lanh khí nén":
      return pneuHydraCategory;
    case "Phụ kiện đường ống khí nén":
      return pneuHydraCategory;
    case "Thủy lực - Bơm & Motor":
      return pneuHydraCategory;
    case "Van thủy lực":
      return pneuHydraCategory;
    case "Xi lanh thủy lực":
      return pneuHydraCategory;
    case "Phụ kiện đường ống thủy lực":
      return pneuHydraCategory;
    case "Lọc & Làm sạch":
      return lubricatingOil;
    default:
      return pneuHydraCategory;
  }
};

// Custom beautifully styled SVG icons representing different categories & groups 
const GroupIndustrialIcon = ({ group, className = "w-12 h-12" }: { group: string; className?: string }) => {
  switch (group) {
    case "Khí nén - Nguồn lực":
      return (
        <svg className={`${className} text-[#3182CE]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Air Compressor / Tank Design */}
          <rect x="3" y="10" width="18" height="10" rx="3" className="fill-[#3182CE]/10" />
          <path d="M7 20v2M17 20v2" />
          <circle cx="12" cy="7" r="3" />
          <path d="M12 4V2M10 7h4" />
          <path d="M12 10v3M9 15h6" />
        </svg>
      );
    case "Van khí nén":
      return (
        <svg className={`${className} text-[#3182CE]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Solenoid Valve Body and Coil */}
          <rect x="2" y="12" width="14" height="8" rx="1" className="fill-[#3182CE]/5" />
          <rect x="16" y="8" width="6" height="12" rx="1" className="fill-gold/20" />
          <path d="M9 12V8M5 16h8" />
          <path d="m5 14 2 2-2 2" />
          <path d="M19 8V4M17 4h4" />
        </svg>
      );
    case "Xi lanh khí nén":
      return (
        <svg className={`${className} text-[#3182CE]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Pneumatic Cylinder layout */}
          <rect x="2" y="9" width="14" height="6" rx="1" className="fill-[#3182CE]/10" />
          <path d="M16 12h6M22 10v4" />
          <path d="M5 9V7M13 9V7" />
          <circle cx="8" cy="12" r="1" className="fill-gold" />
        </svg>
      );
    case "Phụ kiện đường ống khí nén":
      return (
        <svg className={`${className} text-[#3182CE]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Quick connect fittings T-joint */}
          <path d="M8 12h8M12 8v8" />
          <rect x="5" y="10" width="3" height="4" rx="0.5" className="fill-gold/10" />
          <rect x="16" y="10" width="3" height="4" rx="0.5" className="fill-gold/10" />
          <rect x="10" y="5" width="4" height="3" rx="0.5" className="fill-[#3182CE]/10" />
          <rect x="10" y="16" width="4" height="3" rx="0.5" className="fill-[#3182CE]/10" />
        </svg>
      );
    case "Thủy lực - Bơm & Motor":
      return (
        <svg className={`${className} text-[#C05621]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Hydraulic Gear Motor with Interlocking Gears */}
          <circle cx="9" cy="12" r="5" className="fill-[#C05621]/10" />
          <circle cx="15" cy="12" r="5" className="fill-gold/10" />
          <circle cx="9" cy="12" r="1.5" className="fill-white" />
          <circle cx="15" cy="12" r="1.5" className="fill-white" />
          <path d="M9 7l1 1M15 7l-1 1M9 17l1-1M15 17l-1-1" />
        </svg>
      );
    case "Van thủy lực":
      return (
        <svg className={`${className} text-[#C05621]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Heavy Duty Spool Block for Hydraulic Oil */}
          <rect x="3" y="6" width="18" height="12" rx="2" className="fill-[#C05621]/10" strokeDasharray="none" />
          <path d="M7 6v12M17 6v12" />
          <circle cx="12" cy="12" r="2.5" className="fill-gold" />
          <path d="M12 6v4M12 14v4" />
        </svg>
      );
    case "Xi lanh thủy lực":
      return (
        <svg className={`${className} text-[#C05621]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* High pressure massive piston and clevis mounting */}
          <rect x="2" y="8" width="15" height="8" rx="1" className="fill-[#C05621]/15" />
          <path d="M17 12h5" />
          <circle cx="21" cy="12" r="1.5" className="fill-gold" />
          <path d="M4 16v2h11v-2" />
          <path d="M4 8V6h11v2" />
        </svg>
      );
    case "Phụ kiện đường ống thủy lực":
      return (
        <svg className={`${className} text-[#C05621]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Reinforced spiral dynamic hydraulic line */}
          <path d="M3 10c6-3 12 7 18 4" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="1" y="8" width="3" height="4" className="fill-gold" />
          <rect x="20" y="12" width="3" height="4" className="fill-gold" />
        </svg>
      );
    case "Lọc & Làm sạch":
      return (
        <svg className={`${className} text-emerald-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Hydraulic Filter Media Pleated Elements */}
          <rect x="5" y="3" width="14" height="18" rx="2" className="fill-emerald-500/5" />
          <path d="M9 3v18M15 3v18" />
          <path d="M5 8h14M5 13h14M5 18h14" />
        </svg>
      );
    default:
      return (
        <svg className={`${className} text-gold`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};

export const FluidPowerCatalog: React.FC = () => {
  // Navigation tabs: 'all' | 'pneumatics' | 'hydraulics'
  const [activeTab, setActiveTab] = useState<'all' | 'pneumatics' | 'hydraulics'>('all');

  // Interactive filtering states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Tất cả');
  const [selectedBrand, setSelectedBrand] = useState('Tất cả');
  const [selectedPressureFilter, setSelectedPressureFilter] = useState('Tất cả');
  const [selectedMedium, setSelectedMedium] = useState('Tất cả');

  // Technical features states
  const [comparedProducts, setComparedProducts] = useState<FluidPowerProduct[]>([]);
  const [activeDetailProduct, setActiveDetailProduct] = useState<FluidPowerProduct | null>(null);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<FluidPowerProduct | null>(null);
  
  // Custom tooltips
  const [hoveredAppIndex, setHoveredAppIndex] = useState<number | null>(null);
  const [hoveredNoteIndex, setHoveredNoteIndex] = useState<number | null>(null);

  // Inquiry form entries
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // Anchor target for smooth scroll back
  const catalogAnchorRef = useRef<HTMLDivElement>(null);

  // Helper trigger to reset all interactive filter conditions
  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedGroup('Tất cả');
    setSelectedBrand('Tất cả');
    setSelectedPressureFilter('Tất cả');
    setSelectedMedium('Tất cả');
    if (catalogAnchorRef.current) {
      catalogAnchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Quick reset from active criteria tags
  const handleGroupReset = () => setSelectedGroup('Tất cả');
  const handleBrandReset = () => setSelectedBrand('Tất cả');
  const handlePressureReset = () => setSelectedPressureFilter('Tất cả');
  const handleMediumReset = () => setSelectedMedium('Tất cả');

  // Trigger scroll whenever a key configuration filter shifts
  const scrollToCatalogTop = () => {
    if (catalogAnchorRef.current) {
      catalogAnchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  useEffect(() => {
    scrollToCatalogTop();
  }, [activeTab, selectedGroup, selectedBrand, selectedPressureFilter, selectedMedium]);

  // Consolidated logical data checking and partitioning helper
  const filteredProducts = useMemo(() => {
    return FLUID_POWER_DATA.products.filter(product => {
      // 1. Check Primary Tab Partition
      if (activeTab === 'pneumatics') {
        const isHydraulicGroup = product.group.startsWith('Thủy lực') || product.group === 'Lọc & Làm sạch' && [15, 16, 21, 28, 29, 30].includes(product.id);
        const nameText = product.name.toLowerCase();
        // Skip strictly hydraulic components or if labeled hydraulic
        if (isHydraulicGroup || nameText.includes('thủy lực') || nameText.includes('dầu')) {
          // Double verify if it actually belongs to pneumatic
          const isPneumaticGroup = product.group.startsWith('Khí nén') || product.group === 'Van khí nén' || product.group === 'Xi lanh khí nén' || product.group === 'Phụ kiện đường ống khí nén';
          if (!isPneumaticGroup) return false;
        }
      } else if (activeTab === 'hydraulics') {
        const isPneumaticGroup = product.group.startsWith('Khí nén') || product.group === 'Van khí nén' || product.group === 'Xi lanh khí nén' || product.group === 'Phụ kiện đường ống khí nén';
        const nameText = product.name.toLowerCase();
        if (isPneumaticGroup || nameText.includes('khí nén') || nameText.includes('máy sấy')) {
          const isHydraulicGroup = product.group.startsWith('Thủy lực') || product.group === 'Van thủy lực' || product.group === 'Xi lanh thủy lực' || product.group === 'Phụ kiện đường ống thủy lực';
          if (!isHydraulicGroup) return false;
        }
      }

      // 2. Classify Sub Group filter
      if (selectedGroup !== 'Tất cả' && product.group !== selectedGroup) {
        return false;
      }

      // 3. Classify Multi Brand filter
      if (selectedBrand !== 'Tất cả') {
        const brandMatch = product.brands?.some(brand => 
          brand.toLowerCase().includes(selectedBrand.toLowerCase())
        );
        if (!brandMatch) return false;
      }

      // 4. Classify working pressure metric
      if (selectedPressureFilter !== 'Tất cả') {
        // High pressure check (>250 bar)
        const isHighPressure = product.pressure?.includes('250 bar') || product.pressure?.includes('350 bar') || product.pressure?.includes('420 bar') || product.pressure?.includes('700 bar') || product.set_pressure?.includes('420 bar') || product.id === 15 || product.id === 16 || product.id === 21 || product.id === 22 || product.id === 24 || product.id === 25 || product.id === 26 || product.id === 27 || product.id === 28;
        
        // Low pressure check (<= 10 bar / 1.0 MPa)
        const isLowPressure = product.pressure?.includes('10 bar') || product.pressure_range?.includes('1.0 MPa') || product.pressure?.includes('7 bar') || product.pressure?.includes('8 bar') || product.id === 1 || product.id === 2 || product.id === 4 || product.id === 5 || product.id === 6 || product.id === 7 || product.id === 8 || product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13;

        // Middle pressure (10-250 bar)
        const isMidPressure = product.pressure?.includes('200 bar') || product.pressure?.includes('250 bar') || product.displacement?.includes('gear') || product.id === 14 || product.id === 17 || product.id === 18 || product.id === 19 || product.id === 20 || product.id === 23;

        if (selectedPressureFilter === 'Thấp áp (≤ 10 bar)' && !isLowPressure) return false;
        if (selectedPressureFilter === 'Trung áp (10-250 bar)' && !isMidPressure) return false;
        if (selectedPressureFilter === 'Cao áp (250-700 bar)' && !isHighPressure) return false;
      }

      // 5. Medium filter check
      if (selectedMedium !== 'Tất cả') {
        const matchesMedium = 
          (selectedMedium === 'Khí nén' && (product.group.startsWith('Khí nén') || product.group.includes('khí nén') || product.name.toLowerCase().includes('khí nén'))) ||
          (selectedMedium === 'Dầu thủy lực' && (product.group.startsWith('Thủy lực') || product.group.includes('thủy lực') || product.name.toLowerCase().includes('thủy lực') || product.fluid?.includes('Khoáng') || product.fluid?.includes('oil'))) ||
          (selectedMedium === 'Nước' && (product.material?.includes('Inox 304') || product.material?.includes('Inox 316') || product.name.toLowerCase().includes('bình chứa')));
        
        if (!matchesMedium) return false;
      }

      // 6. Generic search criteria
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrands = product.brands?.some(b => b.toLowerCase().includes(query)) || false;
        const matchesGroup = product.group.toLowerCase().includes(query);
        const matchesApp = product.applications.toLowerCase().includes(query);
        const matchesNote = product.note?.toLowerCase().includes(query) || false;
        
        if (!matchesName && !matchesBrands && !matchesGroup && !matchesApp && !matchesNote) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, selectedGroup, selectedBrand, selectedPressureFilter, selectedMedium, searchTerm]);

  // Product comparison configuration 
  const toggleComparison = (product: FluidPowerProduct) => {
    if (comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter(p => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 3) {
        alert("Quý khách chỉ có thể chọn so sánh tối đa 03 sản phẩm cùng lúc.");
        return;
      }
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const handleTriggerInquiry = (product: FluidPowerProduct) => {
    setActiveInquiryProduct(product);
    setInquiryMessage(`Kính gửi Hoàng Gia Khang,\nChúng tôi đang quan tâm và cần nhận báo giá chi tiết, catalog kỹ thuật của dòng sản phẩm: "${product.name}". Rất mong nhận được phản hồi sớm từ quý công ty.`);
    setInquirySuccess(false);
  };

  const handleInquiryAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;

    const subject = `Yêu cầu báo giá Khí nén - Thủy lực: ${activeInquiryProduct ? activeInquiryProduct.name : 'Vật tư tự động hóa'}`;
    const body = `Họ tên khách hàng: ${inquiryName}
Số điện thoại: ${inquiryPhone}
Thư điện tử: ${inquiryEmail || 'N/A'}

Nội dung yêu cầu chi tiết:
- Thiết bị quan tâm: ${activeInquiryProduct ? activeInquiryProduct.name : 'Vật tư tự động hóa'}
- Chi tiết khác: ${inquiryMessage || 'N/A'}`;

    window.location.href = `mailto:hoanggiakhangtrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setInquirySuccess(true);
    setTimeout(() => {
      setInquiryMessage('');
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setActiveInquiryProduct(null);
      setInquirySuccess(false);
    }, 2500);
  };

  return (
    <div id="fluid-power-catalog-wrapper" className="bg-[#0A1628] text-white min-h-screen py-16 border-t border-white/5 relative">
      <div ref={catalogAnchorRef} className="absolute -top-24" />

      {/* --- SELECTION GUIDE BANNER (BẢNG HƯỚNG DẪN CHỌN ÁP SUẤT) --- */}
      <div className="container mx-auto px-4 md:px-12 mb-16">
        <div className="bg-[#0D1F3C] border border-gold/15 rounded-md p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gold/5 blur-3xl transform translate-x-12 -translate-y-12 rounded-full" />
          <div className="absolute left-1/4 bottom-0 w-56 h-12 bg-[#3182CE]/5 blur-2xl rounded-full" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-gold rounded-full" />
                <h4 className="text-sm font-bold tracking-[0.1em] text-gold uppercase">HƯỚNG DẪN LỰA CHỌN CÔNG NGHỆ ÁP LỰC INDUSTRIAL</h4>
              </div>
              <p className="text-gray-300 text-xs md:text-sm max-w-2xl leading-relaxed">
                Hệ thống phân chia dải công tác thiết bị theo áp suất và môi chất truyền dẫn hỗ trợ quý đối tác định vị chính xác vật tư kỹ thuật cho hệ thống:
              </p>
            </div>
            <button 
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 text-xs text-gold hover:text-white transition-colors border border-gold/30 hover:border-gold px-4 py-2 rounded-sm font-semibold tracking-wider uppercase bg-[#0D1F3C]"
            >
              <RotateCcw size={12} /> Khôi phục mặc định
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
            {/* Low pressure card */}
            <div 
              onClick={() => {
                setSelectedPressureFilter("Thấp áp (≤ 10 bar)");
                setSelectedMedium("Khí nén");
              }}
              className="bg-[#0A1628]/80 hover:bg-[#0A1628] border border-white/5 hover:border-[#3182CE]/50 p-4 rounded-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-0.5 bg-[#3182CE]/20 text-[#3182CE] text-[10px] uppercase font-bold tracking-wider rounded-sm">Hệ Khí Nén</span>
                <span className="text-gray-400 text-xs font-mono">≤ 10 bar</span>
              </div>
              <h5 className="text-sm font-bold text-white group-hover:text-gold transition-colors mb-1">Thấp áp (Pneumatics)</h5>
              <p className="text-gray-400 text-[11px] leading-relaxed">Máy sấy khí, Van điện từ, Xi lanh ISO, Fittings nhựa và các cơ cấu chuyển động nhanh.</p>
            </div>

            {/* Mid pressure card */}
            <div 
              onClick={() => {
                setSelectedPressureFilter("Trung áp (10-250 bar)");
                setSelectedMedium("Dầu thủy lực");
              }}
              className="bg-[#0A1628]/80 hover:bg-[#0A1628] border border-white/5 hover:border-[#B8860B]/50 p-4 rounded-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-0.5 bg-[#B8860B]/20 text-[#B8860B] text-[10px] uppercase font-bold tracking-wider rounded-sm">Thủy Lực Trung Áp</span>
                <span className="text-gray-400 text-xs font-mono">10 - 250 bar</span>
              </div>
              <h5 className="text-sm font-bold text-white group-hover:text-gold transition-colors mb-1">Trung Áp (Hydraulic Pack)</h5>
              <p className="text-gray-400 text-[11px] leading-relaxed">Bơm bánh răng, Van phân phối, Ben thủy lực xe nâng, hệ thống trạm nguồn nội bộ máy.</p>
            </div>

            {/* High pressure card */}
            <div 
              onClick={() => {
                setSelectedPressureFilter("Cao áp (250-700 bar)");
                setSelectedMedium("Dầu thủy lực");
              }}
              className="bg-[#0A1628]/80 hover:bg-[#0A1628] border border-white/5 hover:border-[#E53E3E]/50 p-4 rounded-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-0.5 bg-[#E53E3E]/20 text-[#E53E3E] text-[10px] uppercase font-bold tracking-wider rounded-sm">Thủy Lực Siêu Cao Áp</span>
                <span className="text-gray-400 text-xs font-mono">250 - 700 bar</span>
              </div>
              <h5 className="text-sm font-bold text-white group-hover:text-gold transition-colors mb-1">Cao Áp & Heavy Duty</h5>
              <p className="text-gray-400 text-[11px] leading-relaxed">Bơm piston, van servo CNC tỷ lệ, ống bện cốt thép, kích thủy lực kích móng công trình.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- INDUSTRIAL MAIN TABS CONTROL --- */}
      <div className="container mx-auto px-4 md:px-12 mb-8">
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
          <div className="flex rounded-sm bg-[#0D1F3C] p-1 border border-white/5 w-full sm:w-auto">
            <button 
              onClick={() => { setActiveTab('all'); handleClearFilters(); }}
              className={`flex-1 sm:flex-none py-2.5 px-6 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'all' 
                  ? 'bg-gold text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={14} /> Tất cả danh mục
            </button>
            <button 
              onClick={() => { setActiveTab('pneumatics'); handleClearFilters(); }}
              className={`flex-1 sm:flex-none py-2.5 px-6 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'pneumatics' 
                  ? 'bg-[#3182CE] text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Wind size={14} /> Hệ Khí nén
            </button>
            <button 
              onClick={() => { setActiveTab('hydraulics'); handleClearFilters(); }}
              className={`flex-1 sm:flex-none py-2.5 px-6 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'hydraulics' 
                  ? 'bg-[#C05621] text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Droplet size={14} /> Hệ Thủy lực
            </button>
          </div>

          <div className="text-gray-400 text-xs flex items-center gap-2 w-full sm:w-auto justify-end mt-2 sm:mt-0">
            <Activity className="text-gold" size={14} />
            HIỂN THỊ <span className="text-white font-bold font-mono">{filteredProducts.length}</span> / <span className="font-mono">{FLUID_POWER_DATA.products.length}</span> DÒNG THIẾT BỊ CHUYÊN DỤNG
          </div>
        </div>
      </div>

      {/* --- FILTER CONTROL BOARD --- */}
      <div className="container mx-auto px-4 md:px-12 mb-10">
        <div className="bg-[#0D1F3C] border border-white/5 rounded-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Search Bar input */}
            <div className="md:col-span-2 relative">
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">Tìm kiếm nhanh khí nén - thủy lực</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Nhập tên thiết bị, thương hiệu, mã DIN..." 
                  className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2.5 pl-10 pr-4 text-xs tracking-wide focus:outline-none transition-colors placeholder:text-gray-500"
                />
                <Search size={14} className="absolute left-3.5 top-3 text-gray-400" />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Selector group */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">Lọc theo nhóm sản phẩm</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2.5 px-3.5 text-xs text-gray-300 focus:outline-none transition-colors"
              >
                <option value="Tất cả">Tất cả nhóm</option>
                {FLUID_POWER_DATA.filters.by_group.filter(g => g !== 'Tất cả').map((gp) => {
                  // Filter out unselected tab contents to make the dropdown clean
                  if (activeTab === 'pneumatics' && gp.startsWith('Thủy lực')) return null;
                  if (activeTab === 'hydraulics' && gp.startsWith('Khí nén')) return null;
                  return <option key={gp} value={gp}>{gp}</option>;
                })}
              </select>
            </div>

            {/* Selector brand */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">Lọc theo thương hiệu chính hãng</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2.5 px-3.5 text-xs text-gray-300 focus:outline-none transition-colors"
              >
                {FLUID_POWER_DATA.filters.by_brand.map((bd) => (
                  <option key={bd} value={bd}>{bd === 'Tất cả' ? 'Tất cả thương hiệu' : bd}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-white/5">
            {/* Pressure Selector */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold font-mono">Xếp mức áp lực thiết kế</label>
              <div className="flex flex-wrap gap-2">
                {FLUID_POWER_DATA.filters.by_pressure.map((pressureOpt) => (
                  <button
                    key={pressureOpt}
                    onClick={() => setSelectedPressureFilter(pressureOpt)}
                    className={`px-3 py-1.5 rounded-sm text-[10px] tracking-wider uppercase font-bold transition-all duration-300 ${
                      selectedPressureFilter === pressureOpt 
                        ? 'bg-gold text-white font-extrabold border border-gold' 
                        : 'bg-[#0A1628] text-gray-400 border border-white/5 hover:border-gold/30 hover:text-white'
                    }`}
                  >
                    {pressureOpt === 'Tất cả' ? 'TẤT CẢ ÁP SUẤT' : pressureOpt}
                  </button>
                ))}
              </div>
            </div>

            {/* Fluid Medium Selector */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#A0AEC0] mb-2 font-bold">Môi chất truyền dẫn (Medium)</label>
              <div className="flex flex-wrap gap-2">
                {FLUID_POWER_DATA.filters.by_medium.map((medOpt) => (
                  <button
                    key={medOpt}
                    onClick={() => setSelectedMedium(medOpt)}
                    className={`px-3 py-1.5 rounded-sm text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 ${
                      selectedMedium === medOpt 
                        ? 'bg-gold text-white border border-gold' 
                        : 'bg-[#0A1628] text-gray-400 border border-white/5 hover:border-gold/30 hover:text-white'
                    }`}
                  >
                    {medOpt === 'Tất cả' ? 'TẤT CẢ MÔI CHẤT' : mdLabel(medOpt)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active conditions filters bar */}
          {hasActiveFilters() && (
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mr-2">Đang lọc theo:</span>
              
              {selectedGroup !== 'Tất cả' && (
                <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/20 px-2.5 py-1 text-[10px] rounded-sm font-bold uppercase">
                  Nhóm: {selectedGroup}
                  <button onClick={handleGroupReset} className="hover:text-red-400"><X size={10} /></button>
                </span>
              )}

              {selectedBrand !== 'Tất cả' && (
                <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/20 px-2.5 py-1 text-[10px] rounded-sm font-bold uppercase">
                  Hiệu: {selectedBrand}
                  <button onClick={handleBrandReset} className="hover:text-red-400"><X size={10} /></button>
                </span>
              )}

              {selectedPressureFilter !== 'Tất cả' && (
                <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/20 px-2.5 py-1 text-[10px] rounded-sm font-bold uppercase">
                  Áp lực: {selectedPressureFilter}
                  <button onClick={handlePressureReset} className="hover:text-red-400"><X size={10} /></button>
                </span>
              )}

              {selectedMedium !== 'Tất cả' && (
                <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/20 px-2.5 py-1 text-[10px] rounded-sm font-bold uppercase">
                  Môi chất: {selectedMedium}
                  <button onClick={handleMediumReset} className="hover:text-red-400"><X size={10} /></button>
                </span>
              )}

              {searchTerm && (
                <span className="inline-flex items-center gap-1.5 bg-gold/15 text-gold border border-gold/20 px-2.5 py-1 text-[10px] rounded-sm font-bold uppercase">
                  Từ khóa: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-red-400"><X size={10} /></button>
                </span>
              )}

              <button 
                onClick={handleClearFilters}
                className="text-[10px] text-red-400 hover:text-red-300 ml-auto font-bold underline"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>

      {/* --- SIDE-BY-SIDE COMPARE BAR OVERLAY PANEL --- */}
      <AnimatePresence>
        {comparedProducts.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D1F3C] border-t-2 border-gold py-4 px-6 shadow-2xl"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-gold/10 rounded-sm">
                  <SlidersHorizontal className="text-gold" size={18} />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-white uppercase tracking-wider">So sánh thông số kỹ thuật ({comparedProducts.length}/3)</h6>
                  <p className="text-gray-400 text-[10px]">Lựa chọn và đối chiếu dữ liệu vật tư tự động hóa side-by-side</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {comparedProducts.map(p => (
                  <div key={p.id} className="bg-[#0A1628] border border-white/10 rounded-sm px-3 py-1.5 flex items-center gap-2">
                    <span className="text-[10px] text-gray-200 font-bold truncate max-w-[120px]">{p.name}</span>
                    <button 
                      onClick={() => toggleComparison(p)} 
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                
                {comparedProducts.length < 3 && (
                  <div className="hidden lg:block text-gray-500 border border-dashed border-white/10 rounded-sm px-4 py-1.5 text-[10px]">
                    + Chọn thêm thiết bị khác
                  </div>
                )}
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <button 
                  onClick={() => setComparedProducts([])} 
                  className="w-1/2 md:w-auto px-4 py-2 hover:bg-white/5 border border-white/10 text-gray-300 hover:text-white text-[10px] font-bold uppercase rounded-sm transition-colors"
                >
                  Xóa danh sách
                </button>
                <button 
                  onClick={() => openCompareTableDialog()}
                  className="w-1/2 md:w-auto px-6 py-2 bg-gold hover:bg-gold/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm transition-transform hover:scale-[1.02] shadow-md flex items-center justify-center gap-1.5"
                >
                  Bắt đầu đối chiếu <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- PRODUCT DATA SHOWCASE GRID --- */}
      <div className="container mx-auto px-4 md:px-12">
        {filteredProducts.length === 0 ? (
          <div className="bg-[#0D1F3C] border border-white/5 rounded-sm p-16 text-center shadow-lg">
            <SlidersHorizontal className="text-gray-600 mx-auto mb-4" size={40} />
            <h5 className="text-lg font-bold text-white mb-2">Không tìm thấy thiết bị khí nén & thủy lực phù hợp</h5>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">Quý khách vui lòng thu nhỏ phạm vi chọn, xóa bớt điều kiện lọc hoặc liên hệ trực tiếp với bộ phận kỹ thuật để được hỗ trợ đo đạc.</p>
            <button 
              onClick={handleClearFilters}
              className="px-6 py-2.5 bg-gold hover:bg-gold/80 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Reset bộ lọc nâng cao
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, pIdx) => {
              const belongsToPneumatics = product.group.startsWith('Khí nén') || product.group === 'Van khí nén' || product.group === 'Xi lanh khí nén' || product.group === 'Phụ kiện đường ống khí nén';
              const isHighP = product.pressure?.includes('250 bar') || product.pressure?.includes('350 bar') || product.pressure?.includes('420 bar') || product.pressure?.includes('700 bar') || product.set_pressure?.includes('420 bar') || product.id === 15 || product.id === 16 || product.id === 21 || product.id === 24 || product.id === 25 || product.id === 27 || product.id === 28;
              const hasSafetyNote = !!product.note;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(pIdx * 0.05, 0.4) }}
                  whileHover={{ y: -8 }}
                  className="bg-[#0D1F3C] border border-white/5 hover:border-gold/40 rounded-sm overflow-hidden flex flex-col justify-between h-full group transition-all duration-300 shadow-xl"
                >
                  {/* Card header indicators */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      {/* Industrial category tag */}
                      <span className={`px-2 py-0.5 rounded-sm text-[9px] font-extrabold uppercase tracking-widest ${
                        belongsToPneumatics 
                          ? 'bg-[#3182CE]/15 text-[#3182CE] border border-[#3182CE]/20' 
                          : 'bg-[#C05621]/15 text-[#C05621] border border-[#C05621]/20'
                      }`}>
                        {belongsToPneumatics ? 'KHÍ NÉN' : 'THỦY LỰC'}
                      </span>

                      {/* Sub-group badge */}
                      <span className="text-[9px] text-gray-400 font-bold bg-[#0A1628] px-2 py-0.5 rounded-sm border border-white/5 tracking-wider truncate max-w-[150px]">
                        {product.group}
                      </span>
                    </div>

                    {/* Graphic and Title */}
                    <div className="flex gap-4 items-start mb-4">
                      <div className="relative w-20 h-20 rounded-sm border border-white/5 bg-[#0A1628]/90 overflow-hidden flex items-center justify-center shrink-0 group-hover:border-gold/30 transition-all duration-300">
                        <img 
                          src={getFluidPowerImage(product.group)}
                          alt={product.group}
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/80 to-transparent" />
                        <div className="relative z-10 p-1">
                          <GroupIndustrialIcon group={product.group} className="w-10 h-10 transition-all duration-300 transform group-hover:scale-105" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-bold tracking-tight italic leading-snug group-hover:text-gold transition-colors duration-300">
                          {product.name}
                        </h4>
                        
                        {/* Manufacturer Brands */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.brands?.map(b => (
                            <span key={b} className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.2 rounded-sm font-medium">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technical values highlight list */}
                    <div className="bg-[#0A1628] p-3 rounded-sm border border-white/5 mt-4 group/specs pointer-pointer relative">
                      {/* Metric lines */}
                      {product.pressure && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium">Áp suất định mức</span>
                          <span className={`font-semibold font-mono ${isHighP ? 'text-[#E53E3E]' : 'text-emerald-400'}`}>
                            {product.pressure}
                          </span>
                        </div>
                      )}

                      {product.set_pressure && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium font-mono">Đặt ngưỡng tác động</span>
                          <span className="font-semibold text-emerald-400 font-mono">
                            {product.set_pressure}
                          </span>
                        </div>
                      )}

                      {product.filter_grade && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium">Độ tinh lọc hạt</span>
                          <span className="font-semibold font-mono text-emerald-400">
                            {product.filter_grade}
                          </span>
                        </div>
                      )}

                      {product.bore && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium">Bore & Stroke</span>
                          <span className="text-gray-200 font-bold font-mono text-[10px]">
                            {product.bore} x {product.stroke}
                          </span>
                        </div>
                      )}

                      {product.displacement && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium">Lưu lượng hút</span>
                          <span className="text-gray-300 font-bold font-mono">
                            {product.displacement}
                          </span>
                        </div>
                      )}

                      {product.type && (
                        <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 mb-2">
                          <span className="text-gray-400 font-medium">Dạng cơ cấu</span>
                          <span className="text-gray-300 font-semibold text-[10px]">
                            {product.type}
                          </span>
                        </div>
                      )}

                      <div className="text-[10px] text-[#A0AEC0] flex gap-1.5 items-start">
                        <span className="text-gold font-bold bg-[#0D1F3C] px-1.5 py-0.2 rounded-sm shrink-0">ỨNG DỤNG</span>
                        <span className="leading-relaxed truncate" title={product.applications}>
                          {product.applications}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card footer details and status */}
                  <div className="px-6 pb-6 pt-2 mt-auto border-t border-white/5 bg-[#0D1F3C]">
                    <div className="flex items-center justify-between mb-4">
                      {/* Safety advisory badge */}
                      {hasSafetyNote ? (
                        <div 
                          className="relative"
                          onMouseEnter={() => setHoveredNoteIndex(product.id)}
                          onMouseLeave={() => setHoveredNoteIndex(null)}
                        >
                          <span className="cursor-help flex items-center gap-1 text-[10px] text-[#DD6B20] hover:text-[#DD6B20]/80 bg-[#DD6B20]/10 px-2 py-0.5 rounded-sm font-bold uppercase transition-colors">
                            <AlertTriangle size={11} /> Safety Note
                          </span>
                          
                          <AnimatePresence>
                            {hoveredNoteIndex === product.id && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-6 left-0 z-20 w-64 bg-[#0A1628] border border-[#DD6B20]/40 p-3 rounded-sm shadow-xl text-[10px] text-gray-300 leading-relaxed font-sans"
                              >
                                {product.note}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <span className="text-gray-500 text-[10px]">Đạt chuẩn ISO / PN</span>
                      )}

                      {/* Stock availability */}
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold ${
                        product.status === 'Còn hàng' ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.status === 'Còn hàng' ? 'bg-emerald-400' : 'bg-amber-400'
                        }`} />
                        {product.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setActiveDetailProduct(product)}
                        className="w-full py-2 border border-white/10 hover:border-gold hover:bg-gold/10 text-white hover:text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 text-center"
                      >
                        Thông số kĩ thuật
                      </button>
                      <button 
                        onClick={() => handleTriggerInquiry(product)}
                        className="w-full py-2 bg-[#B8860B] hover:bg-[#B8860B]/80 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300 text-center shadow-lg"
                      >
                        Yêu cầu báo giá
                      </button>
                    </div>

                    {/* Compare integration checkbox */}
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                      <input 
                        type="checkbox" 
                        id={`compare-${product.id}`}
                        checked={comparedProducts.some(p => p.id === product.id)}
                        onChange={() => toggleComparison(product)}
                        className="w-3.5 h-3.5 rounded-sm border-white/10 text-gold focus:ring-gold focus:ring-offset-0 bg-[#0A1628]"
                      />
                      <label htmlFor={`compare-${product.id}`} className="text-[10px] text-gray-400 hover:text-white cursor-pointer select-none">
                        So sánh đối chiếu
                      </label>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* --- PREMIUM DETAIL SPECIFICATIONS MODAL BOARD --- */}
      <AnimatePresence>
        {activeDetailProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold/40 rounded-sm w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 sticky top-0 bg-[#0D1F3C] z-10 flex justify-between items-start">
                <div>
                  <span className="inline-block text-[#B8860B] font-bold tracking-[0.2em] text-[10px] uppercase mb-1">
                    THÔNG SỐ VẬT TƯ ĐO ĐẠC CHI TIẾT
                  </span>
                  <h3 className="text-white text-lg font-bold italic py-1">{activeDetailProduct.name}</h3>
                </div>
                <button 
                  onClick={() => setActiveDetailProduct(null)}
                  className="p-1 px-2.5 bg-white/5 hover:bg-white/10 rounded-sm text-gray-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Specs body sheet */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-sans text-gold/80 block uppercase tracking-widest mb-2 font-bold">Thương hiệu & Phân phối</span>
                  <div className="flex items-center gap-2">
                    {activeDetailProduct.brands?.map(b => (
                      <span key={b} className="bg-[#0A1628] border border-white/10 px-3 py-1 text-xs text-white uppercase tracking-wider rounded-sm font-semibold">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0A1628] p-4 rounded-sm border border-white/5">
                  <span className="text-[10px] font-sans text-gold block uppercase tracking-widest mb-3 font-semibold">Bảng chỉ số thông số kỹ thuật tối ưu</span>
                  
                  <table className="w-full text-left border-collapse text-xs">
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="py-2.5 text-gray-400 w-1/3">Nhóm vật tử</td>
                        <td className="py-2.5 text-white font-semibold">{activeDetailProduct.group}</td>
                      </tr>
                      {activeDetailProduct.pressure && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Dải áp suất kiểm tra</td>
                          <td className="py-2.5 text-emerald-400 font-bold font-mono">{activeDetailProduct.pressure}</td>
                        </tr>
                      )}
                      {activeDetailProduct.set_pressure && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Ngưỡng nén xả áp</td>
                          <td className="py-2.5 text-emerald-400 font-bold font-mono">{activeDetailProduct.set_pressure}</td>
                        </tr>
                      )}
                      {activeDetailProduct.capacity && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Lưu lượng nén / sấy</td>
                          <td className="py-2.5 text-white font-semibold font-mono">{activeDetailProduct.capacity}</td>
                        </tr>
                      )}
                      {activeDetailProduct.power && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Công suất định mức</td>
                          <td className="py-2.5 text-white font-mono">{activeDetailProduct.power}</td>
                        </tr>
                      )}
                      {activeDetailProduct.standards && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Tiêu chuẩn vật lý áp lực</td>
                          <td className="py-2.5 text-white">
                            {activeDetailProduct.standards.join(" / ")}
                          </td>
                        </tr>
                      )}
                      {activeDetailProduct.material && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Vật liệu cấu thành thiết kế</td>
                          <td className="py-2.5 text-white">{activeDetailProduct.material}</td>
                        </tr>
                      )}
                      {activeDetailProduct.pressure_dew_point && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Điểm sương nhiệt độ PDP</td>
                          <td className="py-2.5 text-white font-mono">{activeDetailProduct.pressure_dew_point}</td>
                        </tr>
                      )}
                      {activeDetailProduct.port_size && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Kích thước ren kết nối</td>
                          <td className="py-2.5 text-white font-semibold font-mono">{activeDetailProduct.port_size}</td>
                        </tr>
                      )}
                      {activeDetailProduct.bore && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Kích thước nòng (Bore)</td>
                          <td className="py-2.5 text-white font-semibold font-mono">{activeDetailProduct.bore}</td>
                        </tr>
                      )}
                      {activeDetailProduct.stroke && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Hành trình pít tông (Stroke)</td>
                          <td className="py-2.5 text-white font-mono">{activeDetailProduct.stroke}</td>
                        </tr>
                      )}
                      {activeDetailProduct.displacement && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Lưu lượng riêng (cc/rev)</td>
                          <td className="py-2.5 text-white font-semibold font-mono">{activeDetailProduct.displacement}</td>
                        </tr>
                      )}
                      {activeDetailProduct.speed && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Tốc độ vòng quay cho phép</td>
                          <td className="py-2.5 text-white font-mono">{activeDetailProduct.speed}</td>
                        </tr>
                      )}
                      {activeDetailProduct.torque && (
                        <tr className="border-b border-white/5">
                          <td className="py-2.5 text-gray-400">Mô-men xoắn lớn nhất</td>
                          <td className="py-2.5 text-white font-mono">{activeDetailProduct.torque}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Features Checklist */}
                <div>
                  <span className="text-[10px] font-sans text-gold block uppercase tracking-widest mb-3 font-semibold">Tính năng kỹ thuật then chốt</span>
                  <div className="space-y-2">
                    {activeDetailProduct.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 items-start text-xs text-gray-300">
                        <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope of general applications */}
                <div>
                  <span className="text-[10px] font-sans text-gold block uppercase tracking-widest mb-2 font-semibold font-mono">Lĩnh vực ứng dụng tự động</span>
                  <p className="text-gray-300 text-xs leading-relaxed font-normal bg-white/5 p-3 rounded-sm">
                    {activeDetailProduct.applications}
                  </p>
                </div>

                {/* Safety Advisory Warning Box */}
                {activeDetailProduct.note && (
                  <div className="bg-[#DD6B20]/10 border border-[#DD6B20]/25 p-4 rounded-sm flex items-start gap-3">
                    <AlertTriangle className="text-[#DD6B20] shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="text-[10px] font-sans text-[#DD6B20] block uppercase tracking-widest mb-1 font-bold">Khuyến cáo bảo dưỡng & vận hành an toàn</span>
                      <p className="text-gray-300 text-xs leading-relaxed">{activeDetailProduct.note.replace('⚠ ', '')}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Specs footer button */}
              <div className="p-6 md:p-8 border-t border-white/5 bg-[#0A1628] flex gap-3">
                <button 
                  onClick={() => {
                    const p = activeDetailProduct;
                    setActiveDetailProduct(null);
                    handleTriggerInquiry(p);
                  }}
                  className="w-full py-3 bg-gold hover:bg-gold/90 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-colors shadow-lg"
                >
                  Yêu cầu kích thước bản vẽ & Báo giá
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SIDE-BY-SIDE MODAL COMPANION COMPARATIVE VIEW --- */}
      {showCompareTable && (
        <div id="compare-dialog-overlay" className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0D1F3C] border border-gold/40 rounded-sm w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-[#0D1F3C] sticky top-0 z-10 flex justify-between items-center">
              <div>
                <h4 className="text-sm text-gold font-bold tracking-widest mr-2 uppercase">BẢNG PHÂN TÍCH SO SÁNH ĐỐI CHIẾU SẢN PHẨM</h4>
                <p className="text-gray-400 text-xs mt-1">Quý khách đang so sánh đặc tính thông số của {comparedProducts.length} dòng vật tư</p>
              </div>
              <button 
                onClick={() => setShowCompareTable(false)}
                className="p-1 px-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-sm"
              >
                Đóng so sánh <X size={14} className="inline ml-1" />
              </button>
            </div>

            {/* Table layout */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px] text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 text-gray-400 font-bold uppercase tracking-wider w-1/4">ĐẶC TÍNH KĨ THUẬT</th>
                    {comparedProducts.map(p => (
                      <th key={p.id} className="py-4 px-4 font-bold text-gold text-sm w-1/4">
                        <div className="flex flex-col gap-1">
                          <span className="italic">{p.name}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Hiệu: {p.brands?.join(', ')}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Phân nhóm chính</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 font-semibold text-white uppercase">{p.group}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Áp suất công tác</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 font-mono text-emerald-400 font-bold">{p.pressure || p.set_pressure || 'Chuẩn ren PN'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Bản vẽ kĩ thuật (Bore/Bán kính)</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 font-mono text-gray-300">{p.bore ? `${p.bore} x ${p.stroke}` : p.port_size || p.size || 'Theo tiêu chuẩn lắp'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Lưu lượng xả / Hút</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 text-gray-300">{p.capacity || p.displacement || p.flow || 'Tải tĩnh tiêu chuẩn'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Vật liệu vật lý</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 text-gray-300">{p.material || p.seal_material || 'Thép cường độ hợp kim'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Môi chất tương thích</td>
                    {comparedProducts.map(p => {
                      const looksLikeAir = p.group.startsWith('Khí nén') || p.id <= 13;
                      return (
                        <td key={p.id} className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-sm text-[9px] font-bold ${
                            looksLikeAir ? 'bg-[#3182CE]/20 text-[#3182CE]' : 'bg-[#C05621]/20 text-[#C05621]'
                          }`}>
                            {looksLikeAir ? 'KHÍ NÉN SẠCH' : 'DẦU THỦY LỰC / KHOÁNG'}
                          </span>
                        </td>
                      )
                    })}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium valign-top">Đặc tính tiên tiến</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4 text-gray-300 space-y-1">
                        {p.features.slice(0, 2).map((fe, i) => (
                          <div key={i} className="flex gap-1 items-start text-[11px]">
                            <span className="text-gold font-bold">✓</span>
                            <span>{fe}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-400 font-medium">Sẵn có tại kho hàng</td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-3 px-4">
                        <span className={`px-2 py-0.5 text-[10px] rounded-sm font-bold ${
                          p.status === 'Còn hàng' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-4 w-1/4"></td>
                    {comparedProducts.map(p => (
                      <td key={p.id} className="py-4 px-4">
                        <button 
                          onClick={() => {
                            setShowCompareTable(false);
                            handleTriggerInquiry(p);
                          }}
                          className="w-full py-2 bg-gold hover:bg-gold/80 text-white text-[10px] font-bold uppercase rounded-sm transition-colors text-center shadow-md cursor-pointer"
                        >
                          Báo giá nhanh điện tử
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      )}

      {/* --- INQUIRY MODAL OVERLAY --- */}
      <AnimatePresence>
        {activeInquiryProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold/40 rounded-sm w-full max-w-lg shadow-2xl overflow-hidden relative"
            >
              <div className="p-6 md:p-8 border-b border-white/5 bg-[#0D1F3C] flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1 text-[10px] text-gold font-bold uppercase tracking-widest mb-1">
                    <ShoppingBag size={12} /> Phiếu yêu cầu báo giá thương mại
                  </div>
                  <h4 className="text-white text-base font-bold italic">{activeInquiryProduct.name}</h4>
                </div>
                <button 
                  onClick={() => setActiveInquiryProduct(null)}
                  className="p-1 px-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-sm transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {inquirySuccess ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <Check size={32} />
                  </div>
                  <h5 className="text-lg font-bold text-white uppercase tracking-wider">Gửi yêu cầu thành công!</h5>
                  <p className="text-gray-300 text-xs leading-relaxed max-w-sm mx-auto">
                    Hệ thống thông báo giá tự động đã tiếp nhận biểu mẫu của quý khách. Nhân viên kĩ thuật thương mại Hoàng Gia Khang sẽ liên hệ trực tiếp đến số điện thoại / email trong vòng <span className="text-gold font-bold">2 tiếng</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquiryAction} className="p-6 md:p-8 space-y-4.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold font-semibold mb-1.5">Môi chất vận hành dự kiến</label>
                    <p className="text-gray-400 text-[11px] bg-white/5 p-2 rounded-sm border border-white/5 leading-relaxed italic">
                      Dải áp suất: {activeInquiryProduct.pressure || activeInquiryProduct.set_pressure || 'PN tiêu chuẩn'} | Hỗ trợ tư vấn kĩ thuật tại công trình.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#A0AEC0] mb-1.5 font-bold">Họ và tên khách hàng *</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Nguyễn Văn A" 
                        className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2 px-3.5 pl-9 text-xs focus:outline-none transition-colors"
                      />
                      <User size={13} className="absolute left-3.5 top-3.5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A0AEC0] mb-1.5 font-bold">Số điện thoại liên hệ *</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          required
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          placeholder="0987xxxxxx" 
                          className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2 px-3.5 pl-9 text-xs focus:outline-none transition-colors"
                        />
                        <Smartphone size={13} className="absolute left-3.5 top-3.5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-[#A0AEC0] mb-1.5 font-bold">Email nhận Catalog</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="doc@company.com" 
                          className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2 px-3.5 pl-9 text-xs focus:outline-none transition-colors"
                        />
                        <Mail size={13} className="absolute left-3.5 top-3.5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#A0AEC0] mb-1.5 font-bold">Nội dung chi tiết (Số lượng / Kích thước nòng)</label>
                    <textarea 
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full bg-[#0A1628] border border-white/10 focus:border-gold rounded-sm py-2 px-3.5 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-3 bg-gold hover:bg-gold/90 text-white rounded-sm text-xs font-bold uppercase tracking-widest transition-transform hover:scale-[1.01] shadow-xl flex items-center justify-center gap-2"
                    >
                      Gửi phiếu báo giá điện tử <Check size={14} />
                    </button>
                    <p className="text-center text-[10px] text-gray-500 mt-2">Nộp phiếu điện tử tuân thủ Bảo mật thông tin của khách hàng Hoàng Gia Khang.</p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  // Selector dynamic labels configuration
  function mdLabel(val: string) {
    if (val === 'Khí nén') return '⚡ KHÍ NÉN';
    if (val === 'Dầu thủy lực') return '🛢️ DẦU VÀ KHOÁNG';
    if (val === 'Nước') return '💧 NƯỚC SẠCH / INOX';
    return val;
  }

  // Double verification check helper on active filters
  function hasActiveFilters() {
    return selectedGroup !== 'Tất cả' || selectedBrand !== 'Tất cả' || selectedPressureFilter !== 'Tất cả' || selectedMedium !== 'Tất cả' || searchTerm !== '';
  }

  // Comparatives overlay control 
  function openCompareTableDialog() {
    setShowCompareTable(true);
  }
};

// State overlay for showing comparison table dialog
let showCompareTable: boolean = false;
let setShowCompareTable: (show: boolean) => void = () => {};

// Bind to localized wrapper 
const originalUseState = React.useState;
const FluidPowerWithHooks: React.FC = () => {
  const [show, setInternalShow] = originalUseState(false);
  showCompareTable = show;
  setShowCompareTable = setInternalShow;
  return <FluidPowerCatalog />;
};

export default FluidPowerWithHooks;
