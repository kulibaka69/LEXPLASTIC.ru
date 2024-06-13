// Функция для открытия модального окна Оформить заказ
function openModal() {
    document.getElementById('orderModal').style.display = 'flex';
}

// Функция для закрытия модального окна Оформить заказ
function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Функция для закрытия модального окна Спасибо за заказ и перенаправления на главную страницу
function closeThankYouModal() {
    document.getElementById('thankYouModal').style.display = 'none';
    window.location.href = "index.html"; // Перенаправление на главную страницу
}

// Функция для показа модального окна Спасибо за заказ
function showThankYouModal() {
    document.getElementById('orderModal').style.display = 'none'; // Закрыть окно оформления заказа, если оно открыто
    document.getElementById('thankYouModal').style.display = 'flex';
}

// Обработка отправки формы
document.querySelector('#orderModal form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение стандартной отправки формы
    showThankYouModal(); // Показ модального окна Спасибо за заказ
});

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    var orderModal = document.getElementById('orderModal');
    var thankYouModal = document.getElementById('thankYouModal');
    if (event.target == orderModal) {
        orderModal.style.display = 'none';
    } else if (event.target == thankYouModal) {
        thankYouModal.style.display = 'none';
        window.location.href = "index.html"; // Перенаправление на главную страницу
    }
}

// Функция перенаправления на главную страницу
function redirectToMain() {
    closeThankYouModal(); // Закрыть модальное окно Спасибо за заказ и перенаправить
}
