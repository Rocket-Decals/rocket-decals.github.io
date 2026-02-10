'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { getReplyKey } from '@/lib/chatContext';

type Message = { role: 'user' | 'bot'; text: string; replyKey?: string };

/** Rend le texte avec les URLs cliquables. */
function renderMessageWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    part.match(urlRegex) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="chat-msg-link"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

const SUGGESTED_KEYS = [
  'chat.suggest.howOrder',
  'chat.suggest.howInstall',
  'chat.suggest.discord',
  'chat.suggest.who',
] as const;

const TYPING_DELAY_MS = 400;
const STREAM_CHUNK_MS = 25;
const MIN_TYPING_DURATION_MS = 600;

export function ChatBot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const lastBotReplyKey = (() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'bot' && messages[i].replyKey) return messages[i].replyKey;
    }
    return undefined;
  })();

  const pendingReplyRef = useRef<{ timeoutId: ReturnType<typeof setTimeout>; intervalId: ReturnType<typeof setInterval> | null } | null>(null);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    if (pendingReplyRef.current) {
      clearTimeout(pendingReplyRef.current.timeoutId);
      if (pendingReplyRef.current.intervalId) clearInterval(pendingReplyRef.current.intervalId);
      pendingReplyRef.current = null;
    }
    const userMsg: Message = { role: 'user', text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const replyKey = getReplyKey(text.trim(), lastBotReplyKey);
    const fullReply = t(replyKey);

    setIsTyping(true);
    setStreamingText('');

    const timeoutId = setTimeout(() => {
      // Split en mots pour reconstruire avec des espaces explicites (évite mot 1 et 2 collés)
      const words = fullReply.split(/\s+/).filter(Boolean);
      const firstChunk = words[0] ?? '';
      setStreamingText(firstChunk);
      setIsTyping(false);
      let index = 1;
      const intervalId = setInterval(() => {
        if (index >= words.length) {
          clearInterval(intervalId);
          if (pendingReplyRef.current) pendingReplyRef.current.intervalId = null;
          pendingReplyRef.current = null;
          setMessages((prev) => [...prev, { role: 'bot', text: fullReply, replyKey }]);
          setStreamingText('');
          return;
        }
        setStreamingText(words.slice(0, index + 1).join(' '));
        index++;
      }, STREAM_CHUNK_MS);
      if (pendingReplyRef.current) pendingReplyRef.current.intervalId = intervalId;
    }, Math.max(TYPING_DELAY_MS, MIN_TYPING_DURATION_MS));

    pendingReplyRef.current = { timeoutId, intervalId: null };
  };

  const handleSuggestedClick = (key: (typeof SUGGESTED_KEYS)[number]) => {
    sendMessage(t(key));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="chat-bubble"
        aria-label={t('chat.bubbleLabel')}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="chat-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden
        >
          <div className="chat-panel" onClick={(e) => e.stopPropagation()}>
          <div className="chat-panel-header">
            <span className="chat-panel-title">{t('chat.title')}</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="chat-panel-close"
              aria-label={t('modal.close')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && !isTyping && !streamingText ? (
              <div className="chat-welcome">
                <p className="chat-welcome-text">{t('chat.welcome')}</p>
                <p className="chat-welcome-sub">{t('chat.welcomeSub')}</p>
                <div className="chat-suggestions">
                  {SUGGESTED_KEYS.map((key) => (
                    <button
                      key={key}
                      type="button"
                      className="chat-suggestion-btn"
                      onClick={() => handleSuggestedClick(key)}
                    >
                      {t(key)}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                    <span className="chat-msg-text">{msg.role === 'bot' ? renderMessageWithLinks(msg.text) : msg.text}</span>
                  </div>
                ))}
                {isTyping && (
                  <div className="chat-msg chat-msg--bot chat-msg--typing">
                    <span className="chat-typing-dots">
                      <span /><span /><span />
                    </span>
                  </div>
                )}
                {streamingText && !isTyping && (
                  <div className="chat-msg chat-msg--bot">
                    <span className="chat-msg-text">{renderMessageWithLinks(streamingText)}</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} className="chat-form">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chat.placeholder')}
              className="chat-input"
            />
            <button type="submit" className="chat-send" aria-label={t('chat.send')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
          </div>
        </div>
      )}
    </>
  );
}
