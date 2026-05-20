export interface ToolProduct {
  id: number;
  group: "Máy cầm tay" | "Dụng cụ cắt gọt" | "Dụng cụ đo lường" | "Dụng cụ tháo lắp" | "Thiết bị nâng hạ" | "Dụng cụ khí nén";
  name: string;
  brands: string[];
  power_source?: string;
  capacity?: string;
  power?: string;
  features: string[];
  applications: string;
  status: "Còn hàng" | "Liên hệ báo giá" | "Liên hệ";
  disc_size?: string;
  torque_range?: string;
  drive_size?: string;
  note?: string;
  magnet_force?: string;
  standards?: string[];
  material?: string;
  size_range?: string;
  thread?: string;
  type?: string;
  TPI?: string;
  range?: string;
  resolution?: string;
  standard?: string;
  ratio?: string;
  max_temp?: string;
  accuracy?: string;
  lift_height?: string;
  stroke?: string;
  diameter?: string;
  SWL?: string;
  surface?: string;
  drive?: string;
  torque?: string;
  air_pressure?: string;
  nozzle?: string;
}

export interface ToolsCatalog {
  category: "Máy & Dụng Cụ";
  filters: {
    by_group: string[];
    by_brand: string[];
    by_power: string[];
  };
  products: ToolProduct[];
}

export const TOOLS_DATA: ToolsCatalog = {
  category: "Máy & Dụng Cụ",
  filters: {
    by_group: [
      "Tất cả",
      "Máy cầm tay",
      "Dụng cụ cắt gọt",
      "Dụng cụ đo lường",
      "Dụng cụ tháo lắp",
      "Thiết bị nâng hạ",
      "Dụng cụ khí nén"
    ],
    by_brand: [
      "Tất cả", "Bosch", "Makita", "Dewalt",
      "Mitutoyo", "Insize", "Yale", "SKF Tools", "Enerpac", "Dormer", "Starrett", "Ingersoll Rand"
    ],
    by_power: ["Tất cả", "Điện 220V", "Điện 380V", "Pin sạc", "Khí nén", "Thủ công"]
  },
  products: [
    // --- NHÓM MÁY CẦM TAY (Power Tools) ---
    {
      id: 1,
      group: "Máy cầm tay",
      name: "Máy khoan động lực (Rotary Hammer Drill)",
      brands: ["Bosch GBH", "Makita HR", "Dewalt D25"],
      power_source: "Điện 220V",
      capacity: "13mm - 32mm (bê tông)",
      power: "600W - 1500W",
      features: [
        "Chế độ khoan / đục SDS Plus / SDS Max",
        "Chống rung AVS (Anti-Vibration System)",
        "Hộp số 2 cấp tốc độ"
      ],
      applications: "Khoan bê tông, đục rãnh, lắp đặt neo vít công nghiệp",
      status: "Còn hàng"
    },
    {
      id: 2,
      group: "Máy cầm tay",
      name: "Máy mài góc (Angle Grinder)",
      brands: ["Bosch GWS", "Makita GA", "Dewalt DWE"],
      power_source: "Điện 220V",
      disc_size: "100mm / 115mm / 125mm / 180mm / 230mm",
      power: "720W - 2400W",
      features: [
        "Bảo vệ quá tải điện tử",
        "Khởi động mềm (Soft Start)",
        "Khóa trục nhanh SDS"
      ],
      applications: "Cắt thép, mài bavia, đánh bóng bề mặt kim loại",
      status: "Còn hàng"
    },
    {
      id: 3,
      group: "Máy cầm tay",
      name: "Máy siết bulong thủy lực (Hydraulic Torque Wrench)",
      brands: ["Enerpac", "Hytorc", "TorcUP"],
      power_source: "Thủ công",
      torque_range: "100 Nm - 100,000 Nm",
      drive_size: "1\" / 1.5\" / 2\" / 2.5\"",
      features: [
        "Độ chính xác ±3%",
        "Tự động dừng khi đạt mô-men",
        "Thiết kế nhỏ gọn vào được không gian hẹp"
      ],
      applications: "Siết bulong cường độ cao, mặt bích đường ống, thiết bị áp lực",
      note: "⚠ Cần hiệu chuẩn định kỳ theo ISO 6789",
      status: "Liên hệ báo giá"
    },
    {
      id: 4,
      group: "Máy cầm tay",
      name: "Máy khoan từ (Magnetic Drill)",
      brands: ["Fein", "Euroboor", "Nitto Kohki"],
      power_source: "Điện 220V",
      capacity: "Ø12mm - Ø100mm trên thép",
      magnet_force: "≥ 10,000N",
      features: [
        "Đế từ giữ chắc trên thép",
        "Tốc độ vô cấp",
        "Dùng với mũi khoan vành (Annular Cutter)"
      ],
      applications: "Khoan kết cấu thép tại chỗ, cầu trục, dầm thép",
      status: "Còn hàng"
    },
    // --- NHÓM DỤNG CỤ CẮT GỌT (Cutting Tools) ---
    {
      id: 5,
      group: "Dụng cụ cắt gọt",
      name: "Mũi khoan thép gió HSS (HSS Twist Drill Bit)",
      brands: ["Dormer", "Sandvik Coromant", "YG-1"],
      power_source: "Thủ công",
      standards: ["DIN 338", "DIN 340"],
      material: "HSS / HSS-Co5% / HSS-TiN coating",
      size_range: "Ø1mm - Ø50mm",
      features: [
        "Độ cứng cao, chịu nhiệt tốt",
        "Cơ cấu rãnh thoát phoi nhanh",
        "Phủ lớp TiN tăng tuổi thọ 3-4 lần"
      ],
      applications: "Khoan thép, gang, nhôm, inox",
      note: "⚠ HSS-Co dùng cho inox và thép cứng > 40 HRC",
      status: "Còn hàng"
    },
    {
      id: 6,
      group: "Dụng cụ cắt gọt",
      name: "Mũi taro ren (Machine Tap)",
      brands: ["Dormer", "OSG", "Emuge"],
      power_source: "Thủ công",
      standards: ["DIN 371", "DIN 374", "DIN 376"],
      material: "HSS / HSS-E / Carbide",
      thread: "Metric M2-M52 / BSP / UNC / UNF",
      features: [
        "Taro máy chính xác cao",
        "Bước ren chuẩn dung sai ISO",
        "Bề mặt hoàn thiện mịn đẹp"
      ],
      applications: "Taro ren trong lỗ, sản xuất cơ khí, bảo trì thiết bị",
      status: "Còn hàng"
    },
    {
      id: 7,
      group: "Dụng cụ cắt gọt",
      name: "Bàn ren (Die / Thread Cutting Die)",
      brands: ["Volkel", "Dormer", "Fanar"],
      power_source: "Thủ công",
      standards: ["DIN 223"],
      material: "HSS / HSS-E",
      thread: "Metric M3-M52 / BSP / UNC",
      features: [
        "Tạo bước ren ngoài vững chãi",
        "Chất liệu HSS siêu bền chịu mài mòn",
        "Bo góc thoát phoi chính xác"
      ],
      applications: "Tiện ren ngoài, phục hồi ren hỏng",
      status: "Còn hàng"
    },
    {
      id: 8,
      group: "Dụng cụ cắt gọt",
      name: "Lưỡi cưa sắt (Hacksaw Blade / Band Saw Blade)",
      brands: ["Lenox", "Starrett", "Bahco"],
      power_source: "Thủ công",
      type: "Cưa tay / Cưa vòng / Cưa kiếm",
      material: "HSS Bimetal",
      TPI: "14 / 18 / 24 / 32 TPI",
      features: [
        "Chế tạo bằng công nghệ lưỡng kim mềm dẻo",
        "Răng cưa siêu cứng chống mẻ giòn",
        "Tốc độ bứt nhanh không kẹt lưỡi"
      ],
      applications: "Cắt ống thép, thanh thép, profile nhôm",
      status: "Còn hàng"
    },
    // --- NHÓM DỤNG CỤ ĐO LƯỜNG (Measuring Tools) ---
    {
      id: 9,
      group: "Dụng cụ đo lường",
      name: "Thước cặp (Vernier Caliper / Digital Caliper)",
      brands: ["Mitutoyo", "Insize", "Vogel"],
      power_source: "Pin sạc",
      type: "Cơ (Vernier) / Đồng hồ / Điện tử (Digital)",
      range: "0-150mm / 0-200mm / 0-300mm / 0-600mm",
      resolution: "0.02mm (cơ) / 0.01mm (điện tử)",
      standard: "JIS B7507 / ISO 13225",
      features: [
        "Đo 4 chiều đa năng tiện dụng",
        "Cơ cấu trượt êm không dơ lắc",
        "Chống nước IP67 cho phân xưởng"
      ],
      applications: "Đo đường kính trong/ngoài, chiều sâu, bậc",
      note: "⚠ Hiệu chuẩn định kỳ 6 tháng/lần theo ISO 9001",
      status: "Còn hàng"
    },
    {
      id: 10,
      group: "Dụng cụ đo lường",
      name: "Panme đo ngoài (Outside Micrometer)",
      brands: ["Mitutoyo", "Insize", "Starrett"],
      power_source: "Pin sạc",
      range: "0-25 / 25-50 / 50-75 / 75-100mm",
      resolution: "0.01mm / 0.001mm (digital)",
      standard: "JIS B7502",
      features: [
        "Mặt đo cacbua chống mài mòn tốt",
        "Có cơ cấu bánh cóc (ratchet) khống chế lực",
        "Khung đo cách nhiệt sơn tĩnh điện"
      ],
      applications: "Đo chính xác đường kính trục, chiều dày chi tiết",
      status: "Còn hàng"
    },
    {
      id: 11,
      group: "Dụng cụ đo lường",
      name: "Đồng hồ so (Dial Indicator)",
      brands: ["Mitutoyo", "Insize", "Käfer"],
      power_source: "Thủ công",
      range: "0-5mm / 0-10mm",
      resolution: "0.01mm / 0.001mm",
      standard: "JIS B7503",
      features: [
        "Cơ cấu chuyển động bạc chân ngọc chịu lực mài mòn",
        "Bảo vệ chống shock cơ học lắp đặt vững",
        "Vòng xoay kim đo mượt"
      ],
      applications: "Kiểm tra độ đảo trục, căn chỉnh thiết bị, kiểm tra phẳng",
      status: "Còn hàng"
    },
    {
      id: 12,
      group: "Dụng cụ đo lường",
      name: "Súng đo nhiệt độ hồng ngoại (Infrared Thermometer)",
      brands: ["Fluke", "Testo", "UNI-T"],
      power_source: "Pin sạc",
      range: "-50°C đến +1500°C",
      ratio: "D:S = 12:1 đến 50:1",
      features: [
        "Laser định vị 2 tia chính xác vùng đo",
        "Độ phát xạ tùy chỉnh (Emissivity)",
        "Gửi dữ liệu Bluetooth thuận tiện"
      ],
      applications: "Kiểm tra vòng bi nóng, motor, đường điện, lò nhiệt",
      status: "Còn hàng"
    },
    // --- NHÓM DỤNG CỤ THÁO LẮP (Disassembly Tools) ---
    {
      id: 13,
      group: "Dụng cụ tháo lắp",
      name: "Cảo vòng bi (Bearing Puller)",
      brands: ["SKF TMMP", "Kukko", "Gedore"],
      power_source: "Thủ công",
      type: "Cảo 2 chấu / 3 chấu / Cảo trong / Cảo thủy lực",
      capacity: "Ø20mm - Ø300mm",
      features: [
        "Hàm cảo tôi cứng HRC 55-60 cực dẻo dai",
        "Trục ren T-steel chịu mô-men xoắn lớn",
        "Vận hành êm nhẹ chống vấp nứt"
      ],
      applications: "Tháo vòng bi, bạc lót, bánh răng, puly trên trục",
      note: "⚠ Không dùng búa đập trực tiếp vào vòng bi",
      status: "Còn hàng"
    },
    {
      id: 14,
      group: "Dụng cụ tháo lắp",
      name: "Dụng cụ gia nhiệt vòng bi (Induction Heater)",
      brands: ["SKF TIH", "Bega", "Timken"],
      power_source: "Điện 220V",
      max_temp: "120°C - 230°C",
      capacity: "Vòng bi đến Ø500mm / 50kg",
      features: [
        "Tự động ngắt theo nhiệt độ cài đặt",
        "Khử từ hoàn chỉnh (Demagnetize) sau gia nhiệt",
        "Hiển thị nhiệt độ real-time sắc nét"
      ],
      applications: "Lắp vòng bi nóng lên trục không gây biến dạng",
      note: "⚠ Phương pháp chuẩn ISO 15243 cho lắp vòng bi",
      status: "Liên hệ báo giá"
    },
    {
      id: 15,
      group: "Dụng cụ tháo lắp",
      name: "Bộ dụng cụ siết lực (Torque Wrench Set)",
      brands: ["Stahlwille", "Gedore", "Facom"],
      power_source: "Thủ công",
      type: "Click / Beam / Digital / Preset",
      range: "5-25 Nm / 20-100 Nm / 60-300 Nm / 100-600 Nm",
      accuracy: "±3% (ISO 6789 Class A)",
      features: [
        "Khóa cài đặt lực xiết chính xác chống dơ lệch",
        "Âm click rõ nét khi đạt giới hạn",
        "Chứng nhận hiệu chuẩn nhà máy đi kèm"
      ],
      applications: "Siết đúng mô-men bulong theo yêu cầu kỹ thuật",
      note: "⚠ Hiệu chuẩn mỗi 12 tháng hoặc 5000 lần siết",
      status: "Còn hàng"
    },
    // --- NHÓM THIẾT BỊ NÂNG HẠ (Lifting Equipment) ---
    {
      id: 16,
      group: "Thiết bị nâng hạ",
      name: "Pa lăng xích tay (Manual Chain Hoist)",
      brands: ["Yale", "CM", "Kito"],
      power_source: "Thủ công",
      capacity: "0.5T / 1T / 2T / 3T / 5T / 10T",
      lift_height: "3m / 6m / 12m",
      standard: "EN 13157 / ASME B30.16",
      features: [
        "Phanh tự động khi nhả tải kép",
        "Móc có chốt an toàn xoay 360",
        "Xích tải mạ cường lực đen chống mài mòn"
      ],
      applications: "Nâng hạ thiết bị trong xưởng, bảo trì máy móc",
      note: "⚠ Kiểm tra tải (Load Test) 1.25x SWL trước khi đưa vào sử dụng",
      status: "Còn hàng"
    },
    {
      id: 17,
      group: "Thiết bị nâng hạ",
      name: "Kích thủy lực (Hydraulic Jack)",
      brands: ["Enerpac", "Simplex", "Hi-Force"],
      power_source: "Thủ công",
      type: "Kích con đội / Kích chai / Kích tầng thấp",
      capacity: "2T / 5T / 10T / 20T / 50T / 100T",
      stroke: "100mm - 300mm",
      features: [
        "Lớp phủ piston chống gỉ xước cao",
        "Van an toàn xả quá tải tích hợp sẵn",
        "Kích cỡ mỏng dẹt thích ứng kẽ máy nhỏ"
      ],
      applications: "Nâng máy móc, căn chỉnh thiết bị, nắn thẳng kết cấu",
      status: "Còn hàng"
    },
    {
      id: 18,
      group: "Thiết bị nâng hạ",
      name: "Dây cáp thép / Dây cẩu (Wire Rope Sling)",
      brands: ["Chung Woo", "DSR", "Kiswire"],
      power_source: "Thủ công",
      standards: ["EN 13414-1", "ASME B30.9"],
      material: "Thép 6x36 / 6x19 WS",
      diameter: "Ø8mm - Ø52mm",
      SWL: "1T - 50T",
      surface: "Mạ kẽm / Inox 316",
      features: [
        "Bấm ống nhôm / đúc socket chịu cường lực kéo",
        "Khuyên cẩu lót khuyên tròn thép an toàn",
        "Hệ số an toàn 5:1 trở lên"
      ],
      applications: "Cẩu hàng nặng, bốc dỡ container, dầm nhấc giàn giáp",
      note: "⚠ Loại bỏ khi đứt > 10% sợi / biến dạng / ăn mòn sâu",
      status: "Còn hàng"
    },
    // --- NHÓM DỤNG CỤ KHÍ NÉN (Pneumatic Tools) ---
    {
      id: 19,
      group: "Dụng cụ khí nén",
      name: "Súng siết khí nén (Air Impact Wrench)",
      brands: ["Ingersoll Rand", "Chicago Pneumatic", "Atlas Copco"],
      power_source: "Khí nén",
      drive: "1/2\" / 3/4\" / 1\"",
      torque: "300 Nm - 3000 Nm",
      air_pressure: "6.2 bar (90 PSI)",
      features: [
        "Cơ cấu búa kép (twin hammer) truyền lực siêu mạnh",
        "Vỏ composite siêu nhẹ chống lạnh tay thợ",
        "Nút chỉnh 3 cấp độ lực mượt mà"
      ],
      applications: "Siết / tháo bulong nhanh, bảo trì xe, dây chuyền sản xuất",
      status: "Còn hàng"
    },
    {
      id: 20,
      group: "Dụng cụ khí nén",
      name: "Súng phun sơn (Spray Gun)",
      brands: ["DeVilbiss", "Sata", "Anest Iwata"],
      power_source: "Khí nén",
      type: "HVLP / LVLP / Conventional",
      nozzle: "1.0 / 1.3 / 1.4 / 1.7 / 2.0mm",
      features: [
        "Công nghệ phân tán tia siêu mịn chống chảy tràn sơn",
        "Kim béc bằng inox tôi cứng chống mòn hóa học",
        "Cốc sơn trọng lực tháo rời vệ sinh nhanh"
      ],
      applications: "Phun sơn công nghiệp, sơn chống gỉ, epoxy",
      status: "Còn hàng"
    }
  ]
};
