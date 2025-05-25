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
