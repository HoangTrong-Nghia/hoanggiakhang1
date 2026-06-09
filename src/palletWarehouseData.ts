import usedPlasticPalletImage from './assets/images/used_plastic_pallet_1400x1100_1780976469621.png';
import woodenBoxPalletImage from './assets/images/wooden_box_pallet_exact_1780985545097.png';
import standardWoodenPalletImage from './assets/images/user_wooden_pallet_1780986786309.png';

export interface PalletProduct {
  id: number;
  group:
    | "Pallet nhựa mới"
    | "Pallet nhựa cũ"
    | "Pallet gỗ mới"
    | "Pallet gỗ cũ"
    | "Pallet sắt / thép"
    | "Pallet giấy tổ ong"
    | "Phụ kiện pallet"
    | "Dịch vụ";
  name: string;
  condition: "Mới 100%" | "Cũ tái sử dụng" | "Tân trang" | "Mới" | "Cũ";
  imageUrl?: string;
  price?: string;
  price_sub?: string;
  material?: string;
  size?: string | string[];
  base_size?: string;
  volume?: string;
  static_load?: string;
  dynamic_load?: string;
  weight?: string;
  entry?: string;
  color?: string;
  features: string[];
  certifications?: string[];
  applications?: string;
  note?: string;
  packaging?: string;
  status: string;
  grading?: {
    [key: string]: string;
  };
  price_benefit?: string;
  description?: string;
  buy_price?: string;
  minimum_quantity?: string;
  construction?: string;
  nail?: string;
  process?: string[];
  surface?: string;
  type?: string | string[];
  beam_load?: string;
  height?: string;
  minimum_rental?: string;
  deposit?: string;
}

export interface PalletCatalogData {
  category: "Pallet - Kệ & Vật Tư Kho Bãi";
  filters: {
    by_group: string[];
    by_size: string[];
    by_load: string[];
    by_condition: string[];
    by_entry: string[];
  };
  products: PalletProduct[];
}

export const PALLET_WAREHOUSE_DATA: PalletCatalogData = {
  category: "Pallet - Kệ & Vật Tư Kho Bãi",
  filters: {
    by_group: [
      "Tất cả",
      "Pallet nhựa cũ",
      "Pallet gỗ mới",
      "Pallet gỗ cũ"
    ],
    by_size: [
      "Tất cả",
      "1400 x 1100 mm",
      "1400 x 1120 mm",
      "1200 x 1000 mm"
    ],
    by_load: [
      "Tất cả",
      "Tải nặng (1000 - 2000 kg)",
      "Tải trung bình - nhẹ (500 - 1500 kg)"
    ],
    by_condition: [
      "Tất cả",
      "Hàng cũ (90%)",
      "Hàng mới 100%"
    ],
    by_entry: [
      "Tất cả",
      "4 chiều (4-way)",
      "2 chiều (2-way)"
    ]
  },
  products: [
    {
      id: 6,
      group: "Pallet nhựa cũ",
      condition: "Cũ",
      name: "Pallet nhựa cũ 1400 x 1100 x 150 mm (Độ mới 90%)",
      imageUrl: usedPlasticPalletImage,
      price: "290.000 đ",
      price_sub: "Bán lẻ tại kho Huế (Ưu đãi cực tốt)",
      material: "Sợi nhựa HDPE đúc nguyên khối siêu chịu tải phom dầy dặn",
      size: "1400 x 1100 x 150 mm",
      static_load: "4000 kg (Tải tĩnh lót sàn)",
      dynamic_load: "1500 kg (Tải động di chuyển nâng hạ)",
      weight: "14.5 kg",
      entry: "4 chiều (4-way) - Càng luồn linh hoạt xe nâng tay & xe nâng máy",
      color: "Đen tuyền sạch ráo bãi",
      features: [
        "Độ mới cam kết trên 90%, vách nhựa và xương chịu lực dầy dặn dẻo dai, không nứt vỡ gầm gánh lực đều",
        "Kích thước lớn hiếm có 1400 x 1100 x 150 mm vô cùng tối ưu cho việc xếp dỡ gá hộp, luân chuyển xếp tháp công nghiệp nặng",
        "Độ dai tốt đặc trưng của nhựa chống chịu nấm mốc ẩm mặn kho lạnh, hóa chất phân bón xi măng tuyệt vời"
      ],
      applications: "Chất xếp tủ bãi kho xưởng sản xuất, dệt nhuộm, giày da, may mặc dã chiến, bao bì phôi giấy và phục vụ dịch vụ vận tải logistics",
      note: "💸 Cơ hội đầu tư cực tốt: Chỉ 290.000đ/cái bán tại kho Huế (Giá gốc tại bãi chưa bao gồm thuế VAT)",
      status: "Còn hàng (Trong kho Huế - Sẵn bàn giao nhanh)"
    },
    {
      id: 11,
      group: "Pallet gỗ mới",
      condition: "Mới 100%",
      name: "Pallet gỗ 1200 x 1000 x 123 mm – 5 nan mặt – 9 chân – 2 hướng nâng",
      imageUrl: standardWoodenPalletImage,
      price: "109.000 đ",
      price_sub: "Bán tại kho Huế (giá chưa bao gồm VAT)",
      material: "Gỗ thông / gỗ keo / gỗ tràm theo yêu cầu (Độ ẩm gỗ: ≤ 20%)",
      size: "1200 x 1000 x 123 mm",
      static_load: "> 4.000 kg (Tải trọng tĩnh > 4 tấn)",
      dynamic_load: "1.500 kg (Tải trọng động 1.5 tấn)",
      weight: "8 – 10 kg (Gỗ thông) | 10 – 13 kg (Gỗ keo/tràm)",
      entry: "2 hướng nâng (2-way entry)",
      construction: "Pallet gỗ 2 hướng nâng liên kết cực kỳ vững chãi bằng đinh xoắn công nghiệp",
      volume: "0,0176 m³/pallet",
      features: [
        "Quy cách gỗ sạch sấy đạt độ ẩm chuẩn dưới 20%. Toàn bộ sớ gỗ được tuyển lựa kỹ lưỡng, nói không với mối mọt và nứt toác.",
        "Thiết kế 5 nan mặt pallet chịu tải lực thăng bằng tốt cùng 9 chân đỡ block liên kết liên kết đinh chắc chắn đảm bảo tuổi thọ cao.",
        "Mặt pallet bào chà láng mịn lướt mượt mà tránh rách màng chất hàng nilon, đập so le quặp giữ liên kết cứng cáp tuyệt đối."
      ],
      grading: {
        "1. Kích thước tổng thể": "Dài: 1200 mm | Rộng: 1000 mm | Cao: 123 mm",
        "2. Số thanh mặt ऊपर": "05 thanh mặt pallet (Kích thước: 1000 × 80 × 18 mm)",
        "3. Thanh đà ngang trên": "03 thanh đà trên (Kích thước: 1200 × 60 × 15 mm)",
        "4. Chân đỡ (Block)": "09 chân đỡ móng gỗ (Kích thước: 80 × 50 × 90 mm, chiều cao chân 90 mm)",
        "5. Thanh đà đáy gầm": "03 thanh đà đáy gầm (Kích thước: 1200 × 60 × 18 mm)",
        "6. Khoảng cách dọc (1200 mm)": "Bố trí mặt trên so le: 80 - 200 - 80 - 200 - 80 - 200 - 80 - 200 - 80 mm",
        "7. Khoảng cách ngang (1000 mm)": "Khoảng hở đầu: 50 mm | Khoảng cách chân: 50 - 450 - 35 - 450 - 50 mm",
        "8. Dự toán gỗ chi tiết": "5 thanh mặt (0,0072 m³) | 3 đà trên (0,00324 m³) | 3 đà đáy (0,00389 m³) | 9 chân đỡ (0,00324 m³)"
      },
      applications: "Chất xếp tủ bãi hàng hóa đóng pallet xuất khẩu, luân chuyển chuỗi cung ứng sản xuất dệt nhuộm, gỗ, xi măng, kho mủ cao su thủy sản tại Thừa Thiên Huế.",
      note: "⚠ Quy cách đề xuất: Pallet gỗ 1200×1000×123 mm – 5 nan mặt – 9 chân – 2 hướng nâng.",
      status: "Sản xuất theo đơn đặt hàng tại Huế (Đáp ứng kích thước bản vẽ yêu cầu)"
    },
    {
      id: 12,
      group: "Pallet gỗ cũ",
      condition: "Cũ",
      name: "Pallet gỗ cũ 1200 x 1000 x 123 mm – 5 nan mặt – 9 chân – 2 hướng nâng",
      imageUrl: standardWoodenPalletImage,
      price: "89.000 đ",
      price_sub: "Bán tại kho Huế (giá chưa bao gồm VAT)",
      material: "Gỗ sấy tự nhiên bền dai (Gỗ thông / gỗ keo / gỗ tràm, độ mới 85% - 90%)",
      size: "1200 x 1000 x 123 mm",
      static_load: "> 4.000 kg (Tải trọng tĩnh > 4 tấn)",
      dynamic_load: "1.500 kg (Tải trọng động 1.5 tấn)",
      weight: "8 – 10 kg (Gỗ thông) | 10 – 13 kg (Gỗ keo/tràm)",
      entry: "2 hướng nâng (2-way entry)",
      construction: "Pallet gỗ cũ 2 hướng nâng liên kết cực kỳ vững chắc bằng dòng đinh xoắn chịu lực cao",
      volume: "0,0176 m³/pallet",
      features: [
        "Pallet gỗ cũ thanh lý tuyển chọn kỹ càng từ các lô hàng xuất khẩu nhẹ, cam kết độ mới chuẩn từ 85% - 90%, nan gỗ không nứt toác.",
        "Thiết kế chuẩn 5 nan mặt thăng bằng tối ưu và 9 chân gù đỡ chịu lực đầm tay vững chãi, liên kết chắc chắn và chịu tải dã chiến cực đỉnh.",
        "Phù hợp kinh tế cao cho kho phân bón, xi măng, gạch ngói, giấy cước luân chuyển nội địa hoặc hàng đóng xuất bãi cự ly ngắn tiết kiệm vốn đầu tư."
      ],
      grading: {
        "1. Kích thước tổng thể": "Dài: 1200 mm | Rộng: 1000 mm | Cao: 123 mm",
        "2. Số thanh mặt dọc": "05 thanh mặt pallet gỗ dày dặn (Kích thước: 1000 × 80 × 18 mm)",
        "3. Thanh đà chịu tải": "03 thanh đà ngang liên kết (Kích thước: 1200 × 60 × 15 mm)",
        "4. Châm gù chịu lực": "09 móng bệ gỗ đinh xoắn (Kích thước: 80 × 50 × 90 mm, chiều cao chân 90 mm)",
        "5. Thanh đáy khóa gầm": "03 thanh đà bảo cố định đáy (Kích thước: 1200 × 60 × 18 mm)"
      },
      applications: "Lưu kho bảo quản hàng hóa bãi cảng, logistics dã chiến, luân chuyển chuỗi cung ứng sản xuất dệt nhuộm, gỗ, xi măng tại Thừa Thiên Huế và miền Trung.",
      note: "⚠ Phân khúc cực kỳ kinh tế: Sản phẩm đã qua tuyển chọn kỹ lưỡng, phom dầy dặn dẻo dai gánh tải tĩnh vượt trội trên 4 tấn lót sàn.",
      status: "Sẵn hàng số lượng lớn (Trong kho Huế - Giao ngay trong ngày)"
    },
    {
      id: 9,
      group: "Pallet gỗ mới",
      condition: "Mới 100%",
      name: "Pallet thùng gỗ liên kết chuyên dụng chứa mủ cao su",
      imageUrl: woodenBoxPalletImage,
      price: "740.000 đ",
      price_sub: "Giá sỉ đại lý - Chưa bao gồm thuế VAT (Tại kho Huế)",
      material: "Gỗ sấy tự nhiên bền dai (Xoan keo, Tràm đồi sấy đạt độ ẩm tiêu chuẩn < 20%)",
      size: "1400 x 1100 x 1120 mm (Kích thước phủ bì tổng thể)",
      base_size: "1400 x 1000 mm (Kích thước đáy)",
      height: "Chiều cao chân: 100 mm | Gù đỡ kê cao: 40 mm",
      construction: "Kết cấu pallet dạng thùng hộp quây kín 4 phía bọc vách kết hợp nẹp dọc khung xương",
      nail: "Dập đinh xoắn máy hoặc đinh ngạnh siết chặn mộng; nói không với đinh trơn hay đinh ngắn kém an toàn",
      features: [
        "Thiết kế thùng chứa chuyên dụng: Sức chứa tối ưu, cực kỳ lý tưởng để đóng kẹp chứa bánh mủ cao su lót sàn hoặc xếp tháp.",
        "Tiêu chuẩn phôi gỗ sạch: Khô tự nhiên ráo ẩm, hoàn toàn không mối mọt mục rỗng, cam kết không nứt gãy sớ gỗ sườn mâm tải.",
        "Thi công đóng đinh tinh xảo: Đinh xuyên qua thớ gỗ nhô tối thiểu 8mm ở đầu mộng bên mạn đối diện, được bẻ đập quặp sát rạt >= 90 độ.",
        "Độ phẳng & An toàn đỉnh cao: Mặt pallet được bào chà nhám láng mịn, nói không với dằm dăm sớ nhọn hay đầu đinh nhô lên gây găm rách bao màng bảo vệ."
      ],
      grading: {
        "1. Tấm ván mặt": "Ván gỗ tự nhiên xoan keo 1040 x 100 x 20 mm: 07 thanh (xếp đặt chuẩn bản vẽ)",
        "2. Tấm ván đáy": "Ván gỗ tự nhiên dầy 1400 x 100 x 20 mm: 14 thanh chịu tải tỳ bệ",
        "3. Tấm vách hông dài": "Ván gỗ 1120 x 100 x 20 (03 thanh) | 1277 x 100 x 20 (02 thanh) | 1320 x 100 x 20 (02 thanh) | 1502 x 100 x 20 (01 thanh)",
        "4. Tấm vách hông ngắn": "Ván gỗ 1000 x 100 x 20 mm: 24 thanh vây | Ván gỗ 1080 x 100 x 20 mm: 04 thanh chịu lực khớp",
        "5. Thanh gia cường mạn": "Thanh gỗ chéo dài 1500 mm: 02 thanh móng chéo giúp cố định hộp chống xô lệch nghiêng khi đè xếp chồng",
        "6. Gù nâng bệ đáy": "Gù kê gỗ tự nhiên nguyên khối 100 x 100 x 40 mm: 09 cái phân bổ gánh tải trọng mâm"
      },
      applications: "Đóng gói, xếp chồng, bảo quản và trung chuyển bánh mủ cao su thô công nghiệp bọc màng co PE, phục vụ bãi kho bến container tại Huế, vận tải liên bang.",
      note: "⚠ Đóng đinh chuẩn: Mỗi mộng liên kết đóng so le cách rìa mép tối thiểu 15mm tránh nứt bục gỗ sấy, đảm bảo 2-3 đinh cho mỗi node giao thoa.",
      status: "Sản xuất theo đơn đặt hàng tại Huế (Đáp ứng kích thước bản vẽ yêu cầu)"
    }
  ]
};
