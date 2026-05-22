const input = document.querySelector(".search-input");
const results = document.getElementById("search-results");

input.addEventListener("input", () => {

    const term = input.value.toLowerCase();

    if(term.length < 1) {
        results.innerHTML = "";
        return;
    }

    const filtered = reviews.filter(review => {

        return (

            review.title.toLowerCase().includes(term) ||

            review.tags.some(tag =>
                tag.toLowerCase().includes(term)
            )

        );

    });

    results.innerHTML = filtered.map(review => `

        <a href="${review.url}" class="search-result-item">

            <img src="${review.image}" alt="${review.title}">

            <div class="search-result-info">
                <h4>${review.title}</h4>
            </div>

        </a>

    `).join("");

});