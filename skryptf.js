document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    zapiszDoLocalStorage();
});

function zapiszDoLocalStorage() {
    const imie = document.getElementById('imie').value;
    const nazwisko = document.getElementById('nazwisko').value;
    const telefon = document.getElementById('telefon').value;

    let wszystkieDane = JSON.parse(localStorage.getItem('daneFormularza')) || [];

    wszystkieDane.push({
        imie,
        nazwisko,
        telefon
    });

    localStorage.setItem('daneFormularza', JSON.stringify(wszystkieDane));
    alert('Dane zostały zapisane w przeglądarce!');
}

function pokazDane() {
    const wszystkieDane = JSON.parse(localStorage.getItem('daneFormularza')) || [];
    const wynik = document.getElementById('wynik');
    if (wszystkieDane.length && wynik) {
        wynik.innerHTML = wszystkieDane.map((dane, i) =>
            `<div>
                <strong>${i + 1})</strong><br>
                ${dane.imie} ${dane.nazwisko}, tel: ${dane.telefon}
            </div>`
        ).join('');
    } else if (wynik) {
        wynik.innerHTML = 'Brak zapisanych danych!';
    }
}

function usunDane() {
    localStorage.removeItem('daneFormularza');
    alert('Wszystkie dane zostały usunięte z przeglądarki!');
}