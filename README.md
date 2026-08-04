# 🌾 MandiRates & Vyapar — Direct APMC Market Hub

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-10B981?style=for-the-badge&logo=render)](https://mandirates-vyapar-app.onrender.com)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-blue?style=for-the-badge&logo=pwa)](https://mandirates-vyapar-app.onrender.com)
[![Platform](https://img.shields.io/badge/Platform-Mobile%20%7C%20Desktop-orange?style=for-the-badge)](#-installation--downloads)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> Real-time APMC Mandi market rates, 3-day trend forecasting radar, and multilingual WhatsApp price broadcast cards for farmers, daily vegetable vendors, Kirana stores, and wholesale traders across India.

🌐 **Live Application**: **[https://mandirates-vyapar-app.onrender.com](https://mandirates-vyapar-app.onrender.com)**

---

## 🌟 Key Features

* **⚡ Continuous Live Mandi Rates Ticker**: Streams real-time commodity prices per Kg and per Quintal (100 kg) with live fluctuation indicators.
* **📊 3-Day Trend Radar & Price Forecasting**: Evaluates historical price movements to deliver instant decision signals:
  - 🟢 **BUY NOW (Fair Price)**: Optimal market purchasing conditions for bulk inventory.
  - 🔴 **WAIT (Spike Expected)**: Prices elevated; hold or exercise caution.
  - 🟡 **STABLE**: Normal market equilibrium.
* **📲 Multilingual WhatsApp Broadcast Card Generator**: Generate customer price cards in 6 languages:
  - **Telugu (తెలుగు)** · **Tamil (தமிழ்)** · **Kannada (ಕನ್ನಡ)** · **Malayalam (മലയാളം)** · **Hindi (हिंदी)** · **English**
* **📱 Cross-Platform PWA (Mobile & Desktop)**: Installable directly onto Android, iOS (iPhone/iPad), and Windows/Mac Desktops with zero app store delays.
* **📶 100% Offline Resilience**: Service Worker (`sw.js`) caches application assets so traders can check market rates even in low-reception rural Mandis.

---

## 📍 Covered APMC Mandis (Priority Southern States & All-India)

| State / Region | Priority APMC Mandis | Key Commodities Tracked |
| :--- | :--- | :--- |
| **Andhra Pradesh** | Madanapalle, Guntur, Kurnool, Vijayawada | Tomato (Hybrid/Local), Red Chili (Teja), Cotton, Onion, Raw Banana |
| **Karnataka** | Kolar, Yeshwanthpur (Bengaluru), Davanagere | Tomato (Grade A), Ragi, Potato (Jyoti), Garlic (Desi), Maize |
| **Tamil Nadu** | Koyambedu (Chennai), Dindigul, Madurai, Coimbatore | Tomato (Nattu), Small Onion (Shallots), Garlic, Jasmine Flower, Coconut |
| **Telangana** | Bowenpally (Hyderabad), Warangal, Nizamabad | Tomato, Green Chili, Red Chili (Wonder Hot), Turmeric |
| **Kerala** | Chalai (Trivandrum), Ernakulam, Kozhikode | Coconut (Grade 1), Nendran Banana, Pineapple, Black Pepper |
| **All-India** | Lasalgaon (MH), Unjha (GJ), Azadpur (DL) | Onion (Export), Cumin (Jeera), Apple (Kinnaur) |

---

## 📲 Installation & Downloads

### 🤖 Android Mobile
1. Open **[https://mandirates-vyapar-app.onrender.com](https://mandirates-vyapar-app.onrender.com)** in Google Chrome.
2. Tap **"Add to Home Screen"** or **"Install App"** prompt.
3. The app icon installs directly to your Android home screen!

### 🍎 iOS (iPhone / iPad)
1. Open **[https://mandirates-vyapar-app.onrender.com](https://mandirates-vyapar-app.onrender.com)** in Safari.
2. Tap the **Share** button at the bottom navigation bar (square icon with up arrow).
3. Scroll down and tap **"Add to Home Screen"** ➔ Tap **Add**.

### 🖥️ Windows & Mac Desktop
1. Open **[https://mandirates-vyapar-app.onrender.com](https://mandirates-vyapar-app.onrender.com)** in Chrome or Edge.
2. Click **"Download Desktop App"** button at top right.

---

## 💻 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/SIDDHUguts/mandirates-vyapar-app.git

# Navigate into project folder
cd mandirates-vyapar-app

# Run local web server
python run_server.py
```

Open your browser at `http://localhost:8000`.

---

## 📄 License
This project is released under the **MIT License**.
