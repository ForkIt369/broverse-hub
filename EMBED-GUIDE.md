# 🎯 BROVERSE Hub - Embed Guide

## 📦 Embed Anywhere

The BROVERSE Hub is fully embeddable in any website, Notion page, or web application.

---

## 🔗 Production URL

```
https://bcol-pi.vercel.app
```

**Alternative URLs**:
- https://bcol-will31s-projects.vercel.app
- https://bcol-git-main-will31s-projects.vercel.app

---

## 📋 Standard Iframe Embed

### **Full Page Embed (Recommended)**

```html
<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="100vh"
  frameborder="0"
  allow="clipboard-write"
  loading="lazy"
  style="border: none; display: block;">
</iframe>
```

### **Fixed Height Embed**

```html
<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="800"
  frameborder="0"
  allow="clipboard-write"
  loading="lazy"
  style="border: none; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
</iframe>
```

### **Responsive Container Embed**

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe
    src="https://bcol-pi.vercel.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    frameborder="0"
    allow="clipboard-write"
    loading="lazy">
  </iframe>
</div>
```

---

## 🎨 Notion Embed

1. Type `/embed` in Notion
2. Paste the URL: `https://bcol-pi.vercel.app`
3. Press Enter

**Or use this code block:**

```
/embed https://bcol-pi.vercel.app
```

---

## 📱 Mobile-Optimized Embed

```html
<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="100vh"
  frameborder="0"
  allow="clipboard-write"
  loading="lazy"
  style="border: none; max-width: 100%; overflow: hidden;"
  scrolling="auto">
</iframe>
```

---

## 🔗 Direct Link with Specific Page

You can link directly to specific experiences (coming soon with hash routing):

```
https://bcol-pi.vercel.app#protocol
https://bcol-pi.vercel.app#verseid
https://bcol-pi.vercel.app#brobeats
https://bcol-pi.vercel.app#brovibes
https://bcol-pi.vercel.app#brosfit
```

---

## 🌐 WordPress Embed

1. Go to your WordPress post/page editor
2. Add a "Custom HTML" block
3. Paste the iframe code:

```html
<iframe
  src="https://bcol-pi.vercel.app"
  width="100%"
  height="800"
  frameborder="0"
  allow="clipboard-write"
  loading="lazy"
  style="border: none;">
</iframe>
```

---

## ⚛️ React Component Embed

```jsx
function BroVerseHub() {
  return (
    <iframe
      src="https://bcol-pi.vercel.app"
      width="100%"
      height="100vh"
      frameBorder="0"
      allow="clipboard-write"
      loading="lazy"
      style={{ border: 'none', display: 'block' }}
      title="BroVerse Hub"
    />
  );
}
```

---

## 🎭 Webflow Embed

1. Drag an "Embed" element onto your page
2. Paste the iframe code
3. Adjust width/height as needed
4. Publish

---

## 🔧 Security Headers

The following headers are configured for embeddability:

```json
{
  "X-Frame-Options": "ALLOWALL",
  "Content-Security-Policy": "frame-ancestors *",
  "Access-Control-Allow-Origin": "*"
}
```

This allows the BROVERSE Hub to be embedded in **any domain** without restrictions.

---

## 📏 Recommended Dimensions

### **Desktop**
- Width: `100%` or minimum `1200px`
- Height: `100vh` or minimum `800px`

### **Tablet**
- Width: `100%` or minimum `768px`
- Height: `100vh` or minimum `600px`

### **Mobile**
- Width: `100%`
- Height: `100vh` or minimum `500px`

---

## 🎨 Styling Tips

### **Add Border Radius**
```css
border-radius: 12px;
overflow: hidden;
```

### **Add Shadow**
```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
```

### **Full-Screen Modal**
```css
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 9999;
```

---

## 🚀 Performance Tips

1. **Use `loading="lazy"`** - Only load when visible
2. **Use `frameborder="0"`** - Remove default border
3. **Add `allow="clipboard-write"`** - Enable copy functionality
4. **Consider `sandbox` attribute** if security is needed:
   ```html
   sandbox="allow-scripts allow-same-origin allow-popups"
   ```

---

## ✅ Browser Compatibility

✅ Chrome/Edge (all versions)
✅ Firefox (all versions)
✅ Safari (all versions)
✅ Mobile browsers (iOS/Android)
✅ WebView components

---

## 📞 Need Help?

Issues with embedding? Check:
1. CORS headers are properly configured ✅
2. X-Frame-Options allows embedding ✅
3. CSP frame-ancestors is set to `*` ✅

**All security headers are configured for maximum embeddability!**
