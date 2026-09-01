import { products } from "../products.js";

const section = document.getElementById("products");

section.innerHTML = products
  .map(
    (item) =>
      `<article key="${item.id}">
    <p>${item.name}</p>
    ${item.image}
  </article>`,
  )
  .join("");
