const products = [
    {
        name: "Комбайн КЗС-1218 ДЕСНА-ПОЛЕСЬЕ GS12",
        weight: "820 г",
        price: 89,
        oldPrice: 99,
        count: 0,
        image: "./images/image.png",
        stock: true
    },

    {
        name: "Комбайн КЗС-1218 ДЕСНА-ПОЛЕСЬЕ GS12",
        weight: "930 мл",
        price: 80.10,
        oldPrice: 95,
        count: 0,
        image: "./images/image.png",
        stock: true
    },

    {
        name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12",
        weight: "500 г",
        price: 89,
        oldPrice: 259,
        count: 0,
        image: "./images/image.png",
        stock: true
    },

    {
        name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12",
        weight: "800 г",
        price: 0,
        oldPrice: 0,
        count: 0,
        image: "./images/image.png",
        stock: false
    }
];



const savedCart = localStorage.getItem("cart");

if (savedCart) {
    const savedProducts = JSON.parse(savedCart);

    products.forEach((product, index) => {
        if (savedProducts[index]) {
            product.count = savedProducts[index].count;
        }
    });
}




function saveCart() {
    localStorage.setItem("cart", JSON.stringify(products));
}




const cartList = document.querySelector(".cart-left");


products.forEach((product, index) => {

    const card = document.createElement("div");

    if (product.stock) {
        card.className = "product";
    } else {
        card.className = "product out-stock";
    }

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

                <button class="minus">−</button>

                <span class="number">${product.count}</span>

                <button class="plus">+</button>

            </div>

            <div class="price">

                <h2>${product.price.toFixed(2)} ₽</h2>

                <del>${product.oldPrice} ₽</del>

            </div>
            `
            :
            `
            <div class="status">
                Нет в наличии
            </div>
            `
        }
    `;

    cartList.appendChild(card);


    if (product.stock) {

        const plusButton = card.querySelector(".plus");
        const minusButton = card.querySelector(".minus");
        const number = card.querySelector(".number");


        plusButton.addEventListener("click", function () {

            product.count++;

            number.textContent = product.count;

            saveCart();

        });


        // МИНУС
        minusButton.addEventListener("click", function () {

            if (product.count > 0) {

                product.count--;

                number.textContent = product.count;

                saveCart();

            }

        });

    }

});



function updateTotalCount() {

    let totalCount = 0;

    products.forEach(product => {

        if (product.stock) {
            totalCount += product.count;
        }

    });

    const cartNumber = document.querySelector("h1 span");

    if (cartNumber) {
        cartNumber.textContent = totalCount;
    }
}
updateTotalCount();



document.addEventListener("click", function () {

    updateTotalCount();

});