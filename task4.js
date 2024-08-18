function toggleCarousels() {
    const imgs = ['./crousel1.jpg','./crousel2.jpg','./crousel3.jpg','./crousel4.jpg'];

    const carouselDiv = document.querySelector('#carouseldiv');

    let currentIndex = 0; 

    function updateCarousel() {
        carouselDiv.style.backgroundImage = `url('${imgs[currentIndex]}')`;
        currentIndex++;

        if (currentIndex >= imgs.length) {
            currentIndex = 0;
        }

        setTimeout(updateCarousel, 5000);
    }
    updateCarousel();
}

toggleCarousels();