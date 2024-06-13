document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");
    const checkoutButton = document.querySelector(".checkout-button");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;

            const cartItemElement = document.createElement("div");
            cartItemElement.classList.add("cart-item");
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price} руб</div>
                    <div class="cart-item-quantity">
                        Количество: 
                        <button class="quantity-decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-increase">+</button>
                    </div>
                </div>
                <button class="remove-button">Удалить</button>
            `;

            cartItemElement.querySelector(".remove-button").addEventListener("click", () => {
                removeFromCart(item.id);
            });

            cartItemElement.querySelector(".quantity-increase").addEventListener("click", () => {
                changeQuantity(item.id, 1);
            });

            cartItemElement.querySelector(".quantity-decrease").addEventListener("click", () => {
                changeQuantity(item.id, -1);
            });

            cartItemsContainer.appendChild(cartItemElement);
        });
        totalPriceElement.textContent = `${total} руб`;
    }

    function removeFromCart(id) {
        cartItems = cartItems.filter(item => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCart();
    }

    function changeQuantity(id, amount) {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            item.quantity += amount;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                updateCart();
            }
        }
    }

    updateCart();
});
