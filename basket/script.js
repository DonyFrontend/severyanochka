import { products } from "../products.js";

const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const orderCount = document.getElementById("order-count");
const orderSum = document.getElementById("order-sum");
const orderSale = document.getElementById("order-sale");
const orderTotal = document.getElementById("order-total");

function formatPrice(price) {
  return `${price.toFixed(2).replace(".", ",")} ₽`;
}

function getProductWord(count) {
  if (count === 1) {
    return "товар";
  }

  if (count >= 2 && count <= 4) {
    return "товара";
  }

  return "товаров";
}

function makeCartProduct(product) {
  return `
    <article class="product">
      <label class="product-check">
        <input type="checkbox">
      </label>
      <div class="product__image">${product.image}</div>
      <div class="info">
        <h3>${product.name}</h3>
        <p>${product.weight}</p>
      </div>
      <div class="count">
        <button type="button">-</button>
        <span>${product.basketCount}</span>
        <button type="button">+</button>
      </div>
      <div class="price">
        <h2>${formatPrice(product.price * product.basketCount)}</h2>
        ${product.oldPrice ? `<del>${formatPrice(product.oldPrice * product.basketCount)}</del>` : ""}
      </div>
      <button class="remove-product" type="button">Удалить</button>
    </article>
  `;
}

function renderCart() {
  const cartProducts = products.filter((product) => {
    return product.basketCount > 0;
  });

  let count = 0;
  let sum = 0;
  let oldSum = 0;

  cartList.innerHTML = "";

  cartProducts.forEach((product) => {
    count += product.basketCount;
    sum += product.price * product.basketCount;
    oldSum += (product.oldPrice || product.price) * product.basketCount;
    cartList.innerHTML += makeCartProduct(product);
  });

  cartCount.textContent = count;
  orderCount.textContent = `${count} ${getProductWord(count)}`;
  orderSum.textContent = formatPrice(oldSum);
  orderSale.textContent = `-${formatPrice(oldSum - sum)}`;
  orderTotal.textContent = formatPrice(sum);
}

renderCart();
