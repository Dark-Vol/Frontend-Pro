const orders = [
    { user: 'Alice', product: 'Phone', price: 300 },
    { user: 'Bob', product: 'Laptop', price: 1500 },
    { user: 'Alice', product: 'Case', price: 100 },
    { user: 'Charlie', product: 'Monitor', price: 300 },
    { user: 'Bob', product: 'Phone', price: 200 },
    { user: 'Charlie', product: 'Headphones', price: 300 },
];

// Завдання 1: Кількість замовлень кожного користувача
const orderCount = orders.reduce((acc, order) => {
    acc.set(order.user, (acc.get(order.user) || 0) + 1);
    return acc;
}, new Map());
console.log(orderCount);

// Завдання 2: Сума замовлень кожного користувача
const totalAmountSpent = orders.reduce((acc, order) => {
    acc.set(order.user, (acc.get(order.user) || 0) + order.price);
    return acc;
}, new Map());
console.log(totalAmountSpent);

// Завдання 3: Унікальні товари
const uniqueProducts = new Set(orders.map(order => order.product));
console.log(uniqueProducts);

// Завдання 4: Хто витратив більше за всіх?
const topSpender = [...totalAmountSpent.entries()].reduce((max, current) => {
    return current[1] > max[1] ? current : max;
});
console.log(`${topSpender[0]} витратив більше за всіх: $${topSpender[1]}`);
