import { 
  Users, 
  Package, 
  Clock, 
  Headphones, 
  CircleDashed,
  Nut,
  Wrench,
  AirVent,
  Droplets,
  Box,
  CheckCircle2
} from 'lucide-react';
import machineServiceImage from './assets/images/big_bag_filling_machine_1779261595400.png';
import palletServiceImage from './assets/images/wooden_pallets_service_1779261751650.png';
import bearingRealVsFake from './assets/images/bearing_real_vs_fake_1779261906792.png';
import ispm15PalletImage from './assets/images/ispm15_wooden_pallets_1779262014370.png';
import conveyorMaintenanceImage from './assets/images/conveyor_belt_maintenance_1779262091718.png';
import ballBearingsCategory from './assets/images/ball_bearings_category_1779262206924.png';
import boltsNutsScrews from './assets/images/bolts_nuts_screws_1779262284734.png';
import industrialToolsCategory from './assets/images/industrial_tools_category_1779262421623.png';
import pneumaticHydraulicCategory from './assets/images/pneumatic_hydraulic_category_1779262511872.png';
import lubricatingOilCategory from './assets/images/lubricating_oil_category_1779262536010.png';
import palletsCategory from './assets/images/pallets_category_1779262555381.png';
import bearingPillowBlock from './assets/images/bearing_pillow_block_1779262811521.png';
import fastenerBolts from './assets/images/fastener_bolts_1779263041086.png';
import pneumaticPower from './assets/images/pneumatic_power_1779263793887.png';

export const COMPANY_INFO = {
  name: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI HOÀNG GIA KHANG",
  tradingName: "HOANG GIA KHANG MANUFACTURING & TRADING CO., LTD",
  slogan: "Uy tín – Chất lượng – Đồng hành phát triển",
  taxCode: "3301756356",
  address: "03/10 Nguyễn Bỉnh Khiêm, Phường Phú Xuân, TP. Huế",
  hotline: "0833 756 356",
  email: "hoanggiakhangtrading@gmail.com",
  representative: "Hồ Hải Khánh – Tổng Giám Đốc",
  socials: {
    facebook: "https://facebook.com/hoanggiakhang",
    zalo: "https://zalo.me/0833756356",
    youtube: "#"
  }
};

export const NAV_LINKS = [
  { name: "Trang chủ", href: "#home" },
  { name: "Giới thiệu", href: "#about" },
  { 
    name: "Sản phẩm", 
    href: "#products",
    dropdown: [
      { name: "Ổ bi NTN/ZWZ", href: "#products" },
      { name: "Vật tư ngũ kim", href: "#products" },
      { name: "Bulong-Đai ốc", href: "#products" },
      { name: "Khí nén-Thủy lực", href: "#products" },
      { name: "Dầu mỡ công nghiệp", href: "#products" }
    ]
  },
  { 
    name: "Dịch vụ", 
    href: "#services",
    dropdown: [
      { name: "Thiết kế máy", href: "#services" },
      { name: "Pallet gỗ", href: "#services" },
      { name: "Pallet nhựa", href: "#services" },
      { name: "Tư vấn kỹ thuật", href: "#services" }
    ]
  },
  { name: "Tin tức", href: "#news" },
  { name: "Liên hệ", href: "#contact" }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Giải pháp Vật tư Công nghiệp Toàn diện",
    description: "Cung cấp đa dạng các loại vòng bi, vật tư phụ tùng máy móc chính hãng từ các thương hiệu hàng đầu thế giới.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 2,
    title: "Thiết kế & Chế tạo Máy theo Yêu cầu",
    description: "Đội ngũ kỹ sư giàu kinh nghiệm, quy trình sản xuất hiện đại, đảm bảo độ chính xác và hiệu quả tối ưu.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5feeec52?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    title: "Pallet Gỗ Xuất Khẩu - Chuẩn ISPM 15",
    description: "Sản xuất pallet gỗ chất lượng cao, sấy và xử lý mối mọt theo tiêu chuẩn quốc tế, phục vụ nhu cầu xuất khẩu.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
  }
];

export const STATS = [
  { label: "Khách hàng tin tưởng", value: "500+", icon: Users },
  { label: "Sản phẩm cung ứng", value: "1000+", icon: Package },
  { label: "Phản hồi báo giá", value: "2 giờ", icon: Clock },
  { label: "Hỗ trợ kỹ thuật", value: "24/7", icon: Headphones }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Ổ bi & Vòng bi",
    brand: "NTN, ZWZ, SKF, FAG...",
    image: ballBearingsCategory,
    icon: CircleDashed
  },
  {
    id: 2,
    title: "Bulong - Đai ốc - Vít",
    brand: "Vật tư ngũ kim cao cấp",
    image: boltsNutsScrews,
    icon: Nut
  },
  {
    id: 3,
    title: "Máy & Dụng cụ",
    brand: "Thiết bị cầm tay chuyên nghiệp",
    image: industrialToolsCategory,
    icon: Wrench
  },
  {
    id: 4,
    title: "Khí nén - Thủy lực",
    brand: "Van, Xylanh, Phụ kiện",
    image: pneumaticHydraulicCategory,
    icon: AirVent
  },
  {
    id: 5,
    title: "Dầu mỡ bôi trơn",
    brand: "Castrol, Shell, Mobil...",
    image: lubricatingOilCategory,
    icon: Droplets
  },
  {
    id: 6,
    title: "Pallet gỗ & Nhựa",
    brand: "Đạt chuẩn xuất khẩu ISPM 15",
    image: palletsCategory,
    icon: Box
  }
];

export const SERVICES = [
  {
    title: "Thiết kế & Chế tạo máy",
    image: machineServiceImage,
    description: "Chuyên thiết kế và thi công hệ thống băng tải, jig & đồ gá, cơ cấu nâng hạ tự động hóa xưởng sản xuất.",
    points: ["Khảo sát & Tư vấn tận nơi", "Thiết kế 3D chuyên nghiệp", "Gia công cơ khí chính xác", "Lắp đặt & Bàn giao trọn gói"]
  },
  {
    title: "Gia công Pallet số lượng lớn",
    image: palletServiceImage,
    description: "Cung ứng pallet gỗ, pallet nhựa mọi kích thước. Xử lý nhiệt ISPM 15 chuẩn xuất khẩu.",
    points: ["Năng lực SX hàng nghìn pallet/tháng", "Giá thành cạnh tranh tại xưởng", "Hỗ trợ thu mua pallet cũ", "Giao hàng nhanh chóng"]
  },
  {
    title: "Tư vấn kỹ thuật chuyên sâu",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    description: "Đội ngũ kỹ sư am hiểu sâu sắc về thiết bị công nghiệp, giúp tối ưu chi phí vận hành cho doanh nghiệp.",
    points: ["Khảo sát tại cơ sở miễn phí", "Đề xuất giải pháp tối ưu nhất", "Hỗ trợ kỹ thuật 24/7", "Bảo hành tận tâm"]
  }
];

export const BLOG_POSTS = [
  {
    title: "Cách phân biệt ổ bi NTN chính hãng và hàng nhái",
    date: "15/05/2026",
    image: bearingRealVsFake,
    excerpt: "Hướng dẫn chi tiết từ các chuyên gia giúp doanh nghiệp tránh mua phải hàng giả, hàng kém chất lượng...",
    content: `### 1. Thực Trạng Báo Động Về Vòng Bi Giả Trên Thị Trường Hiện Nay
Tại thị trường cơ khí công nghiệp Việt Nam, thương hiệu vòng bi **NTN (Nhật Bản)** luôn là sự lựa chọn hàng đầu nhờ độ bền bỉ ưu việt, hệ số chịu tải cao và tính hoạt động ổn định trong mọi điều kiện khắc nghiệt. Tuy nhiên, sự phổ biến này cũng đi kèm với vấn nạn hàng giả, hàng nhái tinh vi (counterfeit bearings) ngày càng tràn lan.
Sử dụng phải vòng bi NTN giả không chỉ làm giảm hiệu suất máy móc mà còn trực tiếp gây ra hỏng hóc nghiêm trọng cho dây chuyền sản xuất, dẫn đến tổn thất hàng trăm triệu đồng cho doanh nghiệp vì thời gian dừng máy đột ngột. Để bảo vệ thiết bị, quý khách hàng và kỹ sư vận hành cần nắm rõ các kỹ năng phân biệt được đúc kết từ các chuyên gia hãng NTN dưới đây.

---

### 2. Chi Tiết 5 Điểm Nhận Biết NTN Chính Hãng Bằng Mắt Thường & Công Nghệ

#### Điểm 1: Vỏ Hộp Giấy & Tem Nhôm Bảo Mật (Packaging Details)
*   **Vỏ Hộp Giấy:** Vỏ hộp NTN chính hãng được làm từ giấy bìa cứng cao cấp, thớ giấy phẳng, các cạnh gập được hoàn thiện sắc sảo, không bị móp méo hay bai rách. Màu sắc chủ đạo của vỏ hộp là màu xanh dương kết hợp trắng tinh tế, đồng đều trên mọi lô hàng.
*   **Nhãn Mác In Sắc Nét:** Tem nhãn dán trên vỏ hộp chứa mã vạch (barcode), mã sản phẩm (Part Number), và ký tự nước sản xuất (Made in Japan, Made in USA...). Trên tem thật, font chữ của mã được định vị cố định, rõ nét, hoàn toàn không bị lệch dòng, lem mực hoặc dại mắt như vỏ hộp nhái.

#### Điểm 2: Chữ Khắc Laser Trên Thân Vòng Bi (Laser Engraving)
*   **Tinh xảo & Gọn gàng:** Chữ NTN và các mã thông số bên rìa vòng bi chính hãng được khắc bằng công nghệ laser siêu việt của hãng. Nét chữ thanh mảnh, đều đặn, độ sâu đồng đều, khi sờ tay qua có cảm giác phẳng và mịn.
*   **Hàng giả dễ nhận dạng:** Chữ khắc trên hàng giả thường dùng công nghệ dập cơ khí hoặc bắn laser rẻ tiền, dẫn đến nét chữ dày, lem nhem, mờ ranh giới hoặc chữ to nhỏ không đồng đều.

#### Điểm 3: Quét Mã QR Đối Chiếu Trên App NTN Authenticator (QR Code Verification)
*   Để đối phó với công nghệ làm giả vỏ hộp, NTN đã áp dụng hệ thống mã QR bảo mật độc bản trên từng sản phẩm. Doanh nghiệp có thể tải ứng dụng chính thức **"NTN Authenticator"** hoặc sử dụng máy quét mã vạch chuyên sâu:
    1.  Mỗi dòng sản phẩm NTN chuẩn có một mã QR riêng biệt được in trên nhãn hộp.
    2.  Khi quét qua ứng dụng NTN, hệ thống sẽ kết nối với máy chủ hãng tại Nhật Bản và trả về thông tin xác thực ngay lập tức.
    3.  Nếu mã PIN đã được quét nhiều lần hoặc liên kết bị lỗi, ứng dụng sẽ cảnh báo giúp phát hiện rủi ro tức thì.

#### Điểm 4: Chất Lượng Thép G-Cr15 & Độ Hoàn Thiện Bề Mặt
*   **Độ Sáng Bóng Kim Loại:** NTN sử dụng hợp kim thép chịu lực đặc chủng G-Cr15 cao cấp được nhiệt hóa theo công nghệ giữ nhiệt độc quyền. Rãnh lăn và viên bi thép có bề mặt nhẵn bóng như gương, phẳng tuyệt đối để giảm ma sát tối đa.
*   **Góc Vát (Chamfering):** Các góc vát cạnh của vòng bi NTN thật được bo tròn chính xác, trơn láng. Trong khi đó, hàng giả do tiết kiệm chi phí mài bóng nên góc chamfer thường sắc lẹm, xù xì hoặc dính các vảy xỉ kim loại.
*   **Hương Vị Mỡ Đặc Trưng:** Tháo nắp chắn bụi (shield), phớt cao su (seal) của NTN thật sẽ ngửi thấy mùi mỡ bôi trơn chuyên dụng dịu nhẹ, màu sáng sệt đặc trưng. Ngược lại, hàng nhái sử dụng mỡ rẻ tiền có mùi hóa chất nồng hắc, màu đục bẩn nhanh bị tách dầu.

#### Điểm 5: Hồ Sơ CO/CQ Nguồn Gốc Đại Lý Ủy Quyền
*   Phương pháp cốt lõi nhất để khẳng định danh tính hàng chính hãng chính là chứng từ mua bán. Đơn vị cung cấp uy tín như **CÔNG TY TNHH SXTM HOÀNG GIA KHANG** luôn sẵn sàng cung cấp:
    *   **Giấy chứng nhận xuất xứ (CO - Certificate of Origin):** Do phòng thương mại nước xuất khẩu cấp.
    *   **Giấy chứng nhận chất lượng (CQ - Certificate of Quality):** Do nhà máy sản xuất NTN cấp khớp với số lô sản phẩm.

---

### 3. Hậu Quả Cực Kỳ Nghiêm Trọng Khi Mua Phải Hàng Giả Nguy Hiểm
Sự chênh lệch giá thành ban đầu của vòng bi giả so với hàng thật chỉ khoảng 30% - 50%, nhưng cái giá phải trả ở khâu vận hành là không thể đo đếm bằng tiền:
1.  **Vỡ Vòng Bi Lúc Vận Hành:** Gây kẹt trục quay, làm cong trục chính của động cơ hoặc tàn phá các bánh răng lân cận.
2.  **Quá Nhiệt Gây Cháy Nổ:** Ma sát cao sản sinh lượng nhiệt lượng khủng khiếp dễ làm chảy cụm kim loại hoặc cháy cuộn dây đồng động cơ.
3.  **Hủy Hoại Uy Tín Thương Hiệu:** Nếu sản phẩm của bạn bị lỗi lỗi chi tiết chỉ vì một linh kiện phụ như vòng bi, uy tín của toàn doanh nghiệp cũng sẽ bị sụt giảm nặng nề.

---

### 4. Cam Kết Đồng Hành Cùng Hàng Chính Hãng Từ Hoàng Gia Khang
Tại miền Trung, **Hoàng Gia Khang** tự hào là đơn vị uy tín hàng đầu cung ứng vòng bi NTN, ZWZ nhập khẩu chính hãng 100%. Đến với chúng tôi, quý khách hàng được:
*   Cam kết bồi thường 200% nếu phát hiện hàng giả, hàng nhái.
*   Tư vấn kỹ thuật chọn lựa mã series phù hợp với tải trọng và môi trường làm việc thực tế.
*   Đầy đủ bộ hồ sơ pháp lý CO, CQ, hóa đơn VAT minh bạch.
`
  },
  {
    title: "Tiêu chuẩn ISPM 15 cho pallet gỗ xuất khẩu",
    date: "10/05/2026",
    image: ispm15PalletImage,
    excerpt: "Những quy định mới nhất về việc khử trùng gỗ mà mọi doanh nghiệp xuất khẩu cần nắm vững...",
    content: `### 1. Tiêu Chuẩn ISPM 15 Là Gì?
**ISPM 15 (International Standards for Phytosanitary Measures No. 15)** là tiêu chuẩn quốc tế về các biện pháp kiểm dịch thực vật đối với vật liệu đóng gói bằng gỗ trong thương mại quốc tế. Quy định này do Công ước Bảo vệ Thực vật Quốc tế (IPPC) ban hành nhằm ngăn ngừa sự lây lan toàn cầu của các loại dịch hại, côn trùng có hại (như mọt gỗ, tuyến trùng ký sinh dăm gỗ...) thông qua pallet, thùng gỗ xuất khẩu.

---

### 2. Các Biện Pháp Xử Lý Đúng Chuẩn ISPM 15
Để đạt chứng nhận kiểm dịch ISPM 15, tất cả vật liệu gỗ nguyên khối làm đóng pallet phải trải qua một trong hai phương pháp xử lý chính thống dưới đây:

#### Phương Pháp 1: Xử Lý Nhiệt (Heat Treatment - Ký hiệu HT)
*   **Yêu cầu kỹ thuật:** Gỗ phải được đưa vào lò sấy sấy nóng cho đến khi nhiệt độ lõi tối thiểu đạt **56°C** và duy trì liên tục trong ít nhất **30 phút**.
*   **Ưu điểm:** Diệt sạch triệt để côn trùng sinh trưởng sâu trong thớ gỗ, giảm tối đa độ ẩm tự nhiên của phôi gỗ giúp chống nấm mốc trong quá trình vận chuyển đường biển dài ngày.

#### Phương Pháp 2: Khử Trùng Bằng Methyl Bromide (Methyl Bromide Fumigation - Ký hiệu MB)
*   Khử trùng trong buồng kín bằng chất hóa học đặc dùng Methyl Bromide với liều lượng định sẵn tùy thuộc nhiệt độ môi trường xung quanh kéo dài tối thiểu 24 tiếng. Tuy nhiên phương pháp này đang dần bị hạn chế do tác hại khí thải đối với môi trường.

---

### 3. Quy Cách Đóng Dấu IPPC Được Công Nhận Toàn Cầu
Mỗi chiếc pallet gỗ xuất khẩu sau khi được xử lý bắt buộc phải được đóng mộc (in nhiệt hoặc phun mực đen) một dấu ấn kiểm định không thể tẩy xóa có bố cục chuẩn gồm:
*   **Biểu tượng IPPC:** Hình lá cây bông lúa đặc trưng.
*   **Mã quốc gia:** VN (Việt Nam).
*   **Mã cơ sở khử trùng:** Được cục bảo vệ thực vật cấp phép.
*   **Mã xử lý lý hóa:** Ký hiệu rõ **HT** (Nhiệt luyện) hoặc **MB** (Khử trùng hóa học).

---

### 4. Năng Lực Cung Ứng Pallet Gỗ Chuẩn ISPM 15 Tại Hoàng Gia Khang
**Hoàng Gia Khang** sở hữu hệ thống nhà xưởng sản xuất và lò sấy hơi nước hiện đại đạt chuẩn, chuyên gia công cung cấp sỉ và lẻ các mẫu Pallet Gỗ:
*   Pallet keo gỗ, pallet thông dầu nhập khẩu chất bền cao.
*   Bao trọn các thủ tục khử trùng đóng dấu IPPC, cấp chứng thư kiểm dịch thực vật chuẩn chỉ để thông quan trơn tru tại các thị trường khó tính bậc nhất như Nhật Bản, Hoa Kỳ, Châu Âu (EU).
`
  },
  {
    title: "Top 5 lỗi thường gặp khi bảo trì băng tải",
    date: "05/05/2026",
    image: conveyorMaintenanceImage,
    excerpt: "Tổng hợp các vấn đề kỹ thuật phổ biến và cách khắc phục nhanh chóng để không gián đoạn sản xuất...",
    content: `### Lời Mở Đầu: Tầm Quan Trọng Của Vận Hành Hệ Thống Băng Tải
Dây chuyền băng tải chính là huyết mạch của các nhà xưởng chế biến kho bãi, cơ sở gạch đá hay dăm gỗ xuất khẩu hiện nay. Việc bảo trì sai phương pháp hoặc lơ là các dấu hiệu hư hại ban đầu sẽ khiến hệ thống bị đình trệ đột ngột, kéo theo chi phí sửa chữa vô cùng lớn. Dưới đây là top 5 lỗi phổ biến nhất và cách khắc phục chuẩn kỹ thuật từ các kỹ sư cơ khí của **Hoàng Gia Khang**.

---

### 1. Hiện Tượng Băng Tải Bị Lệch Hướng (Conveyor Belt Misalignment)
*   **Biểu hiện:** Mặt dây đai cao su chạy lệch sang một bên sườn làm cọ xát với kết cấu thép thép gây xước mép dập mòn hoặc lật dây đai băng.
*   **Nguyên nhân:** Lắp ráp con lăn chủ động hoặc bị động không đồng song song, rulo bám bẩn đất đá dầy lên làm lệch tâm kéo, hoặc do lực căng đai phân bố không đều hai bên sườn.
*   **Khắc phục:** Định kỳ vệ sinh sạch mảng dực tích tụ trên rulo, chỉnh căng lại ty-ren vít giữ trục gối đỡ con lăn của đầu băng tải.

---

### 2. Vật Liệu Bị Trượt Hoặc Rơi Vãi Ra Ngoài (Material Spillage)
*   **Biểu hiện:** Cát, đá, dăm dăm gỗ đổ từ phễu nạp liệu xuống liên tục bắn văng tung tóe ra nền đất gây mài mòn con lăn bên dưới.
*   **Nguyên nhân:** Tấm cao su chắn hai bên vách sườn bị mòn rách, hoặc góc nghiêng sấy liệu dốc quá mức tiêu chuẩn.
*   **Khắc phục:** Thay thế tấm chắn cao su (skirting rubbers) chịu mài mòn cao, thiết kế thêm cánh tản lực rơi liệu để dẫn dòng êm hơn.

---

### 3. Mặt Dây Đai Cao Su Bị Rách Hoặc Mài Mòn Quá Mức (Belt Wear & Tears)
*   **Nguyên nhân:** Tải liệu có độ sắc lẹm (thủy tinh vụn, phôi kim loại) va đập lực lớn lúc rót, hoặc do các con lăn dẫn động bị kẹt chết trục không còn khả năng tự quay làm mòn miết bề mặt đáy thắt băng.
*   **Khắc phục:** Sử dụng dây đai lớp bố vải chịu lực nén chống rách cao cấp, thay thế định kỳ con lăn đỡ dán cao su giảm chấn ở các điểm nạp liệu trung tâm.

---

### 4. Động Cơ & Hộp Số Bị Quá Nhiệt, Có Tiếng Ồn Lớn
*   **Nguyên nhân:** Thiếu dầu mỡ bôi trơn bánh răng, trục các-đăng mất định tâm đồng trục hoặc băng tải bị quá tải trọng hoạt động liên tiếp nhiều giờ.
*   **Khắc phục:** Đo dòng điện Ampe kế kiểm thử tải động cơ, thêm hoặc thay mới dầu dầu nhớt hộp số chuyên dụng sáu tháng một lần.

---

### 5. Khớp Nối Nối Động Cơ Bị Rung Lắc Bất Thường
*   **Sự cố:** Các khớp nối xích hoặc khớp cao su đệm của đầu giảm tốc bị rơ nứt khiến truyền lực bị giật.
*   **Khắc phục:** Kiểm tra độ đồng tâm trục bằng thước lá đo căn lá, bổ sung cao su đệm lót khít giảm giật chính xác cao.

---

### Đơn Vị Thiết Kế Bảo Trì Hệ Thống Băng Tải Chuyên Nghiệp
Nếu doanh nghiệp của bạn đang gặp bất kỳ vướng mắc kỹ thuật phức tạp nào về hệ thống băng tải, hãy liên hệ ngay với **Công ty TNHH SXTM Hoàng Gia Khang**. Chúng tôi cung ứng trọn gói từ khâu khảo sát, lên bản vẽ kết cấu 3D, trực tiếp gia công chế tạo chi tiết rulo, con lăn, khung băng khung tải và cung cấp dịch vụ bảo trì định bảo dưỡng trọn gói tối ưu!
`
  },
  {
    title: "Nguyên nhân gây hỏng gối đỡ vòng bi và giải pháp khắc phục",
    date: "20/05/2026",
    image: bearingPillowBlock,
    excerpt: "Nguyên nhân hàng đầu khiến gối đỡ vòng bi (Pillow Block) bị nứt vỡ, quá nhiệt và cách tăng tuổi thọ sử dụng thiết bị...",
    content: `### 1. Thực Trạng Sử Dụng Gối Đỡ Vòng Bi Trong Công Nghiệp
Gối đỡ vòng bi (bộ gối đỡ gồm vỏ gang đúc UCP, UCF, UCFL... và ruột bạc đạn chén UC xoay trục) là cụm chi tiết nâng đỡ trục quay truyền tải mồi vô cùng phổ biến trong các máy nghiền ép, quạt lò sấy nhiệt độ cao và hệ thống băng chuyền nặng. Mặc dù được thiết kế đúc gân chịu tải kiên cố, gối đỡ vòng bi vẫn liên khúc xảy ra hiện tượng cháy bó gián đoạn máy do thiếu kỹ năng bảo dưỡng vận hành thiết yếu.

---

### 2. 4 Nguyên Nhân Gây Hỏng Gối Đỡ Vòng Bi Hàng Đầu

#### A. Lắp Ráp Sai Sai Lệch Tâm Trục (Shaft Misalignment)
Khi hai chiếc gối đỡ nâng đỡ một trục xoay tịnh tiến lệch hướng song song hoặc dốc nhẹ lệch góc gối, lực mỏi uốn xoắn sẽ tác dồn cưỡng bức trực tiếp lên vòng bi UC sườn bên. Vết xước nòng xuất hiện nhanh làm vỡ rãnh, và giật nứt vỏ gang búa sườn.

#### B. Thừa Hoặc Thiếu Mỡ Bôi Trơn (Faulty Lubrication)
*   **Nhồi mỡ quá tay (Over-greasing):** Việc đùn mỡ nhiệt độ cao tràn ngập tất cả lỗ trống trong vỏ gối sẽ bít nghẽn đường xả nhiệt tự nhiên của gối, làm tăng áp suất quay và tống vỡ phớt chặn cao su che bụi.
*   **Bỏ bôi trơn lâu ngày:** Gây bám cặn vảy ma sát, kim loại mài miết trực tiếp sinh tia lửa nhiệt, bó kẹt chết bi trượt.

#### C. Ảnh Hưởng Từ Bụi Bẩn Và Nước Xâm Nhập
Nhà xưởng gia công gạch ngói, xay đá thạch anh, bột gỗ ẩm rác,... bụi dăm lọt vào gối mài mòn mặt xốp phớt đệm gối hông tạo thành keo bùn gỉ rỗ bóng gương bánh bi, bóp kẹt quay sát.

---

### 3. Biện Pháp Chăm Sóc Và Nâng Cao Tuổi Thọ Gối Đỡ
1.  **Định tâm trục chuẩn tối đa:** Luôn tra lá căn hoặc máy định tâm la-zer đối chiếu rãnh phẳng chân gối đỡ trước khi đóng chốt then vít dập đe.
2.  **Bơm định lượng lành mạnh:** Bơm nhũ mỡ mác chuyên dùng vừa phải định kỳ theo đúng dải giờ sử dụng chỉ dẫn.
3.  **Lựa chọn cấu gối chính gốc đại lý:** Ưu tiên chọn các hãng danh tiếng do **Hoàng Gia Khang** cung ứng gốc nhập khẩu như **NTN (Nhật Bản), SKF (Thụy Điển), ASAHI, ZWZ** với cốt vỏ bọc dày ráo đầm chịu áp kiên cố dẻo dai!
`
  },
  {
    title: "Cách lựa chọn dầu thủy lực ISO VG 32, 46 hay 68 phù hợp",
    date: "18/05/2026",
    image: lubricatingOilCategory,
    excerpt: "So sánh toàn diện về độ nhớt động học giữa ba cấp độ nhớt phổ biến và cẩm nang lựa chọn hoàn hảo cho hệ thống ép đùn dập thủy lực...",
    content: `### 1. Tầm Quan Trọng Của Việc Chọn Đúng Cấp Độ Nhớt Thủy Lực
Độ nhớt động học của dầu nhớt chính là chỉ số vật lý quyết định độ khít kín của trục nòng piston, tốc độ hồi tiếp luồng chất dẫn và năng cơ sấy mát hệ thống. Lựa chọn nhớt sai lệch làm tổn giảm từ 10% đến 25% công lực đẩy thủy lực, sinh hẹp ống nạp gây ồn bọt nén và mòn sướt nòng xilanh nhanh bất thường.

---

### 2. Sự Khác Biệt Giữa ISO VG 32, 46 Và 68

#### A. ISO VG 32 (Loãng - Tốc độ nhanh & Môi trường làm việc lạnh)
*   **Độ nhớt cơ bản:** Loanh quanh 32 cSt đo tại nhiệt tiêu chuẩn 40°C.
*   **Tính chất vật lý:** Độ loãng lỏng cao, chảy phản ứng linh hoạt cực nhạy, lực ma sát khởi động thấp tuyệt hảo.
*   **Kiến nghị sử dụng:** Hệ thống CNC phay tinh xảo công nghiệp, tủ tay robot cánh gạt chính xác, hoặc bồn dầu trạm bơm xe công tác vùng rét sâu.

#### B. ISO VG 46 (Trung bình - Cấp độ thông dụng và cân bằng nhất)
*   **Độ nhớt cơ bản:** 46 cSt tại 40°C.
*   **Tính chất vật lý:** Độ phủ dầu bám sệt màng trung tính lý tưởng bậc nhất. Dải nhiệt công tác thích hợp cực tốt vùng nền đất khí ẩm miền trung chúng ta.
*   **Kiến nghị sử dụng:** Hầu hết dòng máy ép phun nhựa, máy uốn chấn cán tôn dải mỏng, hệ cẩu kích ben cơ động bánh lốp.

#### C. ISO VG 68 (Đặc - Chịu áp nhiệt tải gánh cực nặng)
*   **Độ nhớt cơ bản:** 68 cSt tại 40°C.
*   **Tính chất vật lý:** Kháng nén xé siêu phàm, bôi bọc dày rơ chống thấm lún tuyệt hảo dải ép lực đầm lớn hơn 350 bar.
*   **Kiến nghị sử dụng:** Máy ép gạch bê tông khối rung lực mạnh, các lò cơ cán quặng thép xưởng xi măng cực tải dã chiến dai sức.

---

### 3. Nguyên Tắc Tra Lựa Nhớt Thông Minh Cho Kỹ Sư
*   Dựa sát hướng dẫn thiết kế khuyến cáo của nhà sản xuất máy (OEM Service Manual).
*   Thực hiện nâng chuyển bước độ nhớt (Ví dụ: Từ VG 46 nâng lên dùng VG 68) khí máy ép đã qua nhiều niên hạn sử dụng bị rơ cổ nòng hở nhẹ nhằm bù đắp khoảng xì nén hao ga, giữ áp lực êm và nâng khỏe tốt.
*   Liên hệ và mua dùng các dòng dầu thủy lực bôi dưỡng nhập chính gốc **Shell Tellus S2 M, Mobil DTE 20 Series** từ đối tác vàng uy tín thương hiệu **Hoàng Gia Khang**.
`
  },
  {
    title: "Cẩm nang quy chuẩn lực siết bulong và ê-cu cường độ cao",
    date: "16/05/2026",
    image: fastenerBolts,
    excerpt: "Hướng dẫn xác định tiêu chuẩn cấp bền bulong lục giác 8.8, 10.9, 12.9 và bảng lực siết ê-cu ren chuẩn tránh hiện tượng chờn nứt...",
    content: `### 1. Ý Nghĩa Của Việc Kiểm Soát Lực Siết Bulong
Trong công xưởng cơ khí, thi công vì dầm mái thép, cụm bích van đầu nguồn dầu siêu áp, bulong kẹp ecu chính là bức tường neo chắn chịu lực gánh xé va vấp cực lớn. Giao thức bóp vặn bulong dã chiến theo lối cảm tính thợ sẽ gây nảy sinh hai thảm kịch kĩ thuật:
*   **Siết chưa tới ngưỡng áp lực:** Tạo độ phẳng hở, máy rung kéo dài gây phá hủy mỏi chân ren làm tuột bu-lông gãy văng liên kết.
*   **Siết bạo tàn (Over-torque):** Vượt quá dải giới hạn đàn hồi của thép làm bứt thắt lõi vít, tuột nhẵn ren ê-cu hoặc nứt bay cổ rãnh chốt ren tự dưng trong quá trình máy gồng dập.

---

### 2. Phân Cấp Bền Kết Cấu Bulong (Bolt Grades)
Bề mặt chóp đầu bulong cường độ cao chính mác luôn khắc ký tự đại diện là các dãy số định dạng như: **8.8, 10.9, 12.9**
*   **Trị số đứng trước dấu chấm:** Nhân tích số with 100 sẽ ra dượt giới hạn độ bền kéo kéo đứt giới hạn lớn nhất của vật liệu cấu thành ($N/mm^2$). Điển hình mác 10.9 có độ bền kéo đạt tối thiểu $1000\ N/mm^2$.
*   **Trị số đứng sau dấu chấm:** Lấy giá trị đó chia 10 đại diện tỷ lệ giữa giới hạn dẻo chảy chảy tối thiểu so với giới hạn bền kéo đứt ($90\%$). Giúp phát hiện điểm biến dạng dài cong vẹo gẫy chi tiết.

---

### 3. Phương Pháp Siết Lực Kỹ Thuật Đúng Chuẩn An Toàn
1.  **Tra cứu bảng trị số lắp đặt:** Luôn tra bảng dải lực Nm quy chuẩn cho ren tĩnh (môi trường ren khô mạ kẽm hoặc ren có tra dầu bôi trơn).
2.  **Sử dụng cần nấc siết cân lực (Torque Wrench):** Không dùng cờ lê tự nới thô thiển bạo, căn chỉnh siết lực có kiểm định sừng chuẩn đầu gài nấc Nm bẻ khớp tích tắc.
3.  **Áp dụng đối xứng hoàn mĩ:** Đặc biệt khi lắp tấm bích tròn, nắp phốt thủy lực lớn, siết đều vòng tròn tản trải chéo sao liên động (Cross-pattern) 3 đợt tăng lực dần ($30\% \rightarrow 60\% \rightarrow 100\%$) lực định chuẩn để chống lệch gối vỡ răng bích.
`
  },
  {
    title: "Tối ưu chi phí sản xuất: 4 bước cắt giảm rò rỉ khí nén",
    date: "14/05/2026",
    image: pneumaticPower,
    excerpt: "Tiết kiệm ngay 20-30% điện năng tiêu hao của lò máy nén khí trung tâm nhờ kiểm soát khớp fittings ren nối và cuộn dẫn...",
    content: `### 1. Kẻ Thù Thầm Lặng Đốt Tiền Nhà Xưởng Tự Động Hóa
Tại đa phần nhà xưởng đóng bao gỗ dăm, xưởng may, lắp ráp bao bì cơ khí cơ điện, trạm sinh hơi nén là hệ thiết bị ăn dòng điện tiêu tốn nhiều chi phí hóa đơn nhất. Thế nhưng, con số thử nghiệm thực tiễn rỉ khí nén khiến người quản lý thất thần: Lên tới **25% - 35%** năng thế hơi áp lực sinh ra bị tan biến lặng lẽ vào không khí tự nhiên qua các lỗ rò li ti khe lắp lót. Điều này trực tiếp làm dột sụt tụt áp dòng nén, bắt máy nén hơi trung tâm liên tục rú gầm chạy nén bù, tăng nhiệt xé nhớt bôi và hư hao bạc nén trục cực kỳ trầm trọng.

---

### 2. 4 Bước Khóa Cửa Rò Rỉ Khí Nén Do Kỹ Sư Hoàng Gia Khang Kiến Nghị

#### Bước 1: Khảo Sát Tích Cực Vào Khung Giờ Nghỉ Ca
Tận dụng thời gian thợ nghỉ ca trưa hoặc tối để cho máy nén chạy nạp giữ bình ngắt động cơ để tuần hành lắng nghe các tiếng phì rít gió nhỏ giọt tại các nhánh đầu van, hộp sấy nén trung gian và cuộn dây lò xo.
#### Bước 2: Rà Soát Thay Thế Gioăng Khớp Nối Nhanh (Fittings & Couplers)
Các đầu cắm đực cái tháo mở nhanh sau thời kỳ tỳ miết cọ dập nát hỏng lót cao su bẹt đệm O-Ring mài mòn. Việc bôi keo bị bợt sùi tịt rò thì nên kiên quyết thay thế fittings khớp đồng răng nhựa SMC chất lượng đạt chuẩn.
#### Bước 3: Bảo Dưỡng Bộ Bầu Ba Lọc Khí (F.R.L - Filter Regulator Lubricator)
Bầu chứa bavia lọc xả hơi tự động bị găm cặn keo than ráo nết kìm hãm phao màng hở nhẹ liên đới, thoát hơi phè phè mặt kẹp.
#### Bước 4: Lắp Đăt Đường Ống Khí Nén Trục Xương Cá
Thay vì đi ống dài thũng lòng vòng dây mềm sinh dập co gập gẫy, hãy đầu tư đường dẫn khí chính bằng ống cứng kẽm bền vững, bố trí các nhánh dốc xả gom nước chuẩn kĩ nghệ tiêu chuẩn.

---

### 3. Hoàng Gia Khang - Tư Vấn Thiết Kế Giải Pháp Tiết Kiệm Năng Lượng
Hãy đồng hành với **Hoàng Gia Khang** để được tư vấn kĩ thuật trọn gói miễn phí, thiết kế nâng hạ công suất trạm nén khí an toàn và thu nhận báo giá phụ kiện đường dẫn, ống hơi chính mác SMC dẻo dai an tâm tuyệt đối!
`
  },
  {
    title: "Pallet gỗ keo xẻ sấy và pallet nhựa: Nên chọn dòng nào?",
    date: "12/05/2026",
    image: palletsCategory,
    excerpt: "Bảng cân đo đong đếm so sánh ưu nhược điểm kỹ thuật về khả năng chịu tải tĩnh, sấy chống mốc khô, an toàn thực phẩm...",
    content: `### 1. Phân Vân Lớp Lót Kê Hàng Nâng Hạ Kho Bãi
Đối với nghiệp vụ đóng gác, bốc xếp lưu container bãi cảng hàng hóa, tấm sàn Pallet chính là điểm gá tựa quyết định năng lực tịnh tiến mượt và độ vững cho kiện thùng xếp cao. Có hai trường phái vật tư pallet thịnh hành gánh vác phần nhiều hàng hóa bến dỡ Việt Nam hiện thời là Pallet Gỗ Keo sấy lò chính xưởng và Pallet Nhựa đúc cứng chịu lực cao.

---

### 2. So Sánh Bản Chất Kỹ Thuật Toàn Diện

| Chỉ Số Chất Lượng | Pallet Gỗ Keo Sấy Lò (Khakico) | Pallet Nhựa Lõi Thép đúc |
| :--- | :--- | :--- |
| **Giá Mua Ban Đầu** | Rất tốt dã chiến, thích hợp mua số lượng vạn tấm | Đầu tư ban đầu cao gấp 3 - 5 lần pallet gỗ |
| **Tải Trọng Tĩnh Nhấc** | Gánh vững 2,000kg - 3,500kg kết cấu đinh gài xoắn | Chịu lực tới 4,000kg (Có cốt sườn sắt luồn) |
| **Độ Kháng Vân Nhiệt** | Sấy dưới $18\%$ mốc co giãn ẩm nhẹ, ISPM 15 chuẩn | Trơ hoàn toàn với nấm ẩm, kháng lạnh tới $-40^\circ C$ |
| **Vệ Sinh Phòng Sạch** | Có dăm xước vảy dăm, đinh sắt óp méo gỉ nhẹ | Tuyệt đối láng mượt, đạt chuẩn FDA sạch sẽ FDA |
| **Độ Cơ Động Sửa Chữa** | Bị gãy nứt vách nan, dập búa thay đố gỗ ráo gọn | Bị cán dập vỡ góc nhựa chỉ có đúc tái chế lại |

---

### 3. Định Vị Sự Lựa Chọn Kinh Tế Và Thích Hợp
*   **Chọn Pallet Gỗ Keo tự nhiên sấy tiêu chuẩn:** Phù hợp tuyệt vời cho các công ty logistics kho vận xi măng, dăm gỗ đóng bao, xơ dừa xuất bãi, hạt cát bãi cảng bốc container đi nước ngoài. Tiết kiệm nguồn vốn đầu tư ban đầu cực lớn, dễ bán thu hồi xác phôi dăm sau này.
*   **Chọn Pallet Nhựa kỹ thuật cao cấp:** Bắt buộc áp dụng cho kho lạnh cấp đông chế biến cá vây xuất khẩu, dây chuyền mĩ phẩm y tế kiểm soát độ vô trùng ngặt nghèo tuyệt đối, các khâu gá xếp pallet tự động hoàn toàn băng chuyền cảm biến tự rung lắc.

---

### 5. Năng lực gia công đóng gói Pallet Gỗ Keo Tại Hoàng Gia Khang
Xưởng pallet riêng của **Hoàng Gia Khang** chuyên xẻ phôi kẽ gỗ thông keo rừng núi, gia công tắp lự hàng ngàn sản phẩm xuất xưởng, xử lý nhiệt bảo toàn chất đóng dấu khử trùng an định IPPC. Quý đối tác hoàn toàn an sướng tâm ý đặt hàng nhận trọn niềm tin!
`
  }
];

export const WHY_CHOOSE_US = [
  { title: "Báo giá nhanh", desc: "Phản hồi trong vòng 2 giờ làm việc", icon: Clock },
  { title: "Hàng chính hãng", desc: "Cam kết chất lượng, đầy đủ CO/CQ", icon: CheckCircle2 },
  { title: "Giao hàng tốc hành", desc: "Vận chuyển toàn quốc, đúng tiến độ", icon: Box },
  { title: "Giá cả tối ưu", desc: "Chính sách ưu đãi cho khách hàng thân thiết", icon: Package },
  { title: "Bảo hành linh hoạt", desc: "Đổi trả dễ dàng, bảo trì tận nơi", icon: Headphones },
  { title: "Kỹ sư chuyên nghiệp", desc: "Tư vấn kỹ thuật tận tâm, am hiểu", icon: Wrench }
];


export const PARTNERS = ["NTN", "ZWZ", "SKF", "FAG", "NSK", "KOYO", "TIMKEN", "NACHI"];

export const DELIVERED_CUSTOMERS = [
  {
    id: 1,
    name: "Công ty Cao su Huy Anh Phong Điền",
    location: "Khu công nghiệp Phong Điền, Thừa Thiên Huế",
    items: "Cung cấp gối đỡ gánh tải lực, vòng bi ZWZ/NTN chịu tải gánh nặng và xích tải hệ thống chế biến cao su tự nhiên.",
    status: "Bàn giao hoàn tất"
  },
  {
    id: 2,
    name: "Công ty Cổ phần Xi măng Luks (Việt Nam)",
    location: "Thị xã Hương Trà, Thừa Thiên Huế",
    items: "Cung ứng vòng bi công nghiệp cỡ lớn trục cán nghiền clinker và mỡ bôi trơn chịu nhiệt cực áp.",
    status: "Bàn giao hoàn tất"
  },
  {
    id: 3,
    name: "Nhà máy Bia Carlsberg Việt Nam",
    location: "Khu công nghiệp Phú Bài, Hương Thủy, Huế",
    items: "Gia công đóng pallet gỗ keo sấy lò xuất khẩu chuẩn ISPM 15 và pallet nhựa lót sàn siêu dai.",
    status: "Bàn giao hoàn tất"
  },
  {
    id: 4,
    name: "Dự án Nâng cấp Hệ thống Băng tải Dệt may Scavi",
    location: "Khu công nghiệp Phong Điền, Thừa Thiên Huế",
    items: "Khảo sát, thiết kế chế tạo rulo con lăn, lắp đặt cân chỉnh và bảo dưỡng định kỳ trọn gói băng chuyền tự chọn.",
    status: "Bàn giao hoàn tất"
  }
];

