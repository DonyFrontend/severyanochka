import { products } from "./products.js";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const favCount = document.getElementById("favCount");
const cartCount = document.getElementById("cartCount");

function formatPrice(price) {
  return `${price.toFixed(2).replace(".", ",")} ₽`;
}

function makeStars(rating) {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    const className = i <= rating ? "is-filled" : "";
    stars += `<svg class="${className}" viewBox="0 0 20 20" width="14" height="14"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"/></svg>`;
  }

  return stars;
}

function countBasketProducts() {
  let count = 0;

  products.forEach((product) => {
    count += product.basketCount;
  });

  return count;
}

function makeProductCard(product) {
  return `
    <article class="card">
      ${product.badge ? `<span class="card__badge">${product.badge}</span>` : ""}
      <button class="card__fav is-active" type="button" aria-label="Избранное">
        <svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21s-7.5-4.6-10-9.3C.5 8 2 4 6 4c2.2 0 3.9 1.2 6 3.3C14.1 5.2 15.8 4 18 4c4 0 5.5 4 4 7.7C19.5 16.4 12 21 12 21z" fill="none" stroke="#c8c2b0" stroke-width="1.7"/></svg>
      </button>
      <a class="card__image" href="./product_page/index.html">${product.image}</a>
      <div class="card__price-row">
        <span class="card__price">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="card__price-old">${formatPrice(product.oldPrice)}</span>` : ""}
      </div>
      <span class="card__price-note">${product.note}</span>
      <a class="card__name" href="./product_page/index.html">${product.name}</a>
      <div class="stars">${makeStars(product.rating)}</div>
      <button class="card__btn ${product.basketCount > 0 ? "is-in-cart" : ""}" type="button">
        ${product.basketCount > 0 ? "В корзине" : "В корзину"}
      </button>
    </article>
  `;
}

function renderProducts() {
  const searchText = searchInput.value.trim().toLowerCase();
  const favoriteProducts = products.filter((product) => {
    return product.isFavorite && product.name.toLowerCase().includes(searchText);
  });

  productGrid.innerHTML = "";

  favoriteProducts.forEach((product) => {
    productGrid.innerHTML += makeProductCard(product);
  });

  favCount.textContent = favoriteProducts.length;
  cartCount.textContent = countBasketProducts();
}

searchInput.addEventListener("input", renderProducts);

renderProducts();
