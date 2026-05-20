export interface FluidPowerProduct {
  id: number;
  group:
    | "Khí nén - Nguồn lực"
    | "Van khí nén"
    | "Xi lanh khí nén"
    | "Phụ kiện đường ống khí nén"
    | "Thủy lực - Bơm & Motor"
    | "Van thủy lực"
    | "Xi lanh thủy lực"
    | "Phụ kiện đường ống thủy lực"
    | "Lọc & Làm sạch";
  name: string;
  brands?: string[];
  pressure?: string;
  capacity?: string;
  power?: string;
  features: string[];
  applications: string;
  note?: string;
  status: "Còn hàng" | "Liên hệ báo giá" | "Liên hệ";
  standards?: string[];
  material?: string;
  pressure_dew_point?: string;
  port_size?: string;
  pressure_range?: string;
  filter_grade?: string;
  type?: string;
  actuation?: string;
  voltage?: string;
  set_pressure?: string;
  bore?: string;
  stroke?: string;
  mounting?: string;
  rotation?: string;
  torque?: string;
  tube_OD?: string;
  OD_x_ID?: string;
  color?: string;
  range?: string;
  dial?: string;
  connection?: string;
  grade?: string;
  displacement?: string;
  speed?: string;
  fluid?: string;
  control?: string;
  flow?: string;
  center_type?: string;
  flow_range?: string;
  hysteresis?: string;
  seal_material?: string;
  stages?: string;
  max_stroke?: string;
  ID?: string;
  temp?: string;
  size?: string;
  OD?: string;
  wall_thickness?: string;
  surface?: string;
  filtration?: string;
  bypass_valve?: string;
}

export interface FluidPowerCatalog {
  category: "Vật Tư Khí Nén - Thủy Lực";
  filters: {
    by_group: string[];
    by_brand: string[];
    by_pressure: string[];
    by_medium: string[];
  };
  products: FluidPowerProduct[];
}

export const FLUID_POWER_DATA: FluidPowerCatalog = {
  category: "Vật Tư Khí Nén - Thủy Lực",
  filters: {
    by_group: [
      "Tất cả",
      "Khí nén - Nguồn lực",
      "Van khí nén",
      "Xi lanh khí nén",
      "Phụ kiện đường ống khí nén",
      "Thủy lực - Bơm & Motor",
      "Van thủy lực",
      "Xi lanh thủy lực",
      "Phụ kiện đường ống thủy lực",
      "Lọc & Làm sạch"
    ],
    by_brand: [
      "Tất cả",
      "SMC",
      "Festo",
      "Parker",
      "Bosch Rexroth",
      "Hydac",
      "Norgren",
      "CKD",
      "Atlas Copco",
      "Kaeser",
      "Ingersoll Rand",
      "Boge",
      "Sullair",
      "Beko",
      "Wika",
      "Wise",
      "Bourdon",
      "Eaton Vickers",
      "Yuken",
      "Eaton",
      "Danfoss",
      "Sun Hydraulics",
      "Moog",
      "Gates",
      "Manuli",
      "Alfagomma",
      "Stäubli",
      "Faster",
      "Pall",
      "Donaldson"
    ],
    by_pressure: [
      "Tất cả",
      "Thấp áp (≤ 10 bar)",
      "Trung áp (10-250 bar)",
      "Cao áp (250-700 bar)"
    ],
    by_medium: ["Tất cả", "Khí nén", "Dầu thủy lực", "Nước"]
  },
  products: [
    // ============================
    // PHẦN I: KHÍ NÉN (Pneumatics)
    // ============================
    // --- NHÓM 1: NGUỒN LỰC KHÍ NÉN ---
    {
      id: 1,
      group: "Khí nén - Nguồn lực",
      name: "Máy nén khí trục vít (Screw Air Compressor)",
      brands: ["Atlas Copco", "Kaeser", "Ingersoll Rand", "Boge"],
      pressure: "7 bar / 8 bar / 10 bar / 13 bar",
      capacity: "0.5 m³/min - 100 m³/min",
      power: "3 kW - 315 kW",
      features: [
        "Biến tần VFD tiết kiệm điện 20-35%",
        "Hệ thống làm mát bằng dầu / không dầu",
        "Bộ điều khiển thông minh Elektronikon"
      ],
      applications: "Cung cấp khí nén cho toàn bộ hệ thống sản xuất",
      note: "⚠ Bảo trì định kỳ: thay lọc dầu 2000h, lọc khí 4000h",
      status: "Liên hệ báo giá"
    },
    {
      id: 2,
      group: "Khí nén - Nguồn lực",
      name: "Bình chứa khí nén (Air Receiver Tank)",
      brands: ["Hoàng Gia Khang OEM"],
      standards: ["ASME Section VIII", "EN 286-1", "TCVN 8366"],
      pressure: "8 bar / 10 bar / 13 bar",
      capacity: "100L / 250L / 500L / 1000L / 2000L",
      material: "Thép carbon SA516 / Inox 304",
      features: ["Van an toàn PRV", "Van xả nước tự động", "Đồng hồ áp suất"],
      applications: "Ổn định áp suất hệ thống khí nén",
      note: "⚠ Kiểm định áp lực định kỳ theo QCVN 01:2008/BLĐTBXH",
      status: "Liên hệ báo giá"
    },
    {
      id: 3,
      group: "Khí nén - Nguồn lực",
      name: "Máy sấy khí nén lạnh (Refrigerated Air Dryer)",
      brands: ["Atlas Copco", "Kaeser", "Sullair", "Beko"],
      pressure_dew_point: "+3°C / +7°C (PDP)",
      capacity: "0.5 m³/min - 100 m³/min",
      features: [
        "Bộ trao đổi nhiệt Air-to-Air + Air-to-Refrigerant",
        "Van bypass tự động",
        "Hiển thị điểm sương (Dew Point)"
      ],
      applications: "Loại ẩm khí nén, bảo vệ van và xi lanh khỏi ăn mòn",
      note: "⚠ PDP +3°C cho dây chuyền sơn, thực phẩm yêu cầu khí khô",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 2: BỘ LỌC - ĐIỀU ÁP - BÔI TRƠN (FRL Unit) ---
    {
      id: 4,
      group: "Khí nén - Nguồn lực",
      name: "Bộ FRL (Filter - Regulator - Lubricator)",
      brands: ["SMC AC Series", "Festo MS Series", "Parker B Series"],
      port_size: "G1/8\" / G1/4\" / G3/8\" / G1/2\" / G3/4\" / G1\"",
      pressure_range: "0.05 - 1.0 MPa",
      filter_grade: "5μm / 25μm / 40μm",
      features: [
        "Lọc hạt bụi + tách nước tự động",
        "Van điều áp có đồng hồ",
        "Bộ nhỏ dầu tự động (Mist Lubricator)"
      ],
      applications: "Xử lý khí đầu vào thiết bị khí nén, bảo vệ van & xi lanh",
      note: "⚠ Vệ sinh bowl lọc mỗi 500h vận hành",
      status: "Còn hàng"
    },
    // --- NHÓM 3: VAN KHÍ NÉN (Pneumatic Valves) ---
    {
      id: 5,
      group: "Van khí nén",
      name: "Van điện từ khí nén (Solenoid Valve)",
      brands: ["SMC SY/VF Series", "Festo MFH/CPE", "Parker", "CKD"],
      type: "2/2 - 3/2 - 4/2 - 5/2 - 5/3",
      actuation: "Điện từ 1 đầu / 2 đầu (Single/Double)",
      voltage: "AC 110V / 220V / DC 12V / 24V",
      port_size: "G1/8\" - G1\"",
      pressure: "0 - 1.0 MPa",
      features: ["IP65 chống bụi nước", "Thời gian đáp ứng < 20ms"],
      applications: "Điều khiển đóng mở xi lanh, cơ cấu chấp hành tự động",
      status: "Còn hàng"
    },
    {
      id: 6,
      group: "Van khí nén",
      name: "Van tiết lưu một chiều (Flow Control Valve)",
      brands: ["SMC AS Series", "Festo GRLA", "Parker"],
      type: "Tiết lưu cấp khí (Meter-in) / Tiết lưu xả khí (Meter-out)",
      port_size: "M5 / G1/8\" / G1/4\" / G3/8\" / G1/2\"",
      pressure: "0.05 - 1.0 MPa",
      features: [
        "Thiết kế dạng ren bắt trực tiếp vào xi lanh",
        "Núm xoay điều chỉnh lưu lượng có khóa định vị",
        "Cơ cấu phản hồi mượt mà không dơ lắc"
      ],
      applications: "Điều chỉnh tốc độ xi lanh khí nén",
      status: "Còn hàng"
    },
    {
      id: 7,
      group: "Van khí nén",
      name: "Van an toàn / Tràn áp (Relief Valve - Pneumatic)",
      brands: ["SMC", "Festo", "Parker"],
      set_pressure: "0.1 - 1.0 MPa",
      port_size: "G1/4\" - G1\"",
      features: [
        "Cơ cấu lò xo xả áp nhanh nhạy",
        "Thân đồng thau / thép không gỉ",
        "Lắp ren truyền thống dễ sửa chữa"
      ],
      applications: "Bảo vệ hệ thống khỏi quá áp, xả an toàn",
      note: "⚠ Kiểm tra và hiệu chuẩn áp suất tác động mỗi 6 tháng",
      status: "Còn hàng"
    },
    // --- NHÓM 4: XI LANH KHÍ NÉN (Pneumatic Cylinders) ---
    {
      id: 8,
      group: "Xi lanh khí nén",
      name: "Xi lanh khí nén tiêu chuẩn (Standard Pneumatic Cylinder)",
      brands: ["SMC C85/C95/CA2", "Festo DNC/DSBC", "Parker P1D"],
      standards: ["ISO 15552", "ISO 6432"],
      bore: "Ø8mm - Ø320mm",
      stroke: "10mm - 2000mm",
      pressure: "0.05 - 1.0 MPa",
      mounting: "Đầu trước/sau / Mặt bích / Chân đế / Khớp xoay",
      features: ["Gioăng cao su NBR/FKM", "Cảm biến vị trí từ tính"],
      applications: "Cơ cấu kẹp, đẩy, nâng hạ trong dây chuyền tự động",
      status: "Còn hàng"
    },
    {
      id: 9,
      group: "Xi lanh khí nén",
      name: "Xi lanh khí nén compact (Compact Cylinder)",
      brands: ["SMC CQ2", "Festo ADVU/AEVU", "Parker"],
      standards: ["ISO 21287"],
      bore: "Ø12mm - Ø100mm",
      stroke: "5mm - 100mm",
      features: ["Không gian lắp đặt nhỏ gọn", "Lực đẩy cao", "Tích hợp rãnh trượt cảm biến từ"],
      applications: "Robot, jig kẹp chi tiết, không gian hẹp",
      status: "Còn hàng"
    },
    {
      id: 10,
      group: "Xi lanh khí nén",
      name: "Xi lanh quay khí nén (Rotary Actuator)",
      brands: ["SMC CRB/CRBU", "Festo DSM/DRRD", "Parker"],
      rotation: "90° / 180° / 270° / 360°",
      torque: "0.1 Nm - 500 Nm",
      pressure: "0.1 - 0.9 MPa",
      features: [
        "Cánh gạt quay đơn/kép mô-men mượt",
        "Khả năng hấp thụ shock cơ học tốt",
        "Góc xoay điều chỉnh tự do"
      ],
      applications: "Lật chi tiết, mở nắp, cơ cấu xoay trong tự động hóa",
      status: "Còn hàng"
    },
    // --- NHÓM 5: PHỤ KIỆN ĐƯỜNG ỐNG KHÍ NÉN ---
    {
      id: 11,
      group: "Phụ kiện đường ống khí nén",
      name: "Khớp nối nhanh khí nén (Push-in Fitting / Quick Connector)",
      brands: ["SMC KQ2", "Festo QS", "Parker Prestolok", "Norgren"],
      material: "Nhựa POM / Đồng thau / Inox 316",
      tube_OD: "Ø4 / Ø6 / Ø8 / Ø10 / Ø12 / Ø16mm",
      pressure: "0 - 1.0 MPa",
      type: "Thẳng / L / T / Y / Giảm / Đầu bịt",
      features: [
        "Cơ chế bấm kẹp giữ ống siêu chắc chắn",
        "Vòng tháo nhanh tháo dỡ tiện lợi",
        "Có ren phủ keo Teflon chống rò rỉ khí"
      ],
      applications: "Kết nối đường ống khí nén nhanh không cần dụng cụ",
      status: "Còn hàng"
    },
    {
      id: 12,
      group: "Phụ kiện đường ống khí nén",
      name: "Ống khí nén (Pneumatic Tubing)",
      brands: ["SMC", "Festo", "Parker"],
      type: "Polyurethane (PU) / Nylon PA / Polyethylene (PE)",
      OD_x_ID: "4x2.5 / 6x4 / 8x6 / 10x8 / 12x10 / 16x12mm",
      pressure: "Đến 1.2 MPa",
      color: "Trong suốt / Đen / Xanh / Đỏ / Vàng",
      features: [
        "Khả năng co giãn đàn hồi chống xoắn cực tốt",
        "Kháng dầu hóa chất mài mòn cao",
        "Sai số đường kính ngoài ±0.1mm chuẩn khớp nhanh"
      ],
      applications: "Dẫn khí nén giữa các thiết bị, xi lanh, van",
      status: "Còn hàng"
    },
    {
      id: 13,
      group: "Phụ kiện đường ống khí nén",
      name: "Đồng hồ áp suất khí nén (Pressure Gauge)",
      brands: ["Wika", "Wise", "Bourdon"],
      standards: ["EN 837-1"],
      range: "0-4 / 0-6 / 0-10 / 0-16 bar",
      dial: "Ø40 / Ø63 / Ø100mm",
      connection: "G1/4\" / G1/2\" (bottom / back)",
      grade: "Cấp chính xác 1.6 / 2.5",
      features: [
        "Vỏ inox 304 bền đẹp",
        "Mặt kính an toàn cường lực chống nứt",
        "Chân kết nối bằng đồng thau chuẩn ren BSP"
      ],
      applications: "Theo dõi áp suất hệ thống, điểm đo kiểm soát",
      note: "⚠ Hiệu chuẩn đồng hồ áp suất mỗi 12 tháng",
      status: "Còn hàng"
    },
    // ================================
    // PHẦN II: THỦY LỰC (Hydraulics)
    // ================================
    // --- NHÓM 6: BƠM & MOTOR THỦY LỰC ---
    {
      id: 14,
      group: "Thủy lực - Bơm & Motor",
      name: "Bơm bánh răng thủy lực (Gear Pump)",
      brands: ["Bosch Rexroth", "Parker", "Eaton Vickers", "Yuken"],
      type: "Bánh răng ngoài (External) / Bánh răng trong (Internal)",
      displacement: "1 cc/rev - 250 cc/rev",
      pressure: "Đến 250 bar (liên tục) / 280 bar (đỉnh)",
      speed: "500 - 4000 rpm",
      fluid: "Dầu khoáng ISO VG 46 / 68",
      features: [
        "Cơ cấu bánh răng nghiêng ăn khớp êm nhẹ",
        "Vỏ hợp kim nhôm đúc chịu lực cao",
        "Ổ đỡ bạc lót tự bôi trơn"
      ],
      applications: "Hệ thống thủy lực áp suất thấp-trung, máy ép, nâng hạ",
      status: "Liên hệ báo giá"
    },
    {
      id: 15,
      group: "Thủy lực - Bơm & Motor",
      name: "Bơm piston hướng trục (Axial Piston Pump)",
      brands: ["Bosch Rexroth A10V/A4V", "Parker PV", "Eaton 5420/5433"],
      displacement: "18 - 500 cc/rev",
      pressure: "Đến 420 bar (liên tục) / 480 bar (đỉnh)",
      control: "Load Sensing / Pressure Compensator / Constant Power",
      features: [
        "Lưu lượng thay đổi (Variable Displacement)",
        "Hiệu suất thể tích > 95%",
        "Khả năng chịu dòng tải thay đổi nhanh"
      ],
      applications: "Máy xây dựng, press thủy lực, hệ thống servo thủy lực",
      note: "⚠ Lọc dầu ≤ 10μm, độ sạch dầu ISO 4406 ≤ 17/15/12",
      status: "Liên hệ báo giá"
    },
    {
      id: 16,
      group: "Thủy lực - Bơm & Motor",
      name: "Motor thủy lực (Hydraulic Motor)",
      brands: ["Bosch Rexroth", "Parker", "Eaton", "Danfoss"],
      type: "Bánh răng / Piston hướng trục / Cánh gạt",
      displacement: "5 - 1000 cc/rev",
      pressure: "Đến 420 bar",
      torque: "10 Nm - 5000 Nm",
      features: [
        "Khởi động mô-men xoắn lớn, vận hành mượt mà",
        "Có van trích hồi dầu tích hợp",
        "Phù hợp cho cả đảo chiều xoay liên tục"
      ],
      applications: "Truyền động quay tốc độ thấp - mô-men cao, cẩu, máy nghiền",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 7: VAN THỦY LỰC (Hydraulic Valves) ---
    {
      id: 17,
      group: "Van thủy lực",
      name: "Van an toàn thủy lực (Relief Valve)",
      brands: ["Bosch Rexroth DB/DBW", "Parker RD/RDH", "Sun Hydraulics"],
      type: "Trực tiếp (Direct Acting) / Gián tiếp (Pilot Operated)",
      set_pressure: "10 - 350 bar",
      flow: "Đến 300 L/min",
      mounting: "Subplate / Cartridge / Inline",
      features: [
        "Khống chế giữ áp ổn định chuẩn sai số < 1%",
        "Tiếng ồn hoạt động cực nhỏ",
        "Tích hợp nút hiệu chỉnh lục giác bảo mật"
      ],
      applications: "Bảo vệ bơm và hệ thống khỏi quá áp",
      note: "⚠ Kiểm tra áp suất tác động 6 tháng/lần",
      status: "Còn hàng"
    },
    {
      id: 18,
      group: "Van thủy lực",
      name: "Van điều hướng thủy lực (Directional Control Valve)",
      brands: ["Bosch Rexroth 4WE/4WMM", "Parker D1VW", "Yuken DSG"],
      type: "4/2 / 4/3 / 6/2 / 6/3",
      actuation: "Tay gạt / Điện từ 12V-24VDC / Thủy lực Pilot",
      pressure: "Đến 350 bar",
      flow: "10 - 500 L/min",
      center_type: "Tandem / Open / Closed / Float",
      features: [
        "Ổn định chuyển mạch Spool êm ái",
        "Cuộn hút solenoid đúc nhựa epoxy chống cháy",
        "Thân đúc gang xám bền bỉ chịu tải nặng"
      ],
      applications: "Điều khiển chiều chuyển động xi lanh, motor thủy lực",
      status: "Còn hàng"
    },
    {
      id: 19,
      group: "Van thủy lực",
      name: "Van tiết lưu thủy lực (Flow Control Valve)",
      brands: ["Bosch Rexroth 2FRM", "Parker FC", "Sun Hydraulics"],
      type: "Một chiều (check) / Hai chiều / Bù áp (Pressure Compensated)",
      flow_range: "0.05 - 400 L/min",
      pressure: "Đến 350 bar",
      features: [
        "Khả năng bù nhiệt sai khác lưu lượng dầu",
        "Núm xoay bước tinh chỉnh định lượng chuẩn xác",
        "Độ chống rò rỉ lọt khí hoàn hảo"
      ],
      applications: "Điều chỉnh tốc độ xi lanh thủy lực chính xác",
      status: "Còn hàng"
    },
    {
      id: 20,
      group: "Van thủy lực",
      name: "Van cân bằng / Hãm tải (Counterbalance Valve)",
      brands: ["Sun Hydraulics", "Bosch Rexroth DBDH", "Parker"],
      set_pressure: "30 - 420 bar",
      flow: "Đến 250 L/min",
      features: [
        "Khống chế tụt trọng lực cực nhạy",
        "Tỉ lệ mở hãm từ 3:1 đến 10:1 hành trình mượt",
        "Thân bọc chống gỉ sét tiêu chuẩn"
      ],
      applications: "Hãm tải trọng treo, chống tụt tải xi lanh đứng",
      note: "⚠ Bắt buộc dùng cho xi lanh nâng hạ tải trọng lớn",
      status: "Còn hàng"
    },
    {
      id: 21,
      group: "Van thủy lực",
      name: "Van servo / Tỉ lệ thủy lực (Servo / Proportional Valve)",
      brands: ["Bosch Rexroth 4WRPH", "Moog D633", "Parker D1FP"],
      type: "Servo (độ chính xác cao) / Proportional (điều khiển điện tử)",
      pressure: "Đến 350 bar",
      hysteresis: "< 0.1% (servo) / < 0.5% (proportional)",
      features: [
        "Điều khiển vị trí / tốc độ / lực chính xác",
        "Tích hợp cảm biến LVDT",
        "Giao tiếp ±10V / 4-20mA / CAN bus"
      ],
      applications: "Hệ thống servo thủy lực CNC, máy thử vật liệu, mô phỏng",
      note: "⚠ Độ sạch dầu yêu cầu ISO 4406 ≤ 15/12/9",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 8: XI LANH THỦY LỰC (Hydraulic Cylinders) ---
    {
      id: 22,
      group: "Xi lanh thủy lực",
      name: "Xi lanh thủy lực tiêu chuẩn (Standard Hydraulic Cylinder)",
      brands: ["Bosch Rexroth CDL1", "Parker CB/CD", "Eaton"],
      standards: ["ISO 6020-2", "ISO 6022", "NFPA T3.6.7"],
      bore: "Ø25mm - Ø500mm",
      stroke: "50mm - 6000mm",
      pressure: "Đến 250 bar (liên tục) / 350 bar (đỉnh)",
      mounting: "Mắt trước/sau / Mặt bích / Chân đế / Trunnion",
      seal_material: "NBR / FKM (Viton) / PTFE",
      features: [
        "Rod piston mạ crom dày tối thiểu 25μm chống ăn mòn",
        "Hệ thống gioăng phớt Parker nhập khẩu siêu chịu áp",
        "Cơ chế giảm chấn Cushioning 2 đầu êm ái"
      ],
      applications: "Máy ép, kẹp đồ gá, nâng hạ tải nặng công nghiệp",
      note: "⚠ Kiểm tra gioăng định kỳ, tránh để cần piston bị xước",
      status: "Liên hệ báo giá"
    },
    {
      id: 23,
      group: "Xi lanh thủy lực",
      name: "Xi lanh thủy lực tầng / ống lồng (Telescopic Cylinder)",
      brands: ["Hoàng Gia Khang Custom"],
      stages: "2 tầng / 3 tầng / 4 tầng",
      bore: "Ø50mm - Ø300mm",
      max_stroke: "Đến 8000mm",
      pressure: "Đến 200 bar",
      features: [
        "Vỏ ống thép cứng đúc nguyên bản chịu áp lớn",
        "Các tầng ống thu gọn tối ưu chiều dài lắp ráp",
        "Cảm biến vị trí tầng kỹ thuật số thông minh"
      ],
      applications: "Ben xe tải, nâng thùng xe, cổng trục di động",
      status: "Liên hệ báo giá"
    },
    // --- NHÓM 9: PHỤ KIỆN ĐƯỜNG ỐNG THỦY LỰC ---
    {
      id: 24,
      group: "Phụ kiện đường ống thủy lực",
      name: "Ống mềm thủy lực cao áp (Hydraulic Hose)",
      brands: ["Parker 471/482", "Gates MegaSys", "Eaton Weatherhead"],
      standards: ["SAE J517", "EN 853/857/856"],
      type: "1SN / 2SN / 4SP / 4SH / R15",
      pressure: "Đến 700 bar (tùy loại)",
      ID: "Ø6mm - Ø50mm",
      temp: "-40°C đến +120°C",
      features: [
        "Gia cố bện thép 1-2-4-6 lớp xoắn cực dai",
        "Lớp bọc cao su kháng ozon, mài mòn, thời tiết dẻo dai",
        "Thử nghiệm va đập áp suất xung đạt 1,000,000 chu kỳ"
      ],
      applications: "Kết nối thiết bị thủy lực, máy xây dựng, press",
      note: "⚠ Thay thế định kỳ 2 năm hoặc khi phồng, nứt, chảy dầu",
      status: "Còn hàng"
    },
    {
      id: 25,
      group: "Phụ kiện đường ống thủy lực",
      name: "Đầu nối ống thủy lực (Hydraulic Fitting)",
      brands: ["Parker", "Manuli", "Alfagomma"],
      type: "Crimped / Reusable / BSP / JIC / ORFS / NPT / SAE",
      material: "Thép carbon mạ kẽm / Inox 316",
      pressure: "Đến 700 bar",
      size: "DN6 - DN50",
      features: [
        "Đúc rèn nguội thép nguyên khối chịu áp cực lớn",
        "Ren vặn chính xác đạt dung sai ISO cấp A",
        "Chống ăn mòn muối phun sương cực đỉnh"
      ],
      applications: "Đầu nối ống mềm, ống cứng thủy lực",
      status: "Còn hàng"
    },
    {
      id: 26,
      group: "Phụ kiện đường ống thủy lực",
      name: "Ống thép thủy lực (Hydraulic Steel Tube)",
      brands: ["Benteler", "Hoằng Chính"],
      standards: ["DIN 2391 / EN 10305-4"],
      material: "Thép carbon ST 37.4 / ST 52 (E355)",
      OD: "Ø6mm - Ø50mm",
      wall_thickness: "1mm - 5mm",
      surface: "Tẩy axit + tráng phosphate hoặc kẽm",
      pressure: "Đến 700 bar (tùy OD và wall)",
      features: [
        "Đường kính trong trơn bóng cực mịn giảm ma sát dầu",
        "Khả năng co uốn nguội dễ dàng không bẹp nứt",
        "Không rỉ bám dính cặn bẩn"
      ],
      applications: "Đường ống thủy lực cố định trong máy và hệ thống",
      status: "Còn hàng"
    },
    {
      id: 27,
      group: "Phụ kiện đường ống thủy lực",
      name: "Khớp nối nhanh thủy lực (Quick Disconnect Coupling)",
      brands: ["Parker Hansen", "Stäubli", "Faster"],
      type: "Push-pull / Screw / Flat Face (FFQC)",
      pressure: "Đến 700 bar",
      size: "DN6 - DN25",
      features: [
        "Ngắt kết nối không tràn dầu (spill-free)",
        "Khóa an toàn chống tháo nhầm",
        "Tích hợp van đóng bảo vệ hồi lưu đầu nối"
      ],
      applications: "Thay đổi thiết bị thủy lực nhanh, máy xây dựng, nông nghiệp",
      status: "Còn hàng"
    },
    // --- NHÓM 10: LỌC & BỂ DẦU THỦY LỰC ---
    {
      id: 28,
      group: "Lọc & Làm sạch",
      name: "Lọc dầu thủy lực (Hydraulic Filter)",
      brands: ["Hydac", "Parker Racor", "Pall", "Donaldson"],
      type: "Lọc hút (Suction) / Lọc áp cao (High Pressure) / Lọc hồi (Return)",
      filtration: "3μm / 6μm / 10μm / 25μm (β≥200)",
      pressure: "Đến 420 bar (lọc áp cao)",
      bypass_valve: "3.5 / 6 / 10 bar",
      features: [
        "Chỉ thị tắc lọc (Clogging Indicator)",
        "Cảm biến điện báo tắc",
        "Lõi lọc sợi thủy tinh đa lớp gom bụi gấp bách lần thông dụng"
      ],
      applications: "Duy trì độ sạch dầu ISO 4406, bảo vệ bơm và van",
      note: "⚠ Thay lõi lọc khi chỉ thị đỏ hoặc mỗi 2000h",
      status: "Còn hàng"
    },
    {
      id: 29,
      group: "Lọc & Làm sạch",
      name: "Bể dầu thủy lực (Hydraulic Reservoir / Tank)",
      brands: ["Hoàng Gia Khang Custom"],
      material: "Thép carbon sơn epoxy / Inox 304",
      capacity: "20L - 2000L",
      features: [
        "Nắp thông hơi lọc bụi 10μm",
        "Que thăm dầu + đồng hồ mức dầu",
        "Bộ gia nhiệt (Heater) kèm thermostat",
        "Cửa vệ sinh bể dầu tiện ích"
      ],
      applications: "Chứa và duy trì dầu thủy lực trong hệ thống",
      status: "Liên hệ báo giá"
    },
    {
      id: 30,
      group: "Lọc & Làm sạch",
      name: "Thiết bị lọc dầu tuần hoàn (Offline Filter Unit)",
      brands: ["Hydac MFU", "Parker", "Pall"],
      flow: "5 - 100 L/min",
      filtration: "1μm - 10μm",
      features: [
        "Hoạt động độc lập liên tục 24/7",
        "Không phụ thuộc máy chính hoạt động",
        "Đồng hồ đo độ sạch dầu online hiển thị sắc nét"
      ],
      applications: "Cải thiện độ sạch dầu từ ISO 20/18/15 xuống 15/13/10",
      note: "⚠ ROI: tăng tuổi thọ bơm và van thủy lực 3-5 lần",
      status: "Liên hệ báo giá"
    }
  ]
};
