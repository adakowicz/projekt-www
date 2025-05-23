function zastosuj() {
    const img = document.getElementById('1');
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

function przezroczystosc() {
    const img = document.querySelector('#blok3 img');
    const przezroczystoscValue = document.getElementById('przezroczystosc').value;
    img.style.filter = `opacity(${przezroczystoscValue}%)`;
}

function jasnosc() {
    const img = document.querySelector('#blok4 img');
    const jasnoscValue = document.getElementById('jasnosc').value;
    img.style.filter = `brightness(${jasnoscValue}%)`;
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// pobieramy z localStorage theme rodzaj dark/light
const currentTheme = localStorage.getItem('theme');

// jeżeli theme istnieje 
if (currentTheme) {
    // ustawiamy data-theme klasę w elemencie html data-theme="light"
    document.documentElement.setAttribute('data-theme', currentTheme);

    // jeżeli theme jest dark zmieniamy przełącznik a dokładnie checkbox na true
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// funkcja ustawiająca data-theme w zależności od przełącznika
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// obserwujemy zdarzenie w naszym przypadku na change uruchamiamy funkcję switchTheme
toggleSwitch.addEventListener('change', switchTheme, false);

document.querySelector('#progressbar').animate(
    {
        backgroundColor: ['red', 'darkred'],
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 2500,
        fill: 'forwards',
        easing: 'linear',
    }
);
