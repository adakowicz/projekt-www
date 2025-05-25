const galeriaDane = [
    { id: 1, obraz: "kubki/zdj1.jpg", tytul: "Kubek 1", kategoria: "kubki"},
    { id: 2, obraz: "kubki/zdj2.jpg", tytul: "Kubek 2", kategoria: "kubki"},
    { id: 3, obraz: "kubki/zdj3.jpg", tytul: "Kubek 3", kategoria: "kubki"},
    { id: 4, obraz: "kubki/zdj4.jpg", tytul: "Kubek 4", kategoria: "kubki"},
    { id: 5, obraz: "miski/zdj1.jpg", tytul: "Miska 1", kategoria: "miski"},
    { id: 6, obraz: "miski/zdj2.jpg", tytul: "Miska 2", kategoria: "miski"},
    { id: 7, obraz: "miski/zdj3.jpg", tytul: "Miska 3", kategoria: "miski"},
    { id: 8, obraz: "miski/zdj4.jpg", tytul: "Miska 4", kategoria: "miski"},
    { id: 9, obraz: "miski/zdj5.jpg", tytul: "Miska 5", kategoria: "miski"},
    { id: 10, obraz: "miski/zdj6.jpg", tytul: "Miska 6", kategoria: "miski"},
    { id: 11, obraz: "talerze/zdj1.jpg", tytul: "Talerz 1", kategoria: "talerze"},
    { id: 12, obraz: "talerze/zdj2.jpg", tytul: "Talerz 2", kategoria: "talerze"},
    { id: 13, obraz: "talerze/zdj3.jpg", tytul: "Talerz 3", kategoria: "talerze"},
    { id: 14, obraz: "talerze/zdj4.jpg", tytul: "Talerz 4", kategoria: "talerze"},
];

function wyswietlGalerie(kategoria) {
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = "";

    const filtrowaneDane = kategoria === "wszystkie"
        ? galeriaDane
        : galeriaDane.filter(praca => praca.kategoria === kategoria);

    filtrowaneDane.forEach(praca => {
        const element = document.createElement("div");
        element.classList.add("praca");
        element.innerHTML = `
            <img src="${praca.obraz}" alt="${praca.tytul}">
            <h3>${praca.tytul}</h3>
        `;
        galeria.appendChild(element);
    });
}

function filtruj(kategoria) {
    wyswietlGalerie(kategoria);
}

document.addEventListener("DOMContentLoaded", () => wyswietlGalerie("wszystkie"));