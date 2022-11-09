function generateCarousel() {
    fetch("home.json")
        .then(response => response.json())
        .then(tickets => {
            console.log();
            const carousel = document.getElementById("carouselToPopulate");

            for (i = 0; i < Object.keys(tickets.ticket).length; i++) {
                carousel.innerHTML += `<div class="carousel-item${i == 0 ? " active" : ""}" data-bs-interval="3000">
        <img src="${tickets.ticket[i]["image-link"]}" class="d-block w-100" alt="..."></div>`;

            }
        });
}

generateCarousel();
