# 🧪 Visual Testing Challenges – TBC Credit

Welcome to the hands-on part of the workshop!  
These challenges will help you practice BackstopJS and learn how to adapt it to real-world scenarios.

---

## 🔹 Challenge 1 – Add Another Page

➡️ Add **one more internal page** from [https://tbccredit.ge](https://tbccredit.ge) into `backstop.json`.

Example:

```json
{
  "label": "TBC Credit FAQ Page",
  "url": "https://tbccredit.ge/faq",
  "selectors": ["document"]
}
```
✅ Run:
 ```bash
  npx backstop reference
  npx backstop test
```
## 🔹 Challenge 2 – Add Mobile Resolution

➡️ Update backstop.json to include a mobile viewport (375x667) for the homepage scenario.

```json
"viewports": [
{ "label": "desktop", "width": 1920, "height": 1080 },
{ "label": "mobile", "width": 375, "height": 667 }
]
```
✅ Run tests again and compare how desktop vs. mobile snapshots differ.
## 🔹 Challenge 3 – Handle Dynamic Elements
➡️ Ignore unstable elements like sliders or dates using removeSelectors.
```json
"removeSelectors": [".promo-slider", ".live-date"]
```
✅ Check the report: those areas should no longer trigger failures.

## 🔹 Challenge 4 – Add Visual Threshold

➡️ Add a "misMatchThreshold" to allow small differences (like anti-aliasing or font rendering).
```json
"misMatchThreshold": 0.1
```
## 🔹 Challenge 5 – Section Snapshot

Instead of capturing the entire document, focus only on a specific section of the page (e.g., footer or calculator widget).
```json
"selectors": ["#footer"]
```
### 🎯 Goal: By completing these challenges, you’ll be comfortable creating, running, and maintaining a visual regression suite for any web project.