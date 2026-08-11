const products = [
    {
        name: "Майонез ПРОВАНСАЛЬ",
        weight: "820 г",
        price: "89 ₽",
        oldPrice: "99 ₽",
        count: 2,
        image: "image.png",
        stock: true
    },
    {
        name: "Молоко Простоквашино",
        weight: "930 мл",
        price: "79 ₽",
        oldPrice: "95 ₽",
        count: 1,
        image: "image.png",
        stock: true
    },
    {
        name: "Колбаса Докторская",
        weight: "500 г",
        price: "239 ₽",
        oldPrice: "259 ₽",
        count: 1,
        image: "image.png",
        stock: true
    },
    {
        name: "Колбаса ЭКО 220 г «ДЕСНА-ПОЛЕСЬЕ 65%»",
        weight: "800 г",
        price: "",
        oldPrice: "",
        count: 0,
        image: "image.png",
        stock: false
    }
];

const cartList = document.getElementById("cart-list");

products.forEach(product => {

    const card = document.createElement("div");

    card.className = product.stock ? "product" : "product out-stock";

    card.innerHTML = `
        <img src="${product.image}" alt="">

        <div class="info">
            <h3>${product.name}</h3>
            <p>${product.weight}</p>
        </div>

        ${
            product.stock
            ?
            `
            <div class="count">
                <button>-</button>
                <span>${product.count}</span>
                <button>+</button>
            </div>

            <div class="price">
                <h2>${product.price}</h2>
                <del>${product.oldPrice}</del>
            </div>
            `
            :
            `<div class="status">Нет в наличии</div>`
        }
    `;

    cartList.appendChild(card);

});
