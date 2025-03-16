function showCategories() {
  const parent = document.querySelector('.categories > div');
  parent.innerHTML = ''; // Очищення перед завантаженням

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.textContent = category.name;
    categoryElement.setAttribute('data-category-id', category.id);
    categoryElement.classList.add('category-item');

    parent.appendChild(categoryElement);
  });
}

function showProducts(products, categoryId) {
  const parent = document.querySelector('.products > div');
  parent.innerHTML = ''; // Очищення перед завантаженням
  parent.setAttribute('data-category-id', categoryId);

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
    <p>Price: $${product.price}</p>
    <button class="buy-button">Придбати</button>
  `;

  document.querySelector('.buy-button').addEventListener('click', () => {
    document.querySelector('.order-info').textContent = `Товар "${product.name}" успішно придбано!`;
  });
}

document.addEventListener('DOMContentLoaded', showCategories);

document.querySelector('.categories').addEventListener('click', event => {
  if (!event.target.classList.contains('category-item')) {
    return;
  }

  const categoryId = parseInt(event.target.getAttribute('data-category-id'));
  const selectedCategory = categories.find(category => category.id === categoryId);
  if (!selectedCategory) {
    return;
  }

  showProducts(selectedCategory.products, categoryId);
});

document.querySelector('.products').addEventListener('click', event => {
  if (!event.target.classList.contains('product-item')) {
    return;
  }

  const productId = parseInt(event.target.getAttribute('data-product-id'));
  const selectedProduct = categories.flatMap(category => category.products).find(product => product.id === productId);

  if (!selectedProduct) {
    return;
  }

  showProductDetails(selectedProduct);
});
