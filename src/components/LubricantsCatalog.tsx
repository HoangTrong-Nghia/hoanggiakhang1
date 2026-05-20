import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Sparkles, 
  RotateCcw, 
  Search, 
  AlertTriangle, 
  Info, 
  Check, 
  X, 
  ChevronRight, 
  Eye, 
  MessageSquare,
  Bookmark,
  Scale,
  Settings,
  Flame,
  Thermometer,
  Shield,
  FileCheck,
  Award,
  BookOpen,
  Filter,
  CheckCircle2,
  Droplet
} from 'lucide-react';
import { LUBRICANTS_DATA, LubricatingProduct } from '../lubricantsData';

// Custom interface for comparison
interface ComparisonItem extends LubricatingProduct {}

export function LubricantsCatalog() {
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Tất cả');
  const [selectedBrand, setSelectedBrand] = useState('Tất cả');
  const [selectedViscosity, setSelectedViscosity] = useState('Tất cả');
  const [selectedApplication, setSelectedApplication] = useState('Tất cả');
  const [selectedOem, setSelectedOem] = useState('Tất cả');
  
  // Active Main Tab
  // 1: Dầu bôi trơn, 2: Mỡ bôi trơn, 3: Chuyên dụng, 4: Tất cả
  const [activeTab, setActiveTab] = useState<number>(4);

  // Compare List
  const [compareList, setCompareList] = useState<ComparisonItem[]>([]);
  const [showCompareDrawer, setShowCompareDrawer] = useState(false);

  // Detail Modal Product
  const [detailProduct, setDetailProduct] = useState<LubricatingProduct | null>(null);

  // Inquiry Modal State with current target
  const [inquiryProduct, setInquiryProduct] = useState<LubricatingProduct | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    quantity: '1 Phuy / Thùng'
  });
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // OEM Options mapping to filters/keywords
  const oemOptions = [
    { label: 'Tất cả thiết bị', value: 'Tất cả' },
    { label: 'Atlas Copco (Máy nén)', value: 'Atlas Copco' },
    { label: 'Caterpillar (Động cơ/Truyền động)', value: 'Caterpillar' },
    { label: 'Komatsu (Hộp số/Thủy lực)', value: 'Komatsu' },
    { label: 'Ingersoll Rand (Máy nén khí)', value: 'Ingersoll Rand' },
    { label: 'Siemens / GE (Tuabin)', value: 'Siemens' },
    { label: 'Kaeser (Máy nén bôi trơn)', value: 'Kaeser' },
    { label: 'CNC Spindle (Vòng bi tốc độ)', value: 'Spindle' }
  ];

  // Quick select items from guide table sets state
  const handleQuickSelect = (eqType: string) => {
    // Scroll to products heading
    const anchor = document.getElementById('lubricants-products-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }

    // Apply exact quick filter logic
    if (eqType === 'Hộp số trụ/côn') {
      setSelectedGroup('Dầu hộp số & truyền động');
      setSelectedApplication('Hộp số');
      setActiveTab(4);
    } else if (eqType === 'Hộp số trục vít') {
      setSelectedGroup('Dầu hộp số & truyền động');
      setSelectedApplication('Hộp số');
      setActiveTab(4);
    } else if (eqType === 'Thủy lực CN') {
      setSelectedGroup('Dầu thủy lực');
      setSelectedApplication('Thủy lực');
      setActiveTab(4);
    } else if (eqType === 'Máy nén trục vít') {
      setSelectedGroup('Dầu máy nén khí');
      setSelectedApplication('Máy nén khí');
      setActiveTab(4);
    } else if (eqType === 'Vòng bi điện cơ') {
      setSelectedGroup('Mỡ bôi trơn (Grease)');
      setSelectedApplication('Vòng bi & ổ trục');
      setActiveTab(2);
    } else if (eqType === 'Lò nhiệt >150°C') {
      setSelectedGroup('Mỡ bôi trơn (Grease)');
      setSelectedApplication('Nhiệt độ cao');
      setActiveTab(2);
    }
  };

  // Scroll to top of catalog section helper
  const scrollCatalogToView = () => {
    const el = document.getElementById('lubricants-catalog-top');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Switch tabs and handle scroll
  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
    scrollCatalogToView();
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedGroup('Tất cả');
    setSelectedBrand('Tất cả');
    setSelectedViscosity('Tất cả');
    setSelectedApplication('Tất cả');
    setSelectedOem('Tất cả');
    setActiveTab(4);
  };

  // Filter products based on search term, group, brand, viscosity, application, OEM and tab selection
  const filteredProducts = useMemo(() => {
    return LUBRICANTS_DATA.products.filter(prod => {
      // 1. First evaluate Main Tab constraints
      if (activeTab === 1) {
        // Dầu bôi trơn (Not Grease and not specialty)
        if (prod.group === 'Mỡ bôi trơn (Grease)' || prod.group === 'Dầu & mỡ chuyên dụng') {
          return false;
        }
      } else if (activeTab === 2) {
        // Mỡ bôi trơn (Grease Group Only)
        if (prod.group !== 'Mỡ bôi trơn (Grease)') {
          return false;
        }
      } else if (activeTab === 3) {
        // Dầu & mỡ chuyên dụng Only
        if (prod.group !== 'Dầu & mỡ chuyên dụng') {
          return false;
        }
      }

      // 2. Select Group Filter
      if (selectedGroup !== 'Tất cả' && prod.group !== selectedGroup) {
        return false;
      }

      // 3. Brand Filter (Matches keys in brands object)
      if (selectedBrand !== 'Tất cả') {
        const brandKeys = Object.keys(prod.brands).map(b => b.toLowerCase());
        if (!brandKeys.includes(selectedBrand.toLowerCase())) {
          return false;
        }
      }

      // 4. Viscosity Filter
      if (selectedViscosity !== 'Tất cả') {
        const viscosityStr = (prod.viscosity || prod.base_oil_viscosity || '').toLowerCase();
        const simplifiedVis = selectedViscosity.replace('ISO VG', '').trim();
        if (!viscosityStr.includes(simplifiedVis) && !viscosityStr.includes(selectedViscosity.toLowerCase())) {
          return false;
        }
      }

      // 5. Application Filter
      if (selectedApplication !== 'Tất cả') {
        const appText = (prod.applications + ' ' + prod.group).toLowerCase();
        
        if (selectedApplication === 'Vòng bi & ổ trục' && !appText.includes('vòng bi') && !appText.includes('ổ trục') && !appText.includes('grease') && !appText.includes('mỡ')) {
          return false;
        }
        if (selectedApplication === 'Hộp số' && !appText.includes('hộp số') && !appText.includes('gear')) {
          return false;
        }
        if (selectedApplication === 'Thủy lực' && !appText.includes('thủy lực') && !appText.includes('hydraulic')) {
          return false;
        }
        if (selectedApplication === 'Máy nén khí' && !appText.includes('nén khí') && !appText.includes('compressor')) {
          return false;
        }
        if (selectedApplication === 'Gia công cắt gọt' && !appText.includes('cắt gọt') && !appText.includes('gia công') && !appText.includes('cutting') && !appText.includes('tôi thép')) {
          return false;
        }
        if (selectedApplication === 'Nhiệt độ cao' && !appText.includes('nhiệt độ cao') && !appText.includes('high temp') && !appText.includes('lò nung') && !appText.includes('lò nhiệt')) {
          return false;
        }
        if (selectedApplication === 'Thực phẩm (Food Grade)' && !appText.includes('thực phẩm') && !appText.includes('food') && !prod.name.toLowerCase().includes('thực phẩm')) {
          return false;
        }
      }

      // 6. OEM Specific Compatibility Filter
      if (selectedOem !== 'Tất cả') {
        const allText = JSON.stringify(prod).toLowerCase();
        if (!allText.includes(selectedOem.toLowerCase())) {
          return false;
        }
      }

      // 7. Text Search (Matches name, description, brand product series, standards)
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const brandSeries = Object.values(prod.brands).join(' ').toLowerCase();
        const standardsStr = (prod.standards || []).join(' ').toLowerCase();
        const featuresStr = prod.features.join(' ').toLowerCase();
        const matchName = prod.name.toLowerCase().includes(query);
        const matchGroup = prod.group.toLowerCase().includes(query);
        const matchBrands = brandSeries.includes(query);
        const matchStandards = standardsStr.includes(query);
        const matchFeatures = featuresStr.includes(query);
        const matchApps = prod.applications.toLowerCase().includes(query);

        if (!matchName && !matchGroup && !matchBrands && !matchStandards && !matchFeatures && !matchApps) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedGroup, selectedBrand, selectedViscosity, selectedApplication, selectedOem, activeTab]);

  // Product Comparisons Management
  const handleToggleCompare = (product: LubricatingProduct) => {
    const isAlreadyCompared = compareList.some(item => item.id === product.id);
    if (isAlreadyCompared) {
      setCompareList(compareList.filter(item => item.id !== product.id));
    } else {
      if (compareList.length >= 3) {
        alert('Quý khách chỉ có thể so sánh tối đa 3 sản phẩm bôi trơn cùng lúc để trực quan nhất.');
        return;
      }
      setCompareList([...compareList, product]);
      setShowCompareDrawer(true);
    }
  };

  const handleRemoveCompare = (id: number) => {
    setCompareList(compareList.filter(item => item.id !== id));
  };

  // Inquiry form submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert('Vui lòng cung cấp Họ tên và Số điện thoại liên lạc của Quý khách.');
      return;
    }

    const subject = `Yêu cầu báo giá Dầu mỡ bôi trơn: ${inquiryProduct ? inquiryProduct.name : 'Dầu mỡ bôi trơn'}`;
    const body = `Họ tên khách hàng: ${inquiryForm.name}
Số điện thoại: ${inquiryForm.phone}
Thư điện tử: ${inquiryForm.email || 'N/A'}
Công ty: ${inquiryForm.company || 'N/A'}
Số lượng cần dự tính: ${inquiryForm.quantity}

Nội dung yêu cầu chi tiết:
- Sản phẩm quan tâm: ${inquiryProduct ? inquiryProduct.name : 'Dầu mỡ bôi trơn'}
- Chi tiết khác: ${inquiryForm.message || 'N/A'}`;

    window.location.href = `mailto:hoanggiakhangtrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryProduct(null);
      // Reset form
      setInquiryForm({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
        quantity: '1 Phuy / Thùng'
      });
    }, 2800);
  };

  // Helper values for rendering specific special badges
  const getSpecialBadges = (prod: LubricatingProduct) => {
    const badges = [];
    const textToScan = (prod.name + ' ' + prod.applications + ' ' + (prod.note || '') + ' ' + JSON.stringify(prod.certification || [])).toLowerCase();

    if (textToScan.includes('nsf h1') || textToScan.includes('nsf') || textToScan.includes('thực phẩm')) {
      badges.push({ text: 'NSF H1', type: 'nsf', color: '#38A169', icon: <Shield size={12} className="mr-1" /> });
    }
    if (textToScan.includes('pao') || textToScan.includes('synthetic') || textToScan.includes('tổng hợp') || textToScan.includes('shc')) {
      badges.push({ text: 'PAO Synthetic', type: 'pao', color: '#3182CE', icon: <Award size={12} className="mr-1" /> });
    }
    if (textToScan.includes('nhiệt độ cao') || textToScan.includes('lò nung') || textToScan.includes('220°c') || textToScan.includes('high temp')) {
      badges.push({ text: 'High Temp', type: 'high_temp', color: '#E53E3E', icon: <Thermometer size={12} className="mr-1" /> });
    }
    if (textToScan.includes('ep') || textToScan.includes('cực áp') || textToScan.includes('timken') || textToScan.includes('clp') || textToScan.includes('extreme pressure')) {
      badges.push({ text: 'EP Extreme Press', type: 'ep', color: '#DD6B20', icon: <Flame size={12} className="mr-1" /> });
    }

    return badges;
  };

  // Render Category SVG Icon based on Group
  const renderProductIcon = (group: string) => {
    switch (group) {
      case 'Dầu máy nén khí':
        return (
          <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </div>
        );
      case 'Dầu hộp số & truyền động':
        return (
          <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        );
      case 'Dầu thủy lực':
        return (
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        );
      case 'Mỡ bôi trơn (Grease)':
        return (
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158" />
              <rect x="5" y="6" width="14" height="14" rx="2" />
              <path d="M5 10h14" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-gold border border-gold/20 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div id="lubricants-catalog-top" className="bg-[#0A1628] text-gray-200 py-12 rounded-lg border border-white/5 shadow-2xl relative overflow-hidden">
      
      {/* Background Decorative Gradients and Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      {/* HEADER STATEMENT */}
      <div className="container mx-auto px-4 md:px-12 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-4">
          <Droplets className="w-3 h-3 animate-pulse text-[#B8860B]" />
          Bộ Phận Nhập Khẩu Phân Phối Trực Tiếp
        </div>
        <h2 className="text-4xl md:text-5xl font-display italic font-semibold text-white tracking-wide">
          DANH MỤC <span className="text-gold">DẦU MỠ BÔI TRƠN</span> CHUYÊN DỤNG
        </h2>
        <div className="h-0.5 w-24 bg-gold mx-auto mt-4 mb-4" />
        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          Cung cấp các dòng sản phẩm bôi trơn công nghiệp hiệu năng cao nhập khẩu chính ngạch từ các tập đoàn bôi trơn lớn nhất toàn cầu 
          <strong className="text-white ml-1">Shell, Mobil, Castrol, Total, SKF, Fuchs, Kluber</strong>... Đầy đủ chứng nhận nguồn gốc xuất xứ CO/CQ, đạt chuẩn OEM hàng đầu thế giới.
        </p>
      </div>

      {/* 5. OIL SELECTION GUIDE TABLE (SECTION TRỰC QUAN BAN ĐẦU) */}
      <div className="container mx-auto px-4 md:px-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0D1F3C]/80 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
            <BookOpen className="w-5 h-5 text-gold" />
            <h3 className="text-lg font-medium text-white tracking-wider uppercase font-display">
              Bảng Tra Nhanh Hướng Dẫn Chọn Dầu & Mỡ Khuyến Nghị (Oil Selection Guide)
            </h3>
            <span className="ml-auto text-xs text-gold font-mono hidden md:inline-block">★ Click từng dòng để lọc nhanh sản phẩm tương thích</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A1628]/60 text-gold font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Thiết Bị Công Nghiệp</th>
                  <th className="py-3 px-4">Đặc Tính / Loại Dầu Mỡ</th>
                  <th className="py-3 px-4">Độ Nhớt Khuyến Nghị (ISO VG) / Cấp NLGI</th>
                  <th className="py-3 px-4 text-center">Hành Động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { device: 'Hộp số trụ/côn', oilType: 'Industrial Gear Oil CLP (Chống mài mòn cực áp)', vg: 'ISO VG 220 - 320' },
                  { device: 'Hộp số trục vít', oilType: 'Worm Gear PAG (Hiệu suất truyền động siêu cao, ma sát thấp)', vg: 'ISO VG 220 - 460' },
                  { device: 'Thủy lực CN', oilType: 'HM Hydraulic (Phụ gia kẽm AW chống mài mòn)', vg: 'ISO VG 46' },
                  { device: 'Máy nén trục vít', oilType: 'Compressor Oil (Kháng nhiệt cực tốt, chống tàn cặn chặn van)', vg: 'ISO VG 46 - 68' },
                  { device: 'Vòng bi điện cơ', oilType: 'Mỡ Lithium EP2 / MP2 đa dụng bảo dưỡng', vg: 'NLGI 2' },
                  { device: 'Lò nhiệt >150°C', oilType: 'Mỡ Polyurea siêu nhiệt độ cao hãm lỏng tốt', vg: 'NLGI 1.5 - 2' }
                ].map((row, idx) => (
                  <tr 
                    key={idx} 
                    onClick={() => handleQuickSelect(row.device)}
                    className="hover:bg-gold/10 transition-colors duration-200 cursor-pointer border-b border-white/5"
                  >
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {row.device}
                    </td>
                    <td className="py-3.5 px-4 text-gray-300 italic">{row.oilType}</td>
                    <td className="py-3.5 px-4 font-mono text-gold font-semibold">{row.vg}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[10px] text-gold uppercase tracking-widest bg-gold/15 px-2.5 py-1 rounded-sm border border-gold/30 hover:bg-gold hover:text-white transition-all duration-300">
                        Áp Dụng Lọc
                        <ChevronRight size={10} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ADVANCED FILTER BOX SECTION */}
      <div id="lubricants-products-anchor" className="container mx-auto px-4 md:px-12 mb-8">
        <div className="bg-[#0D1F3C] border border-white/10 rounded-lg p-6 shadow-lg">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 border-b border-white/5 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 text-gold rounded-md">
                <Filter className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">Hệ Thống Lọc Nâng Cao (Smart Lubricants Filter)</h3>
                <p className="text-xs text-gray-400">Kết hợp đa chỉ số thông số kỹ thuật chuẩn quốc tế để tìm đúng chủng loại</p>
              </div>
            </div>

            {/* Quick reset button */}
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#0A1628] hover:bg-gold hover:text-[#0A1628] border border-white/15 hover:border-gold text-xs font-bold uppercase tracking-widest text-gold rounded transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw size={13} />
              Reset Bộ Lọc
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            
            {/* 1. Text Search Input */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col justify-end">
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Nội dung Tìm kiếm nhanh</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tên, tiêu chuẩn (CI-4, CLP...), phụ gia..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-4 py-2 text-xs focus:outline-none placeholder-gray-500 font-medium pl-9 transition-colors"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* 2. Group Filter */}
            <div>
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Nhóm Sản Phẩm</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {LUBRICANTS_DATA.filters.by_group.map((grp, idx) => (
                  <option key={idx} value={grp}>{grp}</option>
                ))}
              </select>
            </div>

            {/* 3. Brand Filter */}
            <div>
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Hãng Sản Xuất</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {LUBRICANTS_DATA.filters.by_brand.map((brnd, idx) => (
                  <option key={idx} value={brnd}>{brnd}</option>
                ))}
              </select>
            </div>

            {/* 4. Viscosity Filter */}
            <div>
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Độ nhớt ISO VG / SAE</label>
              <select
                value={selectedViscosity}
                onChange={(e) => setSelectedViscosity(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {LUBRICANTS_DATA.filters.by_viscosity.map((vis, idx) => (
                  <option key={idx} value={vis}>{vis}</option>
                ))}
              </select>
            </div>

            {/* 5. OEM Compatibility Filter */}
            <div>
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Hãng thiết bị (OEM Spec)</label>
              <select
                value={selectedOem}
                onChange={(e) => setSelectedOem(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {oemOptions.map((opt, idx) => (
                  <option key={idx} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* 6. Application Filter */}
            <div>
              <label className="text-xs text-gold font-bold uppercase tracking-widest mb-1.5 block">Vùng Ứng dụng bôi trơn</label>
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded-sm px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {LUBRICANTS_DATA.filters.by_application.map((app, idx) => (
                  <option key={idx} value={app}>{app}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Counts Info */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5 text-xs text-gray-400 font-medium">
            <div>
              Hiển thị: <span className="text-white font-bold">{filteredProducts.length}</span> / {LUBRICANTS_DATA.products.length} sản phẩm bôi trơn cao cấp
            </div>
            {searchTerm || selectedGroup !== 'Tất cả' || selectedBrand !== 'Tất cả' || selectedViscosity !== 'Tất cả' || selectedApplication !== 'Tất cả' || selectedOem !== 'Tất cả' ? (
              <div className="text-[#B8860B] bg-[#B8860B]/10 px-3 py-1 rounded border border-gold/30">
                Đang kích hoạt bộ lọc chéo thông minh
              </div>
            ) : null}
          </div>

        </div>
      </div>

      {/* PRIMARY TAB SYSTEM SETUP */}
      <div className="container mx-auto px-4 md:px-12 mb-8">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {[
            { id: 4, name: 'TẤT CẢ SẢN PHẨM', color: '#B8860B', icon: <Sparkles className="w-4 h-4" /> },
            { id: 1, name: 'DẦU BÔI TRƠN (Oil)', color: '#D4A017', icon: <Droplets className="w-4 h-4" /> },
            { id: 2, name: 'MỠ BÔI TRƠN (Grease)', color: '#2B6CB0', icon: <Settings className="w-4 h-4" /> },
            { id: 3, name: 'CHUYÊN DỤNG (Specialty)', color: '#B8860B', icon: <Shield className="w-4 h-4" /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 rounded transition-all duration-300 transform leading-none cursor-pointer border ${
                  isActive 
                    ? `bg-[#0D1F3C] text-white shadow-lg scale-105 border-gold` 
                    : 'bg-[#0D1F3C]/40 text-gray-400 hover:text-white border-white/5 hover:bg-[#0D1F3C]/70'
                }`}
              >
                <span style={{ color: isActive ? tab.color : '#A0AEC0' }}>
                  {tab.icon}
                </span>
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS DISPLAY GRID */}
      <div className="container mx-auto px-4 md:px-12 min-h-[400px]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0D1F3C]/40 border border-white/5 rounded-lg max-w-lg mx-auto px-6">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Không tìm thấy sản phẩm bôi trơn phù hợp</h4>
            <p className="text-xs text-gray-400 mb-6">Không tìm thấy dòng dầu hoặc mỡ đáp ứng toàn bộ các thông số lọc kỹ thuật này. Quý khách vui lòng điều chỉnh bộ lọc hoặc nhấp nút Đặt thiết lập bên dưới.</p>
            <button 
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#0D1F3C] hover:bg-gold hover:text-[#0A1628] border border-gold text-xs font-bold uppercase tracking-widest text-[#B8860B] rounded-sm transition-colors cursor-pointer"
            >
              Reset Lại Bộ Lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => {
              const specBadges = getSpecialBadges(prod);
              const isComparing = compareList.some(item => item.id === prod.id);

              return (
                <motion.div
                  key={prod.id}
                  layoutId={`lubricant-card-${prod.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0D1F3C] border border-white/10 hover:border-gold rounded-lg p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-gold/20 hover:shadow-lg relative"
                >
                  
                  {/* Top line of card containing Icon & Compare Action */}
                  <div className="flex items-start justify-between mb-4">
                    {renderProductIcon(prod.group)}
                    
                    <button
                      onClick={() => handleToggleCompare(prod)}
                      className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                        isComparing 
                          ? 'bg-gold text-[#0A1628]' 
                          : 'bg-[#0A1628] text-gray-400 hover:text-gold border border-white/10'
                      }`}
                    >
                      <Scale size={11} />
                      {isComparing ? 'Đang So Sánh' : 'So Sánh'}
                    </button>
                  </div>

                  {/* Main Product Info */}
                  <div className="mb-4">
                    
                    {/* Catalog Group Badge */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-[10px] font-extrabold text-[#B8860B] uppercase tracking-widest bg-gold/10 px-2.5 py-1 rounded">
                        {prod.group}
                      </span>
                    </div>

                    {/* Highly descriptive attributes badge stack */}
                    {specBadges.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {specBadges.map((badge, bIdx) => (
                          <span 
                            key={bIdx} 
                            style={{ backgroundColor: badge.color + '18', color: badge.color, borderColor: badge.color + '40' }}
                            className="inline-flex items-center text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border"
                          >
                            {badge.icon}
                            {badge.text}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Product Name italic & bold */}
                    <h4 className="text-lg font-bold font-display italic text-white line-clamp-2 md:group-hover:text-gold transition-colors duration-200">
                      {prod.name}
                    </h4>

                    {/* Divider */}
                    <div className="h-[1px] bg-white/5 my-3" />

                    {/* Display of corresponding brands and specific product lines of each brand */}
                    <div className="mb-3 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Hệ sản phẩm tương đương nhập khẩu:</div>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {Object.entries(prod.brands).map(([brandName, prodLine]) => (
                          <div key={brandName} className="bg-[#0A1628] rounded px-2.5 py-1.5 border border-white/5 flex flex-col justify-center">
                            <span className="text-[9px] font-bold text-[#D4A017] uppercase tracking-widest leading-none mb-0.5">{brandName}</span>
                            <span className="text-white text-[11px] font-semibold tracking-wide truncate leading-tight" title={prodLine}>{prodLine}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="space-y-1.5 text-xs text-gray-300 font-medium">
                      {prod.viscosity && (
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">Độ nhớt chính:</span>
                          <span className="font-mono text-white text-[11px] font-bold">{prod.viscosity}</span>
                        </div>
                      )}
                      
                      {prod.base_oil_viscosity && (
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">Nhớt gốc mỡ (Base Oil Vis):</span>
                          <span className="font-mono text-white text-[11px] font-bold">{prod.base_oil_viscosity}</span>
                        </div>
                      )}

                      {prod.thickener && (
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">Chất làm đặc (Thickener):</span>
                          <span className="text-white text-[11px]">{prod.thickener}</span>
                        </div>
                      )}

                      {prod.nlgi_grade && (
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">Cấp đặc mỡ (NLGI):</span>
                          <span className="font-mono text-white text-[11px] font-bold bg-[#3182CE]/10 text-cyan-400 px-1 rounded">{prod.nlgi_grade}</span>
                        </div>
                      )}

                      {prod.temp_range && (
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span className="text-gray-400">Nhiệt độ công tác:</span>
                          <span className="text-yellow-400 text-[11px] font-bold">{prod.temp_range}</span>
                        </div>
                      )}
                    </div>

                    {/* Change Interval / Relubrication Warning (GOLD HIGHLIGHT) */}
                    {(prod.change_interval || prod.relubrication_interval) && (
                      <div className="mt-3 bg-yellow-400/10 border border-yellow-400/20 rounded p-2 text-center text-[11px]">
                        <span className="text-gray-400 block tracking-wide uppercase text-[9px] font-bold">Chu Kỳ Thay Dầu / Bổ sung khuyến nghị:</span>
                        <span className="text-gold font-bold">
                          {typeof prod.change_interval === 'object' 
                            ? `Khoáng: ${prod.change_interval.mineral} / Tổng hợp: ${prod.change_interval.synthetic}` 
                            : (prod.change_interval || prod.relubrication_interval)}
                        </span>
                      </div>
                    )}

                    {/* Application Short Preview */}
                    <div className="mt-3 text-xs bg-[#0A1628]/40 p-2.5 rounded text-gray-400 line-clamp-2" title={prod.applications}>
                      <strong className="text-white">Ứng dụng chính:</strong> {prod.applications}
                    </div>

                    {/* Warning Note Technical */}
                    {prod.note && (
                      <div className="mt-2.5 flex items-start gap-2 text-[10px] text-gray-400 bg-red-500/5 p-2 rounded border border-red-500/10 hover:bg-red-500/10 transition-colors">
                        <AlertTriangle size={13} className="text-[#DD6B20] shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-tight">{prod.note.replace('⚠', '').trim()}</span>
                      </div>
                    )}

                  </div>

                  {/* Pricing / Stock Info and Actions */}
                  <div className="mt-auto pt-3 border-t border-white/5">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-400">Trạng thái:</span>
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        prod.status === 'Còn hàng' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                        {prod.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDetailProduct(prod)}
                        className="px-3 py-2 bg-[#0A1628] hover:bg-white/10 text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded transition-colors cursor-pointer flex items-center justify-center gap-1"
                      >
                        <Eye size={12} />
                        Chi Tiết
                      </button>

                      <button
                        onClick={() => setInquiryProduct(prod)}
                        className="px-3 py-2 bg-gold hover:bg-gold/90 text-[#0A1628] text-[10px] font-black uppercase tracking-widest rounded transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        <MessageSquare size={12} />
                        Báo Giá
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* COMPARISON BAR DRAWER FLOATING IF ITEMS DETECTED */}
      <AnimatePresence>
        {showCompareDrawer && compareList.length > 0 && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D1F3C] border-t-2 border-gold py-4 px-6 shadow-2xl backdrop-blur-md"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Scale className="text-gold w-4 h-4" />
                  So Sánh Sản Phẩm Bôi Trơn Đã Chọn ({compareList.length}/3)
                </h5>
                <p className="text-xs text-gray-400">Đối chiếu trực tiếp thông số nhớt, gốc mỡ, nhiệt độ...</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {compareList.map(item => (
                  <div key={item.id} className="bg-[#0A1628] rounded-md px-3 py-2 border border-white/10 flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="font-semibold text-white max-w-[120px] md:max-w-[200px] truncate">{item.name}</span>
                    <button 
                      onClick={() => handleRemoveCompare(item.id)}
                      className="text-gray-400 hover:text-red-400 font-bold ml-1 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCompareList([])}
                  className="px-4 py-2 bg-[#0A1628] hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-widest rounded transition-colors cursor-pointer"
                >
                  Xóa Hết
                </button>
                <button
                  onClick={() => {
                    // Open a comparative modal containing details side by side
                    if (compareList.length > 0) {
                      setDetailProduct(compareList[0]); // fallback or handle specific pop-up behavior
                      alert('Quý khách kiểm tra so sánh chi tiết: ' + compareList.map(i=>i.name).join(' vs '));
                    }
                  }}
                  className="px-5 py-2 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-colors cursor-pointer"
                >
                  So Sánh Trực Quan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 27. TECH DETAIL PRODUCT MODAL DIALOG */}
      <AnimatePresence>
        {detailProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailProduct(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold/40 rounded-lg max-w-2xl w-full p-6 md:p-8 shadow-2xl relative z-10 text-gray-200"
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setDetailProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-extrabold text-[#B8860B] uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-sm border border-gold/30">
                  {detailProduct.group}
                </span>
                {detailProduct.status === 'Còn hàng' ? (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Còn hàng</span>
                ) : (
                  <span className="text-[10px] font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">Liên hệ báo giá</span>
                )}
              </div>

              <h3 className="text-2xl font-bold font-display italic text-white mb-4 pr-6">
                {detailProduct.name}
              </h3>

              <div className="h-[1px] bg-white/10 my-4" />

              {/* Grid Layout Detail Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                <div>
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5">Thông Số Kỹ Thuật Đã Kiểm Định</h4>
                  <div className="space-y-2 text-xs bg-[#0A1628] p-4 rounded-md border border-white/5 font-medium">
                    {detailProduct.viscosity && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Độ nhớt chuẩn:</span>
                        <span className="font-mono text-white font-bold">{detailProduct.viscosity}</span>
                      </div>
                    )}
                    {detailProduct.base_oil_viscosity && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Gốc dầu nhớt rộng:</span>
                        <span className="font-mono text-white font-bold">{detailProduct.base_oil_viscosity}</span>
                      </div>
                    )}
                    {detailProduct.thickener && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Chất đông đặc đặc bám:</span>
                        <span className="text-white">{detailProduct.thickener}</span>
                      </div>
                    )}
                    {detailProduct.nlgi_grade && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Độ đặc mỡ NLGI:</span>
                        <span className="font-mono text-white font-bold">{detailProduct.nlgi_grade}</span>
                      </div>
                    )}
                    {detailProduct.temp_range && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Nhiệt độ vận hành:</span>
                        <span className="text-yellow-400 font-bold">{detailProduct.temp_range}</span>
                      </div>
                    )}
                    {detailProduct.base_oil && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Cơ sở dầu gốc:</span>
                        <span className="text-sky-300 font-semibold">{detailProduct.base_oil}</span>
                      </div>
                    )}
                    {detailProduct.additive && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Phụ gia đặc dụng:</span>
                        <span className="text-emerald-400">{detailProduct.additive}</span>
                      </div>
                    )}
                    {detailProduct.packaging && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Quy cách đóng gói:</span>
                        <span className="text-white">{detailProduct.packaging}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5">Trình Khớp Tương Đương Phân Phối</h4>
                  <div className="space-y-1 bg-[#0A1628] p-4 rounded-md border border-white/5 text-xs">
                    {Object.entries(detailProduct.brands).map(([brandName, prodLine]) => (
                      <div key={brandName} className="flex justify-between items-center py-1.5 border-b border-white/5">
                        <span className="text-gold font-bold uppercase tracking-widest text-[10px]">{brandName}:</span>
                        <span className="font-semibold text-white">{prodLine}</span>
                      </div>
                    ))}
                  </div>

                  {detailProduct.standards && (
                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Tiếu Chuẩn Quốc Tế Thừa Nhận</h4>
                      <div className="flex flex-wrap gap-1">
                        {detailProduct.standards.map((std, idx) => (
                          <span key={idx} className="bg-white/5 px-2 py-1 rounded text-[10px] font-mono border border-white/10 text-white">
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Features Lists */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Đặc Tính Kỹ thuật & Hiệu năng</h4>
                <ul className="text-xs text-gray-300 space-y-1.5">
                  {detailProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-emerald-400 shrink-0 mt-0.5 w-3.5 h-3.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Details */}
              <div className="mb-4 bg-[#0A1628]/50 p-3 rounded-md border border-white/5 text-xs">
                <strong className="text-white block mb-0.5">Phạm vi chỉ định ứng dụng:</strong>
                <p className="text-gray-300 font-medium">{detailProduct.applications}</p>
              </div>

              {/* Warning technical notes display */}
              {detailProduct.note && (
                <div className="mb-6 flex gap-2.5 text-xs bg-red-500/10 border border-red-500/20 p-3.5 rounded">
                  <AlertTriangle className="text-[#DD6B20] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Cảnh báo kỹ thuật vô cùng quan trọng:</strong>
                    <span className="text-gray-300">{detailProduct.note.replace('⚠', '').trim()}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-3 justify-end pt-4 border-t border-white/10">
                <button
                  onClick={() => setDetailProduct(null)}
                  className="px-5 py-2.5 bg-[#0A1628] hover:bg-white/5 text-white border border-white/10 text-xs font-bold uppercase tracking-widest rounded transition-colors cursor-pointer"
                >
                  Đóng Lại
                </button>
                <button
                  onClick={() => {
                    setInquiryProduct(detailProduct);
                    setDetailProduct(null);
                  }}
                  className="px-6 py-2.5 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-transform cursor-pointer"
                >
                  Yêu Cầu Báo Giá Ngay
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* INQUIRY MODAL POP-UP */}
      <AnimatePresence>
        {inquiryProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInquiryProduct(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold rounded-lg max-w-md w-full p-6 shadow-2xl relative z-10 text-gray-200"
            >
              
              <button
                onClick={() => setInquiryProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <Droplets className="w-10 h-10 text-gold mx-auto mb-2 animate-bounce" />
                <h4 className="text-lg font-bold text-white font-display uppercase tracking-wider">Phiếu Yêu Cầu Báo Giá Kỹ Thuật</h4>
                <p className="text-xs text-gray-400 mt-1">Gửi trực tiếp đến kỹ thuật viên chuyên trách mảng Dầu mỡ Hoàng Gia Khang</p>
              </div>

              {inquirySuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-3 animate-pulse" />
                  <h4 className="text-base font-bold text-white mb-2">Đăng Ký Thành Công!</h4>
                  <p className="text-xs text-gray-400 px-4">Yêu cầu báo giá dầu mỡ bôi trơn của Quý khách đã gửi thành công. Đội ngũ chuyên gia kỹ thuật bôi trơn sẽ liên lạc trực tiếp tư vấn trong vòng 15-30 phút.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  
                  {/* Selected Product Banner inside form */}
                  <div className="bg-[#0A1628] p-3 rounded border border-white/5 font-medium">
                    <span className="text-[9px] text-gold uppercase font-bold tracking-widest block mb-0.5">Sản phẩm yêu cầu báo giá:</span>
                    <span className="text-white text-xs block font-bold italic">{inquiryProduct.name}</span>
                    <span className="text-gray-400 block text-[10px] mt-1">Phân vị nhập khẩu chính tương thích: {Object.values(inquiryProduct.brands).join(' / ')}</span>
                  </div>

                  <div>
                    <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Họ tên Quý khách (Bắt buộc)</label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Nguyễn Văn A"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Số điện thoại (Bắt buộc)</label>
                      <input
                        type="tel"
                        required
                        placeholder="VD: 0987xxxxxx"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Email liên lạc</label>
                      <input
                        type="email"
                        placeholder="VD: partner@company.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Tên quý doanh nghiệp</label>
                      <input
                        type="text"
                        placeholder="VD: Cơ khí chế tạo miền Nam"
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({...inquiryForm, company: e.target.value})}
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Sản lượng dự kiến mua</label>
                      <select
                        value={inquiryForm.quantity}
                        onChange={(e) => setInquiryForm({...inquiryForm, quantity: e.target.value})}
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none font-medium text-xs cursor-pointer"
                      >
                        <option value="1 Phuy / Thùng">Mua thử nghiệm 1 Phuy / Thùng</option>
                        <option value="5 - 10 Phuy / Thùng">Mua định kỳ 5 - 10 Phuy / Thùng</option>
                        <option value="Số lượng lớn (>15 Phuy)">Số lượng lớn (&gt;15 Phuy)</option>
                        <option value="Chưa xác định, cần tư vấn spec máy">Cần tư vấn spec máy trước</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 font-bold mb-1 uppercase tracking-wider">Ghi chú yêu cầu kỹ thuật chi tiết</label>
                    <textarea
                      rows={2}
                      placeholder="VD: Cần dầu mỡ chịu nổi hóa chất tẩy xà phòng, sấy tiệt trùng hằng ngày..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-gold hover:bg-gold/90 text-[#0A1628] rounded font-black uppercase tracking-widest text-xs transition-colors shadow cursor-pointer text-center"
                    >
                      Xác Nhận Đăng Ký Nhận Báo Giá
                    </button>
                    <p className="text-[10px] text-gray-500 text-center mt-2.5">Hoàng Gia Khang cam kết bảo mật 100% dữ liệu doanh nghiệp của Quý khách theo chuẩn Nghị định 13/2023/NĐ-CP.</p>
                  </div>

                </form>
              )}

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
