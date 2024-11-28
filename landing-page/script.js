setTimeout(function () {
    alert("Selamat Datang di Toko Online Kami");
}, 3000);
const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);
let currentImageIndex = 0;
const images = ["img/gultik.jfif","img/pempek.jfif","img/tekwan.jfif"];

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);
const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((Image)=> {
    image.addEventListener("click", ()=> {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Terima kasih telah membeli produk kami!");
    });
});
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id ="scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window,addEventListener("scroll", () => {
    if (window.scrolly > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
});
});