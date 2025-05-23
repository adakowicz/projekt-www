const observer = new IntersectionObserver((elementy) => {
  elementy.forEach((element, index) => {
    if (element.isIntersecting) {
      setTimeout(() => {
        element.target.classList.add("visible");
      }, index * 150);
      observer.unobserve(element.target);
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
  ustawIkone ();
});

const observer2 = new IntersectionObserver((elementy2) => {
  elementy2.forEach((element2, index2) => {
    if (entry.isInterscenting)
    {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index*150 );
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

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
