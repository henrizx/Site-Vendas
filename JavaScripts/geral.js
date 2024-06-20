// Seleciona o botão pelo ID
const visitBtn = document.getElementById('visit-btn');

// Adiciona um ouvinte de evento de clique ao botão
visitBtn.addEventListener('click', function() {
    // Redireciona para a página desejada
    window.location.href = 'marcio.html';
});


// Seleciona o botão pelo ID
const visitBtnG = document.getElementById('btn-gio');

// Adiciona um ouvinte de evento de clique ao botão
visitBtnG.addEventListener('click', function() {
    // Redireciona para a página desejada
    window.location.href = 'gio.html';
});

const visitBtnM = document.getElementById('btn');

// Adiciona um ouvinte de evento de clique ao botão
visitBtnM.addEventListener('click', function() {
    // Redireciona para a página desejada
    window.location.href = 'tiao.html';
});
function goBack() {
    window.history.back();
}

function goBack() {
    window.history.back();
}

/*const removeProductButton = document.getElementsByClassName("remove-product-button")
console.log(removeProductButton)
for (var i = 0; i < removeProductButton.length; i++){
    removeProductButton[i].addEventListener("click", function(){
        console.log("clicou")
    })
}*/


let cart = [];

function addToCart(button) {
    const product = button.parentElement;
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
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsElement.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
