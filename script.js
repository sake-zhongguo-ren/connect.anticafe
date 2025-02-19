const token = "7773798065:AAGShKhV6Gz4PZHbVIrjD4qFR_0CrUlG-2Q"; // Замени на новый токен
const chatId = "1332221607"; // Telegram ID

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    const message = `📅 *Новая бронь в антикафе CONNECT!*\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📆 Дата: ${date}\n⏰ Время: ${time}\n👥 Гостей: ${guests}`;

    sendTelegramMessage(message);
});

function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            document.getElementById("statusMessage").textContent = "✅ Бронирование успешно отправлено!";
            document.getElementById("bookingForm").reset();
        } else {
            document.getElementById("statusMessage").textContent = "❌ Ошибка бронирования. Попробуйте снова.";
            console.error("Ошибка:", result);
        }
    })
    .catch(error => {
        document.getElementById("statusMessage").textContent = "❌ Ошибка соединения.";
        console.error("Ошибка отправки:", error);
    });
}
