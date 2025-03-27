document.addEventListener('DOMContentLoaded', () => {
    showCategories();
    addMyOrdersButton();
});

function addMyOrdersButton() {
    const wrapper = document.querySelector('.wrapper');
    const button = document.createElement('button');
    button.textContent = 'Мої замовлення';
    button.classList.add('my-orders-button');
    button.addEventListener('click', showOrders);
    wrapper.prepend(button);
}

function showCategories() {
    const parent = document.querySelector('.categories > div');
    parent.innerHTML = '';
    productCatalog.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category.name;
        categoryElement.setAttribute('data-category-id', category.id);
        categoryElement.classList.add('category-item');
        parent.appendChild(categoryElement);
    });
}

function showProducts(products) {
    const parent = document.querySelector('.products > div');
    parent.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.setAttribute('data-product-id', product.id);
        productElement.classList.add('product-item');
        parent.appendChild(productElement);
    });
}

function showProductDetails(product) {
    const infoBlock = document.querySelector('.information');
    infoBlock.innerHTML = `
        <h2>${product.name}</h2>
        <p>Ціна: ${product.price}</p>
        <p>${product.description}</p>
        <button class="buy-button">Придбати</button>
    `;
    document.querySelector('.buy-button').addEventListener('click', () => buyProduct(product));
}

function buyProduct(product) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let existingOrder = orders.find(order => order.id === product.id);
    
    if (existingOrder) {
        existingOrder.quantity += 1;
        existingOrder.totalPrice = existingOrder.quantity * product.price;
    } else {
        orders.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            totalPrice: product.price
        });
    }
    
    localStorage.setItem('orders', JSON.stringify(orders));
}

function showOrders() {
    document.querySelector('.categories').style.display = 'none';
    document.querySelector('.products').style.display = 'none';
    document.querySelector('.information').style.display = 'none';
    
    const wrapper = document.querySelector('.wrapper');
    let ordersContainer = document.querySelector('.orders-list');
    if (!ordersContainer) {
        ordersContainer = document.createElement('div');
        ordersContainer.classList.add('orders-list');
        wrapper.appendChild(ordersContainer);
    }
    ordersContainer.innerHTML = '';

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p>Замовлень немає</p>';
    } else {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.innerHTML = `
                <p><strong>${order.name}</strong> - <span class="order-quantity">${order.quantity}</span> шт. x ${order.price} = <span class="order-total">${order.totalPrice}</span> грн</p>
                <button class="decrease-order" data-id="${order.id}">-</button>
                <button class="delete-order" data-id="${order.id}">Видалити</button>
            `;
            ordersContainer.appendChild(orderItem);
        });
    }
    
    let backButton = document.querySelector('.back-button');
    if (!backButton) {
        backButton = document.createElement('button');
        backButton.textContent = 'Назад';
        backButton.classList.add('back-button');
        backButton.addEventListener('click', restoreShopView);
        wrapper.appendChild(backButton);
    }
    
    document.querySelectorAll('.delete-order').forEach(button => {
        button.addEventListener('click', deleteOrder);
    });
    
    document.querySelectorAll('.decrease-order').forEach(button => {
        button.addEventListener('click', decreaseOrder);
    });
}

function deleteOrder(event) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderId = parseInt(event.target.getAttribute('data-id'));
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
    showOrders();
}

function decreaseOrder(event) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderId = parseInt(event.target.getAttribute('data-id'));
    let order = orders.find(order => order.id === orderId);
    
    if (order) {
        order.quantity -= 1;
        order.totalPrice = order.quantity * order.price;
        if (order.quantity <= 0) {
            orders = orders.filter(o => o.id !== orderId);
        }
    }
    
    localStorage.setItem('orders', JSON.stringify(orders));
    showOrders();
}

function restoreShopView() {
    document.querySelector('.categories').style.display = 'block';
    document.querySelector('.products').style.display = 'block';
    document.querySelector('.information').style.display = 'block';
    document.querySelector('.orders-list').remove();
    document.querySelector('.back-button').remove();
}

document.querySelector('.categories').addEventListener('click', event => {
    if (!event.target.classList.contains('category-item')) return;
    const categoryId = parseInt(event.target.getAttribute('data-category-id'));
    const selectedCategory = productCatalog.find(cat => cat.id === categoryId);
    if (selectedCategory) showProducts(selectedCategory.products);
});

document.querySelector('.products').addEventListener('click', event => {
    if (!event.target.classList.contains('product-item')) return;
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    const selectedProduct = productCatalog.flatMap(cat => cat.products).find(prod => prod.id === productId);
    if (selectedProduct) showProductDetails(selectedProduct);
});
