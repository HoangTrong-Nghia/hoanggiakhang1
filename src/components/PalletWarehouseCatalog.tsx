import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  Trash2, 
  Layers, 
  Percent, 
  Search, 
  RotateCcw, 
  AlertTriangle, 
  Info, 
  Check, 
  X, 
  ChevronRight, 
  Eye, 
  MessageSquare,
  Scale,
  Settings,
  ShieldAlert,
  Compass,
  Calculator,
  Container,
  Bookmark,
  Sparkles,
  RefreshCw,
  Coins,
  FileSpreadsheet,
  Gauge,
  HelpCircle,
  TrendingUp,
  Truck
} from 'lucide-react';
import { PALLET_WAREHOUSE_DATA, PalletProduct } from '../palletWarehouseData';

export function PalletWarehouseCatalog() {
  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Tất cả');
  const [selectedSize, setSelectedSize] = useState('Tất cả');
  const [selectedLoad, setSelectedLoad] = useState('Tất cả');
  const [selectedCondition, setSelectedCondition] = useState('Tất cả');
  const [selectedEntry, setSelectedEntry] = useState('Tất cả');
  
  // Tab control
  // 1: PALLET NHỰA, 2: PALLET GỖ, 3: PALLET SẮT, 4: PALLET GIẤY, 5: PHỤ KIỆN & DỊCH VỤ, 6: Tất cả
  const [activeTab, setActiveTab] = useState<number>(6);

  // Compare System (max 3 items)
  const [compareItems, setCompareItems] = useState<PalletProduct[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Detail Modal item
  const [detailItem, setDetailItem] = useState<PalletProduct | null>(null);

  // Inquiry form target
  const [inquiryItem, setInquiryItem] = useState<PalletProduct | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    quantity: '100 cái (Đơn giá sỉ)',
    requirements: '',
    agreeToCallback: true
  });
  const [showInquirySuccess, setShowInquirySuccess] = useState(false);

  // Calculator Widget State
  const [calcArea, setCalcArea] = useState<number>(300);
  const [calcLayers, setCalcLayers] = useState<number>(3);
  const [calcEfficiency, setCalcEfficiency] = useState<number>(65); // % floor occupancy efficiency
  const [calcResult, setCalcResult] = useState<{
    palletCount: number;
    footprintArea: number;
    recommendedType: string;
  } | null>(null);

  // Function to calculate pallet estimate
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (calcArea <= 0 || calcLayers <= 0) {
      alert('Vui lòng cung cấp diện tích mặt sàn thực tế và số tầng xếp chồng dương.');
      return;
    }

    // Standard pallet covers roughly 1.2m * 1.0m = 1.2 m2 of footprint space.
    // Floor usage efficiency multiplier
    const effectiveArea = calcArea * (calcEfficiency / 100);
    const standardPalletArea = 1.2;
    const palletsPerFloor = Math.floor(effectiveArea / standardPalletArea);
    const totalPalletsProposed = palletsPerFloor * calcLayers;

    let recommendation = "Pallet Nhựa Mặt Phẳng (Nhiều hàng lót tốt, tải thăng bằng)";
    if (calcLayers >= 4) {
      recommendation = "Pallet Nhựa Siêu Tải gia cường Lõi Thép (Phù hợp xếp chồng tháp cao chấn)";
    } else if (calcArea < 100) {
      recommendation = "Pallet Gỗ hoặc Giấy Tổ Ong (Nhẹ tiện cơ động cho nhà kho hẹp)";
    }

    setCalcResult({
      palletCount: totalPalletsProposed,
      footprintArea: Number((palletsPerFloor * standardPalletArea).toFixed(1)),
      recommendedType: recommendation
    });
  };

  const handleQuickSelectTable = (groupName: string, tabId: number) => {
    setSelectedGroup(groupName);
    setActiveTab(tabId);
    const el = document.getElementById('pallet-grid-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedGroup('Tất cả');
    setSelectedSize('Tất cả');
    setSelectedLoad('Tất cả');
    setSelectedCondition('Tất cả');
    setSelectedEntry('Tất cả');
    setActiveTab(6);
  };

  // Main multi-filter engine logic
  const filteredProducts = useMemo(() => {
    return PALLET_WAREHOUSE_DATA.products.filter(item => {
      // 1. Check primary tab configuration constraints
      if (activeTab === 1) {
        // Plastis: "Pallet nhựa mới", "Pallet nhựa cũ"
        if (item.group !== "Pallet nhựa mới" && item.group !== "Pallet nhựa cũ") {
          return false;
        }
      } else if (activeTab === 2) {
        // Wood: "Pallet gỗ mới", "Pallet gỗ cũ"
        if (item.group !== "Pallet gỗ mới" && item.group !== "Pallet gỗ cũ") {
          return false;
        }
      } else if (activeTab === 3) {
        // Iron / Steel
        if (item.group !== "Pallet sắt / thép") {
          return false;
        }
      } else if (activeTab === 4) {
        // Paper
        if (item.group !== "Pallet giấy tổ ong") {
          return false;
        }
      } else if (activeTab === 5) {
        // Accessories and Services: "Phụ kiện pallet", "Dịch vụ"
        if (item.group !== "Phụ kiện pallet" && item.group !== "Dịch vụ") {
          return false;
        }
      }

      // 2. Select Group filter dropdown check
      if (selectedGroup !== 'Tất cả' && item.group !== selectedGroup) {
        return false;
      }

      // 3. Size Filter Mapping check
      if (selectedSize !== 'Tất cả') {
        const sizesArr = Array.isArray(item.size) ? item.size : item.size ? [item.size] : [];
        const matchesSize = sizesArr.some(sz => {
          const s = sz.toLowerCase();
          if (selectedSize === "1200 x 1000 mm (Euro)" && s.includes("1200 x 1000")) return true;
          if (selectedSize === "1200 x 800 mm (Euro Small)" && s.includes("1200 x 800")) return true;
          if (selectedSize === "1100 x 1100 mm (Nhật)" && s.includes("1100 x 1100")) return true;
          if (selectedSize === "1200 x 1200 mm" && s.includes("1200 x 1200")) return true;
          if (selectedSize === "1000 x 1000 mm" && s.includes("1000 x 1000")) return true;
          if (selectedSize === "Kích thước khác / theo yêu cầu" && !s.includes("1200 x 1000") && !s.includes("1100 x 1100") && !s.includes("1200 x 1200")) return true;
          return false;
        });
        if (!matchesSize) return false;
      }

      // 4. Load filter matching
      if (selectedLoad !== 'Tất cả') {
        const staticText = (item.static_load || '').toLowerCase();
        const dynamicText = (item.dynamic_load || '').toLowerCase();
        
        let staticKg = 0;
        let dynamicKg = 0;

        // Parse weights briefly
        const parseKg = (txt: string) => {
          const match = txt.replace(/\./g, '').match(/(\d+)\s*kg/);
          return match ? parseInt(match[1]) : 0;
        };

        staticKg = parseKg(staticText);
        dynamicKg = parseKg(dynamicText);

        const currentMaxKg = Math.max(staticKg, dynamicKg);

        if (selectedLoad === "Tải nhẹ (≤ 500 kg)") {
          if (currentMaxKg > 500 && dynamicKg > 500) return false;
        } else if (selectedLoad === "Tải trung (500 - 1000 kg)") {
          if (dynamicKg > 1000 || (dynamicKg < 500 && staticKg < 500)) return false;
        } else if (selectedLoad === "Tải nặng (1000 - 2000 kg)") {
          if (dynamicKg > 2000 || (dynamicKg < 1000 && staticKg < 1000)) return false;
        } else if (selectedLoad === "Siêu tải (> 2000 kg)") {
          if (dynamicKg <= 2000 && staticKg <= 2000) return false;
        }
      }

      // 5. Condition Filter matching
      if (selectedCondition !== 'Tất cả') {
        const cond = item.condition.toLowerCase();
        if (selectedCondition === "Hàng mới 100%" && !cond.includes("mới")) return false;
        if (selectedCondition === "Hàng cũ tái sử dụng" && !cond.includes("cũ")) return false;
        if (selectedCondition === "Hàng tân trang (Reconditioned)" && !cond.includes("tân trang") && !cond.includes("reconditioned")) return false;
      }

      // 6. Entry Filter check
      if (selectedEntry !== 'Tất cả') {
        const currentEntry = (item.entry || '').toLowerCase();
        if (selectedEntry === "2 chiều (2-way)" && !currentEntry.includes("2 chiều") && !currentEntry.includes("2-way")) return false;
        if (selectedEntry === "4 chiều (4-way)" && !currentEntry.includes("4 chiều") && !currentEntry.includes("4-way")) return false;
      }

      // 7. General Text Search matching name, features, applications, note
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const mat = (item.material || '').toLowerCase();
        const apps = (item.applications || '').toLowerCase();
        const ispmText = (item.certifications || []).join(' ').toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchFeatures = item.features.some(f => f.toLowerCase().includes(q));
        const matchApps = apps.includes(q);
        const matchMat = mat.includes(q);
        const matchCert = ispmText.includes(q);

        if (!matchName && !matchFeatures && !matchApps && !matchMat && !matchCert) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedGroup, selectedSize, selectedLoad, selectedCondition, selectedEntry, activeTab]);

  // Handle compares selection
  const handleToggleCompare = (product: PalletProduct) => {
    const isAlreadySelected = compareItems.some(item => item.id === product.id);
    if (isAlreadySelected) {
      setCompareItems(compareItems.filter(item => item.id !== product.id));
    } else {
      if (compareItems.length >= 3) {
        alert('Quý khách chỉ so sánh được tối đa 3 sản phẩm pallet song song cùng lúc.');
        return;
      }
      setCompareItems([...compareItems, product]);
      setIsCompareOpen(true);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert('Quý khách vui lòng điền đầy đủ thông tin Tên và Số Điện Thoại liên lạc.');
      return;
    }

    const subject = `Yêu cầu báo giá Pallet gỗ/nhựa: ${inquiryItem ? inquiryItem.name : 'Pallet công nghiệp'}`;
    const body = `Họ tên khách hàng: ${inquiryForm.name}
Số điện thoại: ${inquiryForm.phone}
Thư điện tử: ${inquiryForm.email || 'N/A'}
Công ty: ${inquiryForm.company || 'N/A'}
Số lượng yêu cầu dải xuất: ${inquiryForm.quantity}

Nội dung yêu cầu chi tiết:
- Sản phẩm quan tâm: ${inquiryItem ? inquiryItem.name : 'Pallet công nghiệp'}
- Đặc thù quy cách chi tiết: ${inquiryForm.requirements || 'N/A'}`;

    window.location.href = `mailto:hoanggiakhangtrading@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setShowInquirySuccess(true);
    setTimeout(() => {
      setShowInquirySuccess(false);
      setInquiryItem(null);
      setInquiryForm({
        name: '',
        phone: '',
        email: '',
        company: '',
        quantity: '100 cái (Đơn giá sỉ)',
        requirements: '',
        agreeToCallback: true
      });
    }, 2500);
  };

  return (
    <div className="bg-[#0A1628] text-gray-200 py-12 rounded-lg border border-white/5 shadow-2xl relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute top-0 left-12 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-12 w-96 h-96 bg-amber-900/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="container mx-auto px-4 md:px-12 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest mb-4 border border-gold/30">
          <Container className="w-3.5 h-3.5 animate-pulse text-[#B8860B]" />
          Nhà Phân Phối Pallet & Cấu Trúc Kho Số 1 Miền Nam
        </div>
        <h2 className="text-4xl md:text-5xl font-display italic font-semibold text-white tracking-wide">
          DANH MỤC <span className="text-gold">PALLET - KỆ KHO & VẬT TƯ</span> BÃI
        </h2>
        <div className="h-0.5 w-24 bg-gold mx-auto mt-4 mb-4" />
        <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
          Sản xuất khép kín và cung ứng các giải pháp lưu kho luân chuyển hàng hóa toàn diện: từ Pallet nhựa đúc mới/cũ tái sinh, Pallet gỗ tràm keo sấy xông trùng ISPM 15, Pallet thép dập lưới nâng tải nặng cho đến hệ thống Pallet giấy tổ ong siêu nhẹ xuất khẩu máy bay quốc tế.
        </p>
      </div>

      {/* Used Pallet Buyback Banner */}
      <div className="container mx-auto px-4 md:px-12 mb-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#B8860B] to-[#D4A017] rounded-sm p-6 text-[#0A1628] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-white/20 rounded-full text-[#0A1628] shrink-0">
              <RefreshCw className="w-8 h-8 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display italic font-bold tracking-wide">
                ♻ CHÚNG TÔI THU MUA PALLET CŨ - NHỰA & GỖ TRÊN TOÀN QUỐC!
              </h3>
              <p className="text-sm font-semibold text-[#0A1628]/85 mt-1">
                Dịch vụ gom dọn kho phế liệu pallet bể vỡ hỏng nứt · Đóng giá cao theo tải cân hoặc cái · Thanh toán dứt điểm · Tự bốc xe cẩu chở đi gọn bãi.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const buybackProductMock: PalletProduct = {
                id: 99,
                group: "Dịch vụ",
                condition: "Cũ tái sử dụng",
                name: "Thanh Lý - Thu Hồi Pallet Nhựa Gỗ Vỡ Hỏng Bãi (Gói Đăng Ký Thu Gom)",
                status: "Liên hệ ngay",
                features: ["Thu gom tận nơi bằng xe tải cẩu", "Thanh toán ngay bằng tiền mặt hoặc chuyển khoản"]
              };
              setInquiryItem(buybackProductMock);
            }}
            className="px-6 py-3 bg-[#0A1628] hover:bg-[#0D1F3C] text-white border border-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-all duration-300 transform hover:scale-105 shrink-0 cursor-pointer shadow-md"
          >
            Liên hệ bán ngay
          </button>
        </motion.div>
      </div>

      {/* PALLET MATERIAL COMPARISON TABLE SECTION */}
      <div className="container mx-auto px-4 md:px-12 mb-10">
        <div className="bg-[#0D1F3C]/90 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
            <FileSpreadsheet className="w-5 h-5 text-gold" />
            <h3 className="text-lg font-medium text-white tracking-wider uppercase font-display">
              Bảng Đối Chiếu Ưu Nhược Điểm Các Chất Liệu Pallet Kho Bãi (Pallet Benchmark Matrix)
            </h3>
            <span className="ml-auto text-xs text-gold font-mono hidden md:inline">★ Trợ thủ đắc lực định vị ngân sách đầu tư kho</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead>
                <tr className="border-b border-white/15 bg-[#0A1628]/70 text-gold font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Tiêu Chí Khảo Sát</th>
                  <th className="py-3 px-4 text-[#3182CE]">Pallet Nhựa (Plastic)</th>
                  <th className="py-3 px-4 text-[#7B4F2E]">Pallet Gỗ (Wood)</th>
                  <th className="py-3 px-4 text-[#718096]">Pallet Sắt/Thép (Steel)</th>
                  <th className="py-3 px-3.5 text-[#D4A017]">Pallet Giấy (Paper)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {[
                  { criterion: 'Tuổi thọ sử dụng', plastic: '🔑 Rất bền (10-15 năm)', wood: 'Xoay vòng (3-5 năm)', steel: '💎 Siêu bền (15-20 năm)', paper: 'Sử dụng 1 lần (Xuất ngoại)' },
                  { criterion: 'Tải trọng gánh đỡ', plastic: 'Trung bình - Cao (1 - 1.5t)', wood: 'Trung bình (800 - 1200kg)', steel: '🔥 Cao nhất (2 - 5 tấn)', paper: 'Hàng nhẹ (≤ 500kg)' },
                  { criterion: 'Kiểm dịch ISPM 15', plastic: '✅ Miễn trừ hoàn toàn', wood: '❌ Bắt buộc xông trùng/hấp HT', steel: '✅ Miễn trừ hoàn toàn', paper: '✅ Miễn trừ hoàn toàn' },
                  { criterion: 'Hệ Kho lạnh đông', plastic: '🏆 Tốt nhất (Chống nứt dòn CO-PP)', wood: '⚠️ Kém (Đọng mốc ẩm thâm ván)', steel: 'Trung bình (Cần phủ kẽm nhúng)', paper: '❌ Rất kém (Mủn giấy rã mâm)' },
                  { criterion: 'Giá thành đầu tư', plastic: 'Cao (Hoàn vốn nhanh)', wood: 'Thấp (Dễ sửa đắp mộng tay)', steel: 'Rất cao (Sửa chữa hàn dễ)', paper: 'Rất thấp (Tách khối nhẹ)' },
                  { criterion: 'Thu hồi tái chế', plastic: '🔄 100% tái sinh (Hỗ trợ ESG)', wood: '✅ Làm củi đốt, dăm ép bóc', steel: '✅ Phế liệu nung lại luyện kim', paper: '🔄 100% rã tinh bột làm carton' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors duration-150">
                    <td className="py-3.5 px-4 font-bold text-white border-r border-white/5 bg-[#0D1F3C]/50">{row.criterion}</td>
                    <td 
                      onClick={() => handleQuickSelectTable('Pallet nhựa mới', 1)}
                      className="py-3.5 px-4 text-blue-300 hover:text-gold cursor-pointer italic font-semibold"
                    >
                      {row.plastic}
                    </td>
                    <td 
                      onClick={() => handleQuickSelectTable('Pallet gỗ mới', 2)}
                      className="py-3.5 px-4 text-[#C19A6B] hover:text-gold cursor-pointer italic"
                    >
                      {row.wood}
                    </td>
                    <td 
                      onClick={() => handleQuickSelectTable('Pallet sắt / thép', 3)}
                      className="py-3.5 px-4 text-gray-300 hover:text-gold cursor-pointer italic"
                    >
                      {row.steel}
                    </td>
                    <td 
                      onClick={() => handleQuickSelectTable('Pallet giấy tổ ong', 4)}
                      className="py-3.5 px-3.5 text-[#D4A017] hover:text-gold cursor-pointer italic"
                    >
                      {row.paper}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SMART WIDGET: QUANTITY PALLET CALCULATOR */}
      <div className="container mx-auto px-4 md:px-12 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0E1B30] border border-gold/20 rounded-lg p-6">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-gold font-bold text-xs uppercase tracking-widest">
                <Calculator className="w-4 h-4 animate-bounce" />
                Ứng Dụng Thuật Vật Tư
              </div>
              <h4 className="text-xl font-bold text-white font-display italic">BỘ TÍNH TOÁN SỐ LƯỢNG PALLET CẦN MUA TRONG KHO</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Nhập diện tích mặt sàn thực tế của nhà xưởng Quý khách cùng với kế hoạch xếp chồng tháp độ cao (số tầng). Thuật toán của chúng tôi sẽ ước tính sơ bộ lượng pallet cần xếp dựa trên thiết diện chuẩn 1200 x 1000 mm và hiệu suất chiếm tối ưu diện tích sàn xe nâng.
              </p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-[#B8860B] font-semibold italic">
              * Lưu ý: Kết quả trên dựa trên dầm phẳng xếp dở tiêu chuẩn. Liên hệ kỹ sư Hoàng Gia Khang vẽ layout CAD 3D kho để có số lượng chính xác nhất.
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end bg-[#0A1628] p-5 rounded border border-white/5">
              <div>
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1.5">Diện Tích Nhà Kho Thiết Kế (m²)</label>
                <input
                  type="number"
                  min="1"
                  value={calcArea}
                  onChange={(e) => setCalcArea(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-[#0D1F3C] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1.5">Chiều Cao Xếp Chồng (Số Tầng / Tấm)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={calcLayers}
                  onChange={(e) => setCalcLayers(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-[#0D1F3C] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1.5">Hiệu Suất Diện Tích Thực Dùng (%)</label>
                <select
                  value={calcEfficiency}
                  onChange={(e) => setCalcEfficiency(parseInt(e.target.value))}
                  className="w-full bg-[#0D1F3C] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none cursor-pointer"
                >
                  <option value={50}>50% (Kho nhiều lối đi thưa)</option>
                  <option value={65}>65% (Tiêu chuẩn tối ưu vừa nâng vừa đi)</option>
                  <option value={80}>80% (Hệ Drive-in Racking kịch khung)</option>
                </select>
              </div>

              <div className="sm:col-span-3 mt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Gauge size={13} />
                  Tính Toán Dự Toán Ngay
                </button>
              </div>
            </form>

            {/* Display Calculator Result */}
            {calcResult && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-gold/10 border border-gold/40 rounded flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div>
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Ước tính vật tư sơ bộ kho:</div>
                  <div className="text-white font-display text-lg md:text-xl font-black italic mt-1 leading-none">
                    Cần mua khoảng: <span className="text-yellow-400 font-mono text-2xl">{calcResult.palletCount}</span> Cái Pallet
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    Diện tích sàn hữu dụng bị phủ: <span className="font-mono text-white font-semibold">{calcResult.footprintArea} m²</span> (Chừa lối đi)
                  </div>
                </div>

                <div className="text-right sm:border-l border-white/10 sm:pl-4">
                  <span className="text-gray-400 block text-[9px] font-bold uppercase tracking-widest">Loại khuyên dùng tối ưu:</span>
                  <span className="text-gold font-bold text-xs sm:text-sm">{calcResult.recommendedType}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH AND MULTI-FILTER DROPDOWNS BAR */}
      <div id="pallet-grid-anchor" className="container mx-auto px-4 md:px-12 mb-8">
        <div className="bg-[#0D1F3C] border border-white/10 rounded-lg p-6 shadow-lg">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 border-b border-white/5 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 text-gold rounded-md">
                <Box className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">Lọc Tìm Kiếm Chéo Pallet Dày Bản</h3>
                <p className="text-xs text-gray-400">Thiết lập đa chiều để hiển thị chính xác mác tải và kích thước</p>
              </div>
            </div>

            <button
              onClick={resetAllFilters}
              className="px-4 py-2 bg-[#0A1628] hover:bg-gold hover:text-[#0A1628] border border-white/15 hover:border-gold text-xs font-bold uppercase tracking-widest text-gold rounded transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw size={13} />
              Reset Bộ Lọc
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* SEARCH INPUT */}
            <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col justify-end">
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Nội dung từ khóa tìm</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập tên, chất liệu (Keo, HDPE, CT3...), chuẩn ISPM 15..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-4 py-2 text-xs focus:outline-none placeholder-gray-500 font-medium pl-9 transition-colors"
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

            {/* SIZE FILTER */}
            <div>
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Kích Thước Khung</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {PALLET_WAREHOUSE_DATA.filters.by_size.map((sz, idx) => (
                  <option key={idx} value={sz}>{sz}</option>
                ))}
              </select>
            </div>

            {/* LOAD LIMIT FILTER */}
            <div>
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Mức Tải Trọng Đỡ</label>
              <select
                value={selectedLoad}
                onChange={(e) => setSelectedLoad(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {PALLET_WAREHOUSE_DATA.filters.by_load.map((ld, idx) => (
                  <option key={idx} value={ld}>{ld}</option>
                ))}
              </select>
            </div>

            {/* CONDITION FILTER */}
            <div>
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Tình Trạng Hàng</label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {PALLET_WAREHOUSE_DATA.filters.by_condition.map((cd, idx) => (
                  <option key={idx} value={cd}>{cd}</option>
                ))}
              </select>
            </div>

            {/* SHOT GROUP ENTRY */}
            <div>
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Nhân Bản Gốc/Hãng</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {PALLET_WAREHOUSE_DATA.filters.by_group.map((grp, idx) => (
                  <option key={idx} value={grp}>{grp}</option>
                ))}
              </select>
            </div>

            {/* ENTRY CHECKS */}
            <div>
              <label className="text-[10px] text-gold font-bold uppercase tracking-widest mb-1.5 block">Càng Luồn Nâng</label>
              <select
                value={selectedEntry}
                onChange={(e) => setSelectedEntry(e.target.value)}
                className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none font-medium cursor-pointer"
              >
                {PALLET_WAREHOUSE_DATA.filters.by_entry.map((ent, idx) => (
                  <option key={idx} value={ent}>{ent}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Counts Info bar */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5 text-xs text-gray-400 font-medium">
            <div>
              Tìm thấy: <span className="text-white font-bold">{filteredProducts.length}</span> / {PALLET_WAREHOUSE_DATA.products.length} chủng loại vật tư
            </div>
            {searchTerm || selectedGroup !== 'Tất cả' || selectedSize !== 'Tất cả' || selectedLoad !== 'Tất cả' || selectedCondition !== 'Tất cả' || selectedEntry !== 'Tất cả' ? (
              <div className="text-[#B8860B] bg-[#B8860B]/10 px-3 py-1 rounded border border-gold/30">
                Lọc nén đa năng kích hoạt
              </div>
            ) : null}
          </div>

        </div>
      </div>

      {/* 6 LOGISTICAL STRATEGIC TABS COMPILATION */}
      <div className="container mx-auto px-4 md:px-12 mb-8">
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          {[
            { id: 6, name: 'TẤT CẢ VẬT TƯ', color: '#B8860B', icon: <Sparkles className="w-4 h-4" /> },
            { id: 1, name: 'PALLET NHỰA (Plastic)', color: '#3182CE', icon: <Box className="w-4 h-4 text-[#3182CE]" /> },
            { id: 2, name: 'PALLET GỖ (Wooden)', color: '#C19A6B', icon: <Layers className="w-4 h-4 text-[#C19A6B]" /> },
            { id: 3, name: 'PALLET SẮT/THÉP (Iron)', color: '#718096', icon: <Settings className="w-4 h-4 text-[#718096]" /> },
            { id: 4, name: 'PALLET GIẤY (Paper)', color: '#D4A017', icon: <Container className="w-4 h-4 text-[#D4A017]" /> },
            { id: 5, name: 'PHỤ KIỆN & DỊCH VỤ', color: '#B8860B', icon: <Truck className="w-4 h-4" /> }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById('pallet-grid-anchor');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-4.5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 rounded transition-all duration-300 transform leading-none cursor-pointer border ${
                  isActive 
                    ? `bg-[#0D1F3C] text-white shadow-lg scale-105 border-gold` 
                    : 'bg-[#0D1F3C]/40 text-gray-400 hover:text-white border-white/5 hover:bg-[#0D1F3C]/70'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* RENDER PRODUCTS GRID */}
      <div className="container mx-auto px-4 md:px-12 min-h-[400px]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#0D1F3C]/40 border border-white/5 rounded-lg max-w-lg mx-auto px-6">
            <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Xin lỗi, không có pallet nào đáp ứng các bước lọc</h4>
            <p className="text-xs text-gray-400 mb-6">Xin hãy giảm bớt các cài đặt ràng buộc tải trọng hoặc thay đổi kích thước lọc để tìm kiếm rộng hơn.</p>
            <button 
              onClick={resetAllFilters}
              className="px-6 py-2.5 bg-[#0D1F3C] hover:bg-gold hover:text-[#0A1628] border border-gold text-xs font-bold uppercase tracking-widest text-[#B8860B] rounded transition-colors cursor-pointer"
            >
              Xem tất cả danh mục
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => {
              const isComparing = compareItems.some(i => i.id === prod.id);

              return (
                <motion.div
                  key={prod.id}
                  layoutId={`pallet-card-${prod.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0D1F3C] border border-white/10 hover:border-gold rounded-lg p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-gold/20 hover:shadow-lg relative"
                >
                  
                  {/* Decorative corner tag for bulk price if quantity target matches */}
                  {prod.id !== 99 && prod.group.includes("mới") && (
                    <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none rounded-tr-lg">
                      <div className="bg-[#B8860B]/20 text-[8px] font-black uppercase text-gold py-1 text-center translate-x-7 translate-y-4 rotate-45 border-b border-gold/30">
                        Giá Sỉ Đơn &gt;100
                      </div>
                    </div>
                  )}

                  {/* Header containing icon illustration and Compare button */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {/* Material Badge */}
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm border ${
                        prod.group.includes("nhựa") 
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                          : prod.group.includes("gỗ") 
                          ? "bg-[#C19A6B]/10 text-[#C19A6B] border-[#C19A6B]/20" 
                          : prod.group.includes("sắt") 
                          ? "bg-gray-400/10 text-gray-300 border-gray-400/20" 
                          : "bg-gold/10 text-gold border-gold/20"
                      }`}>
                        {prod.group.includes("nhựa") ? "NHỰA" : prod.group.includes("gỗ") ? "GỖ" : prod.group.includes("sắt") ? "SẮT / THÉP" : prod.group.includes("khí") ? "PHỤ TRỢ" : "GIẤY"}
                      </span>

                      {/* Condition Badge */}
                      <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm ${
                        prod.condition && prod.condition.includes("100") 
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" 
                          : prod.condition && prod.condition.includes("tân trang") 
                          ? "bg-orange-500/15 text-orange-400 border border-orange-500/25" 
                          : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"
                      }`}>
                        {prod.condition || "Xưởng Gá"}
                      </span>
                    </div>

                    <button
                      onClick={() => handleToggleCompare(prod)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                        isComparing 
                          ? 'bg-gold text-[#0A1628]' 
                          : 'bg-[#0A1628] text-gray-400 hover:text-gold border border-white/10'
                      }`}
                    >
                      <Scale size={11} />
                      {isComparing ? 'Đang So' : 'So Sánh'}
                    </button>
                  </div>

                  {/* Product Body Information */}
                  <div className="mb-4">
                    
                    {/* Small Category Badge label */}
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#B8860B] mb-1 font-bold">
                      {prod.group}
                    </div>

                    {/* Product Name italic bold */}
                    <h4 className="text-lg font-bold font-display italic text-white line-clamp-2 md:group-hover:text-gold transition-colors duration-200">
                      {prod.name}
                    </h4>

                    {/* Dimensions / Sizes Displayed in Gold */}
                    {prod.size && (
                      <div className="mt-2.5 flex flex-wrap gap-1 items-center">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider shrink-0">Bản Kích Thước:</span>
                        {Array.isArray(prod.size) ? (
                          prod.size.slice(0, 2).map((sz, sIdx) => (
                            <span key={sIdx} className="font-mono text-xs text-gold font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/15">
                              {sz.split('x')[0]} x {sz.split('x')[1]}
                            </span>
                          ))
                        ) : (
                          <span className="font-mono text-xs text-gold font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/15">
                            {prod.size.split('x')[0]} x {prod.size.split('x')[1]}
                          </span>
                        )}
                        {Array.isArray(prod.size) && prod.size.length > 2 && (
                          <span className="text-[9px] text-gray-500 font-bold font-mono">+{prod.size.length - 2} cỡ khác</span>
                        )}
                      </div>
                    )}

                    {/* Divider line */}
                    <div className="h-[1px] bg-white/5 my-3" />

                    {/* Static / Dynamic / Racking load index */}
                    {(prod.static_load || prod.dynamic_load || prod.racking_load) && (
                      <div className="bg-[#0A1628] rounded-md p-3 border border-white/5 space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Tải tĩnh lót sàn:</span>
                          <span className="font-semibold text-white">{prod.static_load || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Tải động di chuyển:</span>
                          <span className={`font-black ${
                            prod.dynamic_load && parseFloat(prod.dynamic_load.replace(/[^0-9.]/g, '')) > 2000 
                              ? 'text-red-400' 
                              : 'text-white'
                          }`}>{prod.dynamic_load || "Không khuyên nâng"}</span>
                        </div>
                        {prod.racking_load && (
                          <div className="flex justify-between">
                            <span className="text-gray-400">Tải hãm dầm Rack (Kệ):</span>
                            <span className="font-semibold text-cyan-400">{prod.racking_load}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Certificates badges (ISPM 15, NSF, etc) */}
                    {(prod.certifications || prod.grading) && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {prod.certifications && prod.certifications.map((cert, cIdx) => (
                          <span 
                            key={cIdx} 
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                              cert.includes("ISPM 15") 
                                ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20" 
                                : "bg-sky-950/40 text-sky-400 border-sky-500/20"
                            }`}
                          >
                            ✓ {cert.split(' - ')[0]}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Short applications description */}
                    {prod.applications && (
                      <div className="mt-3 text-xs text-gray-400 bg-[#0A1628]/40 p-2.5 rounded line-clamp-2" title={prod.applications}>
                        <strong className="text-white">Khuyên ứng dụng:</strong> {prod.applications}
                      </div>
                    )}

                    {/* Technical caution sign */}
                    {prod.note && (
                      <div className="mt-2.5 flex items-start gap-2 text-[10px] text-gray-400 bg-red-500/5 p-2 rounded border border-red-500/10 hover:bg-red-500/10 transition-colors">
                        <AlertTriangle size={13} className="text-[#DD6B20] shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-tight">{prod.note.replace('⚠', '').trim()}</span>
                      </div>
                    )}

                  </div>

                  {/* Actions Area */}
                  <div className="mt-auto pt-3 border-t border-white/5">
                    
                    <div className="flex items-center justify-between mb-3 text-xs text-gray-400 font-medium">
                      <span>Cung ứng xưởng:</span>
                      <span className="text-white font-bold">{prod.status}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDetailItem(prod)}
                        className="px-3 py-2 bg-[#0A1628] hover:bg-white/10 text-white border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded transition-colors cursor-pointer flex items-center justify-center gap-1"
                      >
                        <Eye size={12} />
                        Xem Chi Tiết
                      </button>

                      <button
                        onClick={() => setInquiryItem(prod)}
                        className="px-3 py-2 bg-gold hover:bg-gold/90 text-[#0A1628] text-[10px] font-black uppercase tracking-widest rounded transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        <MessageSquare size={12} />
                        Báo Giá Sỉ
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* FLOAT DRAWER COMPARISONS */}
      <AnimatePresence>
        {isCompareOpen && compareItems.length > 0 && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D1F3C] border-t-2 border-gold py-4 px-6 shadow-2xl backdrop-blur-md"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Scale className="text-gold w-4 h-4" />
                  So Sánh Pallet Kho Bãi Đã Chọn ({compareItems.length}/3)
                </h5>
                <p className="text-xs text-gray-400">Trực quan hóa khối tải trọng mộng và kích thước ngang</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {compareItems.map(item => (
                  <div key={item.id} className="bg-[#0A1628] rounded-md px-3 py-2 border border-white/10 flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span className="font-semibold text-white max-w-[150px] truncate">{item.name}</span>
                    <button 
                      onClick={() => setCompareItems(compareItems.filter(i => i.id !== item.id))}
                      className="text-gray-400 hover:text-red-400 font-bold ml-1 cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCompareItems([])}
                  className="px-4 py-2 bg-[#0A1628] hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-widest rounded transition-colors cursor-pointer"
                >
                  Xóa Hết
                </button>
                <button
                  onClick={() => {
                    if (compareItems.length > 0) {
                      setDetailItem(compareItems[0]);
                      alert("Mẫu so sánh mặt thông số dính khớp: " + compareItems.map(c=>c.name).join(' VS '));
                    }
                  }}
                  className="px-5 py-2 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-colors cursor-pointer"
                >
                  So Sánh Phân Khúc
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAILED TECHNICAL INFORMATION MODAL */}
      <AnimatePresence>
        {detailItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailItem(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold/40 rounded-lg max-w-2xl w-full p-6 md:p-8 shadow-2xl relative z-10 text-gray-200"
            >
              
              <button
                onClick={() => setDetailItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-extrabold text-[#B8860B] uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-sm border border-gold/30">
                  {detailItem.group}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {detailItem.condition}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display italic text-white mb-4 pr-6">
                {detailItem.name}
              </h3>

              <div className="h-[1px] bg-white/10 my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Spec details list */}
                <div>
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5">Giá Trị Thành Phần Vật Tư</h4>
                  <div className="space-y-2 text-xs bg-[#0A1628] p-4 rounded-md border border-white/5 font-medium">
                    {detailItem.material && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Chất liệu gốc:</span>
                        <span className="text-white font-bold">{detailItem.material}</span>
                      </div>
                    )}
                    {detailItem.static_load && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Tải tĩnh đo đạc:</span>
                        <span className="text-white font-mono font-bold">{detailItem.static_load}</span>
                      </div>
                    )}
                    {detailItem.dynamic_load && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Tải động di chuyển:</span>
                        <span className="text-white font-mono font-bold text-yellow-500">{detailItem.dynamic_load}</span>
                      </div>
                    )}
                    {detailItem.racking_load && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Tải lót dầm Rack (Kệ):</span>
                        <span className="text-cyan-400 font-mono font-bold">{detailItem.racking_load}</span>
                      </div>
                    )}
                    {detailItem.weight && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Trọng lượng bản thân:</span>
                        <span className="text-white font-mono">{detailItem.weight}</span>
                      </div>
                    )}
                    {detailItem.entry && (
                      <div className="flex justify-between border-b border-white/5 pb-1.5">
                        <span className="text-gray-400">Càng nâng luồn xe:</span>
                        <span className="text-white">{detailItem.entry}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Packaging and Construction features */}
                <div>
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-2.5">Cơ Cấu Đóng Khung & Tính Năng</h4>
                  
                  <div className="bg-[#0A1628]/40 border border-white/5 rounded p-3 text-xs mb-3">
                    <ul className="space-y-1.5">
                      {detailItem.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check size={12} className="text-gold shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-[11px] leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {detailItem.construction && (
                    <div className="text-xs bg-[#0A1628]/30 p-2.5 border border-white/5 rounded text-gray-400 mb-2">
                      <strong className="text-white">Cấu trúc ghép:</strong> {detailItem.construction}
                    </div>
                  )}

                  {detailItem.nail && (
                    <div className="text-xs bg-[#0A1628]/30 p-2.5 border border-white/5 rounded text-gray-300">
                      <strong className="text-white">Hệ Đinh vắt:</strong> {detailItem.nail}
                    </div>
                  )}
                </div>

              </div>

              {/* Display Used product grading scheme */}
              {detailItem.grading && (
                <div className="mb-4 bg-[#0A1628]/80 border border-white/10 rounded-md p-4 text-xs">
                  <h5 className="font-bold text-yellow-400 uppercase tracking-widest mb-2 text-[10px]">Phân cấp chất lượng còn lại thực tế:</h5>
                  <div className="space-y-1.5">
                    {Object.entries(detailItem.grading).map(([key, value]) => (
                      <div key={key}>
                        <strong className="text-white">{key}:</strong> <span className="text-gray-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Change process reconditioning list flow if exists */}
              {detailItem.process && (
                <div className="mb-4 bg-[#0A1628]/60 p-4 rounded-md border border-white/5 text-xs">
                  <h5 className="font-bold text-gold uppercase tracking-wider mb-2 text-[10px]">Các Bước Kiểm Định & Tân Trang Tiêu Chuẩn:</h5>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {detailItem.process.map((step, idx) => (
                      <div key={idx} className="bg-[#0D1F3C]/60 p-1.5 rounded text-gray-300 flex items-center gap-1">
                        <ChevronRight size={10} className="text-gold shrink-0" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price benefits logic display */}
              {detailItem.price_benefit && (
                <div className="mb-5 bg-emerald-500/10 border border-emerald-500/25 rounded p-3 text-center text-xs">
                  <span className="text-emerald-400 font-bold block uppercase tracking-widest text-[9px] mb-1">Hiệu Suất Tiết Kiệm Chi Phí Doanh Nghiệp:</span>
                  <span className="text-white italic">"{detailItem.price_benefit}"</span>
                </div>
              )}

              {detailItem.note && (
                <div className="flex items-start gap-2 bg-red-500/5 p-3 rounded border border-red-500/10 text-xs text-gray-300 mb-6">
                  <AlertTriangle size={15} className="text-[#DD6B20] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Khuyến nghị từ Kỹ sư xưởng:</strong> {detailItem.note.replace('⚠', '').trim()}
                  </div>
                </div>
              )}

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setDetailItem(null)}
                  className="px-5 py-2.5 bg-[#0A1628] hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded cursor-pointer"
                >
                  Đóng Lại
                </button>
                <button
                  onClick={() => {
                    setInquiryItem(detailItem);
                    setDetailItem(null);
                  }}
                  className="px-6 py-2.5 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-all cursor-pointer shadow"
                >
                  Yêu Cầu Báo Giá Sỉ
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* INQUIRY B2B RFQ QUOTE MODAL */}
      <AnimatePresence>
        {inquiryItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInquiryItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0D1F3C] border border-gold rounded-lg max-w-lg w-full p-6 md:p-8 shadow-2xl relative z-10 text-gray-200"
            >
              
              <button
                onClick={() => setInquiryItem(null)}
                className="absolute top-4 midnight-close right-4 text-gray-400 hover:text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-gold uppercase tracking-widest font-black mb-1">
                <Bookmark className="w-3.5 h-3.5" />
                Phiếu Yêu Cầu Báo Giá Sỉ (B2B RFP Request)
              </div>

              <h3 className="text-xl font-bold font-display italic text-white mb-2">
                {inquiryItem.name}
              </h3>
              
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Quý doanh nghiệp xin hãy cung ứng tóm tắt biểu nhu cầu số lượng dưới đây. Phòng Kinh Doanh của <strong className="text-white">Hoàng Gia Khang</strong> sẽ liên hệ gởi bảng chiết khấu chi tiết qua Zalo/Email trong vòng <strong className="text-gold">2 tiếng</strong>.
              </p>

              {showInquirySuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/40 p-6 rounded-md text-center py-10"
                >
                  <Check className="w-12 h-12 text-emerald-400 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-white mb-1">Khởi Tạo RFP Thành Công!</h4>
                  <p className="text-xs text-gray-400">Yêu cầu báo giá B2B đối với sản phẩm này đã được chuyển thẳng đến điều phối viên giao hàng Hoàng Gia Khang.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Họ & Tên Quý khách *</label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none placeholder-gray-600"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Số Điên thoại *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                        placeholder="0901xxxxxx"
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Địa chỉ Email</label>
                      <input
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                        placeholder="partner@company.com"
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none placeholder-gray-600"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Tên Cơ Quan / Nhà Máy</label>
                      <input
                        type="text"
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({...inquiryForm, company: e.target.value})}
                        placeholder="Cơ khí / Thủy sản..."
                        className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Ước Lượng Số Lượng Đặt Cần Báo Giá *</label>
                    <select
                      value={inquiryForm.quantity}
                      onChange={(e) => setInquiryForm({...inquiryForm, quantity: e.target.value})}
                      className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none cursor-pointer"
                    >
                      <option value="Dưới 50 cái">Dưới 50 cái (Giao nhanh kho lẻ)</option>
                      <option value="50 - 100 cái">Từ 50 - 100 cái (Có chiết khấu tốt)</option>
                      <option value="Trên 100 cái (Sỉ cực lớn)">Trên 100 cái (Giá gốc tận mỏ không qua trung gian)</option>
                      <option value="Cần Kỹ sư khảo sát bãi trước">Cần Kỹ sư Hoàng Gia Khang khảo sát, lên CAD đo dầm kệ rào trước</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Biểu mẫu yêu cầu riêng (Quy cách, Chữ đóng triện...)</label>
                    <textarea
                      rows={3}
                      value={inquiryForm.requirements}
                      onChange={(e) => setInquiryForm({...inquiryForm, requirements: e.target.value})}
                      placeholder="Cần triện logo riêng, hóa đơn VAT đầy đủ..."
                      className="w-full bg-[#0A1628] text-white border border-white/10 focus:border-gold rounded px-3 py-2 text-xs focus:outline-none placeholder-gray-600 resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="callback_agree"
                      checked={inquiryForm.agreeToCallback}
                      onChange={(e) => setInquiryForm({...inquiryForm, agreeToCallback: e.target.checked})}
                      className="rounded border-white/10 text-gold focus:ring-gold bg-[#0A1628]"
                    />
                    <label htmlFor="callback_agree" className="text-[11px] text-gray-400 cursor-pointer">
                      Đồng ý nhận gởi tài liệu thông số bản vẽ PDF qua số Zalo đã khai báo.
                    </label>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setInquiryItem(null)}
                      className="px-5 py-2 text-xs font-bold uppercase bg-[#0A1628] hover:bg-white/5 text-gray-400 hover:text-white rounded cursor-pointer"
                    >
                      Bỏ qua
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gold hover:bg-gold/90 text-[#0A1628] text-xs font-black uppercase tracking-widest rounded transition-all cursor-pointer shadow"
                    >
                      Gởi Yêu Cầu Báo Giá
                    </button>
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
