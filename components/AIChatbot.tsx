"use client";

import { useChat } from "@ai-sdk/react";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat() as any;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-charcoal text-pearl p-4 rounded-full shadow-2xl border border-gold/30 hover:border-gold transition-all duration-300"
        >
          <MessageSquare className="w-6 h-6 text-gold" />
        </button>
      ) : (
        <div className="w-80 h-96 flex flex-col backdrop-blur-xl bg-charcoal/90 border border-gold/30 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-obsidian w-full px-4 py-3 flex justify-between items-center border-b border-gold/20">
            <span className="font-serif text-sm tracking-wide text-gold">JP Legacy Private Concierge</span>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-pearl transition">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-sm text-pearl bg-white/10 p-3 rounded-lg border border-white/5">
                Hola. I am the exclusive AI Concierge for JP Legacy Group. How may I assist you with your luxury real estate portfolio today?
              </div>
            )}
            {messages.map((m: { id: string; role: string; content: string }) => (
              <div
                key={m.id}
                className={`text-sm p-3 rounded-lg ${
                  m.role === "user"
                    ? "bg-white/10 text-pearl ml-auto max-w-[85%]"
                    : "bg-gold/10 text-gold border border-gold/20 mr-auto max-w-[85%]"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-gold/20 bg-obsidian">
            <input
              value={input}
              onChange={handleInputChange}
              className="w-full bg-charcoal text-pearl text-sm rounded-lg px-3 py-2 border border-white/10 focus:outline-none focus:border-gold/50"
              placeholder="Inquire about properties..."
            />
          </form>
        </div>
      )}
    </div>
  );
}
