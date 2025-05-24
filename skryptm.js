let zdjecieIndex = 1;
const zdjecia = 6;

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
    zdjecieElement.src = "./miski/zdj" + zdjecieIndex + ".jpg";
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Przełączanie
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
