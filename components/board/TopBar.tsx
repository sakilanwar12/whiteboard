"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import {
  AlignJustify,
  Copy,
  Crosshair,
  Download,
  Grip,
  HelpCircle,
  LayoutGrid,
  Maximize2,
  Redo2,
  Square,
  Trash2,
  Undo2,
} from "lucide-react";
import type { BackgroundStyle } from "@/lib/types";
import { IconButton, MenuItem, Popover } from "./primitives";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const BACKGROUNDS: { id: BackgroundStyle; label: string; icon: IconType }[] = [
  { id: "plain", label: "Plain", icon: Square },
  { id: "grid", label: "Graph paper", icon: LayoutGrid },
  { id: "dots", label: "Dots", icon: Grip },
  { id: "ruled", label: "Ruled lines", icon: AlignJustify },
  { id: "axes", label: "Coordinate axes", icon: Crosshair },
];

function BackgroundPreview({ style }: { style: BackgroundStyle }) {
  if (style === "plain") {
    return (
      <div className="size-6 rounded-md border border-neutral-200 bg-white" />
    );
  }
  if (style === "grid" || style === "axes") {
    return (
      <div className="relative size-6 overflow-hidden rounded-md border border-neutral-200 bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(24,24,27,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.14) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
        {style === "axes" && (
          <>
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-neutral-500/60" />
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-neutral-500/60" />
          </>
        )}
      </div>
    );
  }
  if (style === "dots") {
    return (
      <div className="size-6 rounded-md border border-neutral-200 bg-white">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(24,24,27,0.35) 1px, transparent 1.5px)",
            backgroundSize: "6px 6px",
          }}
        />
      </div>
    );
  }
  return (
    <div className="size-6 rounded-md border border-neutral-200 bg-white">
      <div
        className="size-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 4px, rgba(96,165,250,0.5) 4px, rgba(96,165,250,0.5) 5px)",
        }}
      />
    </div>
  );
}

export default function TopBar({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
  background,
  onBackground,
  onExport,
  onCopy,
  onHelp,
  onZen,
}: {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  background: BackgroundStyle;
  onBackground: (b: BackgroundStyle) => void;
  onExport: () => void;
  onCopy: () => void;
  onHelp: () => void;
  onZen: () => void;
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [bgOpen, setBgOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  return (
    <>
      <div className="absolute left-4 top-4 z-40 flex items-center gap-0.5 rounded-2xl border border-neutral-200 bg-white/90 p-1.5 shadow-xl shadow-neutral-900/5 backdrop-blur">
        <IconButton
          label="Undo · ⌘Z"
          onClick={onUndo}
          disabled={!canUndo}
          tipSide="bottom"
        >
          <Undo2 className="size-[18px]" />
        </IconButton>
        <IconButton
          label="Redo · ⇧⌘Z"
          onClick={onRedo}
          disabled={!canRedo}
          tipSide="bottom"
        >
          <Redo2 className="size-[18px]" />
        </IconButton>
        <div className="mx-0.5 h-5 w-px bg-neutral-200" />
        <IconButton
          label="Clear board"
          onClick={() => setConfirmOpen(true)}
          tipSide="bottom"
        >
          <Trash2 className="size-[18px]" />
        </IconButton>
        <Popover
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          className="left-0 top-full w-56"
        >
          <p className="px-2.5 py-1.5 text-sm text-neutral-700">
            Clear the whole board?
          </p>
          <div className="mt-1 flex gap-2 px-1.5 pb-1">
            <button
              type="button"
              onClick={() => setConfirmOpen(false)}
              className="flex-1 cursor-pointer rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setConfirmOpen(false);
                onClear();
              }}
              className="flex-1 cursor-pointer rounded-lg bg-red-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-600"
            >
              Clear
            </button>
          </div>
        </Popover>
      </div>

      <div className="absolute right-4 top-4 z-40 flex items-center gap-0.5 rounded-2xl border border-neutral-200 bg-white/90 p-1.5 shadow-xl shadow-neutral-900/5 backdrop-blur">
        <IconButton
          label="Background"
          onClick={() => setBgOpen(true)}
          active={bgOpen}
          tipSide="bottom"
        >
          <LayoutGrid className="size-[18px]" />
        </IconButton>
        <Popover
          open={bgOpen}
          onClose={() => setBgOpen(false)}
          className="right-0 top-full w-60"
        >
          {BACKGROUNDS.map((b) => (
            <MenuItem
              key={b.id}
              active={background === b.id}
              onClick={() => {
                onBackground(b.id);
                setBgOpen(false);
              }}
              icon={<BackgroundPreview style={b.id} />}
            >
              {b.label}
            </MenuItem>
          ))}
        </Popover>

        <IconButton
          label="Export · ⌘S"
          onClick={() => setExportOpen(true)}
          active={exportOpen}
          tipSide="bottom"
        >
          <Download className="size-[18px]" />
        </IconButton>
        <Popover
          open={exportOpen}
          onClose={() => setExportOpen(false)}
          className="right-0 top-full w-56"
        >
          <MenuItem
            onClick={() => {
              setExportOpen(false);
              onExport();
            }}
            icon={<Download className="size-4 text-neutral-500" />}
          >
            Download PNG
          </MenuItem>
          <MenuItem
            onClick={() => {
              setExportOpen(false);
              onCopy();
            }}
            icon={<Copy className="size-4 text-neutral-500" />}
          >
            Copy PNG to clipboard
          </MenuItem>
        </Popover>

        <IconButton label="Help & shortcuts" onClick={onHelp} tipSide="bottom">
          <HelpCircle className="size-[18px]" />
        </IconButton>
        <div className="mx-0.5 h-5 w-px bg-neutral-200" />
        <IconButton label="Zen mode · Z" onClick={onZen} tipSide="bottom">
          <Maximize2 className="size-[18px]" />
        </IconButton>
      </div>
    </>
  );
}
