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


//// walidacja formularza
const form = document.getElementById('myForm');
form.addEventListener('submit', function(e) {
  let valid = true;


  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.textContent = 'Podaj poprawny adres e-mail!';
    valid = false;
  } else {
    emailError.textContent = '';
  }


  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name.value.trim() === '') {
    nameError.textContent = 'Imię jest wymagane!';
    valid = false;
  } else {
    nameError.textContent = '';
  }


  if (!valid) {
    e.preventDefault();
  }
});