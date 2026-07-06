document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: "Groceries", price: 29.99},
        {id: 2, name: "Cutlery", price: 19.99},
        {id: 3, name: "Denim", price: 39.49},
        {id: 4, name: "Toileteries", price: 15.999}
    ];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMsg = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkOutBtn = document.getElementById('checkout-btn');

    renderCart();

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span><button data-id = ${product.id}>Add to cart</button>`;

        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find((p) => p.id === productId)
            addToCart(product);
        }
    });

    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = parseInt(e.target.dataset.index);
            removeFromCart(index);
        }
    });

    function addToCart(product){
        cart.push(product);
        saveCart();
        renderCart();
    }

    function saveCart(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart(){
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.classList.add("hidden");
            return;
        }

        cartTotal.classList.remove("hidden");

        cart.forEach((item, index) => {
            totalPrice += item.price;

            const cartItem = document.createElement("div");
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            cartItems.appendChild(cartItem);
        });

        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    checkOutBtn.addEventListener('click', () => {
        cart.length = 0;
        saveCart();
        alert("Checkout successful!")
        renderCart();
    })
});