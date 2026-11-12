import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import ReactDOM from "react-dom";
import { X, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./Button";
import { CategoryBadge, BadgeType } from "./CategoryBadge";

export interface ShareData {
  badgeType: BadgeType;
  title: string;
  recommendation: string;
}

interface ShareModalProps {
  isOpen: boolean;
  data: ShareData | null;
  onClose: () => void;
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export function ShareModal({ isOpen, data, onClose }: ShareModalProps) {
  const [recipients, setRecipients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setRecipients([]);
      setInputValue("");
      setInputError("");
      setMessage("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Dismiss on Escape
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  function addRecipient(raw: string) {
    const value = raw.trim().replace(/,$/, "").trim();
    if (!value) return;
    if (!isValidEmail(value)) {
      setInputError("Please enter a valid email address");
      return;
    }
    if (recipients.includes(value)) {
      setInputError("This email has already been added");
      return;
    }
    setRecipients((prev) => [...prev, value]);
    setInputValue("");
    setInputError("");
  }

  function removeRecipient(email: string) {
    setRecipients((prev) => prev.filter((r) => r !== email));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addRecipient(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && recipients.length > 0) {
      setRecipients((prev) => prev.slice(0, -1));
    }
  }

  function handleShare() {
    // Commit any pending input first
    const pending = inputValue.trim();
    const allRecipients = [...recipients];

    if (pending) {
      if (!isValidEmail(pending)) {
        setInputError("Please enter a valid email address");
        return;
      }
      if (!allRecipients.includes(pending)) {
        allRecipients.push(pending);
      }
    }

    if (allRecipients.length === 0) {
      setInputError("Please add at least one recipient");
      inputRef.current?.focus();
      return;
    }

    onClose();
    toast.success("Recommendation shared!", {
      description:
        allRecipients.length === 1
          ? `Sent to ${allRecipients[0]}`
          : `Sent to ${allRecipients[0]} and ${allRecipients.length - 1} other${allRecipients.length > 2 ? "s" : ""}`,
      duration: 4000,
    });
  }

  if (!isOpen || !data) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: "rgba(17, 24, 39, 0.45)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="bg-white rounded-[8px] flex flex-col"
        style={{
          width: 540,
          maxWidth: "calc(100vw - 48px)",
          boxShadow: "0px 2px 12px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top bar ── */}
        <div
          className="flex items-center justify-between px-6 border-b border-[#dde0e4]"
          style={{ minHeight: 56 }}
        >
          <span
            className="text-[#1e2125] text-[18px] leading-[28px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600 }}
          >
            Share Recommendation
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-[4px] hover:bg-[#f4f5fb] transition-colors cursor-pointer"
          >
            <X size={16} color="#6D7783" />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col gap-5 px-6 py-6">
          {/* To field */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[#1e2125] text-[14px] leading-[20px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
            >
              To
            </label>
            {/* Tag input container */}
            <div
              className="min-h-[48px] rounded-[8px] border flex flex-wrap items-center gap-1.5 px-3 py-2 cursor-text transition-colors"
              style={{ borderColor: inputError ? "#e81c1f" : "#c9ced4", background: "#fff" }}
              onClick={() => inputRef.current?.focus()}
            >
              {recipients.map((email) => (
                <span
                  key={email}
                  className="flex items-center gap-1 bg-[#e1e4f4] text-[#2a3678] text-[13px] leading-[20px] px-2 py-0.5 rounded-[4px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {email}
                  <button
                    onClick={(e) => { e.stopPropagation(); removeRecipient(email); }}
                    className="flex items-center cursor-pointer text-[#2a3678] hover:text-[#e81c1f] transition-colors ml-0.5"
                  >
                    <X size={10} strokeWidth={2.5} />
                  </button>
                </span>
              ))}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); setInputError(""); }}
                onKeyDown={handleKeyDown}
                onBlur={() => { if (inputValue.trim()) addRecipient(inputValue); }}
                placeholder={recipients.length === 0 ? "name@company.com" : ""}
                className="flex-1 min-w-[140px] outline-none border-none bg-transparent text-[16px] leading-[24px] text-[#1e2125]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  color: "#1e2125",
                }}
              />
            </div>
            {inputError ? (
              <p
                className="text-[#e81c1f] text-[12px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                {inputError}
              </p>
            ) : (
              <p
                className="text-[#a3acb7] text-[12px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Press Enter or comma to add multiple recipients
              </p>
            )}
          </div>

          {/* Message field */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[#1e2125] text-[14px] leading-[20px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
            >
              Message{" "}
              <span
                className="text-[#6d7783]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                (optional)
              </span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a note to your recipients…"
              rows={3}
              className="rounded-[8px] border border-[#c9ced4] px-4 py-3 text-[16px] leading-[24px] text-[#1e2125] outline-none resize-none transition-colors"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                color: "#1e2125",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3f51b5")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#c9ced4")}
            />
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-end gap-3 px-6 pb-6">
          <Button variant="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleShare}
            disabled={recipients.length === 0 && !isValidEmail(inputValue.trim())}
          >
            <Send size={14} style={{ marginRight: 6 }} />
            Share
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}