// ---------- Product data ----------
// Simple SVG "art" stand-ins for each product photo (no external images needed)
const IMAGES = {
  combine: `<svg viewBox="0 0 120 110"><rect x="10" y="18" width="100" height="70" rx="4" fill="#e7f2df" stroke="#4e7a3a" stroke-width="2"/><rect x="10" y="18" width="100" height="18" fill="#4e7a3a"/><text x="60" y="31" font-size="10" fill="#fff" text-anchor="middle" font-weight="700" font-family="Arial">DOBBIU</text><circle cx="35" cy="60" r="16" fill="#fff" stroke="#c7d9b8" stroke-width="2"/><rect x="55" y="48" width="45" height="30" rx="3" fill="#fff" stroke="#c7d9b8" stroke-width="2"/><text x="35" y="65" font-size="9" text-anchor="middle" fill="#4e7a3a">КЗС</text></svg>`,
  milk: `<svg viewBox="0 0 90 120"><path d="M25 8h40l6 14v88a4 4 0 01-4 4H23a4 4 0 01-4-4V22z" fill="#fff" stroke="#2b6cb0" stroke-width="2"/><path d="M25 8h40l-8-8H33z" fill="#2b6cb0"/><rect x="19" y="30" width="52" height="34" fill="#2b6cb0"/><rect x="19" y="30" width="52" height="6" fill="#fff" opacity=".5"/><rect x="19" y="46" width="52" height="6" fill="#fff" opacity=".5"/><text x="45" y="50" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" font-family="Arial">ПРОСТО-</text><text x="45" y="60" font-size="8.5" fill="#fff" text-anchor="middle" font-weight="700" font-family="Arial">КВАШИНО</text><text x="45" y="86" font-size="7.5" fill="#2b6cb0" text-anchor="middle" font-family="Arial">молоко</text></svg>`,
  condensed: `<svg viewBox="0 0 100 110"><rect x="20" y="16" width="60" height="82" rx="6" fill="#f4ead2" stroke="#8a5a2b" stroke-width="2"/><rect x="20" y="16" width="60" height="82" rx="6" fill="none"/><ellipse cx="50" cy="16" rx="30" ry="7" fill="#c9c9c9" stroke="#8a8a8a" stroke-width="1.5"/><rect x="26" y="38" width="48" height="34" rx="3" fill="#8a5a2b"/><text x="50" y="52" font-size="9.5" fill="#f4ead2" text-anchor="middle" font-weight="700" font-family="Arial">ЕГОРКА</text><text x="50" y="64" font-size="7" fill="#f4ead2" text-anchor="middle" font-family="Arial">сгущенное</text><text x="50" y="90" font-size="7" fill="#8a5a2b" text-anchor="middle" font-family="Arial">РОГАЧЕВ</text></svg>`,
  butter: `<svg viewBox="0 0 110 100"><rect x="10" y="24" width="90" height="58" rx="4" fill="#2b6cb0" stroke="#1c4b7d" stroke-width="2"/><rect x="10" y="24" width="90" height="14" fill="#fff"/><text x="55" y="34" font-size="8.5" text-anchor="middle" fill="#2b6cb0" font-weight="700" font-family="Arial">МАСЛО</text><circle cx="30" cy="60" r="14" fill="#fff" opacity=".9"/><text x="30" y="64" font-size="7" text-anchor="middle" fill="#2b6cb0" font-family="Arial">73%</text><text x="70" y="66" font-size="9" text-anchor="middle" fill="#fff" font-weight="700" font-family="Arial">сливочное</text></svg>`,
  yogurt: `<svg viewBox="0 0 130 100"><g><rect x="6" y="30" width="26" height="42" rx="3" fill="#fff" stroke="#2b6cb0" stroke-width="1.6"/><rect x="6" y="30" width="26" height="14" fill="#2b6cb0"/></g><g><rect x="36" y="26" width="26" height="46" rx="3" fill="#fff" stroke="#e2662b" stroke-width="1.6"/><rect x="36" y="26" width="26" height="14" fill="#e2662b"/></g><g><rect x="66" y="30" width="26" height="42" rx="3" fill="#fff" stroke="#4CAF50" stroke-width="1.6"/><rect x="66" y="30" width="26" height="14" fill="#4CAF50"/></g><g><rect x="96" y="26" width="26" height="46" rx="3" fill="#fff" stroke="#c9302c" stroke-width="1.6"/><rect x="96" y="26" width="26" height="14" fill="#c9302c"/></g><text x="65" y="90" font-size="9" text-anchor="middle" fill="#2b6cb0" font-weight="700" font-family="Arial">fruttis</text></svg>`,
};

const PRODUCTS = [
  {
    id: 1,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 139.99,
    oldPrice: null,
    badge: null,
    note: null,
    rating: 2,
    image: IMAGES.combine,
  },
  {
    id: 2,
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: 69.99,
    oldPrice: 140.5,
    badge: "-50%",
    note: "С картой",
    rating: 3,
    image: IMAGES.milk,
    inCart: true,
  },
  {
    id: 3,
    name: "Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...",
    price: 77.99,
    oldPrice: 168.5,
    badge: "-50%",
    note: "С картой",
    rating: 4,
    image: IMAGES.condensed,
  },
  {
    id: 4,
    name: "Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...",
    price: 77.99,
    oldPrice: 168.5,
    badge: "-50%",
    note: "Обычная",
    rating: 4,
    image: IMAGES.condensed,
  },
  {
    id: 5,
    name: "Масло сливочное Крестьянское 73%",
    price: 192.99,
    oldPrice: null,
    badge: null,
    note: null,
    rating: 3,
    image: IMAGES.butter,
  },
  {
    id: 6,
    name: "Йогурт Фруттис клубника-банан 4х115г",
    price: 29.99,
    oldPrice: null,
    badge: null,
    note: null,
    rating: 3,
    image: IMAGES.yogurt,
  },
  {
    id: 7,
    name: "Йогурт Фруттис малина-черника 4х115г",
    price: 29.99,
    oldPrice: null,
    badge: null,
    note: null,
    rating: 2,
    image: IMAGES.yogurt,
  },
  {
    id: 8,
    name: "Йогурт Фруттис персик-маракуйя 4х115г",
    price: 29.99,
    oldPrice: null,
    badge: null,
    note: null,
    rating: 3,
    image: IMAGES.yogurt,
  },
];

let favorites = PRODUCTS.map((p) => p.id);
let cart = PRODUCTS.filter((p) => p.inCart).map((p) => p.id);

const grid = document.getElementById("productGrid");
const favCountEl = document.getElementById("favCount");
const cartCountEl = document.getElementById("cartCount");
const toastEl = document.getElementById("toast");

function starsMarkup(rating) {
  let out = "";
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(rating);
    out += `<svg class="${filled ? "is-filled" : ""}" viewBox="0 0 20 20" width="14" height="14"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"/></svg>`;
  }
  return out;
}

function money(n) {
  return n.toFixed(2).replace(".", ",") + " \u20BD";
}

function renderGrid() {
  grid.innerHTML = "";
  PRODUCTS.forEach((p) => {
    if (!favorites.includes(p.id)) return; // this page only shows favorites
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = p.id;

    card.innerHTML = `
      ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
      <button class="card__fav is-active" data-action="fav" aria-label="Убрать из избранного">
        <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4 6 4c2.2 0 3.9 1.2 6 3.3C14.1 5.2 15.8 4 18 4c4 0 5.5 4 4 7.7C19.5 16.4 12 21 12 21z" fill="none" stroke="#c8c2b0" stroke-width="1.7"/></svg>
      </button>
      <div class="card__image">${p.image}</div>
      <div class="card__price-row">
        <span class="card__price">${money(p.price)}</span>
        ${p.oldPrice ? `<span class="card__price-old">${money(p.oldPrice)}</span>` : ""}
      </div>
      ${p.note ? `<span class="card__price-note">${p.note}</span>` : '<span class="card__price-note">&nbsp;</span>'}
      <p class="card__name">${p.name}</p>
      <div class="stars">${starsMarkup(p.rating)}</div>
      <button class="card__btn ${cart.includes(p.id) ? "is-in-cart" : ""}" data-action="cart">
        ${cart.includes(p.id) ? "В корзине" : "В корзину"}
      </button>
    `;
    grid.appendChild(card);
  });

  favCountEl.textContent = favorites.length;
  cartCountEl.textContent = cart.length;
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("is-visible");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toastEl.classList.remove("is-visible"), 1800);
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const card = e.target.closest(".card");
  const id = Number(card.dataset.id);
  const product = PRODUCTS.find((p) => p.id === id);

  if (btn.dataset.action === "fav") {
    favorites = favorites.filter((fid) => fid !== id);
    card.classList.add("is-removing");
    showToast("Убрано из избранного");
    setTimeout(renderGrid, 200);
    favCountEl.textContent = favorites.length;
  }

  if (btn.dataset.action === "cart") {
    if (cart.includes(id)) {
      cart = cart.filter((cid) => cid !== id);
      btn.classList.remove("is-in-cart");
      btn.textContent = "В корзину";
      showToast("Убрано из корзины");
    } else {
      cart.push(id);
      btn.classList.add("is-in-cart");
      btn.textContent = "В корзине";
      showToast(`«${product.name.split(",")[0]}» добавлен в корзину`);
    }
    cartCountEl.textContent = cart.length;
  }
});

// ---------- Filters ----------
document
  .getElementById("priceChip")
  .querySelector('[data-remove="price"]')
  .addEventListener("click", () => {
    document.getElementById("priceChip").remove();
  });
document.getElementById("clearFilters").addEventListener("click", () => {
  const chip = document.getElementById("priceChip");
  if (chip) chip.remove();
  document.getElementById("searchInput").value = "";
  renderGrid();
});

// ---------- Search ----------
document.getElementById("searchInput").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll(".card").forEach((card) => {
    const id = Number(card.dataset.id);
    const product = PRODUCTS.find((p) => p.id === id);
    const match = product.name.toLowerCase().includes(q);
    card.style.display = match ? "" : "none";
  });
});

// ---------- Pagination (demo only, single page of real data) ----------
document.getElementById("pagination").addEventListener("click", (e) => {
  const btn = e.target.closest(".page-btn");
  if (!btn) return;
  if (!btn.classList.contains("page-btn--num")) return;
  document
    .querySelectorAll(".page-btn--num")
    .forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  grid.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderGrid();
