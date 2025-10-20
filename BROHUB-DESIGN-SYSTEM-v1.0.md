# BROHUB DESIGN SYSTEM v1.0.0

**"The Unified Web3 Design Language"**

**Release Date**: 2025-10-15
**Status**: Official Release
**Authors**: BigSis (Design Architecture) + Claude Code
**Lineage**: BDS v3.2 + VER$EID v3.0 + ZEN+ + DDV Codex v2.0
**License**: Proprietary - Proper Labs Ecosystem

---

## 📋 Table of Contents

1. [Philosophy & Principles](#philosophy--principles)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Grid](#spacing--grid)
5. [Glassmorphism](#glassmorphism)
6. [Component Library](#component-library)
7. [Interaction Design](#interaction-design)
8. [Layout Patterns](#layout-patterns)
9. [Web3/DeFi Patterns](#web3defi-patterns)
10. [AI/Agent Patterns](#aiagent-patterns)
11. [Quest/Gamification](#questgamification)
12. [Accessibility](#accessibility)
13. [Theming & Modes](#theming--modes)
14. [Implementation Guide](#implementation-guide)
15. [Version History](#version-history)

---

## 🧠 Philosophy & Principles

### HAIKU Framework (4-3-2-1)

**4 PILLARS**
1. **Constraint** - Intentional limitations enhance creativity
2. **Ratio** - Mathematical harmony (Golden 1.618, Fibonacci)
3. **Harmony** - Unified system where elements relate
4. **Flow** - Natural progression and visual rhythm

**3 CONSTRAINTS**
- Maximum 3 design constraints per element
- Consistency, Clarity, Continuity
- Simplicity always wins

**2 OPTIONS**
- When in doubt, choose between 2 (never more)
- Light/Dark modes
- Comfortable/Compact density

**1 BASE UNIT**
- Everything derives from 8px
- All spacing divisible by 8

---

### 60-30-10 Golden Rule

Applied across **all** design dimensions:

**Color Distribution**
- 60% → Neutral/Background (#0A0A0A pure black)
- 30% → Structural elements (cards, sidebar)
- 10% → Accent colors (pathway highlights, CTAs)

**Layout Distribution**
- 60% → Main content area
- 30% → Sidebar/supporting UI
- 10% → Navigation/CTAs

**Content Distribution**
- 60% → Primary content
- 30% → Supporting information
- 10% → Action elements

**Whitespace Distribution**
- 60% → Content
- 30% → Margins/padding
- 10% → Gaps/gutters

---

### ZEN+ Minimalism

- **No visual noise** - Every element must earn its space
- **Intentional color use** - Accent colors carry meaning
- **Breathing room** - Generous whitespace (minimum 24px gaps)
- **Perceptual uniformity** - All accent colors equally vibrant
- **Reduce-motion friendly** - Respect accessibility preferences

---

## 🎨 Color System

### Foundation Colors

```css
/* Pure Black Base (VER$EID v3.0) */
--bg-primary: #0A0A0A;          /* 60% of design */
--bg-secondary: rgba(26, 26, 36, 0.6);  /* Card backgrounds */
--bg-card: rgba(26, 26, 36, 0.6);

/* Text Hierarchy (Pure White with Opacity) */
--text-primary: #ffffff;                    /* 100% - Headlines, important */
--text-secondary: rgba(255, 255, 255, 0.7); /* 70% - Body text */
--text-muted: rgba(255, 255, 255, 0.4);     /* 40% - Labels, hints */

/* Borders & Dividers */
--border: rgba(255, 255, 255, 0.08);        /* Subtle outlines */
--border-hover: rgba(255, 255, 255, 0.15);  /* Interactive states */
```

---

### Agent Brand Colors (W3DV)

**Primary palette** - Used for agent avatars, theming, gradients

```css
/* BigSis - Cyan/Blue (Strategy & Analysis) */
--bigsis-primary: #00A1F1;
--bigsis-accent: #00C3FF;
--bigsis-gradient: linear-gradient(135deg, #00A1F1, #00C3FF);
--bigsis-glow: rgba(0, 195, 255, 0.3);

/* Bro - Orange (Action & Trading) */
--bro-primary: #FE5F00;
--bro-accent: #FF9500;
--bro-gradient: linear-gradient(135deg, #FE5F00, #FF9500);
--bro-glow: rgba(254, 95, 0, 0.3);

/* LilSis - Purple (Creativity & Community) */
--lilsis-primary: #7E3AF2;
--lilsis-accent: #9D4EDD;
--lilsis-gradient: linear-gradient(135deg, #7E3AF2, #9D4EDD);
--lilsis-glow: rgba(126, 58, 242, 0.3);

/* CBO - Green (Growth & Sustainability) */
--cbo-primary: #3EB85F;
--cbo-accent: #30D158;
--cbo-gradient: linear-gradient(135deg, #3EB85F, #30D158);
--cbo-glow: rgba(62, 184, 95, 0.3);
```

---

### Pathway Colors (VER$EID System)

**5% background tint + 15% border + bright accent pattern**

```css
/* ALIGN - Blue (Identity Verification) */
--align-bg: rgba(96, 165, 250, 0.05);
--align-border: rgba(96, 165, 250, 0.15);
--align-accent: #60A5FA;
--align-glow: rgba(96, 165, 250, 0.6);

/* ALPHA - Orange (DeFi Trading) */
--alpha-bg: rgba(251, 146, 60, 0.05);
--alpha-border: rgba(251, 146, 60, 0.15);
--alpha-accent: #FB923C;
--alpha-glow: rgba(251, 146, 60, 0.6);

/* KARMA - Purple (Community Engagement) */
--karma-bg: rgba(167, 139, 250, 0.05);
--karma-border: rgba(167, 139, 250, 0.15);
--karma-accent: #A78BFA;
--karma-glow: rgba(167, 139, 250, 0.6);

/* SYNERGY - Green (Network Interoperability) */
--synergy-bg: rgba(74, 222, 128, 0.05);
--synergy-border: rgba(74, 222, 128, 0.15);
--synergy-accent: #4ADE80;
--synergy-glow: rgba(74, 222, 128, 0.6);
```

---

### Pathway Icon Psychology & Design Rationale

**Why These Icons & Colors Work So Well**

The pathway system achieves instant semantic recognition through a powerful combination of universal symbolism, perceptual balance, and cultural resonance. Each icon was chosen for its ability to communicate complex concepts in <100ms of cognitive processing.

#### ✦ ALIGN - Blue (#60A5FA)
**Icon Meaning**: Four-pointed star (sparkle/diamond)
- **Symbolism**: Precision, verification, alignment checkpoint - like a "verified" badge or quality stamp
- **Psychology**: Stars universally signal achievement, accuracy, and excellence
- **Color Psychology**: Blue = trust, security, professionalism, authority
- **Why It Works**: Identity verification demands trust and precision. The geometric star conveys exactness while cool blue creates psychological safety. Users immediately recognize this as "official" and "trustworthy."

#### α ALPHA - Orange (#FB923C)
**Icon Meaning**: Greek letter alpha
- **Symbolism**: First, dominant, leader - "alpha" in finance/trading/markets
- **Psychology**: Greek letters signal sophistication, insider knowledge, academic rigor
- **Color Psychology**: Orange = energy, risk/reward, urgency, action, warmth
- **Why It Works**: DeFi trading requires bold decision-making and calculated risk. The warm orange creates excitement and urgency. The Greek letter α signals elite knowledge and "alpha generation" (outperforming the market). It's instantly recognizable to traders.

#### ○ KARMA - Purple (#A78BFA)
**Icon Meaning**: Circle (ouroboros/cycle)
- **Symbolism**: Cyclical nature, "what goes around comes around," completeness, inclusion
- **Psychology**: Circles represent wholeness, eternity, community, no beginning or end
- **Color Psychology**: Purple = community, spirituality, wisdom, royalty, nobility
- **Why It Works**: Community engagement is about reciprocity and social bonds. The circle represents endless connection and inclusion (no sharp edges to exclude). Purple bridges cool (blue) and warm (orange) sides, creating harmony. It signals both wisdom and social prestige.

#### ∞ SYNERGY - Green (#4ADE80)
**Icon Meaning**: Infinity symbol
- **Symbolism**: Limitless connections, eternal flow, boundless interoperability
- **Psychology**: Infinity represents potential without limits, continuous loops, eternal possibilities
- **Color Psychology**: Green = growth, health, natural systems, "go," progress, interoperability
- **Why It Works**: Network interoperability is about breaking boundaries and creating infinite pathways. Green signals movement forward and system health. The infinity loop perfectly visualizes cross-chain connections that never end.

---

#### System-Level Design Excellence

**1. Perceptual Balance**
All four colors have **identical perceptual brightness** (OKLCH lightness ~65-70%). Your eye doesn't favor any pathway - they all feel equally important and vibrant. This creates **visual democracy** - no hierarchy except by context.

**2. Color Wheel Distribution**
- Blue (200°) → Orange (40°) → Purple (280°) → Green (140°)
- **Perfectly distributed** around the color wheel
- No visual clustering or repetition
- Creates **natural harmony** without conflict

**3. Semantic Clarity**
Each icon is **universally recognizable** across cultures:
- ✦ Star = achievement/quality (global symbol since ancient times)
- α Alpha = first/best/elite (cross-cultural mathematical/scientific symbol)
- ○ Circle = unity/wholeness (ancient symbol in all cultures)
- ∞ Infinity = endless potential (mathematical constant, universally understood)

**4. Glassmorphism Enhancement**
The **glow effect** (`text-shadow: 0 0 8px`) makes each icon feel:
- Energized and alive (like a power source)
- Futuristic and digital (cyber aesthetic)
- Active and interactive (not passive decoration)
- Luminous against the void (creates depth on pure black #0A0A0A)

**5. Temperature Balance**
- **Cool tones** (Blue, Purple) = 2 pathways → Trust, wisdom, reflection
- **Warm tones** (Orange, Green) = 2 pathways → Action, growth, movement
- **Perfect emotional equilibrium** - neither too cold nor too energetic

**6. Scalability Without Loss**
These icons remain **readable at any size**:
- Simple geometric shapes (no intricate detail)
- High contrast against dark backgrounds
- Single-color implementation (no gradients needed)
- Works at 16px badge or 64px hero display

**7. Cultural Universality**
No cultural barriers or translation needed:
- Stars = achievement (every culture)
- Greek letters = mathematics/science (universal language)
- Circles = unity (ancient universal symbol)
- Infinity = limitless (mathematical truth)

**8. Zero Cognitive Load**
The real magic: **instant semantic understanding**
- Users know what each pathway does in <100ms
- No onboarding or explanation required
- Icon + color + name form a **perfect triad**
- The brain processes these as single unified concepts, not separate elements

---

#### The Secret Sauce: 5-15 Glassmorphism

The **5% tint + 15% border** pattern creates a "containment field" effect:

```css
background: rgba(96, 165, 250, 0.05);  /* Barely visible - subtle presence */
border: 1px solid rgba(96, 165, 250, 0.15);  /* Gentle glow outline */
```

This creates an **energy signature** for each pathway without overwhelming the pure black void (`#0A0A0A`). The darkness makes the colors **pop without visual noise**. It's like each pathway exists in its own dimensional pocket - present but not intrusive.

---

#### Practical Application

**Card Usage** (36px icons)
```css
.pathway-icon {
    font-size: 36px;
    color: var(--pathway-accent);
    text-shadow: 0 0 8px var(--pathway-accent);
}
```

**Badge Usage** (24px icons)
```css
.pathway-badge-icon {
    font-size: 24px;
    color: var(--pathway-accent);
    text-shadow: 0 0 8px rgba(var(--pathway-rgb), 0.6);
}
```

**Unicode References**
- ✦ ALIGN: `U+2726` (Black Four Pointed Star)
- α ALPHA: `U+03B1` (Greek Small Letter Alpha)
- ○ KARMA: `U+25CB` (White Circle)
- ∞ SYNERGY: `U+221E` (Infinity)

---

### Semantic Colors

```css
/* Success */
--success: #4ADE80;
--success-bg: rgba(74, 222, 128, 0.15);
--on-success: #ffffff;

/* Warning */
--warning: #FB923C;
--warning-bg: rgba(251, 146, 60, 0.15);
--on-warning: #000000;

/* Danger/Error */
--danger: #FF4B4B;
--danger-bg: rgba(255, 75, 75, 0.15);
--on-danger: #ffffff;

/* Info */
--info: #00C3FF;
--info-bg: rgba(0, 195, 255, 0.15);
--on-info: #000000;
```

---

### Color Usage Rules

1. **Perceptual Uniformity** - All pathway/agent colors are equally vibrant
2. **Glow Pattern** - Icons use `text-shadow: 0 0 8px var(--color-glow)`
3. **5-15 Rule** - Backgrounds 5% opacity, borders 15% opacity
4. **On-Color Pairs** - Always define foreground color for backgrounds
5. **WCAG AA Minimum** - 4.5:1 for text, 3:1 for large text/UI

---

## ✍️ Typography

### Font Families

```css
--font-display: 'Space Grotesk', sans-serif;  /* Headings, titles, logos */
--font-body: 'Inter', sans-serif;             /* Body text, UI elements */
--font-mono: 'JetBrains Mono', monospace;     /* Code, stats, addresses */
```

**Font Loading**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

### Type Scale (5-3-2 Rule)

**5 Sizes Maximum**

```css
/* Display - Hero sections */
--text-display: 48px;
font-family: var(--font-display);
font-weight: 700;
line-height: 1.2;
letter-spacing: -1px;

/* Heading - Section titles */
--text-heading: 32px;
font-family: var(--font-display);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.5px;

/* Subheading - Card titles */
--text-subheading: 20px;
font-family: var(--font-display);
font-weight: 700;
line-height: 1.3;

/* Body - Main content */
--text-body: 16px;
font-family: var(--font-body);
font-weight: 400;
line-height: 1.6;

/* Caption - Labels, hints */
--text-caption: 12px;
font-family: var(--font-body);
font-weight: 600;
line-height: 1.4;
text-transform: uppercase;
letter-spacing: 1px;
```

**3 Weights Maximum**
- **Bold**: 700 (headings, emphasis)
- **Semi/Medium**: 500/600 (UI elements, labels)
- **Regular**: 400 (body text)

**2 Font Families** (Display + Body)
- Use mono only for specialized content (code, addresses, stats)

---

### Typography Usage

| Element | Size | Weight | Family | Color |
|---------|------|--------|--------|-------|
| Page Title | 48px | 700 | Space Grotesk | --text-primary |
| Section Title | 32px | 700 | Space Grotesk | --text-primary |
| Subsection | 28px | 700 | Space Grotesk | --text-primary |
| Card Title | 20px | 700 | Space Grotesk | --text-primary |
| Body Large | 18px | 400 | Inter | --text-secondary |
| Body Regular | 16px | 400 | Inter | --text-secondary |
| Body Small | 14px | 400 | Inter | --text-secondary |
| Label | 12px | 600 | Inter | --text-muted |
| Caption | 11px | 600 | Inter | --text-muted |
| Stats/Metrics | 26-36px | 700 | JetBrains Mono | --text-primary |
| Wallet Address | 11px | 600 | JetBrains Mono | --text-secondary |

---

## 📐 Spacing & Grid

### Base 8 Grid System

**All spacing must be divisible by 8**

```css
--grid: 8px;  /* Base unit */

/* Spacing Scale */
--space-micro: 2px;    /* 0.25× - hairline gaps */
--space-xs: 4px;       /* 0.5× - tight spacing */
--space-sm: 8px;       /* 1× - base unit */
--space-md: 16px;      /* 2× - comfortable gaps */
--space-lg: 24px;      /* 3× - section spacing */
--space-xl: 32px;      /* 4× - major sections */
--space-2xl: 48px;     /* 6× - page margins */
--space-3xl: 64px;     /* 8× - hero spacing */
```

---

### Application Guide

**Component Padding**
```css
/* Cards */
padding: 24px 32px;  /* 3× × 4× */

/* Buttons */
padding: 12px 24px;  /* 1.5× × 3× */

/* Input Fields */
padding: 12px 16px;  /* 1.5× × 2× */

/* Modals */
padding: 48px;       /* 6× */
```

**Layout Gaps**
```css
/* Card Grids */
gap: 24px;  /* 3× */

/* Section Spacing */
margin-bottom: 64px;  /* 8× */

/* Inline Elements */
gap: 8px;   /* 1× */

/* Page Margins */
padding: 48px;  /* 6× */
```

---

### Golden Ratio Application

Use **1.618** for sizing relationships:

```
Major element : Minor element = 1.618 : 1

Examples:
- Sidebar 280px : Content 453px = 1.618:1
- Card width 340px : Height 210px = 1.618:1
- Title 48px : Body 30px ≈ 1.6:1
```

---

## 🔮 Glassmorphism

### Core Principles

1. **Transparency** - All surfaces use `rgba()` with 0.6–0.95 alpha
2. **Blur** - `backdrop-filter: blur(12-20px)` on cards/modals
3. **Borders** - Subtle `1px solid rgba(255, 255, 255, 0.08)`
4. **Layering** - Dark base → semi-transparent cards → blur

---

### Implementation Patterns

**Standard Card**
```css
.card {
    background: rgba(26, 26, 36, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 24px;
}
```

**Modal Overlay**
```css
.modal-overlay {
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
}

.modal {
    background: rgba(26, 26, 36, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
}
```

**Sidebar Navigation**
```css
.sidebar {
    background: rgba(26, 26, 36, 0.6);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
}
```

**Pathway Cards** (with accent tints)
```css
.pathway-card--align {
    background: rgba(96, 165, 250, 0.05);  /* 5% tint */
    backdrop-filter: blur(12px);
    border: 1px solid rgba(96, 165, 250, 0.15);  /* 15% border */
}
```

---

### Glassmorphism Rules

- **Never** pure opaque backgrounds (except base `#0A0A0A`)
- **Always** pair `background: rgba()` with `backdrop-filter`
- **Use** `-webkit-backdrop-filter` for Safari support
- **Blur values**: 8px (overlays), 12px (cards), 20px (modals)
- **Border opacity**: 0.08 (standard), 0.15 (accented), 0.1 (modals)

---

## 🧩 Component Library

### Buttons

**Primary Button**
```css
.btn-primary {
    background: linear-gradient(135deg, #00A1F1, #00C3FF);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 195, 255, 0.3);
}
```

**Secondary Button**
```css
.btn-secondary {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.7);
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 200ms ease-in-out;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
}
```

**Ghost Button**
```css
.btn-ghost {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    padding: 8px 16px;
    transition: all 200ms ease-in-out;
}

.btn-ghost:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}
```

---

### Cards

**Standard Card**
```css
.card {
    background: rgba(26, 26, 36, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 24px;
    transition: all 200ms ease-in-out;
}

.card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
```

**Pathway Card** (with accent)
```css
.pathway-card {
    background: var(--pathway-bg);  /* 5% tint */
    backdrop-filter: blur(12px);
    border: 1px solid var(--pathway-border);  /* 15% */
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
}

.pathway-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--pathway-accent);
    opacity: 0;
    transition: opacity 200ms;
}

.pathway-card:hover::before {
    opacity: 1;
}
```

---

### Progress Bars

```css
.progress-container {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #00A1F1, #00C3FF);
    transition: width 1.5s ease-out;
}
```

---

### Badges

**Status Badge**
```css
.badge {
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge--success {
    background: rgba(74, 222, 128, 0.15);
    color: #4ADE80;
}

.badge--warning {
    background: rgba(251, 146, 60, 0.15);
    color: #FB923C;
}

.badge--danger {
    background: rgba(255, 75, 75, 0.15);
    color: #FF4B4B;
}
```

---

### Modal

```css
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease-in-out;
}

.modal-overlay.active {
    opacity: 1;
    pointer-events: all;
}

.modal {
    background: rgba(26, 26, 36, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 48px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    transform: scale(0.95);
    transition: transform 200ms ease-in-out;
}

.modal-overlay.active .modal {
    transform: scale(1);
}
```

---

## ⚡ Interaction Design

### Transitions

```css
/* Standard timing functions */
--transition-fast: 100ms ease-in-out;
--transition-standard: 200ms ease-in-out;
--transition-slow: 320ms ease-in-out;

/* Custom easing */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Usage**
```css
.element {
    transition: all 200ms ease-in-out;
}

/* Specific properties for performance */
.optimized {
    transition: transform 200ms ease-in-out,
                opacity 200ms ease-in-out;
}
```

---

### Hover States

**Card Lift**
```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
```

**Button Lift**
```css
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-glow);
}
```

**Navigation Slide**
```css
.nav-item:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.08);
}
```

---

### Focus States (Accessibility)

```css
*:focus-visible {
    outline: 3px solid #00C3FF;
    outline-offset: 2px;
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
    *:focus-visible {
        outline-width: 4px;
    }
}
```

---

### Active States

```css
.nav-item.active {
    background: rgba(0, 195, 255, 0.12);
    color: #00C3FF;
}

.btn:active {
    transform: scale(0.98);
}
```

---

## 📱 Layout Patterns

### Sidebar + Main Content

```css
.app-container {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 280px;
    position: fixed;
    height: 100vh;
    background: rgba(26, 26, 36, 0.6);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.main-content {
    margin-left: 280px;
    flex: 1;
    padding: 48px;
    max-width: 1400px;
}
```

---

### Grid Layouts

**Pathway Cards (Auto-fit)**
```css
.pathways-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}
```

**Quest Cards (Auto-fill)**
```css
.quest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 24px;
}
```

**Stats Grid (Fixed 4-column)**
```css
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

@media (max-width: 1024px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

## 🌐 Web3/DeFi Patterns

### Wallet Card

```html
<div class="wallet-card">
    <div class="wallet-header">
        <span class="network-chip">Ethereum</span>
        <button class="address-chip">
            0x742d...5cA8
            <svg class="copy-icon"><!-- copy icon --></svg>
        </button>
    </div>
    <div class="wallet-balance">
        <span class="balance-label">Total Balance</span>
        <span class="balance-value">$4,287.42</span>
    </div>
</div>
```

**Styling**
```css
.address-chip {
    font-family: var(--font-mono);
    font-size: 11px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 6px 12px;
}
```

---

### Transaction Stepper

```html
<div class="tx-stepper">
    <div class="tx-step tx-step--complete">
        <div class="step-icon">✓</div>
        <div class="step-label">Awaiting Signature</div>
    </div>
    <div class="tx-step tx-step--active">
        <div class="step-icon">⏳</div>
        <div class="step-label">Submitted</div>
    </div>
    <div class="tx-step tx-step--pending">
        <div class="step-icon">○</div>
        <div class="step-label">Confirmed</div>
    </div>
</div>
```

---

### Bridge Drawer

```html
<div class="bridge-drawer">
    <div class="bridge-row">
        <span class="label">From Network</span>
        <select class="network-select">
            <option>Ethereum</option>
            <option>Polygon</option>
        </select>
    </div>
    <div class="bridge-row">
        <span class="label">Amount</span>
        <input type="number" class="amount-input" placeholder="0.00">
    </div>
    <div class="bridge-estimate">
        <span class="estimate-label">Estimated Time</span>
        <span class="estimate-value">~3 minutes</span>
    </div>
    <button class="btn-primary">Bridge Tokens</button>
</div>
```

---

### Token Table (Sortable)

```html
<table class="token-table">
    <thead>
        <tr>
            <th class="sortable">Asset</th>
            <th class="sortable">Price</th>
            <th class="sortable">24h Change</th>
            <th>Chart</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="token-info">
                    <img src="eth.png" class="token-icon">
                    <span class="token-symbol">ETH</span>
                </div>
            </td>
            <td>$3,245.67</td>
            <td class="positive">+2.34%</td>
            <td><svg class="sparkline"><!-- chart --></svg></td>
        </tr>
    </tbody>
</table>
```

---

## 🤖 AI/Agent Patterns

### Agent Chat Bubbles

```html
<div class="chat-message agent-message">
    <img src="bigsis-avatar.jpg" class="agent-avatar">
    <div class="message-bubble">
        <div class="agent-name">BigSis</div>
        <div class="message-content">
            I've analyzed the market data and identified 3 key trends...
        </div>
        <div class="message-timestamp">2:34 PM</div>
    </div>
</div>
```

**Styling**
```css
.agent-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--agent-color);
}

.message-bubble {
    background: rgba(26, 26, 36, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 12px 16px;
}
```

---

### Thinking Indicator

```html
<div class="thinking-indicator">
    <div class="thinking-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
    <span class="thinking-text">Analyzing market trends...</span>
</div>
```

**Animation**
```css
@keyframes thinking {
    0%, 80%, 100% { opacity: 0.3; }
    40% { opacity: 1; }
}

.dot {
    animation: thinking 1.4s infinite;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
```

---

### Tool Invocation Cards

```html
<div class="tool-card">
    <div class="tool-header">
        <span class="tool-icon">🔍</span>
        <span class="tool-name">Web Search</span>
        <span class="tool-status">Running...</span>
    </div>
    <div class="tool-params">
        <span class="param-label">Query:</span>
        <span class="param-value">"Bitcoin market analysis 2025"</span>
    </div>
</div>
```

---

## 🎮 Quest/Gamification

### Quest Cards

```html
<div class="quest-card">
    <div class="quest-header">
        <span class="quest-badge difficulty-medium">Medium</span>
        <span class="quest-reward">+150 BITS</span>
    </div>
    <h3 class="quest-title">First DeFi Trade</h3>
    <p class="quest-description">
        Execute your first trade using the ALPHA pathway
    </p>
    <div class="quest-progress">
        <div class="progress-bar" style="width: 60%"></div>
    </div>
    <div class="quest-stats">
        <span>3 of 5 steps</span>
        <span>2 days left</span>
    </div>
</div>
```

**Difficulty Badges**
```css
.difficulty-easy {
    background: rgba(74, 222, 128, 0.15);
    color: #4ADE80;
}

.difficulty-medium {
    background: rgba(251, 146, 60, 0.15);
    color: #FB923C;
}

.difficulty-hard {
    background: rgba(167, 139, 250, 0.15);
    color: #A78BFA;
}
```

---

### XP/Level System

```html
<div class="xp-bar">
    <div class="xp-info">
        <span class="current-level">Level 8</span>
        <span class="xp-text">1,247 / 2,000 XP</span>
    </div>
    <div class="xp-progress">
        <div class="xp-fill" style="width: 62%"></div>
    </div>
</div>
```

---

## 💳 VER$EID Card System (v3.0)

### Overview

VER$EID transforms Web3 contributions into premium credit card-style identity cards. The system uses a **3-layer interactive architecture** to display BITS (contribution points) and BEATS (achievement milestones) across 4 universal pathways.

**Core Metrics:**
- **BITS**: 8 per action (87.5% pathway, 12.5% macro card)
- **BEATS**: 1 per 4 actions (32 BITS total)
- **Pathways**: ALIGN ✦, ALPHA α, KARMA ○, SYNERGY ∞
- **Tiers**: Bronze 🥉 (100 BEATS), Silver 🥈 (500), Gold 🥇 (1,500), Diamond 💎 (5,000)

---

### 3-Layer Architecture

**Layer 1 (Front)**: Network logo, owner address, BITS/BEATS metrics, 4 pathway badges
**Layer 2 (Back)**: Pathway details, stats breakdown, tier progression bar, 4 tier badges
**Layer 3 (Modal)**: Tier story with unlock requirements and perks

**Interaction Flow:**
1. Click pathway badge (✦ α ○ ∞) → Flip to Layer 2
2. Click tier badge (🥉🥈🥇💎) → Open Layer 3 modal
3. Click back arrow / ESC / overlay → Return to previous layer

---

### Card Dimensions & Spacing

**Desktop Dimensions**
```css
width: 420px;
height: 260px;
aspect-ratio: 1.586:1;  /* ISO/IEC 7810 ID-1 credit card standard */
padding: 26px 30px;
border-radius: 20px;
```

**Mobile Dimensions** (≤ 768px)
```css
width: 340px;
height: 214px;
padding: 26px 30px;  /* Maintains visual consistency */
```

**⚠️ CRITICAL:** Never use `transform: scale()` on cards - it breaks Base 8 spacing precision and causes layout inconsistencies.

---

### Layer 1: Card Front

**Complete Structure**
```html
<div class="card-wrapper" id="macro-wrapper">
    <!-- Layer 1: Front -->
    <div class="card card-front card-macro">
        <!-- Header: Logo + Owner Address -->
        <div class="card-header">
            <div class="card-logo">
                <span class="card-icon">💎</span>
                <span class="card-name">VER$EID</span>
            </div>
            <div class="owner-id">
                <span class="owner-address">0xAb5...3d2</span>
                <span class="owner-dropdown-icon">▾</span>
            </div>
        </div>

        <!-- Metrics: BITS + BEATS with Progress Bars -->
        <div class="metrics">
            <div class="metric">
                <div class="metric-label">BITS Accumulated</div>
                <div class="metric-value">15,234</div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill-blue"
                         style="width: 76%"></div>
                </div>
            </div>
            <div class="metric">
                <div class="metric-label">BEATS Achieved</div>
                <div class="metric-value">476</div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill-blue"
                         style="width: 62%"></div>
                </div>
            </div>
        </div>

        <!-- Pathway Badges: 4 Interactive Buttons -->
        <div class="pathway-badges">
            <div class="pathway-badge" data-pathway="align" data-card="macro">
                <span class="pathway-badge-icon">✦</span>
                <span class="pathway-badge-name">ALIGN</span>
            </div>
            <div class="pathway-badge" data-pathway="alpha" data-card="macro">
                <span class="pathway-badge-icon">α</span>
                <span class="pathway-badge-name">ALPHA</span>
            </div>
            <div class="pathway-badge" data-pathway="karma" data-card="macro">
                <span class="pathway-badge-icon">○</span>
                <span class="pathway-badge-name">KARMA</span>
            </div>
            <div class="pathway-badge" data-pathway="synergy" data-card="macro">
                <span class="pathway-badge-icon">∞</span>
                <span class="pathway-badge-name">SYNERGY</span>
            </div>
        </div>
    </div>
</div>
```

**Styling**
```css
/* Card Base (Glassmorphism) */
.card-macro {
    background: linear-gradient(135deg,
        rgba(96, 165, 250, 0.15) 0%,   /* 15% pathway color */
        rgba(96, 165, 250, 0.1) 100%
    );
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
        0 8px 32px rgba(96, 165, 250, 0.15),
        0 0 80px rgba(96, 165, 250, 0.05),
        inset 0 0 60px rgba(96, 165, 250, 0.03);
}

/* Header Section */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.card-logo {
    display: flex;
    align-items: center;
    gap: 8px;
}

.card-icon {
    font-size: 26px;
}

.card-name {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
}

/* Owner Address */
.owner-address {
    font-family: var(--font-mono);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
}

/* Metrics */
.metric {
    margin-bottom: 16px;
}

.metric-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 4px;
}

.metric-value {
    font-family: var(--font-mono);
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 8px;
}

/* Progress Bars (2px height - subtle) */
.progress-bar {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Pathway Badges */
.pathway-badges {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.pathway-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.pathway-badge:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.pathway-badge-icon {
    font-size: 22px;
    margin-bottom: 4px;
}

.pathway-badge-name {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```

---

### Layer 2: Card Back (Pathway Details)

**Structure**
```html
<div class="card card-back card-macro">
    <div class="pathway-detail">
        <!-- Header with Back Button -->
        <div class="pathway-detail-header">
            <div class="pathway-title">
                <span class="pathway-title-icon align-color"
                      id="macro-detail-icon">✦</span>
                <div class="pathway-title-text">
                    <span class="pathway-title-main"
                          id="macro-detail-name">ALIGN</span>
                    <span class="pathway-title-sub"
                          id="macro-detail-subtitle">Identity & Verification</span>
                </div>
            </div>
            <div class="back-button" onclick="flipCard('macro', false)">←</div>
        </div>

        <!-- Stats: BITS + BEATS Breakdown -->
        <div class="pathway-stats">
            <div class="pathway-stat">
                <div class="pathway-stat-label">BITS</div>
                <div class="pathway-stat-value"
                     id="macro-detail-bits">3,157,847</div>
            </div>
            <div class="pathway-stat">
                <div class="pathway-stat-label">BEATS</div>
                <div class="pathway-stat-value"
                     id="macro-detail-beats">892</div>
            </div>
        </div>

        <!-- Tier Progression Bar -->
        <div class="tier-progression">
            <div class="tier-progression-header">
                <span class="tier-current">
                    <span id="macro-tier-emoji">🥈</span>
                    <span id="macro-tier-name">Silver</span>
                </span>
                <span class="tier-next">
                    <span id="macro-tier-progress">892 / 1,500</span> to
                    <span id="macro-tier-next">Gold</span>
                </span>
            </div>
            <div class="tier-progress-bar">
                <div class="tier-progress-fill tier-progress-fill-blue"
                     id="macro-tier-fill" style="width: 59%"></div>
            </div>
        </div>

        <!-- Tier Badges (Generated by JS) -->
        <div class="detail-badges" id="macro-detail-badges">
            <!-- 4 badges: 🥉🥈🥇💎 -->
        </div>
    </div>
</div>
```

**Critical Spacing (Optimized for 260px height)**
```css
/* Available: 260px - 52px padding = 208px content space */

.pathway-detail-header {
    margin-bottom: 16px;  /* Not 24px */
    gap: 8px;
}

.pathway-title-icon {
    font-size: 24px;  /* Not 26px */
}

.pathway-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 16px;  /* Not 24px */
}

.pathway-stat {
    padding: 10px 16px;  /* Reduced from 12px */
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.tier-progression {
    margin-bottom: 16px;  /* Not 24px */
}

.detail-badges {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: auto;  /* Pushes to bottom */
}

.detail-badge {
    height: 48px;  /* Not 56px */
    font-size: 34px;  /* Not 38px */
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    cursor: pointer;
    transition: all 200ms;
}

.detail-badge:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
}

.detail-badge.achieved {
    background: rgba(var(--pathway-rgb), 0.15);
    border-color: rgba(var(--pathway-rgb), 0.3);
}
```

**Spacing Breakdown (Total: 186px)**
```
Header:         ~40px (icon 24px + text + margin 16px)
Stats Grid:     ~56px (10px padding + 8px gap + margin 16px)
Progression:    ~42px (header + bar + margin 16px)
Tier Badges:    ~48px (fixed height)
═══════════════════════
Total:          186px (22px buffer for safety)
```

---

### Layer 3: Tier Story Modal

**Structure**
```html
<div class="tier-story-overlay" id="tier-story-overlay"
     role="dialog" aria-modal="true" aria-labelledby="tier-story-title">
    <div class="tier-story-card">
        <!-- Close Button -->
        <button class="tier-story-close"
                onclick="closeTierStory()"
                aria-label="Close tier details">×</button>

        <!-- Header -->
        <div class="tier-story-header">
            <div class="tier-story-icon" id="tier-story-icon"
                 aria-hidden="true">🥇</div>
            <div class="tier-story-title-group">
                <h2 class="tier-story-title" id="tier-story-title">Gold Tier</h2>
                <p class="tier-story-pathway" id="tier-story-pathway">
                    ALIGN • Macro VER$EID
                </p>
            </div>
        </div>

        <!-- Requirement -->
        <div class="tier-story-requirement" id="tier-story-requirement">
            Earn 1,500 BEATS through identity verification actions
        </div>

        <!-- Perks List -->
        <div class="tier-story-perks">
            <h3 class="tier-story-perks-label">Unlocked Perks</h3>
            <div class="tier-story-perks-list" id="tier-story-perks-list">
                <!-- Generated by JavaScript:
                <div class="tier-story-perk">
                    <span class="perk-icon">✓</span>
                    <span class="perk-text">Priority verification</span>
                </div>
                -->
            </div>
        </div>
    </div>
</div>
```

**Styling**
```css
/* Overlay (Fullscreen) */
.tier-story-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
}

.tier-story-overlay.active {
    opacity: 1;
    pointer-events: all;
}

/* Modal Card */
.tier-story-card {
    background: rgba(26, 26, 36, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 48px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    transform: scale(0.9);
    transition: transform 300ms ease-in-out;
}

.tier-story-overlay.active .tier-story-card {
    transform: scale(1);
}

/* Tier Icon (Large) */
.tier-story-icon {
    font-size: 48px;
    text-shadow: 0 0 12px currentColor;
}

/* Perks */
.tier-story-perk {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    margin-bottom: 8px;
}

.perk-icon {
    font-size: 16px;
    color: var(--pathway-accent);
}

.perk-text {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.8);
}
```

---

### JavaScript API

**Core Functions**
```javascript
// Toggle Layer 1 ↔ Layer 2
function flipCard(cardId, toBack) {
    const wrapper = document.getElementById(`${cardId}-wrapper`);
    if (toBack) {
        wrapper.classList.add('flipped');
    } else {
        wrapper.classList.remove('flipped');
    }
}

// Update Layer 2 content + generate tier badges
function updatePathwayDetail(cardId, pathway) {
    const pathwayData = PATHWAY_DATA[pathway];

    // Update icon + name
    document.getElementById(`${cardId}-detail-icon`).textContent = pathwayData.icon;
    document.getElementById(`${cardId}-detail-name`).textContent = pathwayData.name;

    // Update subtitle
    const subtitle = PATHWAY_SUBTITLES[cardId][pathway];
    document.getElementById(`${cardId}-detail-subtitle`).textContent = subtitle;

    // Generate tier badges (🥉🥈🥇💎)
    const badgesContainer = document.getElementById(`${cardId}-detail-badges`);
    badgesContainer.innerHTML = '';

    ['bronze', 'silver', 'gold', 'diamond'].forEach(tier => {
        const badge = document.createElement('div');
        badge.className = 'detail-badge';
        badge.setAttribute('data-tier', tier);
        badge.setAttribute('data-pathway', pathway);
        badge.setAttribute('data-card', cardId);
        badge.textContent = TIER_DATA[tier].emoji;
        // Add 'achieved' class if user meets requirement
        badgesContainer.appendChild(badge);
    });
}

// Open Layer 3 modal
function showTierStory(cardId, pathway, tierId) {
    const overlay = document.getElementById('tier-story-overlay');
    const tierData = TIER_DATA[tierId];

    // Populate modal
    document.getElementById('tier-story-icon').textContent = tierData.emoji;
    document.getElementById('tier-story-title').textContent = `${tierData.name} Tier`;
    document.getElementById('tier-story-pathway').textContent =
        `${PATHWAY_DATA[pathway].name} • ${cardId.toUpperCase()}`;
    document.getElementById('tier-story-requirement').textContent =
        `Earn ${tierData.beats} BEATS through ${pathway} activities`;

    // Generate perks
    const perksList = document.getElementById('tier-story-perks-list');
    perksList.innerHTML = tierData.perks.map(perk => `
        <div class="tier-story-perk">
            <span class="perk-icon">✓</span>
            <span class="perk-text">${perk}</span>
        </div>
    `).join('');

    overlay.classList.add('active');
}

// Close Layer 3
function closeTierStory() {
    document.getElementById('tier-story-overlay').classList.remove('active');
}
```

**Data Structures**
```javascript
const PATHWAY_DATA = {
    align:   { icon: '✦', name: 'ALIGN', color: '#60A5FA' },
    alpha:   { icon: 'α', name: 'ALPHA', color: '#FB923C' },
    karma:   { icon: '○', name: 'KARMA', color: '#A78BFA' },
    synergy: { icon: '∞', name: 'SYNERGY', color: '#4ADE80' }
};

const PATHWAY_SUBTITLES = {
    macro: {
        align: 'Identity & Verification',
        alpha: 'DeFi Trading',
        karma: 'Community Engagement',
        synergy: 'Network Interoperability'
    },
    flare: {
        align: 'Oracle Data',
        alpha: 'FTSO Delegation',
        karma: 'Network Participation',
        synergy: 'Cross-Chain Oracle'
    }
    // ... 7 networks total
};

const TIER_DATA = {
    bronze:  { emoji: '🥉', name: 'Bronze', beats: 100, perks: [
        'Basic identity verification',
        'Standard transaction limits',
        'Community forum access'
    ]},
    silver:  { emoji: '🥈', name: 'Silver', beats: 500, perks: [
        'Enhanced verification speed',
        'Increased transaction limits',
        'Priority support queue'
    ]},
    gold:    { emoji: '🥇', name: 'Gold', beats: 1500, perks: [
        'Premium verification status',
        'Exclusive DeFi opportunities',
        'Private community channels'
    ]},
    diamond: { emoji: '💎', name: 'Diamond', beats: 5000, perks: [
        'VIP verification instant',
        'Unlimited transaction access',
        'Governance voting rights'
    ]}
};
```

---

### Event Delegation Pattern

**Single Event Listener for All Badges**
```javascript
// Pathway badge clicks (Layer 1 → Layer 2)
document.addEventListener('click', (e) => {
    const badge = e.target.closest('.pathway-badge');
    if (badge) {
        const pathway = badge.getAttribute('data-pathway');
        const cardId = badge.getAttribute('data-card');
        updatePathwayDetail(cardId, pathway);
        flipCard(cardId, true);
    }
});

// Tier badge clicks (Layer 2 → Layer 3)
document.addEventListener('click', (e) => {
    const detailBadge = e.target.closest('.detail-badge');
    if (detailBadge) {
        const tier = detailBadge.getAttribute('data-tier');
        const pathway = detailBadge.getAttribute('data-pathway');
        const cardId = detailBadge.getAttribute('data-card');
        showTierStory(cardId, pathway, tier);
    }
});

// Close modal: overlay click + ESC key
const overlay = document.getElementById('tier-story-overlay');
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeTierStory();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeTierStory();
    }
});
```

---

### Network Color Guidelines

**Current Networks (7 total)**
```css
/* Macro - Blue (Universal Identity) */
.card-macro {
    background: linear-gradient(135deg,
        rgba(96, 165, 250, 0.15),
        rgba(96, 165, 250, 0.1));
}

/* Flare - Orange (Oracle Network) */
.card-flare {
    background: linear-gradient(135deg,
        rgba(251, 146, 60, 0.15),
        rgba(251, 146, 60, 0.1));
}

/* Galactica - Purple (Privacy-First) */
.card-galactica {
    background: linear-gradient(135deg,
        rgba(167, 139, 250, 0.15),
        rgba(167, 139, 250, 0.1));
}

/* BRO$FIT - Green (DeFi Yield) */
.card-brosfit {
    background: linear-gradient(135deg,
        rgba(74, 222, 128, 0.15),
        rgba(74, 222, 128, 0.1));
}

/* BROVER$E - Pink (Community) */
.card-broverse {
    background: linear-gradient(135deg,
        rgba(244, 114, 182, 0.15),
        rgba(244, 114, 182, 0.1));
}

/* ROCKETX - Teal (Cross-Chain DEX) */
.card-rocketx {
    background: linear-gradient(135deg,
        rgba(45, 212, 191, 0.15),
        rgba(45, 212, 191, 0.1));
}

/* Solana - Gradient (High-Speed) */
.card-solana {
    background: linear-gradient(135deg,
        rgba(220, 31, 255, 0.15),
        rgba(0, 255, 163, 0.1));
}
```

---

### Responsive Behavior

**Desktop (Default)**
```css
:root {
    --card-width: 420px;
    --card-height: 260px;
}

.card-container {
    width: var(--card-width);
    height: var(--card-height);
    perspective: 1000px;
}

.card {
    width: 100%;
    height: 100%;
    padding: 26px 30px;
}
```

**Mobile (≤ 768px)**
```css
@media (max-width: 768px) {
    :root {
        --card-width: 340px;
        --card-height: 214px;
    }

    /* Card dimensions automatically update via CSS variables */

    /* Typography adjustments */
    .metric-value {
        font-size: 22px;  /* Down from 26px */
    }

    .pathway-badge-icon {
        font-size: 20px;  /* Down from 22px */
    }

    /* Modal padding */
    .tier-story-card {
        padding: 32px;  /* Down from 48px */
    }
}
```

---

### Accessibility Features

**ARIA Labels**
```html
<!-- Layer 1: Pathway Badges -->
<div class="pathway-badge"
     data-pathway="align"
     data-card="macro"
     role="button"
     aria-label="View ALIGN pathway details"
     tabindex="0">
    <span class="pathway-badge-icon" aria-hidden="true">✦</span>
    <span class="pathway-badge-name">ALIGN</span>
</div>

<!-- Layer 2: Back Button -->
<button class="back-button"
        onclick="flipCard('macro', false)"
        aria-label="Return to card front">←</button>

<!-- Layer 3: Modal -->
<div class="tier-story-overlay"
     role="dialog"
     aria-modal="true"
     aria-labelledby="tier-story-title">
    <!-- Content -->
</div>
```

**Keyboard Navigation**
```javascript
// TAB through pathway badges
document.querySelectorAll('.pathway-badge').forEach(badge => {
    badge.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            badge.click();
        }
    });
});

// ESC to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTierStory();
    }
});
```

---

### Best Practices

**DO ✅**
- Use CSS variables for dimensions (`var(--card-width)`)
- Apply Base 8 spacing consistently (8, 16, 24, 48px)
- Use event delegation for dynamic elements
- Test all 3 layers on desktop + mobile
- Validate HTML (W3C) and check WCAG 2.2 AA
- Use `requestAnimationFrame` for smooth animations
- Keep Layer 2 spacing total ≤ 208px

**DON'T ❌**
- Never use `transform: scale()` on card containers
- Don't use non-Base-8 spacing values
- Don't attach listeners to each badge individually
- Don't forget `data-` attributes for JavaScript hooks
- Don't skip ARIA labels for accessibility
- Don't use inline styles (except dynamic width values)
- Don't exceed 260px Layer 2 content height

---

### Live Reference

**Production Implementation:**
- Location: `/Users/digitaldavinci/verseid showcase/verseid-v3.0-production/`
- Total: 3,537 lines across 13 files
- Files: `index.html` (dashboard), `cards/*.html` (7 networks), `assets/styles.css`, `assets/card-engine.js`

**ZenSis Memory:**
- ID: `a3bb3bb2-8841-49b6-a467-1514f48ce11b`
- Version: 3.0.0
- Type: Production Standards Documentation

---

## ♿ Accessibility

### WCAG 2.2 AA Compliance

**Color Contrast**
- Text: Minimum 4.5:1 ratio
- Large Text (18px+): Minimum 3:1 ratio
- UI Components: Minimum 3:1 ratio
- Pure white on #0A0A0A: 21:1 (AAA)

**Focus Indicators**
```css
*:focus-visible {
    outline: 3px solid #00C3FF;
    outline-offset: 2px;
}

/* High Contrast */
@media (prefers-contrast: high) {
    *:focus-visible {
        outline-width: 4px;
    }
}
```

---

### Keyboard Navigation

**Tab Order**
- Logical flow: left-to-right, top-to-bottom
- Skip links for main content
- Modal/drawer traps focus until closed

**Shortcuts**
```
ESC - Close modal/drawer
TAB - Next focusable element
SHIFT+TAB - Previous element
ENTER/SPACE - Activate button
Arrow Keys - Navigate lists/tabs
```

---

### Screen Readers

```html
<!-- Semantic HTML -->
<nav aria-label="Main navigation">
    <ul role="list">
        <li><a href="#" aria-current="page">Dashboard</a></li>
    </ul>
</nav>

<!-- Live Regions -->
<div role="status" aria-live="polite" aria-atomic="true">
    Transaction submitted successfully
</div>

<!-- Hidden Labels -->
<button aria-label="Close modal">
    <svg>×</svg>
</button>
```

---

### Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🎨 Theming & Modes

### Light Mode (Future)

```css
[data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: rgba(255, 255, 255, 0.6);
    --text-primary: #000000;
    --text-secondary: rgba(0, 0, 0, 0.7);
    --text-muted: rgba(0, 0, 0, 0.4);
    --border: rgba(0, 0, 0, 0.08);
}
```

---

### High Contrast Mode

```css
@media (prefers-contrast: high) {
    :root {
        --border: rgba(255, 255, 255, 0.2);
        --text-secondary: rgba(255, 255, 255, 0.9);
    }

    .card {
        border-width: 2px;
    }
}
```

---

### Density Modes

**Comfortable (Default)**
```css
--density-padding: 24px;
--density-gap: 24px;
--density-height: 48px;
```

**Compact**
```css
[data-density="compact"] {
    --density-padding: 16px;
    --density-gap: 16px;
    --density-height: 40px;
}
```

---

## 🛠️ Implementation Guide

### CSS Architecture

**File Structure**
```
styles/
├── 00-reset.css           # Normalize/reset
├── 01-tokens.css          # Design tokens (colors, spacing, etc.)
├── 02-typography.css      # Font definitions
├── 03-layout.css          # Grid systems, containers
├── 04-components.css      # Reusable components
├── 05-patterns.css        # Web3/AI/Quest patterns
├── 06-utilities.css       # Helper classes
└── 07-themes.css          # Light/dark/contrast modes
```

---

### CSS Custom Properties

**Token Definition**
```css
:root {
    /* Base */
    --grid: 8px;

    /* Colors */
    --bg-primary: #0A0A0A;
    --text-primary: #ffffff;

    /* Spacing */
    --space-sm: calc(var(--grid) * 1);
    --space-md: calc(var(--grid) * 2);

    /* Typography */
    --font-display: 'Space Grotesk', sans-serif;

    /* Transitions */
    --transition-standard: 200ms ease-in-out;
}
```

---

### Component Template

```html
<!-- Card Component -->
<div class="card pathway-card pathway-card--align">
    <div class="pathway-icon">✦</div>
    <h3 class="pathway-title">ALIGN</h3>
    <p class="pathway-subtitle">Identity Verification</p>
    <p class="pathway-description">
        Establish your verifiable Web3 identity across chains
    </p>
</div>
```

```css
/* Component Styles */
.pathway-card {
    background: var(--pathway-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--pathway-border);
    border-radius: 16px;
    padding: 24px;
    transition: all 200ms ease-in-out;
}

.pathway-card--align {
    --pathway-bg: rgba(96, 165, 250, 0.05);
    --pathway-border: rgba(96, 165, 250, 0.15);
    --pathway-accent: #60A5FA;
}

.pathway-icon {
    font-size: 36px;
    color: var(--pathway-accent);
    text-shadow: 0 0 8px var(--pathway-accent);
}
```

---

### Performance Optimization

**GPU Acceleration**
```css
.card {
    transform: translateZ(0);
    will-change: transform;
}
```

**Lazy Loading**
```html
<img src="placeholder.jpg" data-src="avatar.jpg" loading="lazy">
```

**Font Loading**
```css
@font-face {
    font-family: 'Space Grotesk';
    font-display: swap;
    src: url('space-grotesk.woff2') format('woff2');
}
```

---

## 📚 Version History

### v1.0.0 (2025-10-15) - Initial Release

**Core Features**
- Complete color system (VER$EID v3.0 + BDS v3.2)
- Typography scale (5-3-2 rule)
- 8px grid system
- Glassmorphism patterns
- Component library (buttons, cards, modals, badges)
- Web3/DeFi patterns (wallet, transactions, bridge)
- AI/Agent patterns (chat, thinking, tools)
- Quest/Gamification components
- Accessibility standards (WCAG 2.2 AA)
- Responsive layouts

**Design Principles**
- HAIKU Framework (4-3-2-1)
- 60-30-10 golden rule
- ZEN+ minimalism
- Perceptual uniformity
- Golden ratio application

**Lineage**
- BDS v3.2 (HAIKU, agents, Web3 patterns)
- VER$EID v3.0 (glassmorphism, pathway colors)
- ZEN+ (60-30-10, minimalism)
- DDV Codex v2.0 (4-3-2-1 framework)

**Status**: Production Ready ✅

---

## 🔗 Related Systems

- **BDS v3.2**: Memory ID `18e1cfde-64a4-40f4-ae83-621e2320a160`
- **Design Principles**: Memory ID `3804544a-c388-4c67-8446-16c6ecc132e2`
- **SIS Master Index**: Memory ID `4e94403e-ee9e-4506-8e4e-0d48815f2099`
- **BroVerse Showcase**: `/Users/digitaldavinci/bcol/broverse-showcase.html`

---

## 📄 License & Attribution

**Copyright © 2025 Proper Labs**
**Authors**: BigSis (Design Architecture) + Claude Code
**License**: Proprietary - Proper Labs Ecosystem

All rights reserved. Unauthorized reproduction or distribution prohibited.

---

## 🎯 Quick Reference

**Colors**: Pure black `#0A0A0A`, pure white with opacity
**Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (code)
**Grid**: Base 8px, all spacing divisible by 8
**Glassmorphism**: `backdrop-filter: blur(12-20px)` + `rgba()` backgrounds
**Transitions**: 200ms standard, `ease-in-out` or `cubic-bezier(0.4, 0, 0.2, 1)`
**Focus**: 3px ring `#00C3FF`, 2px offset
**Contrast**: WCAG 2.2 AA minimum (4.5:1 text, 3:1 UI)

---

**Last Updated**: 2025-10-15T15:30:00+02:00
**Version**: 1.0.0
**Status**: Official Release ✅
