const input = document.querySelector(".search-input");
const results = document.getElementById("search-results");

input.addEventListener("input", () => {

    const term = input.value.toLowerCase().trim();

    /* LIMPA RESULTADOS */

    results.innerHTML = "";

    /* ESCONDE SE ESTIVER VAZIO */

    if(term.length < 1) {

        results.style.display = "none";

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

    /* MOSTRA CONTAINER */

    results.style.display = "flex";

    /* SE NÃO ENCONTRAR */

    if(filtered.length === 0) {

        results.innerHTML = `
            <div class="empty-search">
                Nenhuma review encontrada.
            </div>
        `;

        return;
    }

    /* RESULTADOS */

    results.innerHTML = filtered.map(review => `

        <a href="${review.url}" class="search-result-item">

            <img src="${review.image}" alt="${review.title}">

            <div class="search-result-info">

                <span>${review.category}</span>

                <h4>${review.title}</h4>


            </div>

        </a>

    `).join("");

});