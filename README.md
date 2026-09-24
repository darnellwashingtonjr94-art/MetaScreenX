# MetaScreenX 🌍✨

![Rust](https://img.shields.io/badge/Rust-1.85%2B-orange?style=for-the-badge&logo=rust)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![WebGL](https://img.shields.io/badge/WebGL-2.0-red?style=for-the-badge&logo=webgl)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)
![Android](https://img.shields.io/badge/Android-API_34-3DDC84?style=for-the-badge&logo=android)
![CI/CD Pipeline](https://img.shields.io/badge/GitHub_Actions-Passing-brightgreen?style=for-the-badge&logo=github-actions)

---

### 🎒 Explained in 5th Grade English

> Imagine having a super-fast, 3D video game globe right inside your web browser or phone! 🌎  
> **MetaScreenX** lets you spin the Earth, turn on live weather reports, watch planes and boats move in real time, and look at cool satellite maps. A super-fast computer brain built in Rust sends the information instantly, while a slick visual screen built in React draws everything smoothly on your device!

---

### ❓ What is this about?

**MetaScreenX** is a high-performance, real-time 3D geospatial visualization system and map data proxy engine[span_0](start_span)[span_0](end_span). It combines an ultra-low latency **Rust backend** with a **WebGL-accelerated React frontend** and an **Android application wrapper** to deliver immersive GIS data, live telemetry streaming, and spatial map layers across desktop and mobile devices[span_1](start_span)[span_1](end_span).

---

### ⚡ What this does

* **3D Globe & Spatial Viewport:** Interactive WebGL renderer featuring multi-view presets (Global 3D View, Day/Night Cycle, Ocean Bathymetry, VR Mode, and Cinematic Camera routes)[span_2](start_span)[span_2](end_span).
* **Real-Time Data Streaming:** Bi-directional WebSockets streaming live location telemetry and environmental updates[span_3](start_span)[span_3](end_span).
* **High-Throughput Map Tile Proxy:** Rust-powered tile caching engine serving binary imagery tiles and spatial protocols[span_4](start_span)[span_4](end_span).
* **Dynamic GIS Layer Management:** Toggleable overlays for weather patterns, traffic density, air quality (AQI), flight tracking, and custom WMS/WFS map sources[span_5](start_span)[span_5](end_span).
* **Cross-Platform Delivery:** Deployable as a web service via Docker, or cross-compiled into a native Android APK using GLES 3.0 acceleration[span_6](start_span)[span_6](end_span).

---

### ⚙️ How does this work?

```text
[ Python Data Pipeline ] ──> Process & Ingest GeoJSON/Layers
                                        │
[ Rust Axum/Tokio Server ] <────────────┴────────────> [ WebSocket Telemetry ]
  ├── Tile Proxy Engine (/api/proxy)                         │
  └── Live Data Broadcaster (/ws)                            │
                                                             ▼
[ React + WebGL Canvas Frontend ] <──────────────────────────┘
  ├── Zustand UI State Store
  ├── 3D Globe Viewport
  └── Mobile Android Container (GLES 3.0)
