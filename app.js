// ==========================================================================
// MANDIRATES & VYAPAR — PERSISTENT ENGINE, GEOLOCATION & VENDOR INVENTORY
// ==========================================================================

const MANDI_COORDINATES = [
  { mandi: "Madanapalle", state: "Andhra Pradesh", lat: 13.5574, lon: 78.5026 },
  { mandi: "Guntur", state: "Andhra Pradesh", lat: 16.3067, lon: 80.4365 },
  { mandi: "Kolar", state: "Karnataka", lat: 13.1367, lat_lon: [13.1367, 78.1292] },
  { mandi: "Yeshwanthpur", state: "Karnataka", lat: 13.0238, lon: 77.5503 },
  { mandi: "Koyambedu", state: "Tamil Nadu", lat: 13.0694, lon: 80.1948 },
  { mandi: "Dindigul", state: "Tamil Nadu", lat: 10.3673, lon: 77.9803 },
  { mandi: "Bowenpally", state: "Telangana", lat: 17.4649, lon: 78.4842 },
  { mandi: "Chalai", state: "Kerala", lat: 8.4855, lon: 76.9492 }
];

const DEFAULT_MANDI_DIRECTORY = {
  "Andhra Pradesh": [
    { id: "ap1", mandi: "Madanapalle", comm: "Tomato (Hybrid)", kg: 24.0, change: -4.2, arrivals: 120 },
    { id: "ap2", mandi: "Madanapalle", comm: "Tomato (Local)", kg: 20.0, change: -3.8, arrivals: 95 },
    { id: "ap3", mandi: "Guntur", comm: "Red Chili (Teja)", kg: 185.0, change: 5.4, arrivals: 340 },
    { id: "ap4", mandi: "Guntur", comm: "Cotton (LRA)", kg: 72.0, change: 1.2, arrivals: 210 },
    { id: "ap5", mandi: "Kurnool", comm: "Onion (Garwa)", kg: 18.0, change: -2.1, arrivals: 180 },
    { id: "ap6", mandi: "Vijayawada", comm: "Raw Banana", kg: 16.0, change: 0.5, arrivals: 90 }
  ],
  "Karnataka": [
    { id: "ka1", mandi: "Kolar", comm: "Tomato (Grade A)", kg: 22.0, change: -5.0, arrivals: 150 },
    { id: "ka2", mandi: "Kolar", comm: "Ragi (Finger Millet)", kg: 34.0, change: 0.8, arrivals: 85 },
    { id: "ka3", mandi: "Yeshwanthpur", comm: "Potato (Jyoti)", kg: 26.0, change: 2.3, arrivals: 290 },
    { id: "ka4", mandi: "Yeshwanthpur", comm: "Garlic (Desi)", kg: 110.0, change: 6.5, arrivals: 70 },
    { id: "ka5", mandi: "Davanagere", comm: "Maize (Corn)", kg: 21.0, change: -1.0, arrivals: 400 }
  ],
  "Tamil Nadu": [
    { id: "tn1", mandi: "Koyambedu", comm: "Tomato (Nattu)", kg: 25.0, change: -2.5, arrivals: 180 },
    { id: "tn2", mandi: "Dindigul", comm: "Small Onion (Shallots)", kg: 48.0, change: -6.2, arrivals: 110 },
    { id: "tn3", mandi: "Dindigul", comm: "Garlic (Kodaikanal)", kg: 135.0, change: 4.1, arrivals: 45 },
    { id: "tn4", mandi: "Madurai", comm: "Jasmine Flower", kg: 280.0, change: 12.0, arrivals: 30 },
    { id: "tn5", mandi: "Coimbatore", comm: "Coconut (Medium)", kg: 32.0, change: 1.5, arrivals: 95 }
  ],
  "Telangana": [
    { id: "ts1", mandi: "Bowenpally", comm: "Tomato", kg: 23.0, change: -3.0, arrivals: 140 },
    { id: "ts2", mandi: "Bowenpally", comm: "Green Chili", kg: 38.0, change: 4.5, arrivals: 75 },
    { id: "ts3", mandi: "Warangal", comm: "Red Chili (Wonder Hot)", kg: 195.0, change: 7.2, arrivals: 260 },
    { id: "ts4", mandi: "Nizamabad", comm: "Turmeric (Finger)", kg: 142.0, change: 2.0, arrivals: 190 }
  ],
  "Kerala": [
    { id: "kl1", mandi: "Chalai", comm: "Coconut (Grade 1)", kg: 35.0, change: 1.0, arrivals: 80 },
    { id: "kl2", mandi: "Chalai", comm: "Nendran Banana", kg: 42.0, change: -1.8, arrivals: 60 },
    { id: "kl3", mandi: "Ernakulam", comm: "Pineapple (Mauritius)", kg: 36.0, change: 3.2, arrivals: 110 },
    { id: "kl4", mandi: "Kozhikode", comm: "Black Pepper", kg: 560.0, change: 0.5, arrivals: 25 }
  ],
  "All-India": [
    { id: "ai1", mandi: "Lasalgaon (MH)", comm: "Onion (Export Grade)", kg: 19.0, change: -4.5, arrivals: 850 },
    { id: "ai2", mandi: "Unjha (GJ)", comm: "Cumin (Jeera)", kg: 240.0, change: 3.8, arrivals: 310 },
    { id: "ai3", mandi: "Azadpur (DL)", comm: "Apple (Kinnaur)", kg: 95.0, change: 1.8, arrivals: 420 }
  ]
};

const DEFAULT_INVENTORY_DATA = [
  { name: "Tomato (Hybrid)", grade: "Madanapalle A-Grade", qty: "450 kg", cost: "₹20", sell: "₹24", status: "In Stock" },
  { name: "Small Onion", grade: "Dindigul Selected", qty: "200 kg", cost: "₹42", sell: "₹48", status: "In Stock" },
  { name: "Garlic", grade: "Kodaikanal Premium", qty: "80 kg", cost: "₹95", sell: "₹110", status: "Low Stock" },
  { name: "Red Chili", grade: "Guntur Teja", qty: "150 kg", cost: "₹170", sell: "₹185", status: "In Stock" }
];

let MANDI_DIRECTORY = loadPersistentData();
let INVENTORY_DATA = loadInventoryData();

function loadPersistentData() {
  try {
    const stored = localStorage.getItem('mandirates_persistent_data_v2');
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to load stored rates:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_MANDI_DIRECTORY));
}

function savePersistentData() {
  try {
    localStorage.setItem('mandirates_persistent_data_v2', JSON.stringify(MANDI_DIRECTORY));
  } catch (e) {
    console.error("Failed to save rates:", e);
  }
}

function loadInventoryData() {
  try {
    const stored = localStorage.getItem('mandirates_inventory_data_v2');
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to load inventory:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_INVENTORY_DATA));
}

function saveInventoryData() {
  try {
    localStorage.setItem('mandirates_inventory_data_v2', JSON.stringify(INVENTORY_DATA));
  } catch (e) {
    console.error("Failed to save inventory:", e);
  }
}

let currentTab = 'live-rates';
let currentStateFilter = 'Andhra Pradesh';
let currentSearchQuery = '';
let currentSignalFilter = 'ALL';
let currentLanguage = 'Telugu';
let deferredInstallPrompt = null;
let liveUpdateTimer = null;
let isTickerPaused = false;
let userCoordinates = null;

// DOM Ready Initializer
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStateChips();
  initTicker();
  initTickerHoverEvents();
  renderRates();
  renderTrends();
  renderWhatsAppPreview();
  renderInventory();
  renderWeatherAlerts();
  initSearchAndFilters();
  initGeolocationTracking();
  initVoiceSearch();
  initCalculators();
  initStockModal();
  initPWAPrompt();
  startLivePriceSimulator();
});

// ==========================================================================
// VENDOR INVENTORY & ADD STOCK MODAL ENGINE
// ==========================================================================
function initStockModal() {
  const addStockBtn = document.getElementById('add-stock-btn');
  const stockModal = document.getElementById('stock-modal');
  const closeBtn = document.getElementById('stock-modal-close-btn');
  const form = document.getElementById('add-stock-form');

  if (addStockBtn) {
    addStockBtn.addEventListener('click', () => {
      stockModal.classList.remove('hidden');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      stockModal.classList.add('hidden');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newItem = {
        name: document.getElementById('new-stock-name').value,
        grade: document.getElementById('new-stock-grade').value,
        qty: document.getElementById('new-stock-qty').value,
        cost: document.getElementById('new-stock-cost').value,
        sell: document.getElementById('new-stock-sell').value,
        status: document.getElementById('new-stock-status').value
      };

      INVENTORY_DATA.unshift(newItem); // Add to top of list
      saveInventoryData();
      renderInventory();

      form.reset();
      stockModal.classList.add('hidden');
    });
  }
}

function deleteStockItem(index) {
  if (confirm("Remove this stock item from your inventory?")) {
    INVENTORY_DATA.splice(index, 1);
    saveInventoryData();
    renderInventory();
  }
}
window.deleteStockItem = deleteStockItem;

function renderInventory() {
  const tbody = document.getElementById('inventory-table-body');
  if (!tbody) return;

  if (INVENTORY_DATA.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 20px; color: var(--text-muted);">No stock items added yet. Click "+ Add Stock Item" to create one.</td></tr>`;
    return;
  }

  tbody.innerHTML = INVENTORY_DATA.map((item, index) => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.grade}</td>
      <td>${item.qty}</td>
      <td>${item.cost}</td>
      <td><strong style="color: var(--primary-emerald);">${item.sell}</strong></td>
      <td><span style="background: rgba(16, 185, 129, 0.15); color: var(--primary-emerald); padding: 2px 8px; border-radius: 10px; font-size: 11px;">${item.status}</span></td>
      <td>
        <button onclick="deleteStockItem(${index})" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: var(--accent-red); padding: 4px 8px; border-radius: 6px; font-size: 11px; cursor: pointer;">
          Delete
        </button>
      </td>
    </tr>
  `).join('');
}

// ==========================================================================
// FEATURE 1: LIVE GEOLOCATION TRACKING & NEAREST MANDI CALCULATOR
// ==========================================================================
function initGeolocationTracking() {
  const geoBtn = document.getElementById('geo-location-btn');
  const geoText = document.getElementById('geo-location-text');
  const banner = document.getElementById('location-status-banner');
  const bannerText = document.getElementById('location-banner-text');

  geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    geoText.textContent = "Locating...";
    geoBtn.style.opacity = "0.7";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        userCoordinates = { lat, lon };

        let closestMandi = MANDI_COORDINATES[0];
        let minDistance = 999999;

        MANDI_COORDINATES.forEach(m => {
          const d = calculateHaversineDistance(lat, lon, m.lat || 13.5, m.lon || 78.5);
          if (d < minDistance) {
            minDistance = d;
            closestMandi = m;
          }
        });

        geoText.textContent = `📍 ${closestMandi.mandi} (${minDistance.toFixed(0)} km)`;
        geoBtn.style.opacity = "1";

        currentStateFilter = closestMandi.state;
        initStateChips();
        renderRates();

        bannerText.innerHTML = `📍 Nearest APMC Market Detected: <strong>${closestMandi.mandi} Mandi (${closestMandi.state})</strong> · Approx ${minDistance.toFixed(0)} km away. Filtered live rates accordingly.`;
        banner.classList.remove('hidden');
      },
      (error) => {
        console.error("Geo error:", error);
        geoText.textContent = "Locate Nearest Mandi";
        geoBtn.style.opacity = "1";
        alert("Location access denied or unavailable. You can manually select states using the filter pills.");
      }
    );
  });
}

function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// ==========================================================================
// FEATURE 2: IN-APP VOICE SEARCH MIC WIDGET
// ==========================================================================
function initVoiceSearch() {
  const micBtn = document.getElementById('voice-search-btn');
  const searchInput = document.getElementById('rate-search-input');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    micBtn.title = "Voice search not supported on this browser (Use Chrome or Edge)";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-IN';

  micBtn.addEventListener('click', () => {
    try {
      micBtn.classList.add('listening');
      recognition.start();
    } catch (e) {
      recognition.stop();
      micBtn.classList.remove('listening');
    }
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    currentSearchQuery = transcript;
    renderRates();
    micBtn.classList.remove('listening');
  };

  recognition.onerror = () => {
    micBtn.classList.remove('listening');
  };

  recognition.onend = () => {
    micBtn.classList.remove('listening');
  };
}

// ==========================================================================
// CALCULATORS
// ==========================================================================
function initCalculators() {
  document.getElementById('calculate-freight-btn').addEventListener('click', calculateFreight);

  const billInputs = ['bill-comm-input', 'bill-purchase-input', 'bill-wastage-input', 'bill-margin-input', 'bill-customer-input', 'bill-qty-input', 'bill-upi-input'];
  billInputs.forEach(id => {
    document.getElementById(id).addEventListener('input', generateCustomerBill);
  });

  calculateFreight();
  generateCustomerBill();
}

function calculateFreight() {
  const origin = document.getElementById('freight-origin-select').value;
  const dest = document.getElementById('freight-dest-select').value;
  const qtyQtl = parseFloat(document.getElementById('freight-qty-input').value) || 30;
  const vehicle = document.getElementById('freight-vehicle-select').value;
  const costKg = parseFloat(document.getElementById('freight-cost-kg-input').value) || 24;

  let approxKm = 260;
  if (dest.includes("Bengaluru")) approxKm = 130;
  if (dest.includes("Hyderabad")) approxKm = 520;
  if (dest.includes("Vijayawada")) approxKm = 380;
  if (dest.includes("Kochi")) approxKm = 580;

  let baseRatePerKm = 28;
  if (vehicle.includes("Eicher")) baseRatePerKm = 42;
  if (vehicle.includes("6-Wheeler")) baseRatePerKm = 65;

  const totalFreight = (approxKm * baseRatePerKm) + 800;
  const totalKg = qtyQtl * 100;
  const freightPerKg = (totalFreight / totalKg).toFixed(2);
  const landedRateKg = (costKg + parseFloat(freightPerKg)).toFixed(2);

  const resultsBox = document.getElementById('freight-results-box');
  resultsBox.innerHTML = `
    <div style="font-size: 16px; font-weight: bold; color: var(--primary-emerald); margin-bottom: 12px;">
      🚚 Final Landed Rate: ₹${landedRateKg} / kg at ${dest}
    </div>
    
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <span>Origin Mandi Purchase:</span> <strong>₹${costKg.toFixed(2)} / kg</strong>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <span>Approx Logistics Distance:</span> <strong>${approxKm} km</strong>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <span>Total Vehicle Transport Charge:</span> <strong>₹${totalFreight.toLocaleString('en-IN')} (${vehicle})</strong>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: var(--accent-blue);">
      <span>Freight Overhead per Kg:</span> <strong>+₹${freightPerKg} / kg</strong>
    </div>

    <div style="margin-top: 14px; font-size: 12px; color: var(--text-muted);">
      💡 <strong>Wholesale Advice:</strong> Buying in ${qtyQtl} Quintals (3 Tonnes) reduces your transport overhead by ~18% per kg.
    </div>
  `;
}

function generateCustomerBill() {
  const comm = document.getElementById('bill-comm-input').value || "Tomato";
  const costKg = parseFloat(document.getElementById('bill-purchase-input').value) || 24;
  const wastagePct = parseFloat(document.getElementById('bill-wastage-input').value) || 5;
  const marginPct = parseFloat(document.getElementById('bill-margin-input').value) || 20;
  const customer = document.getElementById('bill-customer-input').value || "Customer";
  const qtyKg = parseFloat(document.getElementById('bill-qty-input').value) || 15;
  const upiId = document.getElementById('bill-upi-input').value || "trader@upi";

  const effectiveCostKg = costKg * (1 + wastagePct/100);
  const retailPriceKg = (effectiveCostKg * (1 + marginPct/100)).toFixed(1);
  const totalBillAmount = (retailPriceKg * qtyKg).toFixed(0);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`upi://pay?pa=${upiId}&pn=MandiVyapar&am=${totalBillAmount}&cu=INR`)}`;

  const box = document.getElementById('bill-receipt-box');
  box.innerHTML = `
    <div style="text-align: center; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 12px; margin-bottom: 12px;">
      <h4 style="font-size: 16px; color: #FFF; margin-bottom: 4px;">🧾 CASH MEMO & DIGITAL BILL</h4>
      <div style="font-size: 11px; color: var(--text-muted);">Date: ${new Date().toLocaleDateString('en-IN')} · MandiRates Vyapar</div>
    </div>

    <div style="font-size: 13px; margin-bottom: 10px;">
      👤 <strong>Customer:</strong> ${customer}<br>
      📦 <strong>Item:</strong> ${comm}<br>
      ⚖️ <strong>Quantity:</strong> ${qtyKg} kg @ <strong style="color: var(--primary-emerald);">₹${retailPriceKg}/kg</strong>
    </div>

    <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--primary-emerald); padding: 10px; border-radius: 8px; text-align: center; margin-bottom: 14px;">
      <div style="font-size: 11px; color: var(--text-muted);">TOTAL PAYABLE AMOUNT</div>
      <div style="font-size: 24px; font-weight: bold; color: #FFF;">₹${totalBillAmount}</div>
    </div>

    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; background: #FFF; padding: 12px; border-radius: 12px; color: #000;">
      <img src="${qrUrl}" alt="UPI QR Code" style="width: 130px; height: 130px;">
      <div style="font-size: 11px; font-weight: bold; color: #0F172A;">SCAN TO PAY VIA PHONEPE / GPAY / PAYTM</div>
      <div style="font-size: 10px; color: #475569;">UPI ID: ${upiId}</div>
    </div>
  `;
}

// WEATHER
function renderWeatherAlerts() {
  const container = document.getElementById('weather-grid');
  const weatherData = [
    { hub: "Madanapalle (AP)", crop: "Tomato Belt", temp: "28°C", status: "🌧️ Heavy Rain Alert", risk: "HIGH RISK", riskCls: "badge-wait", impact: "High spoilage in harvest. Tomato prices expected to spike +12% in 48 hours." },
    { hub: "Guntur (AP)", crop: "Red Chili Belt", temp: "34°C", status: "☀️ Clear Skies", risk: "STABLE", riskCls: "badge-buy", impact: "Optimal drying weather. Steady daily supply arriving at Mandi." },
    { hub: "Kolar (KA)", crop: "Vegetable Belt", temp: "26°C", status: "⛅ Moderate Cloud", risk: "FAIR SUPPLY", riskCls: "badge-stable", impact: "Normal harvest output. Grade A tomatoes arriving steadily." },
    { hub: "Dindigul (TN)", crop: "Shallots Hub", temp: "31°C", status: "🌧️ Seasonal Showers", risk: "MODERATE RISK", riskCls: "badge-wait", impact: "Transport delays from small farms. Small onion prices up +5%." },
    { hub: "Bowenpally (TS)", crop: "Hyderabad Hub", temp: "30°C", status: "🌤️ Mild Breeze", risk: "STABLE", riskCls: "badge-buy", impact: "Smooth inter-state truck arrivals from Maharashtra & AP." },
    { hub: "Chalai (KL)", crop: "Coconut & Spice", temp: "29°C", status: "🌧️ Coastal Monsoons", risk: "HIGH RISK", riskCls: "badge-wait", impact: "Coconut drying impacted. Raw spices transport delayed by 24h." }
  ];

  container.innerHTML = weatherData.map(item => `
    <div class="rate-card">
      <div class="card-top">
        <div>
          <div class="comm-title">📍 ${item.hub}</div>
          <div class="mandi-sub">${item.crop} · Temp: ${item.temp}</div>
        </div>
        <span class="signal-badge ${item.riskCls}">${item.risk}</span>
      </div>

      <div style="font-size: 14px; font-weight: bold; color: var(--accent-blue); margin: 8px 0;">
        ${item.status}
      </div>

      <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5; background: rgba(15,23,42,0.6); padding: 10px; border-radius: 8px;">
        💡 <strong>Supply Impact:</strong> ${item.impact}
      </div>
    </div>
  `).join('');
}

// Ticker Pause Engine
function initTickerHoverEvents() {
  const wrapper = document.querySelector('.ticker-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      isTickerPaused = true;
      const content = document.getElementById('ticker-content');
      if (content) content.style.animationPlayState = 'paused';
    });
    wrapper.addEventListener('mouseleave', () => {
      isTickerPaused = false;
      const content = document.getElementById('ticker-content');
      if (content) content.style.animationPlayState = 'running';
    });
  }
}

// Live Price Simulator
function startLivePriceSimulator() {
  liveUpdateTimer = setInterval(() => {
    Object.values(MANDI_DIRECTORY).forEach(list => {
      list.forEach(item => {
        if (Math.random() > 0.5) {
          const delta = (Math.random() - 0.5) * 1.5;
          item.kg = Math.max(5, parseFloat((item.kg + delta).toFixed(1)));
          item.change = parseFloat((item.change + delta * 0.8).toFixed(1));
          
          const priceElem = document.getElementById(`price-kg-${item.id}`);
          if (priceElem) {
            priceElem.style.color = delta > 0 ? '#EF4444' : '#22C55E';
            setTimeout(() => {
              priceElem.style.color = 'var(--primary-emerald)';
            }, 800);
          }
        }
      });
    });

    savePersistentData();
    initTicker();
    renderRates();
    renderTrends();
  }, 4000);
}

// PWA Installer
function initPWAPrompt() {
  const installBtn = document.getElementById('pwa-install-btn');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    installBtn.classList.remove('hidden');
  });

  installBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        installBtn.classList.add('hidden');
      }
      deferredInstallPrompt = null;
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch((err) => console.log('SW Reg error:', err));
  }
}

// Navigation Handler
function initNavigation() {
  const allTabBtns = document.querySelectorAll('.nav-tab, .mobile-tab');
  allTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      currentTab = targetTab;

      document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === targetTab));
      document.querySelectorAll('.mobile-tab').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === targetTab));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === `tab-${targetTab}`));
    });
  });
}

// State Chips
function initStateChips() {
  const container = document.getElementById('state-chips');
  const states = ["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Telangana", "Kerala", "All-India", "All States"];
  
  container.innerHTML = states.map(st => `
    <button class="chip-btn ${st === currentStateFilter ? 'active' : ''}" data-state="${st}">
      ${st}
    </button>
  `).join('');

  container.querySelectorAll('.chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentStateFilter = btn.getAttribute('data-state');
      container.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRates();
    });
  });
}

// Ticker
function initTicker() {
  const tickerBox = document.getElementById('ticker-content');
  if (!tickerBox) return;

  let allItems = [];
  Object.values(MANDI_DIRECTORY).forEach(list => allItems = allItems.concat(list));

  const displayItems = allItems.concat(allItems);
  tickerBox.innerHTML = displayItems.map(item => {
    const isUp = item.change > 0;
    const arrow = isUp ? '▲' : '▼';
    const cls = isUp ? 'ticker-up' : 'ticker-down';
    return `
      <div class="ticker-item">
        <strong>${item.mandi}</strong>: ${item.comm} ₹${item.kg}/kg 
        <span class="${cls}">${arrow} ${Math.abs(item.change)}%</span>
      </div>
    `;
  }).join('');

  if (isTickerPaused) {
    tickerBox.style.animationPlayState = 'paused';
  }
}

// Signal
function getSignal(change) {
  if (change <= -3.5) return { text: "BUY NOW", emoji: "🟢", class: "badge-buy", desc: "Fair Wholesale Price" };
  if (change >= 3.5) return { text: "WAIT", emoji: "🔴", class: "badge-wait", desc: "Price Spike Expected" };
  return { text: "STABLE", emoji: "🟡", class: "badge-stable", desc: "Normal Market Rate" };
}

// Render Rates
function renderRates() {
  const grid = document.getElementById('rates-grid');
  let list = [];

  Object.entries(MANDI_DIRECTORY).forEach(([state, items]) => {
    if (currentStateFilter !== "All States" && state !== currentStateFilter) return;
    items.forEach(item => {
      const matchSearch = !currentSearchQuery || 
        item.comm.toLowerCase().includes(currentSearchQuery.toLowerCase()) || 
        item.mandi.toLowerCase().includes(currentSearchQuery.toLowerCase());
      
      const sig = getSignal(item.change);
      const matchSig = currentSignalFilter === 'ALL' || sig.text === currentSignalFilter;

      if (matchSearch && matchSig) {
        list.push({ ...item, state, signal: sig });
      }
    });
  });

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No Mandi rates found matching criteria.</div>`;
    return;
  }

  grid.innerHTML = list.map(item => {
    const isUp = item.change > 0;
    const pctCls = isUp ? 'pct-up' : 'pct-down';
    const sign = isUp ? '+' : '';

    return `
      <div class="rate-card">
        <div>
          <div class="card-top">
            <div>
              <div class="comm-title">${item.comm}</div>
              <div class="mandi-sub">📍 ${item.mandi} Mandi · ${item.state}</div>
            </div>
            <span class="signal-badge ${item.signal.class}">
              ${item.signal.emoji} ${item.signal.text}
            </span>
          </div>

          <div class="card-price-main">
            <div class="price-kg" id="price-kg-${item.id}">₹${item.kg} <span style="font-size: 14px; font-weight: normal; color: var(--text-muted);">/ kg</span></div>
            <div class="price-qnt">₹${(item.kg * 100).toFixed(0)} / Quintal (100 kg)</div>
          </div>
        </div>

        <div class="card-footer">
          <div>
            <div style="font-size: 11px; color: var(--text-muted);">24h Live Change:</div>
            <div class="pct-pill ${pctCls}">${sign}${item.change}%</div>
          </div>
          <button class="btn-detail" onclick="openTrendModal('${item.mandi}', '${item.comm}', ${item.kg}, ${item.change})">
            3-Day Radar
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Search and Filters
function initSearchAndFilters() {
  const searchInput = document.getElementById('rate-search-input');
  const signalSelect = document.getElementById('signal-filter-select');

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderRates();
  });

  signalSelect.addEventListener('change', (e) => {
    currentSignalFilter = e.target.value;
    renderRates();
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLanguage = btn.getAttribute('data-lang');
      renderWhatsAppPreview();
    });
  });

  document.getElementById('trader-name-input').addEventListener('input', renderWhatsAppPreview);
  document.getElementById('trader-contact-input').addEventListener('input', renderWhatsAppPreview);

  document.getElementById('launch-whatsapp-btn').addEventListener('click', () => {
    const text = document.getElementById('whatsapp-preview-box').textContent;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });

  document.getElementById('modal-close-btn').addEventListener('click', () => {
    document.getElementById('trend-modal').classList.add('hidden');
  });
}

// Modal
window.openTrendModal = function(mandi, comm, currentKg, change) {
  const modal = document.getElementById('trend-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  const yesterdayKg = (currentKg * (1 - change/100)).toFixed(1);
  const dayBeforeKg = (yesterdayKg * 0.98).toFixed(1);
  const est1d = (currentKg * (1 + (change * 0.5)/100)).toFixed(1);
  const est3d = (currentKg * (1 + change/100)).toFixed(1);
  const sig = getSignal(change);

  title.innerHTML = `📊 ${comm} — ${mandi} Mandi`;
  body.innerHTML = `
    <div style="margin-bottom: 16px;">
      <div style="font-size: 13px; color: var(--text-muted);">Current Market Signal:</div>
      <div style="font-size: 18px; font-weight: bold; color: var(--primary-emerald); margin-top: 4px;">
        ${sig.emoji} ${sig.text} — ${sig.desc}
      </div>
    </div>

    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px; margin-bottom: 16px;">
      <div style="font-weight: bold; margin-bottom: 10px; font-size: 13px; color: var(--text-muted);">LIVE TIMELINE & FORECAST (PER KG)</div>
      
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px;">
        <span>2 Days Ago:</span> <strong>₹${dayBeforeKg}/kg</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px;">
        <span>Yesterday:</span> <strong>₹${yesterdayKg}/kg</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; color: var(--primary-emerald);">
        <span>Today (Live):</span> <strong>₹${currentKg}/kg</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; color: #38BDF8;">
        <span>Tomorrow (+1d Est):</span> <strong>₹${est1d}/kg</strong>
      </div>
      <div style="display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; color: #A78BFA;">
        <span>Upcoming (+3d Est):</span> <strong>₹${est3d}/kg</strong>
      </div>
    </div>

    <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
      💡 <strong>Procurement Advice:</strong> ${sig.text === 'BUY NOW' ? 'Prices are currently low. Ideal time for wholesale buyers to stock up.' : (sig.text === 'WAIT' ? 'High market fluctuation expected. Purchase only essential daily quantities.' : 'Prices are stable. Buy per normal schedule.')}
    </div>
  `;

  modal.classList.remove('hidden');
};

// Render Trends
function renderTrends() {
  const container = document.getElementById('trends-grid');
  let items = [];
  Object.values(MANDI_DIRECTORY).forEach(list => items = items.concat(list));

  container.innerHTML = items.slice(0, 6).map(item => {
    const sig = getSignal(item.change);
    return `
      <div class="rate-card" style="margin-bottom: 12px;">
        <div class="card-top">
          <div>
            <div class="comm-title">${item.comm}</div>
            <div class="mandi-sub">📍 ${item.mandi} Mandi</div>
          </div>
          <span class="signal-badge ${sig.class}">${sig.emoji} ${sig.text}</span>
        </div>
        <div style="font-size: 13px; color: var(--text-muted); margin: 8px 0;">
          Today's Live Rate: <strong style="color: #FFF;">₹${item.kg}/kg</strong> (₹${(item.kg * 100).toFixed(0)}/qnt)
        </div>
        <button class="btn-detail" style="width: 100%; text-align: center;" onclick="openTrendModal('${item.mandi}', '${item.comm}', ${item.kg}, ${item.change})">
          View Detailed 3-Day Forecast
        </button>
      </div>
    `;
  }).join('');
}

// Render WhatsApp Preview
function renderWhatsAppPreview() {
  const previewBox = document.getElementById('whatsapp-preview-box');
  const traderName = document.getElementById('trader-name-input').value || "Sri Lakshmi Traders";
  const traderContact = document.getElementById('trader-contact-input').value || "Madanapalle APMC";
  const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const apItems = MANDI_DIRECTORY["Andhra Pradesh"];
  const tomato = apItems.find(i => i.comm.includes("Tomato")) || { kg: 24 };
  const chili = apItems.find(i => i.comm.includes("Chili")) || { kg: 185 };

  let header = "";
  if (currentLanguage === "Telugu") {
    header = `🛒 *రోజువారీ తాజా కూరగాయల మార్కెట్ ధరలు* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *తేదీ:* ${todayStr}\n----------------------------------\n`;
  } else if (currentLanguage === "Tamil") {
    header = `🛒 *தினம் காய்கறி சந்தை மொத்த விலைகள்* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *தேதி:* ${todayStr}\n----------------------------------\n`;
  } else if (currentLanguage === "Kannada") {
    header = `🛒 *ದೈನಂದಿನ ತರಕಾರಿ ಮಾರುಕಟ್ಟೆ ದರಗಳು* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *ದಿನಾಂಕ:* ${todayStr}\n----------------------------------\n`;
  } else if (currentLanguage === "Malayalam") {
    header = `🛒 *ദിനവുമുള്ള പച്ചക്കറി വിപണി നിരക്കുകൾ* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *തീയതി:* ${todayStr}\n----------------------------------\n`;
  } else if (currentLanguage === "Hindi") {
    header = `🛒 *दैनिक थोक मंडी भाव दरें* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *दिनांक:* ${todayStr}\n----------------------------------\n`;
  } else {
    header = `🛒 *DAILY APMC WHOLESALE MARKET RATES* 🛒\n🏪 *${traderName}*\n📍 *${traderContact}*\n📅 *Date:* ${todayStr}\n----------------------------------\n`;
  }

  let body = `🔹 *Tomato (Tomato)*: *₹${tomato.kg}/kg* (Madanapalle Grade A)\n`;
  body += `🔹 *Small Onion (Shallots)*: *₹48/kg* (Dindigul Special)\n`;
  body += `🔹 *Red Chili*: *₹${chili.kg}/kg* (Guntur Teja)\n`;
  body += `🔹 *Garlic (Desi)*: *₹110/kg* (Kodaikanal)\n`;

  const footer = `----------------------------------\n⚡ *Best Wholesale Rates Guaranteed!*\n📞 *Call / WhatsApp Order Now!*`;

  previewBox.textContent = header + body + footer;
}
