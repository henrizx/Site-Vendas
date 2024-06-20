document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const modal = document.getElementById("cart-modal");
    const span = document.getElementsByClassName("close")[0];
    const cancelButton = document.getElementById("cancel-button");
    const checkoutButton = document.getElementById("checkout-button");

    function addToCart(event) {
        const product = event.target.closest('.product');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));
        const imageSrc = product.querySelector('img').src;

        const item = {
            name,
            price,
            imageSrc
        };

        cart.push(item);
        updateCart();
        openModal();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        const cartItemsElement = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        cartItemsElement.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.name}" style="width: 50px;">
                ${item.name} - R$${item.price.toFixed(2)}
                <button class="remove-from-cart" data-index="${index}">Remover</button>
            `;
            cartItemsElement.appendChild(listItem);
            totalPrice += item.price;
        });

        totalPriceElement.textContent = `Total: R$${totalPrice.toFixed(2)}`;

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function openModal() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    cancelButton.onclick = function() {
        modal.style.display = "none";
        window.location.reload();
    }

    checkoutButton.onclick = function() {
        window.location.href = "carrinho.html";
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
