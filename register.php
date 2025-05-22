
<?php
header('Content-Type: application/json; charset=utf-8');
$data = json_decode(file_get_contents('php://input'), true);

function getValue($arr, $key) {
    return isset($arr[$key]) ? $arr[$key] : '';
}

if ($data) {
    if (!filter_var(getValue($data, 'email'), FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['message' => 'Nieprawidłowy adres e-mail!']);
        exit;
    }
    if (
        empty(getValue($data, 'fullname')) ||
        empty(getValue($data, 'phone')) ||
        empty(getValue($data, 'password'))
    ) {
        echo json_encode(['message' => 'Wszystkie pola są wymagane!']);
        exit;
    }
    $hashedPassword = password_hash(getValue($data, 'password'), PASSWORD_DEFAULT);

    $text = "Imię i nazwisko: " . getValue($data, 'fullname') . "\n"
        . "Email: " . getValue($data, 'email') . "\n"
        . "Telefon: " . getValue($data, 'phone') . "\n"
        . "Data urodzenia: " . getValue($data, 'birthdate') . "\n"
        . "Płeć: " . getValue($data, 'gender') . "\n"
        . "Hasło: " . $hashedPassword . "\n"
        . "Przedmiot: " . getValue($data, 'subject') . "\n"
        . "Miasto: " . getValue($data, 'city') . "\n"
        . "Pora dnia: " . getValue($data, 'time') . "\n---\n";

    file_put_contents('dane.txt', $text, FILE_APPEND | LOCK_EX);

    echo json_encode(['message' => 'Dane zostały zapisane do pliku!']);
} else {
    echo json_encode(['message' => 'Błąd przesyłania danych!']);
}
?>