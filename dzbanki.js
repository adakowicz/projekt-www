function losujKolor() {
    const litery = '0123456789ABCDEF';
    let kolor = '#';
    for (let i = 0; i < 6; i++) {
        kolor += litery[Math.floor(Math.random() * 16)];
    }
    return kolor;
}

function zmienKolor(element) {
    element.style.background = losujKolor();
}

document.addEventListener('DOMContentLoaded', function () {
    const dzbanki = document.querySelectorAll('.dzbanek');
    const kolorInput = document.getElementById('kolorDzbanek');
    const rozmiarInput = document.getElementById('rozmiarDzbanek');
    const rodzajInput = document.getElementById('rodzajDzbanek');

    function ustawDzbanki() {
        dzbanki.forEach(dzbanek => {
            dzbanek.style.background = kolorInput.value;
            dzbanek.style.width = rozmiarInput.value + 'px';
            dzbanek.style.height = (rozmiarInput.value * 1.5) + 'px';
            dzbanek.setAttribute('data-rodzaj', rodzajInput.value);
        });
    }

    if (kolorInput && rozmiarInput && rodzajInput) {
        kolorInput.addEventListener('input', ustawDzbanki);
        rozmiarInput.addEventListener('input', ustawDzbanki);
        rodzajInput.addEventListener('change', ustawDzbanki);
        ustawDzbanki();
    }
});
