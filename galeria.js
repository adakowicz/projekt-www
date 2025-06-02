async function pobierzDaneGaleria() {
    try {
        const response = await fetch('galeria.json');
        if (!response.ok) {
            throw new Error('Błąd podczas pobierania danych');
        }
        const dane = await response.json();
        return dane.prace;
    } catch (error) {
        console.error('Błąd:', error);
        return [];
    }
}


function wyswietlGalerie(kategoria, dane) {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = "";

    const filtrowaneDane = kategoria === "wszystkie"
        ? dane
        : dane.filter(praca => {

            const kategoriaPracy = praca.obraz.split('/')[0];
            return kategoriaPracy === kategoria;
        });


    filtrowaneDane.forEach(praca => {
        const element = document.createElement("div");
        element.classList.add("praca");
        element.innerHTML = `
            <img src="${praca.obraz}" alt="${praca.tytul}">
            <h3>${praca.tytul}</h3>
            <p class="opis">${praca.opis}</p>
        `;
        galeria.appendChild(element);
    });
}


function filtruj(kategoria, dane) {
    wyswietlGalerie(kategoria, dane);
}


document.addEventListener("DOMContentLoaded", async () => {
    const daneGaleria = await pobierzDaneGaleria();
    wyswietlGalerie("wszystkie", daneGaleria);


    document.querySelectorAll('#filtry button').forEach(button => {
        button.addEventListener('click', () => {
            const kategoria = button.textContent.toLowerCase() === "wszystkie"
                ? "wszystkie"
                : button.textContent.toLowerCase();
            filtruj(kategoria, daneGaleria);
        });
    });
});
