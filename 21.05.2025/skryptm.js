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

function zastosuj() {
    const blur = document.getElementById('blur').checked;
    const sepia = document.getElementById('sepia').checked;
    const negatyw = document.getElementById('negatyw').checked;

    let filterValue = '';

    if (blur) {
        filterValue += 'blur(6px) ';
    }
    if (sepia) {
        filterValue += 'sepia(100%) ';
    }
    if (negatyw) {
        filterValue += 'invert(100%) ';
    }

    img.style.filter = filterValue.trim();

}

function kolorowy() {
    const img = document.getElementById('2');
    img.style.filter = 'none';
}

function czarnobialy() {
    const img = document.getElementById('2');
    img.style.filter = 'grayscale(100%)';
}


if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Przełączanie
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
