const productImages = document.querySelectorAll(".product-images img");
const imageSlider = document.querySelector(".image-slider");

let activeImageIndex = 0;

productImages.forEach((item, i) => {
    item.addEventListener("click", () => {
        productImages[activeImageIndex].classList.remove("active");
        
        item.classList.add("active");
        
        imageSlider.style.backgroundImage = `url('${item.src}')`;
        
        activeImageIndex = i;
    });
});

const productImages2 = document.querySelectorAll(".product-images2 img");
const imageSlider2 = document.querySelector(".image-slider2");

let activeImageIndex2 = 0;

productImages2.forEach((item, i) => {
    item.addEventListener("click", () => {
        productImages2[activeImageIndex2].classList.remove("active");

        item.classList.add("active");
        
        imageSlider2.style.backgroundImage = `url('${item.src}')`;
        
        activeImageIndex2 = i;
    });
});










