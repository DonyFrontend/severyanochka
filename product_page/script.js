import { products } from "../products.js";

const product = products[4];

const title = document.getElementById("product-title");
const breadcrumbProduct = document.getElementById("breadcrumbProduct");
const article = document.getElementById("product-article");
const rating = document.getElementById("product-rating");
const favoriteButton = document.getElementById("main-favorite-btn");
const mainImage = document.getElementById("main-img");
const thumbs = document.getElementById("thumbs");
const badge = document.getElementById("badge-discount");
const oldPrice = document.getElementById("old-price");
const currentPrice = document.getElementById("current-price");
const priceNote = document.getElementById("price-note");
const addToCartButton = document.getElementById("add-to-cart-btn");
const brand = document.getElementById("product-brand");
const country = document.getElementById("product-country");
const packing = document.getElementById("product-packing");
const similarList = document.getElementById("similar-list");
const crossSellList = document.getElementById("cross-sell-list");
const saleList = document.getElementById("sale-list");
const favCount = document.getElementById("favCount");
const cartCount = document.getElementById("cartCount");

function formatPrice(price) {
  return `${price.toFixed(2).replace(".", ",")} ₽`;
}

function makeStars(ratingNumber) {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    const className = i <= ratingNumber ? "is-filled" : "";
    stars += `<svg class="${className}" viewBox="0 0 20 20" width="14" height="14"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"/></svg>`;
  }

  return stars;
}

function countFavorites() {
  let count = 0;

  products.forEach((item) => {
    if (item.isFavorite) {
      count += 1;
    }
  });

  return count;
}

function countBasketProducts() {
  let count = 0;

  products.forEach((item) => {
    count += item.basketCount;
  });

  return count;
}

function makeProductCard(item) {
  return `
    <article class="product-card">
      ${item.badge ? `<span class="discount">${item.badge}</span>` : ""}
      <button class="favorite" type="button">${item.isFavorite ? "♥" : "♡"}</button>
      <a class="product-image" href="./index.html">
        ${item.image}
      </a>
      <div class="price">
        <div class="new-price">
          ${formatPrice(item.price)}
          <p>${item.note}</p>
        </div>
        ${item.oldPrice ? `<div class="card-old-price">${formatPrice(item.oldPrice)}<p>Обычная</p></div>` : ""}
      </div>
      <a class="card-title" href="./index.html">${item.name}</a>
      <div class="rating">${makeStars(item.rating)}</div>
      <button class="cart-btn ${item.basketCount > 0 ? "is-active" : ""}" type="button">
        ${item.basketCount > 0 ? "В корзине" : "В корзину"}
      </button>
    </article>
  `;
}

function getProductsByIds(ids) {
  const result = [];

  products.forEach((item) => {
    if (ids.includes(item.id)) {
      result.push(item);
    }
  });

  return result;
}

function renderSmallList(container, list) {
  container.innerHTML = "";

  list.forEach((item) => {
    container.innerHTML += makeProductCard(item);
  });
}

function renderSimilarProducts() {
  const similarProducts = getProductsByIds(product.similarIds);

  similarList.innerHTML = "";

  similarProducts.forEach((item) => {
    similarList.innerHTML += `
      <a class="similar-item" href="./index.html">
        <span class="similar-image">${item.image}</span>
        <span class="similar-price">${formatPrice(item.price)}</span>
      </a>
    `;
  });
}

function renderProductPage() {
  document.title = `Северяночка — ${product.name}`;
  title.textContent = product.name;
  breadcrumbProduct.textContent = product.name;
  article.textContent = `арт. ${product.article}`;
  rating.innerHTML = `${makeStars(product.rating)} <span>${product.reviews} отзывов</span>`;
  mainImage.innerHTML = product.image;
  thumbs.innerHTML = `<button class="thumb-img active" type="button">${product.image}</button>`;
  badge.textContent = product.badge || "";
  badge.hidden = !product.badge;
  oldPrice.textContent = product.oldPrice ? formatPrice(product.oldPrice) : "";
  currentPrice.textContent = formatPrice(product.price);
  priceNote.textContent = product.note;
  brand.textContent = product.brand;
  country.textContent = product.country;
  packing.textContent = product.packing;
  favoriteButton.textContent = product.isFavorite ? "В избранном" : "В избранное";
  addToCartButton.textContent = product.basketCount > 0 ? "В корзине" : "В корзину";
  addToCartButton.classList.toggle("is-active", product.basketCount > 0);
  favCount.textContent = countFavorites();
  cartCount.textContent = countBasketProducts();

  renderSimilarProducts();
  renderSmallList(crossSellList, getProductsByIds(product.relatedIds));
  renderSmallList(saleList, products.filter((item) => item.badge));
}

renderProductPage();
