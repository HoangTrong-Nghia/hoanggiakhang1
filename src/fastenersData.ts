export interface FastenerProduct {
  id: number;
  group: "Bulong" | "Đai Ốc" | "Vít" | "Phụ Kiện";
  name: string;
  standards: string[];
  grades: string[];
  material: string[];
  size_range: string;
  length_range?: string;
  surface_treatment?: string[];
  applications: string;
  note?: string;
  status: "Còn hàng" | "Liên hệ báo giá" | "Liên hệ";
  brands?: string[];
  WLL?: string;
}

export interface FastenersCatalog {
  category: "Bulong - Đai Ốc - Vít";
  filters: {
    by_group: string[];
    by_standard: string[];
    by_grade: string[];
    by_material: string[];
  };
  products: FastenerProduct[];
}

export const FASTENERS_DATA: FastenersCatalog = {
  category: "Bulong - Đai Ốc - Vít",
  filters: {
    by_group: ["Tất cả", "Bulong", "Đai Ốc", "Vít", "Phụ Kiện"],
    by_standard: ["Tất cả", "DIN", "ISO", "ASTM", "JIS", "TCVN"],
    by_grade: ["Tất cả", "4.8", "8.8", "10.9", "12.9", "Inox 304", "Inox 316"],
    by_material: ["Tất cả", "Thép carbon", "Thép hợp kim", "Inox 304", "Inox 316"]
  },
  products: [
    // --- NHÓM BULONG ---
    {
      id: 1,
      group: "Bulong",
      name: "Bulong đầu lục giác (Hex Head Bolt)",
      standards: ["DIN 931", "DIN 933", "ISO 4014", "ISO 4017"],
      grades: ["4.8", "8.8", "10.9", "12.9"],
      material: ["Thép carbon", "Inox 304", "Inox 316"],
      size_range: "M6 - M64",
      length_range: "10mm - 300mm",
      surface_treatment: ["Mạ kẽm trắng", "Mạ kẽm vàng", "Phốt phát đen", "Inox tự nhiên"],
      applications: "Kết cấu thép, máy móc công nghiệp, cầu trục, khung nhà xưởng",
      note: "Cấp 8.8 phổ biến nhất cho kết cấu chịu lực",
      status: "Còn hàng"
    },
    {
      id: 2,
      group: "Bulong",
      name: "Bulong cường độ cao (High Strength Bolt)",
      standards: ["DIN 6914", "ISO 7411", "ASTM A325", "ASTM A490"],
      grades: ["10.9", "12.9"],
      material: ["Thép hợp kim"],
      size_range: "M12 - M36",
      length_range: "35mm - 250mm",
      surface_treatment: ["Phốt phát đen", "Mạ kẽm"],
      applications: "Kết cấu thép chịu lực cao, cầu, cổng trục, tháp công nghiệp",
      note: "Bắt buộc dùng kèm đai ốc và vòng đệm cường độ cao DIN 6915 + DIN 6916",
      status: "Còn hàng"
    },
    {
      id: 3,
      group: "Bulong",
      name: "Bulong móng (Foundation / Anchor Bolt)",
      standards: ["DIN 529", "ASTM F1554"],
      grades: ["4.8", "8.8"],
      material: ["Thép CT3", "Thép carbon"],
      size_range: "M16 - M100",
      length_range: "300mm - 2000mm",
      surface_treatment: ["Mạ kẽm nhúng nóng (HDG)", "Sơn chống gỉ epoxy"],
      applications: "Chân máy hạng nặng, móng thiết bị công nghiệp, trụ điện",
      note: "Mạ kẽm nhúng nóng HDG khuyến nghị cho môi trường ngoài trời",
      status: "Còn hàng"
    },
    {
      id: 4,
      group: "Bulong",
      name: "Bulong đầu chìm lục giác trong (Socket Head Cap Screw)",
      standards: ["DIN 912", "ISO 4762"],
      grades: ["8.8", "12.9"],
      material: ["Thép hợp kim", "Inox 304"],
      size_range: "M3 - M36",
      length_range: "5mm - 150mm",
      surface_treatment: ["Đen oxide", "Mạ kẽm", "Inox tự nhiên"],
      applications: "Máy CNC, khuôn mẫu, thiết bị chính xác, cơ cấu truyền động",
      note: "Cấp 12.9 dùng cho ứng dụng chịu lực cắt cao",
      status: "Còn hàng"
    },
    {
      id: 5,
      group: "Bulong",
      name: "Bulong U (U-Bolt)",
      standards: ["DIN 3570"],
      grades: ["4.8", "8.8"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M8 - M30",
      length_range: "50mm - 400mm",
      surface_treatment: ["Mạ kẽm trắng", "Inox tự nhiên"],
      applications: "Kẹp đường ống, giá đỡ ống công nghiệp, nhíp xe tải",
      status: "Còn hàng"
    },
    {
      id: 6,
      group: "Bulong",
      name: "Bulong mắt (Eye Bolt)",
      standards: ["DIN 580", "DIN 582"],
      grades: ["4.8", "8.8"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M8 - M48",
      WLL: "0.14T - 8T (tùy kích thước)",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Móc cẩu, treo thiết bị, nâng hạ máy móc",
      note: "Cần kiểm tra WLL (Working Load Limit) trước khi sử dụng nâng hạ",
      status: "Còn hàng"
    },
    // --- NHÓM ĐAI ỐC ---
    {
      id: 7,
      group: "Đai Ốc",
      name: "Đai ốc lục giác (Hex Nut)",
      standards: ["DIN 934", "ISO 4032", "ISO 4033"],
      grades: ["6", "8", "10", "Inox 304", "Inox 316"],
      material: ["Thép carbon", "Inox 304", "Inox 316"],
      size_range: "M4 - M64",
      surface_treatment: ["Mạ kẽm trắng", "Mạ kẽm vàng", "Đen", "Inox"],
      applications: "Dùng kèm bulong tất cả kết cấu công nghiệp",
      note: "Cấp đai ốc phải ≥ cấp bulong đi kèm",
      status: "Còn hàng"
    },
    {
      id: 8,
      group: "Đai Ốc",
      name: "Đai ốc hãm nylon (Nylon Insert Lock Nut)",
      standards: ["DIN 985", "DIN 982", "ISO 7042"],
      grades: ["6", "8", "Inox 304"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M4 - M36",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Chống tự nới lỏng trong môi trường rung động mạnh",
      note: "Không tái sử dụng sau khi tháo - khuyến cáo thay mới",
      status: "Còn hàng"
    },
    {
      id: 9,
      group: "Đai Ốc",
      name: "Đai ốc tròn hãm vòng bi (Bearing Lock Nut)",
      standards: ["DIN 981", "DIN 1804"],
      grades: ["Thép"],
      material: ["Thép carbon"],
      size_range: "M10 - M120",
      surface_treatment: ["Phốt phát đen", "Mạ dầu"],
      applications: "Hãm vòng bi trên trục, định vị ổ đỡ trục truyền động",
      note: "Dùng kèm vòng hãm khóa DIN 5406",
      status: "Còn hàng"
    },
    {
      id: 10,
      group: "Đai Ốc",
      name: "Đai ốc cánh bướm (Wing Nut)",
      standards: ["DIN 315"],
      grades: ["4.8", "Inox 304"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M4 - M20",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Xiết tay không cần dụng cụ, nắp bảo vệ, khuôn đúc",
      status: "Còn hàng"
    },
    {
      id: 11,
      group: "Đai Ốc",
      name: "Đai ốc lục giác cao (Hex Coupling Nut / Long Nut)",
      standards: ["DIN 6334"],
      grades: ["6", "8"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M6 - M36",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Nối dài thanh ren, bulong móng, điều chỉnh độ cao chân máy",
      status: "Còn hàng"
    },
    // --- NHÓM VÍT ---
    {
      id: 12,
      group: "Vít",
      name: "Vít đầu chìm Phillips (Pan Head Phillips Screw)",
      standards: ["DIN 7985", "ISO 7045"],
      grades: ["4.8", "Inox 304"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M3 - M12",
      length_range: "5mm - 80mm",
      surface_treatment: ["Mạ kẽm", "Đen", "Inox"],
      applications: "Tấm kim loại mỏng, vỏ máy, tủ điện, hộp điều khiển",
      status: "Còn hàng"
    },
    {
      id: 13,
      group: "Vít",
      name: "Vít hãm đầu bằng (Set Screw / Grub Screw)",
      standards: ["DIN 913", "DIN 916", "ISO 4026"],
      grades: ["8.8", "12.9"],
      material: ["Thép hợp kim"],
      size_range: "M3 - M24",
      length_range: "4mm - 50mm",
      surface_treatment: ["Đen oxide"],
      applications: "Hãm bánh răng, puly, khớp nối, bạc lót trên trục",
      note: "Cấp 12.9 cho ứng dụng chịu mô-men xoắn cao",
      status: "Còn hàng"
    },
    {
      id: 14,
      group: "Vít",
      name: "Vít cấy (Stud Bolt)",
      standards: ["DIN 938", "DIN 939", "ASTM A193 B7"],
      grades: ["8.8", "10.9", "B7"],
      material: ["Thép carbon", "Thép hợp kim Cr-Mo"],
      size_range: "M8 - M48",
      length_range: "40mm - 500mm",
      surface_treatment: ["Mạ kẽm", "Phốt phát", "Oxy hóa đen"],
      applications: "Mặt bích đường ống, van công nghiệp, thiết bị chịu áp",
      note: "ASTM A193 B7 dùng cho môi trường nhiệt độ cao và áp suất cao",
      status: "Còn hàng"
    },
    {
      id: 15,
      group: "Vít",
      name: "Vít nở hóa chất (Chemical Anchor)",
      standards: ["ETAG 001", "ETA approved"],
      grades: ["5.8", "8.8", "Inox 304"],
      material: ["Thép carbon", "Inox 304"],
      brands: ["Hilti HIT-RE 500", "Fischer FIS V", "Sika AnchorFix"],
      size_range: "M8 - M30",
      applications: "Neo giữ thiết bị nặng vào bê tông, chân máy, lan can thép",
      note: "Tải trọng cao hơn vít nở cơ học 2-3 lần, phù hợp bê tông nứt",
      status: "Liên hệ báo giá"
    },
    // --- PHỤ KIỆN ---
    {
      id: 16,
      group: "Phụ Kiện",
      name: "Vòng đệm phẳng (Flat Washer)",
      standards: ["DIN 125A", "DIN 9021 (đệm to)"],
      grades: ["Thép", "Inox 304"],
      material: ["Thép carbon", "Inox 304"],
      size_range: "M4 - M64",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Phân bổ tải trọng, bảo vệ bề mặt lắp ghép",
      status: "Còn hàng"
    },
    {
      id: 17,
      group: "Phụ Kiện",
      name: "Vòng đệm vênh (Spring Lock Washer)",
      standards: ["DIN 127B"],
      grades: ["Thép lò xo", "Inox 304"],
      material: ["Thép lò xo", "Inox 304"],
      size_range: "M4 - M36",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Chống nới lỏng do rung động, dùng kèm đai ốc lục giác",
      status: "Còn hàng"
    },
    {
      id: 18,
      group: "Phụ Kiện",
      name: "Vòng hãm trục / lỗ (Retaining Ring / Circlip)",
      standards: ["DIN 471 (trục)", "DIN 472 (lỗ)"],
      grades: ["Thép lò xo"],
      material: ["Thép lò xo"],
      size_range: "Ø8mm - Ø300mm",
      surface_treatment: ["Nhuộm đen", "Phèn dầu"],
      applications: "Hãm dọc trục vòng bi, bánh răng, bạc lót",
      status: "Còn hàng"
    },
    {
      id: 19,
      group: "Phụ Kiện",
      name: "Chốt chẻ (Split / Cotter Pin)",
      standards: ["DIN 94"],
      grades: ["4.8", "Inox 304"],
      material: ["Thép mềm", "Inox 304"],
      size_range: "Ø1.6mm - Ø13mm",
      surface_treatment: ["Mạ kẽm", "Inox tự nhiên"],
      applications: "Hãm chốt, đai ốc rãnh, kết cấu bản lề",
      status: "Còn hàng"
    }
  ]
};
