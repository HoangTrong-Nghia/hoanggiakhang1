export interface LubricatingProduct {
  id: number;
  group:
    | "Dầu động cơ công nghiệp"
    | "Dầu hộp số & truyền động"
    | "Dầu thủy lực"
    | "Dầu tuần hoàn & ổ trục"
    | "Dầu máy nén khí"
    | "Dầu cắt gọt & gia công"
    | "Mỡ bôi trơn (Grease)"
    | "Dầu & mỡ chuyên dụng";
  name: string;
  brands: { [brandName: string]: string }; // Brand to specific product line name mapping
  viscosity?: string;
  standards?: string[];
  base_oil?: string;
  features: string[];
  change_interval?: string | { [key: string]: string };
  packaging?: string;
  applications: string;
  note?: string;
  status: "Còn hàng" | "Liên hệ báo giá" | "Liên hệ tư vấn thiết kế" | "Liên hệ";
  additive?: string;
  VI?: string;
  temp_range?: string;
  type?: string;
  RPVOT?: string;
  concentration?: string;
  pH?: string;
  cooling_rate?: string;
  base_oil_viscosity?: string;
  thickener?: string;
  nlgi_grade?: string;
  relubrication_interval?: string;
  speed_factor?: string;
  timken_ok_load?: string;
  water_washout?: string;
  certification?: string[];
  dielectric_strength?: string;
  cartridge?: string;
  pressure?: string;
}

export interface LubricantsCatalogData {
  category: "Dầu Mỡ Bôi Trơn";
  filters: {
    by_group: string[];
    by_brand: string[];
    by_viscosity: string[];
    by_application: string[];
  };
  products: LubricatingProduct[];
}

export const LUBRICANTS_DATA: LubricantsCatalogData = {
  category: "Dầu Mỡ Bôi Trơn",
  filters: {
    by_group: [
      "Tất cả",
      "Dầu động cơ công nghiệp",
      "Dầu hộp số & truyền động",
      "Dầu thủy lực",
      "Dầu tuần hoàn & ổ trục",
      "Dầu máy nén khí",
      "Dầu cắt gọt & gia công",
      "Mỡ bôi trơn (Grease)",
      "Dầu & mỡ chuyên dụng"
    ],
    by_brand: ["Tất cả", "Shell", "Mobil", "Castrol", "Total", "SKF", "Fuchs", "Kluber"],
    by_viscosity: [
      "Tất cả",
      "ISO VG 32",
      "ISO VG 46",
      "ISO VG 68",
      "ISO VG 100",
      "ISO VG 150",
      "ISO VG 220",
      "ISO VG 320",
      "ISO VG 460",
      "ISO VG 680"
    ],
    by_application: [
      "Tất cả",
      "Vòng bi & ổ trục",
      "Hộp số",
      "Thủy lực",
      "Máy nén khí",
      "Gia công cắt gọt",
      "Nhiệt độ cao",
      "Thực phẩm (Food Grade)"
    ]
  },
  products: [
    // =====================================
    // PHẦN I: DẦU BÔI TRƠN (Lubricating Oil)
    // =====================================
    // --- NHÓM 1: DẦU ĐỘNG CƠ CÔNG NGHIỆP ---
    {
      id: 1,
      group: "Dầu động cơ công nghiệp",
      name: "Dầu động cơ diesel công nghiệp (Industrial Diesel Engine Oil)",
      brands: {
        "Shell": "Rimula R4 / R6",
        "Mobil": "Delvac MX / 1300 Super",
        "Castrol": "CRB Turbomax",
        "Total": "Rubia TIR"
      },
      viscosity: "SAE 15W-40 / 10W-40 / 40",
      standards: ["API CI-4 Plus", "API CK-4", "ACEA E7/E9"],
      base_oil: "Khoáng / Bán tổng hợp / Tổng hợp PAO",
      features: [
        "Chống oxy hóa cao - kéo dài chu kỳ thay dầu",
        "Bảo vệ chống mài mòn ZDDP",
        "Kiểm soát cặn bẩn TBN cao"
      ],
      change_interval: "250h - 500h (tùy cấp dầu)",
      packaging: "Thùng 20L / Phuy 209L",
      applications: "Động cơ diesel máy xây dựng, máy phát điện, xe tải hạng nặng",
      note: "⚠ Phân tích dầu (Oil Analysis) định kỳ để tối ưu chu kỳ thay thực tế phù hợp hoạt động",
      status: "Còn hàng"
    },
    // --- NHÓM 2: DẦU HỘP SỐ & TRUYỀN ĐỘNG ---
    {
      id: 2,
      group: "Dầu hộp số & truyền động",
      name: "Dầu hộp số công nghiệp (Industrial Gear Oil)",
      brands: {
        "Shell": "Omala S2 G / S4 GX",
        "Mobil": "Mobilgear 600 XP",
        "Castrol": "Alpha SP / Optigear",
        "Total": "Carter EP"
      },
      viscosity: "ISO VG 68 / 100 / 150 / 220 / 320 / 460 / 680",
      standards: ["ISO 12925-1 CKD", "DIN 51517-3 CLP", "AGMA 9005"],
      additive: "EP (Extreme Pressure) + AW (Anti-Wear)",
      features: [
        "Phụ gia cực áp EP bảo vệ cặp bánh răng chịu tải va đập mạnh",
        "Chống gỉ sét và chống mài mòn đồng tốt FZG ≥ 12",
        "Tách nước nhanh (Demulsibility) ngăn tạp chất ngưng tụ khí ẩm"
      ],
      change_interval: "4000h - 8000h (tùy cấp dầu khoáng/tổng hợp)",
      packaging: "Thùng 20L / Phuy 209L",
      applications: "Hộp số trụ, côn, trục vít chịu tải nặng, hộp số hành tinh bãi tàu",
      note: "⚠ Omala S4 GX (PAO tổng hợp) kéo dài chu kỳ thay 3-4 lần so với loại chứa gốc khoáng cơ bản",
      status: "Còn hàng"
    },
    {
      id: 3,
      group: "Dầu hộp số & truyền động",
      name: "Dầu hộp số trục vít (Worm Gear Oil)",
      brands: {
        "Shell": "Omala S4 WE",
        "Mobil": "Mobilgear SHC XMP",
        "Kluber": "Kluberoil GEM 1"
      },
      viscosity: "ISO VG 150 / 220 / 320 / 460 / 680",
      standards: ["ISO 12925-1 CKE/P", "DIN 51517-3"],
      base_oil: "PAG (Polyalkylene Glycol) hoặc PAO tổng hợp",
      features: [
        "Hệ số ma sát trượt cực thấp μ = 0.04 - 0.06 danh định",
        "Hiệu suất truyền động tăng từ 5-15% tổng thể năng lượng",
        "Tương thích ổn định với đa dạng cấp cao su gioăng NBR/FKM"
      ],
      change_interval: "8000h - 12000h",
      packaging: "Thùng 20L / Can 5L",
      applications: "Hộp số trục vít truyền rung động mạnh, tốc độ thấp - mô-men xoắn cao",
      note: "⚠ PAG không tương thích pha trộn với gốc dầu khoáng thông thường - súc xả kỹ bình chứa trước khi nạp",
      status: "Còn hàng"
    },
    {
      id: 4,
      group: "Dầu hộp số & truyền động",
      name: "Dầu truyền động xe tải / máy xây dựng (Transmission Oil)",
      brands: {
        "Shell": "Spirax S4 ATF / S6 TXME",
        "Mobil": "Mobilfluid 424",
        "Castrol": "Transmax Z"
      },
      viscosity: "SAE 10W / 30 / ATF",
      standards: ["Allison C-4/TES-295", "ZF TE-ML 03C/17C", "Caterpillar TO-4"],
      features: [
        "Ổn định hệ số ma sát hệ đĩa ướt ly hợp",
        "Chống mài mòn bánh răng vi sai tối ưu",
        "Khả năng lưu động cao khi bắt đầu hoạt động lạnh"
      ],
      applications: "Hộp số tự động, hộp số thủy lực dập tắt mô-men xoắn máy xây dựng Caterpillar, Komatsu",
      note: "⚠ Dùng đúng catalog chỉ thị OEM - sai loại có thể gây trượt hoặc mòn cục bộ dải phanh ly hợp ướt",
      status: "Còn hàng"
    },
    // --- NHÓM 3: DẦU THỦY LỰC ---
    {
      id: 5,
      group: "Dầu thủy lực",
      name: "Dầu thủy lực khoáng chống mài mòn (AW Hydraulic Oil)",
      brands: {
        "Shell": "Tellus S2 M",
        "Mobil": "DTE 20 Series",
        "Castrol": "Hyspin AWS",
        "Total": "Azolla ZS"
      },
      viscosity: "ISO VG 32 / 46 / 68 / 100",
      standards: [
        "ISO 11158 HM",
        "DIN 51524-2 HLP",
        "Denison HF-0/HF-1/HF-2",
        "Vickers I-286-S / M-2950-S"
      ],
      features: [
        "Hệ phụ gia kẽm AW + EP chống ăn mòn xước bề mặt bơm piston/bánh răng",
        "Chỉ số độ nhớt tiêu chuẩn VI > 100",
        "Chống oxy hóa kiểm tra RPVOT đạt hiệu năng vượt > 1000 phút",
        "Khả năng tách khí nhanh dập tắt bọt khí bọc nghẽn áp suất"
      ],
      change_interval: "4000h - 6000h công tác",
      packaging: "Thùng 20L / Phuy 209L / Bồn IBC 1000L",
      applications: "Hệ thống thủy lực áp suất trung bình-cao, máy ép gỗ, máy ép nhựa, máy phát",
      note: "⚠ Chọn nhớt độ nhớt VG46 thích hợp nhiệt độ nước ta; VG32 cho vận hành máy liên tục trong kho lạnh",
      status: "Còn hàng"
    },
    {
      id: 6,
      group: "Dầu thủy lực",
      name: "Dầu thủy lực tổng hợp VI cao (Synthetic Hydraulic Oil HV)",
      brands: {
        "Shell": "Tellus S4 VX",
        "Mobil": "DTE 10 Excel",
        "Castrol": "Hyspin AWH-M"
      },
      viscosity: "ISO VG 32 / 46 / 68",
      standards: ["ISO 11158 HV", "DIN 51524-3 HVLP"],
      VI: "> 160 nhiệt độ biến chuyển rộng",
      temp_range: "-40°C đến +100°C",
      features: [
        "Độ nhớt kiểm soát duy trì ổn định tuyệt hảo trên dải dao động nhiệt cực rộng",
        "Kiểm định đo đạc thực nghiệm tiết kiệm điện năng sưởi ấm tuần hoàn 3-8%",
        "Tuổi thọ dầu kéo dài siêu cấp gấp 2-3 lần hàng thường"
      ],
      change_interval: "10000h - 15000h",
      applications: "Thiết bị thủy lực ngoài bến cảng, các cẩu thủy lực hầm lò, vùng cực lạnh thay đổi liên tục",
      note: "⚠ Đánh giá chi phí đầu tư ban đầu cao hơn nhưng hoàn vốn cực nhanh nhờ cắt giảm số lần bảo trì",
      status: "Còn hàng"
    },
    {
      id: 7,
      group: "Dầu thủy lực",
      name: "Dầu thủy lực khó cháy (Fire Resistant Hydraulic Fluid)",
      brands: {
        "Shell": "Irus Fluid D",
        "Fuchs": "Plantosyn HVI",
        "Total": "Hydransafe"
      },
      viscosity: "ISO VG 46 / 68",
      type: "HFA (Nhũ tương nước-dầu) / HFC (Nước-Glycol) / HFD (Sợi este tổng hợp khó cháy)",
      standards: ["ISO 12922", "Factory Mutual (FM Approval)"],
      features: [
        "Nhiệt độ đánh lửa tự phát siêu cao ngăn triệt để nguy cơ cháy nổ",
        "Đặc tính tự dập lửa nếu dầu bị rò rỉ phun sương gặp mỏ hàn",
        "Bôi trơn bề mặt chịu áp tuyệt vời giống gốc khoáng"
      ],
      applications: "Hệ lò đúc ép nóng kim loại, lò luyện thép, giàn khai thác dầu hầm lò dễ phát tia lửa",
      note: "⚠ Bắt buộc áp dụng theo đề xuất PCCC cho cơ sở đúc luyện nhiệt độ cao",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 4: DẦU TUẦN HOÀN & Ổ TRỤC ---
    {
      id: 8,
      group: "Dầu tuần hoàn & ổ trục",
      name: "Dầu tuần hoàn bôi trơn ổ trục (Circulating Oil)",
      brands: {
        "Shell": "Morlina S2 B / S4 B",
        "Mobil": "DTE Oil Medium / Heavy",
        "Castrol": "Perfecto T"
      },
      viscosity: "ISO VG 32 / 46 / 68 / 100 / 150",
      standards: ["ISO 11158 HL / HM", "DIN 51517-2 HL"],
      features: [
        "Đạt bài thử chống gỉ sét tiêu chuẩn ASTM D665 A&B cực bền bỉ",
        "Thời gian tách nước nhanh chóng ASTM D1401 đạt chuẩn phục hồi dầu",
        "Hãm bọt rò rỉ nhanh ASTM D892 giảm triệt oxi hóa cục bộ"
      ],
      applications: "Các ổ trục khuỷu quay, bôi trơn ổ đỡ bạc lót ly tâm, trạm bôi trơn tập trung công xưởng dệt",
      status: "Còn hàng"
    },
    {
      id: 9,
      group: "Dầu tuần hoàn & ổ trục",
      name: "Dầu bôi trơn tuabin (Turbine Oil)",
      brands: {
        "Shell": "Turbo S4 GX",
        "Mobil": "DTE 700 Series",
        "Castrol": "Perfecto X"
      },
      viscosity: "ISO VG 32 / 46 / 68",
      standards: ["ISO 8068 TSA/TGA", "GE GEK 32568F", "Siemens TLV 9013 04"],
      RPVOT: "> 2000 phút (vượt trội bản gốc PAO)",
      features: [
        "Kháng oxy hóa ráo nết siêu việt - chu kỳ bôi trơn dải dài > 20.000 giờ máy",
        "Khả năng tách lọc ngưng tụ bọt nước và dầu cực kỳ chuẩn chỉ",
        "Không rỉ gom bẩn cặn bùn đen vec ni (Varnish) bám dính kẹt khe cánh quạt"
      ],
      change_interval: "20000h",
      applications: "Hộp tuabin hơi nước, quạt áp lực khí đốt lò nhiệt máy phát điện công nghiệp",
      note: "⚠ Nên lấy mẫu dầu xét nghiệm chỉ số RPVOT định kỳ mỗi 6 tháng để dự trữ hành trình máy",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 5: DẦU MÁY NÉN KHÍ ---
    {
      id: 10,
      group: "Dầu máy nén khí",
      name: "Dầu máy nén khí trục vít (Rotary Screw Compressor Oil)",
      brands: {
        "Shell": "Corena S3 R / S4 R",
        "Mobil": "Rarus 800 Series",
        "Castrol": "Aircol PD / SN",
        "Atlas Copco": "Roto-Inject Fluid"
      },
      viscosity: "ISO VG 46 / 68 / 100",
      standards: ["ISO 6743-3A DAH", "Atlas Copco Standard", "Ingersoll Rand Spec"],
      change_interval: "4000h (Gốc Khoáng) / 8000h (Tổng hợp PAO)",
      features: [
        "Điểm tự chớp cháy cao Flash Point > 220°C bảo an chống cháy buồng khí nén",
        "Độ bay hơi cực thấp giảm mạt dầu hao hụt lẫn vào dòng khí đầu ra",
        "Chống tạo tác nhũ lắng kẹt màng tách nước lọc"
      ],
      applications: "Bơm nén khí trục vít ngập dầu Atlas Copco, Kaeser, Hitachi, Sullair...",
      note: "⚠ Khác gốc tuyệt đối không trộn chung PAO và dầu khoáng với nhau; phải súc rửa bầu chứa và các phớt",
      status: "Còn hàng"
    },
    {
      id: 11,
      group: "Dầu máy nén khí",
      name: "Dầu máy nén pittong (Reciprocating Compressor Oil)",
      brands: {
        "Shell": "Corena S2 P",
        "Mobil": "Rarus SHC 1020",
        "Castrol": "Aircol PD"
      },
      viscosity: "ISO VG 100 / 150 / 220",
      standards: ["ISO 6743-3A DAA / DAB / DAC"],
      features: [
        "Ổn định nhiệt cực tốt tại van xả pittong lên tới cực đỉnh > 180°C",
        "Lượng tàn dư carbon siêu thấp ngăn cháy khét bít cửa hút xả áp",
        "Bảo vệ thành xylanh mài mòn vượt trội"
      ],
      applications: "Máy nén khí dạng pittong tịnh tiến nhiều cấp tải, máy nén xưởng sửa xe",
      status: "Còn hàng"
    },
    // --- NHÓM 6: DẦU CẮT GỌT & GIA CÔNG ---
    {
      id: 12,
      group: "Dầu cắt gọt & gia công",
      name: "Dung dịch cắt gọt hòa tan (Soluble Cutting Fluid - Dầu pha nước)",
      brands: {
        "Castrol": "Hysol / Syntilo",
        "Shell": "Dromus B",
        "Fuchs": "Ecocool",
        "Blaser": "Blasocut BC 35"
      },
      concentration: "Pha loãng 3% - 10% với nước cấp công nghiệp",
      type: "Dạng nhũ tương gốc sữa (Emulsion) / Bán tổng hợp / Bản tổng hợp hoàn toàn",
      pH: "8.5 - 9.5 kiểm soát sinh vật diệt khuẩn hoàn mỹ",
      features: [
        "Truyền nhiệt làm mát nhanh vùng cắt gọt phay chính xác",
        "Không chứa chất độc hại Clo, an toàn thân thiện da tay thợ",
        "Kháng bám mạt vụn, chống ăn mòn ố vật gia công nhôm thép tốt"
      ],
      applications: "Các máy CNC phay tiện đa trục kim loại màu cơ cơ cấu cắt gọt vạn năng",
      note: "⚠ Thường xuyên kiểm nghiệm nồng độ chiết quang brix bằng khúc xạ kế định kỳ tránh biến chất phát mùi hôi",
      status: "Còn hàng"
    },
    {
      id: 13,
      group: "Dầu cắt gọt & gia công",
      name: "Dầu cắt gọt nguyên chất (Neat Cutting Oil - Ko pha nước)",
      brands: {
        "Castrol": "Ilocut / Hone Oil",
        "Shell": "Macron / Torcula",
        "Fuchs": "Ecocut"
      },
      viscosity: "ISO VG 7 - 460 tùy thuộc tải dập uốn",
      features: [
        "Tính năng bôi trơn dập tải siêu nặng ép phôi",
        "Hỗ trợ cực tốt cho tiến trình taro răng nhỏ mịn, doa sâu tinh tế",
        "Ổn định màng bôi dưỡng vượt thời gian không bốc khói độc"
      ],
      applications: "Phay tiện biên dạng bánh răng sần sùi khó cắt, nguyên công cắt dập vuốt lá thép lò xo cuộn",
      status: "Còn hàng"
    },
    {
      id: 14,
      group: "Dầu cắt gọt & gia công",
      name: "Dầu tôi thép (Quenching Oil - Định hình cơ tính)",
      brands: {
        "Shell": "Morlina S2 B 46",
        "Fuchs": "Thermisol QH 46",
        "Total": "Drakool"
      },
      viscosity: "ISO VG 32 / 46 / 68",
      features: [
        "Kiểm định tốc độ truyền làm nguội thép định lượng mượt vững",
        "Giảm tối đa biến dạng vi cấu trúc nứt nẻ gãy mầm chi tiết nhiệt luyện",
        "Flash point chớp cháy cực cao > 160°C phòng ngừa bùng hỏa hoạn dầu"
      ],
      applications: "Tôi cứng giòn trục then rèn nguội thép đặc chế, lưỡi dao, bánh răng chi tiết truyền thép dập",
      note: "⚠ Định kỳ mỗi 3 tháng cần kiểm tra chớp cháy hở và lấy cặn đáy bể tôi",
      status: "Còn hàng"
    },
    // =====================================
    // PHẦN II: MỠ BÔI TRƠN (Grease)
    // =====================================
    // --- NHÓM 7: MỠ BÔI TRƠN VÒNG BI ---
    {
      id: 15,
      group: "Mỡ bôi trơn (Grease)",
      name: "Mỡ vòng bi đa dụng (Multi-Purpose Bearing Grease)",
      brands: {
        "Shell": "Gadus S2 V220",
        "Mobil": "Mobilux EP 2",
        "Castrol": "Spheerol AP 2",
        "SKF": "LGMT 2/3",
        "Total": "Multis EP 2"
      },
      base_oil_viscosity: "ISO VG 100 - 220",
      thickener: "Lithium xà phòng xốp / Lithium Complex",
      nlgi_grade: "NLGI 2 / 3",
      temp_range: "-30°C đến +130°C",
      standards: ["DIN 51825 KP2K-30", "ISO L-XBCEB 2"],
      features: [
        "Thành phần phụ gia chống mài mòn EP gánh chịu va đập nặng nề",
        "Bài thử nghiệm rỉ sét ASTM D1743 đạt tuyệt đối pass bám dính",
        "Kháng nước rửa trôi (Water Washout) cực thấp giữ vững độ đặc xà phòng"
      ],
      relubrication_interval: "1000h - 3000h công tác",
      packaging: "Mảnh ống 400g / Hộp nhựa 1kg / Thùng 18L / Phuy 180kg",
      applications: "Bơm quạt gió hút cục bộ, vòng hãm bi trục xoay, gối đỡ băng xích chuyền tải nhẹ-trung",
      status: "Còn hàng"
    },
    {
      id: 16,
      group: "Mỡ bôi trơn (Grease)",
      name: "Mỡ vòng bi nhiệt độ cao (High Temperature Grease)",
      brands: {
        "Shell": "Gadus S5 T460 1.5",
        "Mobil": "Mobilith SHC 460",
        "SKF": "LGHB 2",
        "Kluber": "Isoflex NBU 15"
      },
      base_oil_viscosity: "ISO VG 460 - 1500",
      thickener: "Chất làm đặc Polyurea chịu nhiệt siêu bền / Calcium Sulfonate Complex",
      nlgi_grade: "NLGI 1.5 / 2",
      temp_range: "-20°C đến +220°C (liên tục bôi dưỡng) / +260°C (ngưỡng giới hạn ngắn)",
      features: [
        "Liên tục bảo vệ ổ bi nhiệt lò hơi ko tách chảy lỏng nhỏ sệt dầu",
        "Polyurea tự kháng oxy hóa gốc tự nhiên ko vón than bệt",
        "Chịu hóa chất rửa trôi bão hòa tẩy mạnh mẽ"
      ],
      applications: "Ổ đỡ xe goòng lò nung xi măng, trục nhả rạp sơn sấy, gối máy nghiền than đá dập nhiệt",
      note: "⚠ Tránh phối hợp mỡ này với gốc Lithium cơ bản; phản ứng phụ tạo xà phòng sáp bệt hỏng ổ đỡ ngay",
      status: "Còn hàng"
    },
    {
      id: 17,
      group: "Mỡ bôi trơn (Grease)",
      name: "Mỡ vòng bi tốc độ cao (High Speed Bearing Grease)",
      brands: {
        "SKF": "LGESD 2 / LGLT 2",
        "Kluber": "Isoflex NBU 15",
        "Mobil": "Mobilith SHC 100"
      },
      base_oil_viscosity: "ISO VG 15 - 100",
      thickener: "Barium Complex / Polyurea",
      nlgi_grade: "NLGI 2",
      speed_factor: "ndm dải truyền rộng > 500.000 (Vòng x mm)",
      temp_range: "-40°C đến +150°C",
      features: [
        "Lựa chọn dầu gốc độ nhớt cực loãng giảm tối thiểu ma sát nhớt xoay tốc độ",
        "Mô-men xoắn khởi động máy siêu nhỏ tốn ít công năng điện",
        "Duy trì kết cấu màng bôi vững chãi ko văng ly tâm trục đứng"
      ],
      applications: "Gối đỡ Spindle máy CNC cắt phay gỗ chính xác, vòng bi động cơ servo robot",
      note: "⚠ Tỷ lệ nhồi mỡ khuyên dùng: Chỉ điền bồi lượng mỡ khoảng 30-40% tránh làm quá tải nhiệt nén bóng bi",
      status: "Liên hệ báo giá"
    },
    {
      id: 18,
      group: "Mỡ bôi trơn (Grease)",
      name: "Mỡ chịu tải nặng - EP cao (Heavy Load EP Grease)",
      brands: {
        "Shell": "Gadus S3 V460D 2",
        "Mobil": "Mobilgrease XHP 462",
        "Castrol": "Spheerol EPL 2",
        "SKF": "LGHP 2"
      },
      base_oil_viscosity: "ISO VG 460 màng dày",
      thickener: "Lithium Complex đóng xốp bền tải / Calcium Sulfonate cực áp",
      nlgi_grade: "NLGI 2",
      timken_ok_load: "Vượt định lượng test cực áp > 40 lb (178 N) tải ép",
      features: [
        "Hỗ trợ lực dập mài mòn cao nhờ dồi dào chất EP phụ gia lót phẳng",
        "Khả năng bám mướt dẻo quánh ko bong tróc do chuyển hướng đột ngột",
        "Kháng bẹp mỏi rỗ mặt rãnh trượt bánh răng"
      ],
      applications: "Khớp chữ thập cốt các loại cẩu ngoạm than đá mỏ, mặt nghiêng vạt trượt máy cán nghiền vụn đá",
      status: "Còn hàng"
    },
    {
      id: 19,
      group: "Mỡ bôi trơn (Grease)",
      name: "Mỡ chịu nước (Water Resistant Marine Grease)",
      brands: {
        "Shell": "Gadus S2 OGH",
        "Mobil": "Mobilgrease 28",
        "Castrol": "Spheerol SY 2"
      },
      thickener: "Calcium Sulfonate Complex dính mút / Nhôm xà phòng",
      nlgi_grade: "NLGI 2",
      water_washout: "Bài thử ASTM D1264 hao hụt cực thấp < 1% kiểm nghiệm 79°C",
      features: [
        "Tính liên kết hóa học ko tan nát mỡ khi ngộp đầy bùn nước mặn",
        "Độ bám chặt bế dính bảo vệ phốt sắt han gỉ tối đa",
        "Kháng muối mặn hơi biển tuyệt hảo"
      ],
      applications: "Ổ quay tời kéo neo tàu đánh cá viễn dương, gối bạc guồng rửa cát thủy điện, vạn năng ngoài trời",
      status: "Còn hàng"
    },
    // ==========================================
    // PHẦN III: DẦU MỠ CHUYÊN DỤNG (Specialty)
    // ==========================================
    // --- NHÓM 8: DẦU MỠ CHUYÊN DỤNG ---
    {
      id: 20,
      group: "Dầu & mỡ chuyên dụng",
      name: "Mỡ thực phẩm (Food Grade Grease - Đạt chuẩn FDA)",
      brands: {
        "Shell": "Gadus S2 V220AC (Special Option)",
        "Kluber": "Paraliq GTE 703",
        "Fuchs": "Renolit FG 2"
      },
      base_oil: "Dầu gốc tổng hợp PAO tinh khiết / Dầu khoáng y khoa trắng tinh sương",
      thickener: "Phức Nhôm (Aluminum Complex) an toàn tuyệt đối",
      nlgi_grade: "NLGI 1 / 2",
      certification: ["Chứng chỉ NSF H1 (Được tiếp xúc ngẫu nhiên thực phẩm)", "Kosher", "Halal"],
      features: [
        "Không màu, không sinh mùi vị lạ, không độc tính ảnh hưởng dưỡng chất",
        "Tuyệt đối chịu nổi chất tẩy xà phòng chu trình CIP sấy tiệt trùng hằng ngày",
        "Không bị hòa lọt vào thành phần nguyên liệu sinh học đường sữa"
      ],
      applications: "Vòng bi dây chuyền đóng gói sữa bột, máy chế biến tôm cá ngói hộp, chiết rót bia lon giải khát",
      note: "⚠ Quy chuẩn xuất khẩu buộc dùng chuẩn dầu mỡ NSF H1 tại trục băng chuyền hở nhãn quan thực phẩm",
      status: "Liên hệ báo giá"
    },
    {
      id: 21,
      group: "Dầu & mỡ chuyên dụng",
      name: "Mỡ chịu hóa chất oxy hóa mạnh (Chemical Resistant Grease - PFPE/PTFE)",
      brands: {
        "Kluber": "Barrierta L 55/2",
        "Chemours": "Krytox GPL 223",
        "Solvay": "Fomblin RT 15"
      },
      base_oil: "Huỳnh quang gốc Flo PFPE (Perfluoropolyether)",
      thickener: "PTFE mờ đục siêu bền nhiệt",
      temp_range: "-70°C đến +260°C vô cùng khắc nghiệt",
      features: [
        "Trơ tuyệt đối ko cháy, ko nổ hóa học kể cả sục ngập trong khí Oxy sạch tự do",
        "Kháng cự tuyệt đối các hóa chất ráo axit sulfuric đậm đặc ăn mòn tột cùng",
        "Tuổi thọ dường như bất tử không tự khô rã mỡ rỉ dầu"
      ],
      applications: "Ổ đỡ cánh quạt hút axit lò hóa chất, cơ cấu ro-to đóng tiếp van bình gas hóa lỏng áp lực lớn",
      note: "⚠ Không bao giờ được trộn loãng hóa với mỡ dầu thông thường để tránh làm giảm hoặc hủy tính trơ mỡ",
      status: "Liên hệ báo giá"
    },
    {
      id: 22,
      group: "Dầu & mỡ chuyên dụng",
      name: "Dầu bôi trơn xích (Chain Lubricant)",
      brands: {
        "Shell": "Tonna S3 M / Cassida Chain",
        "Mobil": "Mobilmet / Velocite",
        "Kluber": "Klubersynth CH 2"
      },
      viscosity: "ISO VG 68 - 460 lỏng dính",
      features: [
        "Tính tự leo bám kẽ chốt xích cực giỏi nhờ phụ gia tăng bám",
        "Hạn chế triệt văng nhỏ giọt làm hoen ố sàn bệ máy làm việc",
        "Dòng bôi chịu nhiệt giữ loãng mượt trong lò hong sấy"
      ],
      applications: "Chuỗi xích răng cưa kéo sấy tôn mạ màu, băng chuyền xích dẹt gắp nhả của ngành may dệt bông",
      note: "⚠ Tra bôi trơn đúng điểm: Hãy nhỏ giọt trực tiếp vào nách trong con lăn xới xích, tránh phết bừa bãi mặt ngoài phí phạm",
      status: "Còn hàng"
    },
    {
      id: 23,
      group: "Dầu & mỡ chuyên dụng",
      name: "Dầu bôi trơn bánh răng hở (Open Gear Lubricant)",
      brands: {
        "Shell": "Malleus OGH / GL",
        "Mobil": "Mobilith SHC 007",
        "Castrol": "Molub-Alloy OGL"
      },
      viscosity: "ISO VG 1000 - 4600 dạng đặc dày xịt nhám",
      additive: "MoS2 (Molybdenum Disulfide màng bôi khô chống trượt) + Graphite hạt mịn",
      features: [
        "Sinh màng che chở cứng cáp xốp đệm đè chống tỳ răng cọ nát trực tiếp",
        "Dẻo dính bám kiên cường trên dải chu vi vòng ren lớn quạt bụi đất",
        "Chịu lực giật vấp nặng thường trực khớp nối truyền"
      ],
      applications: "Các bánh răng hở lôi chu trình vòng quay quả lô xi măng lớn, cầu cổng mâm bến cảng kéo quặng sắt",
      status: "Liên hệ báo giá"
    },
    {
      id: 24,
      group: "Dầu & mỡ chuyên dụng",
      name: "Dầu cách điện máy biến áp (Transformer Oil - Kháng điện thế)",
      brands: {
        "Shell": "Diala S4 ZX-I",
        "Total": "Isovoltine II"
      },
      standards: ["IEC 60296 (Gốc Khoáng)", "IEC 62770 (Chất Este Sinh Học)"],
      dielectric_strength: "Hiệu điện thế đánh thủng cực cao > 70 kV (IEC 60156)",
      features: [
        "Tính dập triệt hồ quang phóng sinh, làm mát tuyệt vời cho các cuộn dây bọc đồng áp cao",
        "Điểm cháy chớp an toàn kín kẹt > 140°C giảm bay hơi dầu",
        "Kháng oxy hóa rỉ axít rã cáp nhờ chất ức chế thụ động DBPC"
      ],
      applications: "Máy biến áp cao trung hạ thế cung cấp điện năng nhà xưởng, trạm truyền tải truyền lực vùng sâu",
      note: "⚠ Khách hàng cần đo độ phóng điện áp đánh thủng định kỳ mỗi năm đảm bảo cách điện bồn lưu thông",
      status: "Liên hệ báo giá"
    },
    {
      id: 25,
      group: "Dầu & mỡ chuyên dụng",
      name: "Dầu trượt máy công cụ (Slideway Oil - Chống giật Stick-Slip)",
      brands: {
        "Shell": "Tonna S3 M 68 / 220",
        "Mobil": "Vactra No.2 / No.4",
        "Castrol": "Magna BD 68"
      },
      viscosity: "ISO VG 32 / 68 / 220",
      standards: ["ISO 6743-13 G Slideway Class"],
      features: [
        "Thiết chế bám dính vượt bực ko trôi chảy tuột trên trục ray đứng dầm dập",
        "Loại bỏ hiện tượng nhảy số rung giật Stick-slip đảm bảo dung sai micron gia công CNC",
        "Tự xả phân bạt nước làm mát dầu pha ko kết keo bết rãnh dẫn"
      ],
      applications: "Các bàn dập ngang dọc CNC tỳ phẳng mượt ray đúc sắt nguyên khối định vị chuông tiện",
      note: "⚠ Luôn lau chùi bụi bẩn bám dọc ray trượt trước khi bơm dòng nhớt slideway mới",
      status: "Còn hàng"
    },
    // --- NHÓM 9: THIẾT BỊ & PHỤ KIỆN BÔI TRƠN ---
    {
      id: 26,
      group: "Dầu & mỡ chuyên dụng",
      name: "Bơm mỡ tay / Bơm mỡ khí nén (Grease Gun - Thiết bị phụ trợ)",
      brands: {
        "SKF": "LAGF 18 / LAGG 8",
        "Lincoln": "Lincoln Hand Gun Series",
        "Fuchs": "Reiner System"
      },
      pressure: "Gia cường tạo lực nén ráo lên tới 700 bar thông tắc vú mỡ dập rơ",
      cartridge: "Chén mỡ tiêu chuẩn phổ dụng 400g / 500g đựng bọc sẵn gọn ghẽ",
      features: [
        "Đầu vòi kết nối ren mút chuẩn mâm Hydraulic Nipple DIN 71412 xốc chắc",
        "Đồng hồ kĩ thuật báo áp suất nạp an toàn",
        "Ống vòi dẻo gối ngách sâu dài 500mm tiện dụng"
      ],
      applications: "Bơm tra thủ công cho từng cốc vú mỡ bôi xích ròng rọc, các gối đỡ động cơ xa trung tâm tự động",
      status: "Còn hàng"
    },
    {
      id: 27,
      group: "Dầu & mỡ chuyên dụng",
      name: "Hệ thống bôi trơn tập trung tự động (Automatic Lubrication System)",
      brands: {
        "SKF": "Lincoln Progressive System",
        "Graco": "G3 Series Pro"
      },
      features: [
        "Tự kiểm soát phân bổ đúng lượng mỡ - đúng vị trí - đúng chu trình đếm",
        "Chứng minh giảm lãng phí tiêu hao mỡ xả ra môi trường từ 30-50%",
        "Hệ thống tự ngắt và rú còi cảnh báo nếu có đường ống nghẹt bít vú mỡ",
        "Truyền dữ liệu không dây Modbus / SCADA giám sát hầm trạm bãi"
      ],
      applications: "Bãi máy rải nghiền xi măng quay liên tục, các cần trục bốc dỡ tháp lớn bến cảng hàng hải",
      note: "⚠ Khấu hao ROI hoàn vốn cực mau dưới 12 tháng do triệt hạ hẳn số giờ công dừng máy vì kẹt gối khét dập vỡ vòng bi",
      status: "Liên hệ tư vấn thiết kế"
    }
  ]
};

// Helper utilities for visualization
export function mdLabel(medium: string): string {
  switch (medium) {
    case "Khí nén":
      return "🌪️ Khí Nén";
    case "Dầu thủy lực":
      return "💧 Dầu Thủy Lực";
    case "Nước":
      return "🌊 Nước & Inox";
    default:
      return medium;
  }
}
