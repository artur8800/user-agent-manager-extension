# Chrome User Agent Switcher Extension

A Chrome extension that allows you to **override the browser User-Agent** globally or per domain.  
Designed for developers and QA engineers who need to test websites under different browsers or devices.

The extension is built using **Chrome Manifest V3** and **declarativeNetRequest**, fully compliant with modern Chrome extension requirements.

---

## ✨ Features

- 🔁 Override User-Agent without request interception
- 🌐 Per-domain User-Agent rules
- ⚡ Uses `declarativeNetRequest` (no request listeners)
- 🧩 Fully compatible with Chrome Manifest V3
- 🖥 Modern and fast UI
- 🧠 Predictable state management

---

## 🛠 Tech Stack

### Chrome Extension

- Manifest V3
- `declarativeNetRequest`

### Frontend

- React
- shadcn/ui

### State Management

- Effector

### Tooling

- Vite (build system)
- pnpm (package manager)
