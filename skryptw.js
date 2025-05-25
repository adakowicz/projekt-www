let zdjecieIndex = 1;
const zdjecia = 10;

function nastepne() {
    zdjecieIndex++;
    if (zdjecieIndex > zdjecia) {
        zdjecieIndex = 1;
    }
    aktualizacja();
}
function poprzednie() {
    zdjecieIndex--;
    if (zdjecieIndex < 1) {
        zdjecieIndex = zdjecia;
    }
    aktualizacja();
}

function aktualizacja() {
    const zdjecieElement = document.querySelector("#srodkowy img");
    zdjecieElement.src = "zdj" + zdjecieIndex + ".jpg";
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Przełączanie
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

async function pobierzPrace() {
    try {
        const response = await fetch('http://localhost:3000/prace');
        if (!response.ok) {
            throw new Error('Błąd sieci: ' + response.status);
        }
        const prace = await response.json();
        wyswietlPrace(prace);
    } catch (error) {
        document.getElementById('galeria').innerHTML = '<p>Nie udało się pobrać danych: ' + error.message + '</p>';
    }
}

function wyswietlPrace(prace) {
    const galeria = document.getElementById('galeria');
    galeria.innerHTML = prace.map(praca =>
        `<div class="praca">
            <img src="${praca.obraz}" alt="${praca.tytul}">
            <h3>${praca.tytul}</h3>
            <p>${praca.opis}</p>
        </div>`
    ).join('');
}

window.addEventListener('DOMContentLoaded', pobierzPrace);
