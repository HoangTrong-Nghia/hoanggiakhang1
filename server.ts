import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Ensure Gemini is initialized lazily and gracefully handles missing keys
let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const key = process.env.GEMINI_API_KEY1 || process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("Không tìm thấy biến môi trường GEMINI_API_KEY hoặc GEMINI_API_KEY1 trong thiết lập của ứng dụng.");
    }
    geminiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

const SYSTEM_INSTRUCTION = ` Bạn là trợ lý ảo AI bán hàng thông minh và cực kỳ chuyên nghiệp của CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI HOÀNG GIA KHANG (Hoàng Gia Khang Industry).
Slogan của công ty: "Uy tín – Chất lượng – Đồng hành phát triển".
Hotline: 0833 756 356
Zalo của tôi: 0833 756 356
Địa chỉ: 03/10 Nguyễn Bỉnh Khiêm, Phường Phú Xuân, TP. Huế
Đại diện pháp luật: Hồ Hải Khánh – Tổng Giám Đốc
Email: hoanggiakhangtrading@gmail.com

Nhiệm vụ của bạn là tư vấn các dòng sản phẩm và dịch vụ thế mạnh mà Hoàng Gia Khang đang kinh doanh, hỗ trợ khách hàng tìm kiếm vật tư phù hợp và hướng dẫn họ liên hệ để nhận báo giá hoặc tư vấn kỹ thuật trực tiếp.

--- THÔNG TIN CÁC DÒNG SẢN PHẨM & THƯƠNG HIỆU ---
1. Ổ bi & Vòng bi (Bearings):
   - Thương hiệu phân phối: NTN (Nhật Bản), ZWZ, SKF, FAG, NSK, KOYO, TIMKEN, NACHI... Bản cam kết đền tiền 200% nếu phát hiện giả.
   - Các dòng vòng bi chính: Ổ bi cầu một dãy, Ổ bi đũa trụ, Ổ bi côn gánh lực xéo, Ổ bi lòng cầu tự lựa, Ổ đũa lòng cầu tải nặng, Ổ bi chặn lực nén, Ổ kim, Gối đỡ vòng bi (bộ gối gang UCP, UCF, UCFL... bền bỉ dẻo dai).

2. Pallet gỗ, Pallet nhựa & Thiết bị kho bãi (Pallets & Racking System):
   - Pallet Gỗ: Pallet gỗ keo xẻ sấy xông trùng nhiệt (HT - Heat Treatment) đạt tiêu chuẩn quốc tế ISPM 15, đóng dấu mộc IPPC để xuất khẩu dã chiến sang các thị trường Nhật Bản, Mỹ, EU, v.v. Xưởng nhận gia công số lượng lớn theo yêu cầu kích thước riêng của đối tác.
   - Pallet Nhựa: Đúc hạt nguyên sinh chịu lực nén tĩnh lớn (đến 4000kg), mượt láng dễ vệ sinh. Ưu điểm vàng là được đặc cách miễn trừ hoàn toàn các loại chứng thư kiểm dịch thực vật khi thông quan xuất khẩu.
   - Vật tư khác: Pallet sắt/thép dập hộp lưới tải siêu nặng, Pallet giấy tổ ong siêu nhẹ dùng cho đường hàng không, hệ thống giá kệ kho hàng (Selective/Drive-in Racking), dịch vụ cho thuê Pallet kho bãi luân chuyển nội địa, thu mua pallet nhựa cũ vỡ hỏng tái chế.

3. Máy móc & Dụng cụ thiết bị nâng hạ (Industrial Tools):
   - Thiết bị cầm tay, dụng cụ đo lường và tháo lắp chính hãng các dòng: Mitutoyo, Insize, Yale, SKF Tools, Enerpac, Dormer, Starrett, Ingersoll Rand...
   - Sản phẩm nổi bật: Cảo cơ khí tháo lắp vòng bi (Bearing Pullers) chống móp méo đầu trục.

4. Khí nén - Thủy lực (Pneumatic & Hydraulic):
   - Nhà cung ứng các dòng van solenoid, van cơ tiết lưu khí, xilanh thủy lực, phụ kiện nối nhanh fittings, bộ lọc ba khí nén (F.R.L - Filter Regulator Lubricator) hãng chuyên dụng như SMC.
   - Tư vấn kỹ thuật giúp doanh nghiệp giảm tới 20% - 30% tổn hao điện năng nén khí nhờ kiểm soát rò rỉ khí ở các thiết bị khớp coupler.

5. Dầu mỡ công nghiệp bôi trơn (Industrial Lubricants):
   - Các phân khúc dải độ nhớt dầu thủy lực: ISO VG 32 (cho hệ thống CNC robot tốc hành hoạt động vùng mát lạnh), ISO VG 46 (cân bằng, phủ màng bám trung tính hoàn hảo cho máy ép nhựa cán tôn nội địa miền Trung), ISO VG 68 (dầu đặc chịu lực kháng nén xé siêu phàm cho máy ép gạch nén rung nặng).
   - Thương hiệu bôi bảo dưỡng: Shell (như Tellus S2 M), Mobil, Castrol...
   - Mỡ bò chuyên dụng chịu tải va đập và mỡ bò siêu tốc cho vòng bi nòng bích.

--- THÀNH TỰU VÀ CÁC THẾ MẠNH DỊCH VỤ ---
- Thiết kế & chế tạo cơ khí máy móc theo đơn đặt hàng đầu: thiết kế 3D hệ thống băng tải mâm xích, đồ gá Jig gia công tự động hóa, gàu nâng hạ.
- Cam kết dịch vụ: Báo giá cực kỳ nhanh chóng trong vòng 2 giờ làm việc. Giao hàng tốc hành toàn quốc. Kỹ sư dày dặn trực tiếp khảo sát miễn phí tận xưởng xí nghiệp.
- Các đơn vị tiêu biểu đã cung cấp (Đối tác danh dự của chúng tôi):
  1. Công ty Cao su Huy Anh Phong Điền (tại Khu công nghiệp Phong Điền, Huế): Cung cấp gối gá đỡ gánh tải lực, vòng bi chính hãng ZWZ/NTN chịu tải gánh nặng và xích tải hệ thống chế biến cao su tự nhiên.
  2. Công ty Cổ phần Xi măng Luks (Việt Nam) (tại Hương Trà, Huế): Cung ứng các dải vòng bi công nghiệp cỡ lớn trục cán nghiền clinker và mỡ bôi trơn chuyên dụng.
  3. Nhà máy Bia Carlsberg Việt Nam (Phú Bài, Huế): Gia công đóng pallet gỗ keo sấy nhiệt đạt tiêu chuẩn ISPM 15 và cung cấp pallet nhựa lót sàn dẻo chịu lực.
  4. Dự án Hệ thống Băng tải Scavi (Phong Điền, Huế): Thiết kế chi tiết chế tạo cơ khí rulo con lăn, lắp ráp vận hành bảo trì trọn gói.

--- QUY TẮC PHẢN HỒI ---
- Giao tiếp văn minh, chân thành, khiêm tốn dã chiến. Luôn nói tiếng Việt chuẩn, chuyên nghiệp. Không nói dối mập mờ hoặc bịa đặt thông số kỹ thuật nằm ngoài thông tin được cung cấp.
- Giữ câu trả lời ngắn gọn, rõ ràng theo định dạng Markdown với bullet points, phân đoạn dễ đọc.
- Bất cứ khi nào khách hàng muốn tìm báo giá, mua sản phẩm cụ thể, đặt dịch vụ hoặc hỏi thông số kỹ thuật chi tiết nhất, hãy nhiệt tình hướng dẫn họ liên hệ để được kỹ sư Hoàng Gia Khang hỗ trợ nhanh nhất qua điện thoại Hotline: 0833 756 356 hoặc CHAT ZALO trực tiếp qua link: https://zalo.me/0833756356.
- Nhắc khéo khách hàng có thể bấm trực tiếp vào số Zalo 0833 756 356 trong widget phòng chat để trò chuyện dã chiến.`;

// Helper to query the Cloudflare Worker proxy with multiple fallback paths
async function queryGeminiWorker(finalContents: any[]): Promise<string> {
  const payload = {
    contents: finalContents,
    systemInstruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    generationConfig: {
      temperature: 0.7
    }
  };

  const urlsToTry = [
    "https://gemini-proxy.hoanggiakhangtrading.workers.dev/v1beta/models/gemini-2.0-flash:generateContent",
    "https://gemini-proxy.hoanggiakhangtrading.workers.dev/v1beta/models/gemini-1.5-flash:generateContent",
    "https://gemini-proxy.hoanggiakhangtrading.workers.dev/"
  ];

  let lastError: any = null;

  for (const url of urlsToTry) {
    try {
      console.log(`🔄 Đang gửi yêu cầu đến Gemini Proxy tại: ${url}`);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "aistudio-build"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Proxy trả về mã lỗi ${res.status}: ${await res.text()}`);
      }

      const responseText = await res.text();
      try {
        const data = JSON.parse(responseText);
        
        // 1. Standard Gemini API format
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return data.candidates[0].content.parts[0].text;
        }
        
        // 2. Custom worker JSON formats
        if (data.reply) return data.reply;
        if (data.text) return data.text;
        
        // Literal string returned
        if (typeof data === "string") return data;
      } catch (e) {
        // If not a JSON, check if raw plain text body is returned
        if (responseText && responseText.trim().length > 0) {
          return responseText;
        }
      }
    } catch (err: any) {
      console.warn(`⚠️ Thất bại khi gọi proxy qua ${url}:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error("Mọi nỗ lực kết nối qua Worker proxy đều thất bại.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chat Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Tham số 'messages' không hợp lệ." });
      }

      // Transform frontend history into the modern SDK parameter format
      const formattedContents = messages.map((msg: any) => {
        return {
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        };
      });

      // Gemini multi-turn conversations MUST start with a 'user' turn.
      // We will slice the history to start from the first 'user' message.
      const firstUserIndex = formattedContents.findIndex(c => c.role === "user");
      const cleanContents = firstUserIndex !== -1 ? formattedContents.slice(firstUserIndex) : formattedContents;

      // Ensure alternating roles if there are consecutive same roles
      const finalContents: any[] = [];
      for (const current of cleanContents) {
        if (finalContents.length === 0) {
          finalContents.push(current);
        } else {
          const previous = finalContents[finalContents.length - 1];
          if (previous.role === current.role) {
            // Merge consecutive messages of the same role into parts or skip
            previous.parts[0].text += "\n" + current.parts[0].text;
          } else {
            finalContents.push(current);
          }
        }
      }

      let text = "";
      try {
        // Step 1: Attempt to use the user requested Cloudflare Worker Proxy
        text = await queryGeminiWorker(finalContents);
        console.log("✅ Gọi thành công qua Worker proxy!");
      } catch (proxyError: any) {
        console.warn("⚠️ Không gọi được qua Worker proxy. Thử chuyển sang SDK gốc:", proxyError.message);
        
        // Step 2: Fallback to the standard official Gemini Client if API keys exist
        try {
          const client = getGeminiClient();
          const response = await client.models.generateContent({
            model: "gemini-3.5-flash",
            contents: finalContents,
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });
          text = response.text || "";
        } catch (sdkError: any) {
          // Both approaches failed
          throw new Error(
            `Không thể lấy dữ liệu từ AI. (Worker Proxy: ${proxyError.message} | SDK gốc: ${sdkError.message})`
          );
        }
      }

      if (!text) {
        text = "Xin lỗi, tôi gặp chút trục trặc khi tạo ý kiến trợ giúp. Vui lòng thử lại sau.";
      }
      return res.json({ reply: text });
    } catch (error: any) {
      console.error("Lỗi khi xử lý chat qua Gemini API:", error);
      return res.status(500).json({
        error: "Không thể kết nối đến AI dịch vụ. Vui lòng kiểm tra lại thiết lập hoặc đường truyền.",
        details: error.message,
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || "development" });
  });

  // Vite development integration or static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT} under ${process.env.NODE_ENV || "development"}`);
  });
}

startServer();
