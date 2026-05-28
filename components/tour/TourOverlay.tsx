"use client";

/**
 * TourOverlay — reusable spotlight tour engine.
 *
 * Each step optionally targets a DOM element via a `data-tour-id` attribute.
 * A cutout is punched through the semi-transparent overlay using an SVG mask,
 * and a tooltip card is positioned adjacent to the spotlight.
 *
 * Usage:
 *   <TourOverlay steps={STEPS} onDone={handleDone} />
 *
 * Mark elements in the DOM with  data-tour-id="your-id"  and reference that
 * id in the step's `tourId` field.  Steps with no `tourId` show a centered card.
 */

import { useEffect, useState, useCallback } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

export interface TourStep {
  /** data-tour-id of element to spotlight.  Omit for a centered intro/outro card. */
  tourId?: string;
  title: string;
  body: string;
  /** Preferred tooltip placement.  Auto-calculated from available space if omitted. */
  side?: "top" | "bottom" | "left" | "right";
}

interface Rect { x: number; y: number; w: number; h: number }

const PAD = 10; // px padding around spotlight rect
const TIP_W = 320; // tooltip card width in px
const TIP_MARGIN = 14; // gap between spotlight edge and tooltip

function measureEl(tourId: string): Rect | null {
  const el = document.querySelector(`[data-tour-id="${tourId}"]`);
  if (!el) return null;
  // Scroll the element into view so it's measurable
  el.scrollIntoView({ behavior: "instant", block: "nearest" });
  const r = el.getBoundingClientRect();
  if (r.width === 0 || r.height === 0) return null;
  return { x: r.left, y: r.top, w: r.width, h: r.height };
}

function pickSide(rect: Rect, preferred?: TourStep["side"]): TourStep["side"] {
  if (preferred) return preferred;
  const { y, h } = rect;
  const vh = window.innerHeight;
  const below = vh - (y + h + PAD);
  const above = y - PAD;
  // Prefer bottom if there's enough space, else top, else left/right
  if (below >= 180) return "bottom";
  if (above >= 180) return "top";
  return rect.x + rect.w / 2 > window.innerWidth / 2 ? "left" : "right";
}

interface TooltipStyle {
  top?: number; bottom?: number; left?: number; right?: number;
}

function tooltipStyle(rect: Rect | null, side: TourStep["side"]): TooltipStyle {
  if (!rect) {
    // Centered — caller handles with transform
    return {};
  }
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const spotL = rect.x - PAD;
  const spotT = rect.y - PAD;
  const spotR = rect.x + rect.w + PAD;
  const spotB = rect.y + rect.h + PAD;
  const cx = rect.x + rect.w / 2;
  const cy = rect.y + rect.h / 2;

  const clampX = (l: number) => Math.min(Math.max(l, 16), vw - TIP_W - 16);
  const clampY = (t: number) => Math.min(Math.max(t, 16), vh - 220);

  switch (side) {
    case "bottom": return { top: spotB + TIP_MARGIN, left: clampX(cx - TIP_W / 2) };
    case "top":    return { bottom: vh - (spotT - TIP_MARGIN), left: clampX(cx - TIP_W / 2) };
    case "right":  return { top: clampY(cy - 90), left: spotR + TIP_MARGIN };
    case "left":   return { top: clampY(cy - 90), right: vw - (spotL - TIP_MARGIN) };
    default:       return { top: spotB + TIP_MARGIN, left: clampX(cx - TIP_W / 2) };
  }
}

interface Props {
  steps: TourStep[];
  onDone: () => void;
}

export default function TourOverlay({ steps, onDone }: Props) {
  const [idx, setIdx]       = useState(0);
  const [rect, setRect]     = useState<Rect | null>(null);
  const [visible, setVisible] = useState(false);
  const [dims, setDims]     = useState({ vw: 1200, vh: 800 });

  const step = steps[idx];

  // Measure target element whenever step changes
  const measure = useCallback(() => {
    if (step?.tourId) {
      setRect(measureEl(step.tourId));
    } else {
      setRect(null);
    }
  }, [step?.tourId]);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      if (typeof window !== "undefined") {
        setDims({ vw: window.innerWidth, vh: window.innerHeight });
      }
      measure();
      setVisible(true);
    }, 60);
    return () => clearTimeout(t);
  }, [idx, measure]);

  useEffect(() => {
    const onResize = () => {
      setDims({ vw: window.innerWidth, vh: window.innerHeight });
      measure();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const goNext = () => {
    setVisible(false);
    setTimeout(() => setIdx((i) => i + 1), 120);
  };
  const goPrev = () => {
    setVisible(false);
    setTimeout(() => setIdx((i) => i - 1), 120);
  };

  if (!step) return null;

  const { vw, vh } = dims;
  const side = pickSide(rect ?? { x: vw / 2, y: vh / 2, w: 0, h: 0 }, step.side);
  const tipStyle = tooltipStyle(rect, side);
  const centered = !rect;

  // Spotlight geometry
  const sx = rect ? rect.x - PAD : 0;
  const sy = rect ? rect.y - PAD : 0;
  const sw = rect ? rect.w + PAD * 2 : 0;
  const sh = rect ? rect.h + PAD * 2 : 0;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ── SVG dim overlay with spotlight cutout ── */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={vw}
        height={vh}
        style={{ display: "block" }}
      >
        <defs>
          <mask id="qc-tour-mask">
            <rect fill="white" width={vw} height={vh} />
            {rect && (
              <rect fill="black" x={sx} y={sy} width={sw} height={sh} rx={6} />
            )}
          </mask>
        </defs>

        {/* Dim layer */}
        <rect fill="rgba(0,0,0,0.68)" width={vw} height={vh} mask="url(#qc-tour-mask)" />

        {/* Spotlight ring */}
        {rect && (
          <rect
            fill="none"
            stroke="rgba(139,92,246,0.65)"
            strokeWidth={1.5}
            x={sx} y={sy} width={sw} height={sh} rx={6}
          />
        )}
      </svg>

      {/* ── Click-outside to skip ── */}
      <div className="absolute inset-0" onClick={onDone} />

      {/* ── Tooltip card ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-[#16162a] border border-[#2a2a4a] rounded-xl shadow-2xl p-5 flex flex-col gap-3"
        style={{
          width: TIP_W,
          ...(centered
            ? { top: "50%", left: "50%", transform: "translate(-50%,-50%)" }
            : tipStyle),
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
            {idx + 1} of {steps.length}
          </span>
          <button
            onClick={onDone}
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="Skip tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-white font-bold text-[15px] mb-1">{step.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{step.body}</p>
        </div>

        {/* Progress dots + nav */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex gap-1.5 items-center">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx
                    ? "w-5 bg-brand-glow"
                    : i < idx
                    ? "w-1.5 bg-purple-700"
                    : "w-1.5 bg-[#2a2a4a]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {idx > 0 && (
              <button
                onClick={goPrev}
                className="flex items-center gap-0.5 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}

            {idx === 0 && (
              <button
                onClick={onDone}
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors mr-1"
              >
                Skip
              </button>
            )}

            {idx < steps.length - 1 ? (
              <button
                onClick={goNext}
                className="flex items-center gap-1 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-all"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onDone}
                className="flex items-center gap-1.5 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-all"
              >
                Let&apos;s go! 🚀
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
