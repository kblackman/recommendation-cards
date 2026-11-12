import React from "react";
import { X, ChevronDown } from "lucide-react";
import { Button } from "./Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function AiConsentModalWrapper({ isOpen, onClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Modal panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 560,
          maxWidth: "90vw",
          background: "white",
          borderRadius: 8,
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px 12px 14px 24px",
            borderBottom: "1px solid #dde0e4",
          }}
        >
          <span
            style={{
              flex: 1,
              fontWeight: 600,
              fontSize: 18,
              lineHeight: "28px",
              color: "#1e2125",
            }}
          >
            Enable AI Usage
          </span>
          <button
            onClick={onClose}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 12,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6d7783",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Consent copy */}
          <p
            style={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              color: "#3d444c",
              margin: 0,
            }}
          >
            By enabling AI usage, you agree that any data you submit may be
            processed by our AI provider (Anthropic Claude) under a Business
            Associate Agreement. AI-generated responses may not always be
            accurate, and you are responsible for verifying results by reviewing
            the underlying data.
          </p>

          {/* FAQ accordion row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              cursor: "pointer",
            }}
          >
            <span style={{ fontWeight: 400, fontSize: 14, color: "#3d444c" }}>
              Frequently asked questions
            </span>
            <ChevronDown size={18} color="#3d444c" />
          </div>
        </div>

        {/* Footer buttons */}
        <div
          style={{
            borderTop: "1px solid #dde0e4",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "16px 24px",
            background: "white",
          }}
        >
          <Button variant="primary" size="md" onClick={onConfirm}>
            Enable AI Usage
          </Button>
        </div>
      </div>
    </div>
  );
}