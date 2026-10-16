# Mathboard — Free Open-Source Whiteboard for Math Videos

> Write math by hand, like it's paper. Built for teachers, tutors, and YouTubers with a graphics tablet.

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

**Mathboard** is a free, open-source, pressure-sensitive whiteboard for writing math by hand in the browser. No sign-up, no tracking, no paywall — just open it and start writing.

🔗 **Live demo:** https://white-board.vercel.app *(set `NEXT_PUBLIC_SITE_URL` to your domain after deploying)*
💻 **Repo:** https://github.com/sakilanwar12/white-board

---

## ✨ Features

### ✍️ Handwriting-first
- **Pressure-sensitive pen** — stroke width follows your stylus pressure (Wacom, Apple Pencil, etc.)
- **Highlighter** with translucent ink
- **Barrel-eraser support** — flip your pen to erase without switching tools
- **Coalesced pointer events** for buttery-smooth strokes at any refresh rate

### 📐 Teaching tools
- Shapes: **line, arrow, rectangle, ellipse, triangle** (hold `Shift` to constrain)
- **Handwritten-style text** tool
- **Laser pointer** with fading trails — perfect for guiding attention on camera
- **12-color palette + custom color picker**, 4 pen sizes, 3 eraser sizes

### 📄 Backgrounds
- Plain, **graph paper**, dots, ruled lines, and **coordinate axes**

### 🖥️ Canvas & workflow
- **Infinite pan & zoom** (10%–800%), pinch-zoom + two-finger pan on touch
- **Undo / redo** (120-step history), select & move, clear board
- **Autosave to localStorage** — pick up where you left off
- **Zen mode** (`Z`) — hides all UI for clean screen recordings
- **PNG export** (`⌘/Ctrl+S`) + **copy to clipboard** — cropped with padding, 2x resolution
- Full **keyboard shortcuts** — press `?` or the help icon in-app

### 🔒 Privacy
- Everything runs **100% client-side**. Your drawings never leave your browser.

---

## 🚀 Quick start

```bash
git clone https://github.com/sakilanwar12/white-board.git
cd white-board

npm install
# or: pnpm install / yarn install / bun install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start writing.

### Environment variables (optional)

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for SEO, sitemap, Open Graph | `https://white-board.vercel.app` |

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build
```

---

## ⌨️ Shortcuts

| Key | Action |
|---|---|
| `V` / `H` / `P` / `M` / `E` | Select / Pan / Pen / Highlighter / Eraser |
| `L` `A` `R` `O` `Y` | Line / Arrow / Rect / Ellipse / Triangle |
| `T` / `X` | Text / Laser pointer |
| `⌘/Ctrl+Z` `⇧⌘/Ctrl+Z` | Undo / Redo |
| `⌘/Ctrl+S` | Export PNG |
| `⌘/Ctrl +` `−` `0` | Zoom in / out / reset |
| `Space` (hold) | Pan |
| `Shift` + drag | Constrain shapes |
| `Z` | Zen mode |
| `Del` / `Esc` | Delete selected / Deselect |

---

## 🛠️ Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **[React 19](https://react.dev)**
- **[TypeScript](https://www.typescriptlang.org)**, **[Tailwind CSS 4](https://tailwindcss.com)**
- **[perfect-freehand](https://github.com/steveruizok/perfect-freehand)** for pressure-based strokes
- **[lucide-react](https://lucide.dev)** icons
- Dual-canvas rendering (static base + live overlay) with `requestAnimationFrame` batching
- Zero backend — state persisted in `localStorage`

```
app/            → routes, SEO (layout, sitemap, robots, manifest, OG image)
components/board/ → Whiteboard, Toolbar, TopBar, ZoomBar, HelpDialog
lib/            → geometry, drawing, types, theme
public/         → static assets
```

---

## 🤝 Contributing

Contributions are welcome! This project is beginner-friendly.

1. Fork the repo and create a branch: `git checkout -b feat/my-feature`
2. Install deps and start dev: `npm install && npm run dev`
3. Make your change + verify: `npm run build && npm run lint`
4. Commit with a clear message and open a PR

Ideas: new backgrounds, SVG export, collaborative cursors, mobile toolbar, dark mode, i18n.

Please be kind — see [CODE_OF_CONDUCT](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) spirit: be respectful and constructive.

---

## 🗺️ Roadmap

- [ ] SVG export
- [ ] Multi-page boards
- [ ] Custom background images
- [ ] Touch-optimized mobile layout
- [ ] Self-hostable Docker image

Vote or suggest features via [Issues](https://github.com/sakilanwar12/white-board/issues).

---

## 📄 License

MIT — see [LICENSE](./LICENSE). Free for personal and commercial use. Attribution appreciated but not required.

---

## ⭐ Support

If Mathboard helps your teaching or videos, please **star the repo** — it helps others discover it.

Built with ❤️ for math educators, by open-source contributors.
