document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Получаем данные формы
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const vip = document.getElementById("vip").checked ? "VIP комната" : "Общий зал";

        // Формируем текст сообщения
        const message = `📅 Новая бронь:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📆 Дата: ${date}\n⏰ Время: ${time}\n🏠 Зал: ${vip}`;

        // Твой Telegram токен и ID
        const telegramBotToken = "8037219129:AAGu_2IyPcQlOTeivrdVLDZr4vKedHSRqDo";
        const chatId = "1332221607"; // Твой Telegram ID

        // Отправляем сообщение в Telegram
        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        const params = {
            chat_id: chatId,
            text: message,
            parse_mode: "HTML"
        };

        try {
            const response = await fetch(telegramUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(params)
            });

            if (response.ok) {
                alert("Бронирование успешно отправлено!");
                form.reset(); // Очищаем форму
            } else {
                alert("Ошибка отправки бронирования.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Ошибка связи с Telegram.");
        }
    });
});
