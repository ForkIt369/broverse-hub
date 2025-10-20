# 🌌 BROVERSE Hub - Docusaurus Integration Guide

## ✅ Embedding Verified

**Test Page**: https://bcol-pi.vercel.app/test-embed.html

The BROVERSE Hub is **confirmed embeddable** with full functionality inside iframes.

---

## 📋 Quick Start for Docusaurus

### Method 1: Direct Iframe in MDX (Recommended)

Create a new MDX file in your Docusaurus `/docs` folder:

**File**: `/docs/broverse-hub.mdx`

```mdx
---
id: broverse-hub
title: BROVERSE Hub
description: Universal Web3 Identity Platform
---

# 🌌 BROVERSE Hub

<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="800px"
  frameBorder="0"
  allow="clipboard-write"
  loading="lazy"
  style={{ border: 'none', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
  title="BROVERSE Hub">
</iframe>

---

## Interactive Features

- **5 Experiences**: Protocol, VER$EID, BroBeats, BroVibes, BroFit
- **7 Networks**: Macro, Flare, Galactica, BRO$FIT, BROVER$E, ROCKETX, Solana
- **3-Layer Cards**: Interactive flip cards with pathway details and tier progression
```

---

### Method 2: React Component (Advanced)

Create a reusable component:

**File**: `/src/components/BroVerseEmbed.jsx`

```jsx
import React from 'react';

export default function BroVerseEmbed({ height = '800px' }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      marginBottom: '2rem'
    }}>
      <iframe
        src="https://bcol-pi.vercel.app"
        width="100%"
        height={height}
        frameBorder="0"
        allow="clipboard-write"
        loading="lazy"
        style={{
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
        }}
        title="BROVERSE Hub"
      />
    </div>
  );
}
```

**Usage in MDX**:

```mdx
---
title: BROVERSE Platform
---

import BroVerseEmbed from '@site/src/components/BroVerseEmbed';

# BROVERSE Hub

<BroVerseEmbed height="900px" />
```

---

### Method 3: Full-Screen Modal (Interactive)

**File**: `/src/components/BroVerseModal.jsx`

```jsx
import React, { useState } from 'react';

export default function BroVerseModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #00C3FF 0%, #0066FF 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0, 195, 255, 0.3)'
        }}
      >
        🌌 Open BROVERSE Hub
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '1400px',
              height: '90vh',
              background: '#0A0A0A',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              ×
            </button>
            <iframe
              src="https://bcol-pi.vercel.app"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="clipboard-write"
              style={{ border: 'none' }}
              title="BROVERSE Hub"
            />
          </div>
        </div>
      )}
    </>
  );
}
```

---

## 🎨 Styling Options

### Responsive Container

```jsx
<div style={{
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden'
}}>
  <iframe
    src="https://bcol-pi.vercel.app"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none'
    }}
    frameBorder="0"
    allow="clipboard-write"
    title="BROVERSE Hub"
  />
</div>
```

### With Border and Shadow

```jsx
<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="800px"
  frameBorder="0"
  allow="clipboard-write"
  style={{
    border: '2px solid #00C3FF',
    borderRadius: '16px',
    boxShadow: '0 0 40px rgba(0, 195, 255, 0.3)'
  }}
  title="BROVERSE Hub"
/>
```

---

## 📏 Recommended Dimensions

| Device | Width | Height |
|--------|-------|--------|
| **Desktop** | 100% | 800-1000px |
| **Tablet** | 100% | 700px |
| **Mobile** | 100% | 600px |

---

## 🔧 Docusaurus Configuration

Add to `docusaurus.config.js` if needed:

```js
module.exports = {
  // ... other config
  themeConfig: {
    // Allow iframes from bcol-pi.vercel.app
    iframe: {
      allowFullscreen: true,
      allow: 'clipboard-write'
    }
  }
};
```

---

## 🌐 Direct Page Links

Link to specific experiences using hash navigation (coming soon):

```mdx
- [Protocol](https://bcol-pi.vercel.app#protocol)
- [VER$EID](https://bcol-pi.vercel.app#verseid)
- [BroBeats](https://bcol-pi.vercel.app#brobeats)
- [BroVibes](https://bcol-pi.vercel.app#brovibes)
- [BroFit](https://bcol-pi.vercel.app#brosfit)
```

---

## ✅ Verified Features

- ✅ Full iframe compatibility
- ✅ All interactions work (navigation, card flips, modals)
- ✅ CORS headers configured
- ✅ X-Frame-Options: ALLOWALL
- ✅ No authentication required
- ✅ Mobile responsive
- ✅ Works in all browsers

---

## 🚀 Live Examples

- **Test Page**: https://bcol-pi.vercel.app/test-embed.html
- **Direct Hub**: https://bcol-pi.vercel.app
- **GitHub Repo**: https://github.com/ForkIt369/broverse-hub

---

## 📞 Support

For embedding issues or questions, check:
- [EMBED-GUIDE.md](./EMBED-GUIDE.md) - General embedding guide
- [README.md](./README.md) - Project overview
- Test page confirms all functionality works ✅
