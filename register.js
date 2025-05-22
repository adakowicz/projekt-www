document.getElementById('registerForm').onsubmit = async function(e) {
    e.preventDefault();

    // Sprawdzenie zgodności haseł
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm_password').value;
    if (password !== confirm) {
        document.getElementById('registerMessage').textContent = "Hasła nie są zgodne!";
        return;
    }

    // Sprawdzenie zgody RODO
    if (!document.getElementById('rodo').checked) {
        document.getElementById('registerMessage').textContent = "Musisz wyrazić zgodę na przetwarzanie danych osobowych!";
        return;
    }

    // Pobierz wybraną płeć
    let gender = "";
    const radios = document.getElementsByName('gender');
    for (const radio of radios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }

    const data = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        birthdate: document.getElementById('birthdate').value,
        gender: gender,
        password: password,
        subject: document.getElementById('subject').value,
        city: document.getElementById('city').value,
        time: document.getElementById('time').value
    };

    const res = await fetch('register.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('registerMessage').textContent = result.message;
};