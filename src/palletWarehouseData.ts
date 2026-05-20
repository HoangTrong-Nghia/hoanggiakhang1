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
  material?: string;
  size?: string | string[];
  base_size?: string;
  volume?: string;
  static_load?: string;
  dynamic_load?: string;
  racking_load?: string;
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
      "Pallet nhựa mới",
      "Pallet nhựa cũ",
      "Pallet gỗ mới",
      "Pallet gỗ cũ",
      "Pallet sắt / thép",
      "Pallet giấy tổ ong",
      "Phụ kiện pallet",
      "Dịch vụ"
    ],
    by_size: [
      "Tất cả",
      "1200 x 1000 mm (Euro)",
      "1200 x 800 mm (Euro Small)",
      "1100 x 1100 mm (Nhật)",
      "1200 x 1200 mm",
      "1000 x 1000 mm",
      "Kích thước khác / theo yêu cầu"
    ],
    by_load: [
      "Tất cả",
      "Tải nhẹ (≤ 500 kg)",
      "Tải trung (500 - 1000 kg)",
      "Tải nặng (1000 - 2000 kg)",
      "Siêu tải (> 2000 kg)"
    ],
    by_condition: [
      "Tất cả",
      "Hàng mới 100%",
      "Hàng cũ tái sử dụng",
      "Hàng tân trang (Reconditioned)"
    ],
    by_entry: [
      "Tất cả",
      "2 chiều (2-way)",
      "4 chiều (4-way)"
    ]
  },
  products: [
    // ================================
    // PHẦN I: PALLET NHỰA MỚI
    // ================================
    {
      id: 1,
      group: "Pallet nhựa mới",
      condition: "Mới 100%",
      name: "Pallet nhựa mặt phẳng 9 chân (Solid Deck 9-Leg Pallet)",
      material: "HDPE / PP nguyên sinh (Virgin)",
      size: [
        "1200 x 1000 x 150 mm",
        "1100 x 1100 x 150 mm",
        "1200 x 1200 x 150 mm"
      ],
      static_load: "5000 kg (tĩnh)",
      dynamic_load: "1500 kg (xe nâng)",
      racking_load: "800 kg (kệ một nhịp)",
      weight: "12 - 18 kg",
      entry: "4 chiều (4-way)",
      color: "Xanh / Đen / Xám / Đỏ / Trắng (theo yêu cầu)",
      features: [
        "Mặt trên phẳng hoặc lưới chống trượt kết dính cao",
        "Chịu hóa chất, không chịu thấm nước, kháng nấm mốc tuyệt vời",
        "Có thể gắn chip RFID định vị tracking định kho tự động",
        "Tái chế 100% khi hết vòng đời công tác"
      ],
      certifications: ["ISO 8611", "ISPM 15 miễn trừ (hoàn toàn không cần xử lý nhiệt)"],
      applications: "Hệ kho lạnh đông, dệt may thực phẩm, hóa dược phẩm, đóng hàng xuất khẩu Mỹ/EU đại ngạch",
      note: "⚠ ISPM 15: Pallet nhựa được đặc cách miễn trừ tất cả chứng nhận kiểm dịch - lợi thế vàng trong thông quan xuất khẩu",
      packaging: "10 - 20 cái / pallet xếp chồng thu nhỏ",
      status: "Còn hàng"
    },
    {
      id: 2,
      group: "Pallet nhựa mới",
      condition: "Mới 100%",
      name: "Pallet nhựa mặt lưới 9 chân (Grid Deck Pallet)",
      material: "HDPE / PP nguyên sinh",
      size: [
        "1200 x 1000 x 150 mm",
        "1100 x 1100 x 150 mm"
      ],
      static_load: "4000 kg",
      dynamic_load: "1200 kg",
      weight: "10 - 15 kg",
      entry: "4 chiều (4-way)",
      features: [
        "Mặt lưới thông thoáng thoát hơi ẩm nhanh - cực kỳ thích hợp cho lưu kho lạnh",
        "Tự trọng nhẹ hơn bản mặt phẳng 15-20% tối ưu lắp đặt",
        "Tiết kiệm chi phí đầu tư và chi phí vận chuyển cước biển"
      ],
      applications: "Kho lạnh thủy hải sản đông đá, đóng giỏ rau củ quả xuất khẩu",
      status: "Còn hàng"
    },
    {
      id: 3,
      group: "Pallet nhựa mới",
      condition: "Mới 100%",
      name: "Pallet nhựa có thành / có vách gấp tiện dụng (Box Pallet / Pallet Box)",
      material: "HDPE nguyên sinh siêu bền dẻo",
      size: "1200 x 1000 x 800 mm (tổng thể hộp)",
      base_size: "1200 x 1000 mm",
      volume: "800 - 1000 lít",
      static_load: "2000 kg",
      dynamic_load: "1000 kg",
      weight: "35 - 50 kg",
      entry: "4 chiều (4-way)",
      features: [
        "Vách gấp có thể xếp tháo lắp linh động 4 mặt giảm diện tích khi rỗng",
        "Option nắp đậy bảo vệ chống chuột bám bụi bẩn",
        "Khả năng chịu lực xếp chồng cao tầng tối giản thiết diện kho chứa",
        "Chất liệu láng mịn dễ tẩy trùng chuyên dùng thực phẩm"
      ],
      applications: "Chứa linh kiện lắp ráp điện tử rời, nông sản thu hoạch xưởng chế biến, hóa chất hạt nilon",
      status: "Còn hàng"
    },
    {
      id: 4,
      group: "Pallet nhựa mới",
      condition: "Mới 100%",
      name: "Pallet nhựa siêu tải gia cường lõi sắt (Heavy Duty Plastic Pallet)",
      material: "HDPE gia cường lõi thép chịu lực (Reinforced / Steel Core)",
      size: "1200 x 1000 x 170 mm",
      static_load: "10.000 kg (siêu tĩnh)",
      dynamic_load: "3000 kg (vận tải động)",
      racking_load: "2000 kg (lên kệ rack beam tầng cao)",
      weight: "25 - 35 kg",
      entry: "4 chiều (4-way)",
      features: [
        "Hệ xương thép gia cứng cường độ chịu tải không vênh võng nứt gãy",
        "Thách thức mọi dòng tải trọng siêu nặng trên hệ kệ kho cao tầng",
        "Bố trí rãnh nhám cao su chống trượt tuyệt chỉnh"
      ],
      applications: "Kệ lôi kéo Drive-in, Push-back lưu trữ nguyên liệu phôi kim loại nặng, thiết bị siêu trọng",
      note: "⚠ Luôn kiểm tra kỹ thông số Racking Load cho phép của dầm Rack trước khi tiến hành lên kệ",
      status: "Còn hàng"
    },
    {
      id: 5,
      group: "Pallet nhựa mới",
      condition: "Mới 100%",
      name: "Pallet nhựa xuất khẩu tiêu chuẩn Euro (Euro Pallet Plastic Standard)",
      material: "PP / HDPE tái sinh chọn lọc hoặc nguyên sinh",
      size: "1200 x 800 x 144 mm (Tiêu chuẩn EUR1 quốc tế)",
      static_load: "4000 kg",
      dynamic_load: "1500 kg",
      weight: "9 - 12 kg",
      entry: "4 chiều (4-way)",
      certifications: ["EPAL tiêu chuẩn kích thước Châu Âu", "ISPM 15 miễn kiểm"],
      features: [
        "Kích thước chính xác 100% chuẩn phân phối nội địa liên bang Châu Âu",
        "Tương thích khớp răng xe nâng kéo pallet tay và gàu chuyền robot tự động",
        "Mỏng nhẹ nhưng dẻo dai tối ưu dung lượng xe container"
      ],
      applications: "Bách hóa xuất khẩu sang các cảng Châu Âu, phân bố kho vận lưu bãi hàng không hàng hải tự động",
      status: "Còn hàng"
    },
    // ================================
    // PHẦN II: PALLET NHỰA CŨ
    // ================================
    {
      id: 6,
      group: "Pallet nhựa cũ",
      condition: "Cũ tái sử dụng",
      name: "Pallet nhựa cũ loại A chọn lọc (Used Plastic Pallet Grade A/B/C)",
      material: "HDPE / PP tái chế siêu mác bền",
      size: [
        "1200 x 1000 mm",
        "1100 x 1100 mm"
      ],
      grading: {
        "Hạng A (Grade A)": "Pallet mới > 90%, không nứt vỡ mặt, vệt chân mòn nhẹ, dẻo chịu lực đều, form căng.",
        "Hạng B (Grade B)": "Xước sát biên dạng, các nút chống trượt vạt nhẹ, cam kết chân nguyên không sứt tải mác chuẩn dẻo.",
        "Hạng C (Grade C)": "Đã súc rửa bảo hành lại mộng, thích hợp kê lót nền tĩnh xưởng nhỏ nội bộ giá cực mềm."
      },
      dynamic_load: "800 - 1200 kg (tương thích theo xếp loại)",
      price_benefit: "Lợi ích kinh tế tột cùng, tiết kiệm ngay 40-60% ngân sách so với đầu tư dòng pallet nhựa mới",
      features: [
        "Trải qua quy trình phân khoa và soi tải nghiêm ngặt trước khi xuất bãi",
        "Sản phẩm được rửa sát khuẩn làm sạch vết dầu nhớt cơ khí",
        "Độ dai dẻo dẻo của gốc HDPE chịu bão hòa mặn cực thọ"
      ],
      applications: "Kê lót khô bãi nội địa công ty, luân chuyển trung tâm lưu kho tạm phân xưởng chế tạo",
      note: "⚠ Doanh nghiệp xuất ngoại sang nước khắt khe nên ưu tiên hàng mới để tránh các yêu cầu bãi dỡ từ thanh tra bến",
      status: "Còn hàng - Số lượng lớn"
    },
    {
      id: 7,
      group: "Pallet nhựa cũ",
      condition: "Cũ tái sử dụng",
      name: "Thu mua pallet nhựa cũ hỏng giá tốt (Pallet Buyback & Recycled Program)",
      material: "HDPE / PP / ABS / PS hỏng vỡ nứt gãy",
      buy_price: "Thu mua giá cao (Liên hệ định lượng theo kg hạt hoặc đếm cái thực tế)",
      minimum_quantity: "Số lượng tối thiểu thu mua 50 cái / lượt",
      features: [
        "Có xe tải hốt tận kho của Quý khách nhanh gọn",
        "Tiến hành quyết toán chuyển tiền tươi một phát ngay sau cân",
        "Tái sinh vòng tuần hoàn xanh thân thiện bảo vệ sinh quyển doanh nghiệp",
        "Hỗ trợ ghi nhận cung cấp thông tin xuất báo cáo kiểm định ESG (Bền vững môi trường) cho nhà máy lớn"
      ],
      applications: "Dịch vụ giải cứu bãi phế liệu, dọn tải kho rác pallet vỡ lấy thêm đồng thu nhập bù khấu hao",
      note: "⚠ Đóng vai trò thu gom hạt nhựa không đốt thải khí độc hại bảo hộ môi sinh xanh đất nước",
      status: "Đang thu mua - Liên hệ"
    },
    // ================================
    // PHẦN III: PALLET GỖ MỚI
    // ================================
    {
      id: 8,
      group: "Pallet gỗ mới",
      condition: "Mới 100%",
      name: "Pallet gỗ xông trùng tiêu chuẩn xuất khẩu ISPM 15",
      material: "Gỗ Keo rừng trồng Việt Nam / Gỗ Tràm già / Gỗ Thông nhập khẩu sấy khô",
      size: [
        "1200 x 1000 x 120 mm",
        "1200 x 800 x 120 mm",
        "1100 x 1100 x 120 mm"
      ],
      static_load: "2000 - 3000 kg (Tĩnh lực mộng chặt)",
      dynamic_load: "1000 - 1500 kg",
      weight: "15 - 25 kg",
      entry: "2 chiều (2-way) hoặc 4 chiều bả gàu dầm gỗ",
      certifications: [
        "ISPM 15 Heat Treatment (HT) hấp khử xử nhiệt lõi ≥ 56°C trong ít nhất 30 phút",
        "Đóng triện ký hiệu IPPC pháp lý chính thức toàn thế giới",
        "Cấp giấy hồ sơ kiểm dịch chứng thư kiểm dịch thực vật (Phytosanitary Cert) xuất khẩu"
      ],
      construction: "Kết cấu 3 đà ngang định lực sấy căng + 9 ván mặt phẳng chịu đè + 5 ván lót bệ sàn đỡ lực nâng",
      nail: "Dùng đinh cuộn xoắn mạ kẽm răng cưa (Ring Shank) chống bung giật ván mộng",
      features: [
        "Độ ngọt xơ gỗ nẹp cứng đạt chuẩn quy định hàng rào bảo vệ nấm mốc sâu hại",
        "Đóng đai móng mạ lực ép dầm cứng củng cố",
        "Chống ẩm đạt mác mốc độ ẩm gỗ luôn < 20% đo ráo đầu đọc"
      ],
      applications: "Đóng nẹp thùng xuất ngoại hàng thủ công mỹ nghệ, máy biến áp nặng, hàng nông thủy sản xuất đi Nhật, Mỹ, Úc...",
      note: "⚠ Ký cam kết bảo đền bù gánh trách nhiệm nếu pallet gỗ không gõ dấu bị hải ngoại bãi trả",
      status: "Còn hàng - Sản xuất theo đơn"
    },
    {
      id: 9,
      group: "Pallet gỗ mới",
      condition: "Mới 100%",
      name: "Pallet gỗ lót nền nội địa (Gỗ keo giá xưởng đóng theo mét vuông)",
      material: "Gỗ Keo đồi / Cây mộc tràm rừng tươi ráo vỏ sấy ẩm tự nhiên",
      size: [
        "1200 x 1000 mm",
        "1100 x 1100 mm",
        "1000 x 1000 mm",
        "Tùy biến kích cỡ theo biên dạng đóng đơn riêng"
      ],
      static_load: "1500 - 2500 kg",
      dynamic_load: "800 - 1200 kg",
      weight: "12 - 20 kg",
      entry: "2 chiều băm đà chịu siêu lực / 4 chiều xẻ mương luồn",
      features: [
        "Đóng đinh tay dầm dày mộc mạc giá nội bộ rẻ cực tốt",
        "Bỏ đi khâu xông hấp nhiệt đắt tiền nếu chỉ lưu bãi nội địa Việt Nam",
        "Bảo lưu mộng rãnh đóng lót sàn gỗ thô vững bỉ"
      ],
      applications: "Chèn bã xưởng xi măng sắt thép nội ô, luân chuyển bao bì bột mỳ nhà máy nguyên dược liệu nội thành",
      status: "Còn hàng - Giao nhanh"
    },
    {
      id: 10,
      group: "Pallet gỗ mới",
      condition: "Mới 100%",
      name: "Pallet gỗ ép ván bóc LVL (Laminated Veneer Lumber Plywood Pallet)",
      material: "Sự kết hợp gỗ lạng dán ép dăm hóa keo nhiệt dẻo lực ép cao LVL",
      size: "1200 x 1000 x 120 mm",
      static_load: "3000 kg",
      dynamic_load: "1500 kg",
      weight: "16 - 20 kg",
      certifications: ["Đặc cách miễn trừ xử lý nhiệt ISPM 15 do gỗ đã qua phối nấu keo nhiệt hóa"],
      features: [
        "Không cong sứt góc nứt kẽ hay có ổ sâu đục tự nhiên như gỗ cây xẻ",
        "Tính chuẩn ly đồng đều về kích mộng siêu chính xác mượt đẹp",
        "Độ giãn nở phồng trướng nước nôi thấp hơn hẳn dăm mùn cưa thường"
      ],
      applications: "Logistics kho vận tự động băng guồng hẹp, đóng thùng phụ kiện tinh linh kiện viễn thông xuất khẩu",
      status: "Còn hàng"
    },
    // ================================
    // PHẦN IV: PALLET GỖ CŨ
    // ================================
    {
      id: 11,
      group: "Pallet gỗ cũ",
      condition: "Cũ tái sử dụng",
      name: "Pallet gỗ thông / Keo cũ loại A nâng cấp (Used Wood Pallet)",
      size: "1200 x 1000 mm / 1100 x 1100 mm",
      grading: {
        "Hạng A (Grade A)": "Ván nẹp khít nguyên bản không rỗng vỡ đà chính tải gánh sườn > 800kg mộc mạc không sâu.",
        "Hạng B (Grade B)": "Tìm có chẻ ván nhỏ ở rìa đã đóng đè vá chắc nẹp đai tôn, tải gán lực đều gánh hàng kho nhẹ > 500kg.",
        "Hạng C (Grade C)": "Nhiều dấu nứt gỗ xám đen, chỉ dùng lót kê nền xi măng trống ấm ẩm nấm mốc."
      },
      price_benefit: "Cực kỳ rẻ hời, giảm ngay gánh nặng tài chính 50-70% cho quỹ khởi nghiệp xưởng bến bãi",
      minimum_quantity: "Số lượng tối thiểu giao 20 cái / lượt đơn hàng",
      features: [
        "Đội ngủ thợ mộc gom chọn lọc vặn vít dập đinh đực chặn chặt kẽ",
        "Tháo bỏ thanh ván mục vỡ nát đắp chèn thanh chắc láng phẳng",
        "Đáp ứng kho hàng tiêu dùng xoay chuyền lưu hành nội địa chi phí tiết giảm"
      ],
      applications: "Giao nhận thầu gạch ngói đất sét, lót bãi hàng hóa trong mùa bão dột ngập nước",
      note: "⚠ Nghiêm cấm đặt dùng pallet gỗ thông cũ ẩm mốc lưu trữ thực phẩm lỏng uống trực tiếp hở miệng bao bì",
      status: "Còn hàng - Số lượng lớn"
    },
    {
      id: 12,
      group: "Pallet gỗ cũ",
      condition: "Tân trang",
      name: "Pallet gỗ thông cũ tân trang ép chặt mập (Reconditioned Wood Pallet)",
      description: "Hệ pallet gỗ thông chịu cước cảng tháo dỡ thô được nẹp bào láng lật ván lắp ráo mộng đinh mạ lực chắc",
      size: "1200 x 1000 mm tiêu chuẩn",
      dynamic_load: "800 - 1000 kg sau gia cố",
      process: [
        "1. Phay tháo rã rác bãi bốc mộng dão đinh rỉ mục",
        "2. Thay đà Keo rắn gồng trục lực đỡ đáy",
        "3. Chèn ván thông lột vỏ bào mài thô sơn lót chống nấm mốc mối băm",
        "4. Đóng lại mộng gàu vít xoăn xi mạ ép nén căng",
        "5. Thử đè cục bộ đạt tải mới cấp nhãn xuất bãi"
      ],
      price_benefit: "Bằng đúng 60% hóa đơn mua mới trong khi hiệu mác tải kéo ngang ngửa mộng mới",
      applications: "Đóng kê linh kiện cho khối vận tải nội địa tuyến tải mộc mạc",
      status: "Còn hàng"
    },
    // ================================
    // PHẦN V: PALLET SẮT / THÉP
    // ================================
    {
      id: 13,
      group: "Pallet sắt / thép",
      condition: "Mới 100%",
      name: "Pallet sắt thép dập hộp lưới chấn sóng lực (Heavy Duty Steel Mesh Pallet)",
      material: "Thép carbon cường tải CT3 / SS400 dập hình bản dày",
      size: "1200 x 1000 x 140 mm phẳng chân sườn",
      static_load: "3000 - 5000 kg lực ráo kẽ tĩnh",
      dynamic_load: "2000 - 3000 kg xe vấu lôi kéo",
      weight: "25 - 40 kg dầm thép dập rãnh",
      entry: "4 chiều luồn càng nâng chấn an toàn",
      features: [
        "Độ thọ dải hạn vô tiền khoáng hậu từ 10 - 15 năm mác dầy",
        "Hàn gá CO2 dập nguội chống va chấn móp rách ổ",
        "Bảo vệ bằng công nghệ sơn tĩnh điện chất Epoxy dẻo hoặc mạ kẽm nhúng nóng toàn phần nhũ láng cuộn (HDG)",
        "Tự xả hơi nước tản nhiệt tuyệt đối trong lò giữ bốc hơi"
      ],
      applications: "Xưởng đóng mạ phụ tùng xe cơ giới, giàn mỏ ga dầu lỏng rỉ ráo máy nặn dập xích đúc",
      note: "⚠ Khối lượng pallet sắt khá lớn đòi hỏi chú ý rà mác giới hạn lực nâng động của xe nâng tay càng ngắn tránh chấn thương cột sống",
      status: "Còn hàng - Sản xuất theo đơn"
    },
    {
      id: 14,
      group: "Pallet sắt / thép",
      condition: "Mới 100%",
      name: "Pallet lồng sắt / Thùng cũ có lưới thép tháo xếp (Steel Box Cage Pallet)",
      material: "Hộp dập mạ SS400 / Inox cao cấp ANSI 304 chấn đúc rào chắn dính",
      size: [
        "1200 x 1000 x 800 mm",
        "1200 x 1000 x 1200 mm cao móng"
      ],
      static_load: "3000 kg xếp chồng đè lớp",
      volume: "800 - 1400 lít xếp bạt sườn",
      weight: "60 - 120 kg tùy thuộc mác Inox sắt thép rào lồng",
      features: [
        "Thành rào khung lưới thép tháo gá bản lề hạ nghiêng thu gọn",
        "Hỗ trợ khóa dính vấu xếp chồng 3-4 góc khoang tầng chồng tháp",
        "Option bánh xe PU bọc bạc kẽm có phanh khóa chân bãi lôi kéo tiện lợi",
        "Cánh cửa mở bản lề nghiêng 50% bốc xếp hốt nhanh vật tư"
      ],
      applications: "Chất trữ lốp cao su xe động, khối sắt vụn cơ khí thu dọn chính xác bóng rảnh phay tiện CNC",
      status: "Liên hệ báo giá - Sản xuất theo yêu cầu"
    },
    // ================================
    // PHẦN VI: PALLET GIẤY TỔ ONG
    // ================================
    {
      id: 15,
      group: "Pallet giấy tổ ong",
      condition: "Mới 100%",
      name: "Pallet giấy tổ ong mỏng nhẹ thân thiện (Eco Honeycomb Paper Pallet)",
      material: "Lõi giấy gợn cấu trúc tổ ong tổ dập dính bằng keo sữa gốc thực vật + màng bìa phẳng dầy cứng cáp nén",
      size: [
        "1200 x 1000 x 120 mm",
        "1200 x 800 x 100 mm"
      ],
      static_load: "2000 - 3000 kg tải tĩnh phẳng nén chặt",
      dynamic_load: "500 - 800 kg chịu di tải vận hành tránh xóc giật lực kéo bên",
      weight: "3 - 6 kg (Siêu nhẹ nhe như xốp tơi, tiết kiệm 70-80% khối lượng bì so với gỗ)",
      certifications: [
        "ISPM 15 Hoàn toàn miễn trừ tuyệt đối không lo dính thanh kiểm sinh khuẩn",
        "Đạt chứng thư FSC quản bảo vệ và phát triển rừng xanh",
        "Khả năng thiêu hủy nghiền bột xơ tái sinh tái chế 100%"
      ],
      features: [
        "Lựa chọn hoàn bão giảm cước tải hàng không cargo dột đắt đỏ",
        "Cốt phẳng phiu không gồ ghề trầy nứt mép sờn lót bảo hiểm vật dụng mỏng nắp",
        "Cắt đứt mối lo kiểm dộng thực vật ở mọi bến cảng nội quốc ngoại"
      ],
      applications: "Đoạn dẹp đóng bọc hạt điện tử vi bo mạch cao cấp xuất cảng, mâm dăm dính ly thủy tinh hàng gốm sứ sang trọng",
      note: "⚠ Kỵ nước ẩm, chống chỉ định bốc trữ hàng ngoài mái che khi trời rào sương dột làm nhão giấy",
      status: "Còn hàng"
    },
    // ================================
    // PHẦN VII: PHỤ KIỆN & DỊCH VỤ
    // ================================
    {
      id: 16,
      group: "Phụ kiện pallet",
      name: "Hệ thống giá kệ kho chứa pallet (Selective / Drive-in Pallet Racking)",
      material: "Hộp cột dầm dập dầy Omega thép CT3 sơn kỹ tĩnh điện ráo",
      beam_load: "1000 - 5000 kg / Cặp dầm Beam nâng lực ngang gờ",
      height: "Tầm cao 3m - 12m tùy biến kết cấu trần nền xưởng kho",
      features: [
        "Khảo sát đo vẽ và dựng bản vẽ 2D AutoCAD/3D SolidWorks dựng Layout phân tầng miễn phí",
        "Tháo hạ dịch chuyển khoảng cách chốt đinh móc chữ U tầng móng dễ dàng",
        "Hãm lực đâm va có hộp dập bảo vệ móng cột sắt móng đế chống lật (Column Guard)",
        "Cam kết hệ số mác bền dẻo cao an toàn vận hành"
      ],
      applications: "Các hệ kho bãi sản xuất hàng lẻ pallet nặng bến dỡ, kho thủy nhiệt siêu cao thấp lạnh tủ sấy",
      status: "Liên hệ tư vấn & báo giá"
    },
    {
      id: 17,
      group: "Phụ kiện pallet",
      name: "Màng PE quấn căng co bọc bế đai kiện hàng (Stretch Film / PP PET Strapping)",
      type: [
        "Màng PE bóng dẻo co rút quấn quanh bệ mút tháp pallet 17-50 micron dẻo lực dai",
        "Dây đai nhiệt bện nhựa PP bóng / dây PET xanh cường lực mác nẹp góc thép dập kẹp",
        "Thanh ke nẹp giấy góc bọc cứng đầu nẹp vát lực chống rách bao"
      ],
      features: [
        "Cốt PE nguyên hạt đùn nén 4 lớp chịu lực bong bật mớ rộng lực dãn cực dai hãm bẹp dầm tốt",
        "Bảo vệ khối tháp hàng sấp pallet ngoài màng sương lạnh mưa bay dột dập ngấm rác",
        "Dây đai mác chống trượt không rão lực cản"
      ],
      applications: "Đóng kiện thắt vây cứng chặt toàn bệ hàng dồn mâm pallet trước khi nâng bốc cẩu container xuất bến bãi",
      status: "Còn hàng"
    },
    {
      id: 18,
      group: "Dịch vụ",
      name: "Dịch vụ cho thuê Pallet luân chuyển kho xanh (Pallet Rental & Pooling Program)",
      description: "Hỗ trợ cắt giảm toàn diện chi phí đầu tư vốn chết bằng dịch vụ cho thuê trọn gói pallet nhựa tiêu chuẩn, pallet gỗ HT theo chu kỳ ngày, tháng, năm",
      minimum_rental: "Số lượng thuê tối thiểu túc trực 50 cái / lượt thuê",
      deposit: "Hỗ trợ đặt cọc linh hoạt thỏa thầu ký nhận bàn giao",
      features: [
        "Chuyển vốn mua sắm tài sản (CAPEX) thành tiền chi phí thuê hoạt động (OPEX) gọn sổ sách báo thuế",
        "Không tốn diện tích chứa kho rác pallet hỏng vỡ khi trái mùa vụ bận rộn",
        "Nhận trao trả xử lý tận bến khi chấm dứt hợp đồng kho tải",
        "Pallet giao luôn tuyển súc rửa phẳng mác đạt chuẩn an toàn vệ sinh"
      ],
      applications: "Hợp đồng thu đổi nông thủy sản theo mùa trăng xuất cảng, bến bãi logistics quá tải lưu trữ tạm thời",
      status: "Liên hệ tư vấn - Hỗ trợ lập cấu hình kho thuê"
    }
  ]
};
