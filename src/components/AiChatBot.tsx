import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Phone, 
  MessageSquare, 
  ArrowUpRight,
  Maximize2,
  Minimize2,
  RefreshCw,
  Zap
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

const SUGGESTIONS = [
  { text: "🔧 Tư vấn vòng bi chính hãng", label: "Vòng Bi Chính Hãng" },
  { text: "🪵 Pallet gỗ chuẩn ISPM 15", label: "Pallet Gỗ Xuất Khẩu" },
  { text: "📦 Pallet nhựa chịu lực cao", label: "Pallet Nhựa Chịu Lực" },
  { text: "💨 Thiết bị khí nén SMC", label: "Khí Nén Thủy Lực" },
  { text: "🛢️ Chọn dầu thủy lực VG 46/68", label: "Dầu Mỡ Bôi Trơn" },
  { text: "📞 Yêu cầu báo giá nhanh", label: "Báo Giá Nhanh" }
];

export const AiChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Xin chào! 👋 Tôi là **Trợ lý AI Bán Hàng** của **Hoàng Gia Khang Industry**. \n\nTên của bạn là gì? Tôi có thể hỗ trợ giải đáp nhanh mọi nhu cầu về: \n\n*   **Ổ bi & Gối đỡ gánh tải lực** (NTN Nhật Bản, ZWZ, SKF, FAG...)\n*   **Pallet Gỗ xuất khẩu** chuẩn ISPM 15 & **Pallet Nhựa** dẻo siêu dai chịu lực cực khủng\n*   **Thiết bị Khí nén - Thủy lực SMC**, dầu mỡ công nghiệp\n*   **Dịch vụ thiết kế chế tạo máy**, băng tải tự động hóa xưởng.\n\nBạn hãy chọn gợi ý bên dưới hoặc đặt câu hỏi tư vấn ngay nhé!`,
      time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to messages bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: textToSend,
      time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Collect the current conversation history (roles: user or assistant)
      const payloadMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages })
      });

      if (!res.ok) {
        throw new Error("Lỗi mạng sản sinh phản hồi từ máy chủ");
      }

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Xin lỗi, hiện tại rãnh truyền AI bận rộn. Vui lòng bấm Hotline để gặp thợ ngay!",
          time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } catch (err) {
      console.error("AI Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ Có lỗi kết nối xảy ra với máy chủ AI. \n\nHệ thống server-side đang chờ thiết lập **API Key**. Bạn có thể liên hệ trực tiếp cho tư vấn viên để được báo giá và hỗ trợ nhanh nhất qua:\n\n*   **Hotline hỗ trợ:** 0833 756 356\n*   **Zalo Chat:** [0966 180 802](https://zalo.me/0966180802)\n\nChúng tôi rất hân hạnh được giải đáp băn khoăn của bạn!`,
          time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleResetChat = () => {
    if (window.confirm("Bắt đầu lại cuộc trò chuyện mới?")) {
      setMessages([
        {
          role: "assistant",
          content: `Xin chào! 👋 Tôi là **Trợ lý AI Bán Hàng** của **Hoàng Gia Khang Industry**. \n\nTên của bạn là gì? Tôi có thể hỗ trợ giải đáp nhanh mọi nhu cầu về: \n\n*   **Ổ bi & Gối đỡ gánh tải lực** (NTN Nhật Bản, ZWZ, SKF, FAG...)\n*   **Pallet Gỗ xuất khẩu** chuẩn ISPM 15 & **Pallet Nhựa** dẻo siêu dai chịu lực cực khủng\n*   **Thiết bị Khí nén - Thủy lực SMC**, dầu mỡ công nghiệp\n*   **Dịch vụ thiết kế chế tạo máy**, băng tải tự động hóa xưởng.\n\nBạn hãy chọn gợi ý bên dưới hoặc đặt câu hỏi tư vấn ngay nhé!`,
          time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  };

  // Safe markdown style text renderer (to bold items and links elegantly without heavy react-markdown wrapper)
  const renderMessageContent = (text: string) => {
    // Escape simple HTML
    let formattedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold text (**word** or *word*)
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formattedText = formattedText.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

    // Bullet points (* element)
    const lines = formattedText.split("\n");
    const parsedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        return `<li class="ml-4 list-disc text-sm py-0.5">${trimmed.substring(2)}</li>`;
      }
      return line ? `<p class="leading-relaxed py-1">${line}</p>` : `<div class="h-1"></div>`;
    });

    const bodyHtml = parsedLines.join("");

    // Look for markdown links [text](url) and replace they with styles
    const relativeHtml = bodyHtml.replace(
      /\[(.*?)\]\((.*?)\)/g,
      `<a href="$2" target="_blank" rel="noopener noreferrer" class="text-gold underline hover:opacity-80 font-semibold inline-flex items-center gap-0.5">$1 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline" style="transform: translateY(-1px)"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>`
    );

    return <div dangerouslySetInnerHTML={{ __html: relativeHtml }} />;
  };

  return (
    <div id="ai-chat-assistant-root" className="fixed bottom-24 right-6 z-50">
      
      {/* Dynamic Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="ai-chat-floating-trigger"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex h-[60px] items-center gap-3 rounded-full bg-linear-to-r from-navy-dark to-navy bg-navy-dark px-4 py-3 text-white shadow-2xl border-2 border-gold/40 hover:border-gold cursor-pointer"
          >
            {/* Pulsing visual halo ring */}
            <span className="absolute -inset-1 rounded-full bg-gold/20 animate-ping opacity-70"></span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-gold-light to-gold text-navy shadow-inner">
              <Bot size={22} className="animate-pulse" />
            </div>
            
            <div className="flex flex-col items-start pr-1">
              <span className="text-[10px] font-semibold tracking-wider text-gold-light uppercase flex items-center gap-1">
                <Sparkles size={10} className="text-yellow-400" /> Trợ lý AI đặc biệt
              </span>
              <span className="text-xs font-bold leading-none text-white whitespace-nowrap">Hỗ trợ Tìm Vật Tư</span>
            </div>

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Main Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-expanded-widget"
            initial={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
            animate={
              isMinimized 
                ? { opacity: 0.9, height: "60px", width: "280px", y: 40, x: 0 } 
                : { opacity: 1, scale: 1, height: "580px", width: "400px", y: 0, x: 0 }
            }
            exit={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className={`flex flex-col overflow-hidden rounded-xl border border-gold/30 bg-navy-dark text-white shadow-2xl max-w-[calc(100vw-32px)]`}
          >
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-white/10 bg-linear-to-r from-navy-dark to-navy px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 border border-gold/30 text-gold">
                    <Bot size={24} />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-navy-dark bg-green-500"></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase line-clamp-1">Trợ lý AI Hoàng Gia Khang</h4>
                  <div className="flex items-center gap-1.5">
                    <Zap size={11} className="text-gold-light fill-gold-light" />
                    <span className="text-[10px] text-gray-400 font-medium">Báo giá siêu tốc • Trực tuyến</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Reset button */}
                {!isMinimized && (
                  <button 
                    onClick={handleResetChat} 
                    title="Bắt đầu lại cuộc chat"
                    className="p-1 rounded-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <RefreshCw size={15} />
                  </button>
                )}
                {/* Minimize click */}
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 rounded-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  {isMinimized ? <Maximize2 size={15} /> : <Minimize2 size={15} />}
                </button>
                {/* Close widget */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-sm text-gray-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Minimized Body Shortcut */}
            {isMinimized && (
              <div 
                onClick={() => setIsMinimized(false)}
                className="flex items-center justify-center h-full cursor-pointer bg-navy-dark hover:bg-navy-light text-xs font-bold text-gold"
              >
                Nhấp để khôi phục màn hình tư vấn AI
              </div>
            )}

            {/* Full Body Area */}
            {!isMinimized && (
              <>
                {/* Chat Message Lists */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {messages.map((msg, index) => {
                    const isAi = msg.role === "assistant";
                    return (
                      <div 
                        key={index} 
                        className={`flex gap-2.5 ${isAi ? "justify-start" : "justify-end"}`}
                      >
                        {isAi && (
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold-light text-xs">
                            <Bot size={14} />
                          </div>
                        )}
                        <div className="flex flex-col max-w-[82%]">
                          <div 
                            className={`rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                              isAi 
                                ? "bg-white/5 border border-white/5 text-gray-100 rounded-tl-none shadow-md" 
                                : "bg-gold text-navy font-medium rounded-tr-none shadow-md"
                            }`}
                          >
                            {renderMessageContent(msg.content)}
                          </div>
                          <span className={`text-[10px] text-gray-400 mt-1 ${!isAi ? "text-right" : "text-left"}`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {isLoading && (
                    <div className="flex gap-2.5 justify-start">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-light text-xs animate-bounce">
                        <Bot size={14} />
                      </div>
                      <div className="flex flex-col">
                        <div className="bg-white/5 border border-white/5 rounded-sm rounded-tl-none px-4 py-3.5 flex items-center justify-center gap-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Direct Action Contacts Block */}
                <div className="px-4 py-2 bg-black/10 border-t border-b border-white/5 flex flex-wrap gap-2 items-center justify-between text-xs text-gray-400">
                  <span>Kết nối Hotline & Zalo nhận tư vấn chi tiết:</span>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://zalo.me/0966180802" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded-sm text-[11px] transition-all"
                    >
                      <MessageSquare size={12} /> Zalo 0966
                    </a>
                    <a 
                      href="tel:0833756356" 
                      className="inline-flex items-center gap-1 bg-gold hover:opacity-95 text-navy font-bold px-2.5 py-1 rounded-sm text-[11px] transition-all"
                    >
                      <Phone size={12} /> Gọi 0833
                    </a>
                  </div>
                </div>

                {/* Suggestions Pills Area */}
                <div className="px-4 py-2 border-b border-white/5 max-h-[85px] overflow-y-auto flex flex-wrap gap-1.5 scrollbar-none bg-black/5">
                  {SUGGESTIONS.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(`Tôi cần tư vấn về ${s.label}`)}
                      className="text-[11px] bg-white/5 hover:bg-gold hover:text-navy border border-white/10 hover:border-gold px-2.5 py-1 rounded-full text-gray-300 font-medium transition-all text-left whitespace-nowrap flex items-center gap-0.5 cursor-pointer"
                    >
                      {s.text} <ArrowUpRight size={10} className="opacity-60" />
                    </button>
                  ))}
                </div>

                {/* Bottom Input Area Form */}
                <form 
                  onSubmit={handleSubmit}
                  className="p-3 bg-navy border-t border-white/10 flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Bạn cần hỏi tìm sản phẩm, thông số gì..."
                    disabled={isLoading}
                    className="flex-1 text-sm bg-white/5 border border-white/10 rounded-sm px-3.5 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-gold/60 focus:bg-white/10 transition-all text-ellipsis"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="h-10 w-10 rounded-sm bg-gold hover:opacity-90 disabled:opacity-40 disabled:hover:opacity-40 text-navy flex items-center justify-center transition-all cursor-pointer shadow-md shrink-0"
                    title="Gửi câu hỏi"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
