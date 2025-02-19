document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyDAJd5WR5bEwF3Dvtn3g3Rp9vgjKik0T6PY_AWXcZHJpvmCgnsO9-Dx4TwOIfVaP3Ziw/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.text())
    .then(result => alert("Бронирование отправлено!"))
    .catch(error => alert("Ошибка: " + error));
});
