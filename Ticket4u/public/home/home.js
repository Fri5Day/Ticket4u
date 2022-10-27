function generateCarousel() {
    fetch("home.json")
        .then(response => response.json())
        .then(tickets => {
            console.log();
            const carousel = document.getElementById("carouselToPopulate");

            for (i = 0; i < Object.keys(tickets.ticket).length; i++) {
                carousel.innerHTML += `<div class="carousel-item${i == 0 ? " active" : ""}" data-bs-interval="80">
        <img src="${tickets.ticket[i]["image-link"]}" class="d-block w-100" alt="..."></div>`;

            }
        });
}

function getFilter() {
    fetch("filters.json")
        .then(response => response.json())
        .then(filter => {
            const filterDiv = document.getElementById("filter");

            for (i = 0; i < filter.categories.length; i++) {
                filterDiv.innerHTML += `<div>
                <input type="checkbox" id="${filter.categories[i]}" name="${filter.categories[i]}" value="${filter.categories[i]}">
                <label for="${filter.categories[i]}"> ${filter.categories[i]}</label><br>
            </div>`;
            }

        });
}

generateCarousel();
getFilter();