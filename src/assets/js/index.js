const products = document.querySelectorAll(".slider .products");
let counter = 0;

function left() {
    if (counter === 0) {
        counter = Math.floor(products.length / 4 - 1);
    } else {
        counter--;
    }
    scroll();
}

function right() {
    if (counter === Math.floor(products.length / 4) - 1) {
        counter = 0;
    } else {
        counter++;
    }
    scroll();
}

function scroll() {
    products.forEach(function (item) {
        item.style.transform = `translateX(-${counter * 1300}px)`;
    });
}





