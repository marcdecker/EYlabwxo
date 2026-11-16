# EY 2026 Welcome — Implementation Plan

## Top-Level Overview
Build a standalone React + Vite application called "EY 2026 Welcome" featuring a full-screen landing page with IBM Bob blue branding (`#0f62fe`), clean typography, and a lightweight vanilla JS + CSS keyframes confetti burst on page load without external confetti libraries.

---

## Architecture & Design Decisions

### 1. Component Breakdown
- **`App` (`src/App.jsx`)**: Root container managing full-screen viewport layout, centering welcome text, and mounting the `ConfettiBurst` component.
- **`WelcomeBanner` (`src/components/WelcomeBanner.jsx`)**: Renders the main title (`Welcome to EY 2026`) and subtitle (`Powered by IBM Bob`) with crisp, accessible white typography.
- **`ConfettiBurst` (`src/components/ConfettiBurst.jsx`)**: Vanilla JS component that generates confetti particle DOM elements on mount and cleans them up after the animation completes.
- **`ConfettiPiece` (`src/components/ConfettiPiece.jsx`)**: Individual confetti particle element parameterized via CSS custom properties (`--tx`, `--ty`, `--rot`, `--bg`, `--delay`, `--duration`, `--shape`).

### 2. CSS Animation Strategy
- **Container**: `position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 50;`
- **Particles**: `position: absolute; top: 50%; left: 50%;`
- **Burst Physics using CSS Keyframes**:
  - Initial state (`0%`): `transform: translate3d(0, 0, 0) scale(0) rotate(0deg); opacity: 1;`
  - Mid-burst (`25-40%`): Explodes outward using custom CSS variables `--tx` (horizontal distance) and `--ty` (negative vertical distance for initial upward burst).
  - Falling & fading (`100%`): Gravitational fall (`calc(var(--ty) + 400px)`), rotational spin (`var(--rot)`), and fade out (`opacity: 0`).
- **Dynamic Variety via Vanilla JS**:
  - Random angle (0–360deg) and velocity magnitude to calculate `--tx` and `--ty`.
  - Palette of complementary colors (e.g., white, cyan `#11d3f3`, gold `#f1c21b`, EY yellow `#ffe600`, light blue `#78a9ff`).
  - Random shapes (rectangles, squares, circles) and staggered animations (`animation-delay`, `animation-duration`).

---

## File Layout

```
EY-2026-welcome/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── WelcomeBanner.jsx
    │   ├── ConfettiBurst.jsx
    │   └── ConfettiPiece.jsx
    └── styles/
        ├── welcome.css
        └── confetti.css
```

---

## Sub-Tasks

### Sub-Task 1: Scaffold React + Vite Project
- **Intent**: Initialize the Vite project with React template and configure base HTML meta and page title.
- **Expected Outcomes**:
  - `package.json` with `react`, `react-dom`, `@vitejs/plugin-react`, `vite`.
  - `index.html` with title "EY 2026 Welcome".
  - Basic entry point `src/main.jsx`.
- **Todo List**:
  - [ ] Configure `package.json` and `vite.config.js`.
  - [ ] Set up `index.html` with viewport and typography settings.
  - [ ] Add `src/main.jsx` rendering `<App />`.
- **Status**: `[ ] pending`

### Sub-Task 2: Build Welcome Page Layout and Typography
- **Intent**: Create the full-screen IBM Bob blue view with centered header and subtitle.
- **Expected Outcomes**:
  - Full-screen container (`100vw`, `100vh`) with background `#0f62fe`.
  - Header: "Welcome to EY 2026" in bold white.
  - Subtitle: "Powered by IBM Bob" in semi-bold/regular white.
- **Todo List**:
  - [ ] Implement `src/components/WelcomeBanner.jsx`.
  - [ ] Define global reset, typography, and flex/grid centering in `src/styles/welcome.css` and `src/index.css`.
  - [ ] Integrate `WelcomeBanner` into `src/App.jsx`.
- **Status**: `[ ] pending`

### Sub-Task 3: Implement Vanilla JS + CSS Keyframes Confetti System
- **Intent**: Deliver a performant confetti burst on load with zero third-party dependencies.
- **Expected Outcomes**:
  - Confetti burst triggers automatically on initial component mount.
  - Staggered particle trajectories, rotational physics, and fading using `@keyframes`.
  - Proper DOM cleanup after animation completion.
- **Todo List**:
  - [ ] Define `@keyframes confetti-burst-fall` in `src/styles/confetti.css`.
  - [ ] Create `src/components/ConfettiPiece.jsx` applying CSS custom properties.
  - [ ] Implement `src/components/ConfettiBurst.jsx` generating 60–100 particles with randomized attributes.
  - [ ] Mount `ConfettiBurst` inside `src/App.jsx`.
- **Status**: `[ ] pending`
