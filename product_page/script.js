const mainImgUrl = "https://s.myspar.ru/upload/img/13/1306/130671.jpg?1617790983";
        const thumbImgUrl = "https://s.myspar.ru/upload/img/13/1306/130671.jpg?1617790983";

        const mainImg = document.getElementById("main-img");
        const thumbsContainer = document.getElementById("thumbs");
        
        mainImg.src = mainImgUrl;

    
        for (let i = 0; i < 5; i++) {const img = document.createElement("img");
            img.src = (i === 0) ? mainImgUrl : thumbImgUrl;
            img.className = "thumb-img" + (i === 0 ? " active" : "");
            img.onclick = () => {
                document.querySelectorAll(".thumb-img").forEach(el => el.classList.remove("active"));
                img.classList.add("active");
                mainImg.src = img.src;
            };
            thumbsContainer.appendChild(img);
        }
        const similarProducts = [
            { price: "157,50 ₽", img: "https://lavkakonditera.ru/upload/iblock/c76/pf2n9gftfjub56smydt0wxhublfe5oc2/maslo-slivochnoe-ekomilk-82-5-450gr.jpg" },
            { price: "331,50 ₽", img: "https://ir.ozone.ru/s3/multimedia-o/c1000/6008897748.jpg" },
            { price: "154,50 ₽", img: "https://bahetle-sib.ru/storage/goods/123979_Y3Qmr.jpg" },
            { price: "157,50 ₽", img: "https://lavkakonditera.ru/upload/iblock/c76/pf2n9gftfjub56smydt0wxhublfe5oc2/maslo-slivochnoe-ekomilk-82-5-450gr.jpg" }
        ];

        const similarList = document.getElementById("similar-list");
        
        similarProducts.forEach(item => {
            const div = document.createElement("div");
            div.className = "similar-item";
        div.innerHTML = `<img src="${item.img}">
        <div class="similar-price">${item.price}</div>`;
            similarList.appendChild(div);
        });
        const favorites = document.querySelectorAll(".favorite");

      favorites.forEach(button => {
          button.addEventListener("click", () => {

        if(button.textContent === "♡"){
            button.textContent = "♥";
            button.style.color = "#FF6633";
        } 
        else {
            button.textContent = "♡";
            button.style.color = "#414141";
        }

    });

});

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent = "Добавлено ✓";

        button.style.background = "#70C05B";
        button.style.color = "#fff";

        setTimeout(() => {

            button.textContent = "В корзину";
            button.style.background = "#fff";
            button.style.color = "#70C05B";

        },2000);

    });

});

const buyTogetherProducts = [
    {
        title: "Ветчина Гастрономическая",
        price: "77,99 ₽",
        stars: "★★★★★",
        img: "https://vkuster.ru/static/content/products/1153/photos/main_full.jpg?1667479435",
        isActive: false
    },
    {
        title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон...",
        price: "44,50 ₽",
        stars: "★★★★★",
        img: "https://images-foodtech.magnit.ru/6VioBrAu_MH06GlNNRwIDoJ2sM3RW7yG-iYc2XiaLuU/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/pim/goods/1000275844/image/59013ebdff1c285d6e062c1762f27319.jpeg@webp",
        isActive: true
    },
    {
        title: "Сосиски С сыром ГОСТ",
        price: "159,99 ₽",
        stars: "★★★★★",
        img: "https://cdn-irec.r-99.com/sites/default/files/imagecache/300o/product-images/268095/snKDadux33OTpI2UfCiWFw.jpeg",
        isActive: false
    },
    {
        title: "Молоко отборное 3.2%",
        price: "49,39 ₽",
        stars: "★★★★★",
        img: "",
        isActive: false
    }
];

const crossSellList = document.getElementById("cross-sell-list");
if (crossSellList) {
    crossSellList.innerHTML = "";
    buyTogetherProducts.forEach(prod => {
        const card = document.createElement("div");
        card.className = "card-item";
        
        const btnClass = prod.isActive ? "card-btn active-btn" : "card-btn";
});
}