const countBlocks = document.querySelectorAll(".count");

countBlocks.forEach(block => {

    const minusButton = block.querySelector("button:first-child");
    const plusButton = block.querySelector("button:last-child");
    const number = block.querySelector("span");

    let count = Number(number.textContent);

    plusButton.addEventListener("click", () => {
        count++;
        number.textContent = count;
    });

    minusButton.addEventListener("click", () => {

        if (count > 0) {
            count--;
            number.textContent = count;
        }

    });

});