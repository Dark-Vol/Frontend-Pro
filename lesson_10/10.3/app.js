const contactsBook = {
    contacts: [
        {
            name: "Іван Іванов",
            phone: "123-456-7890",
            email: "ivan@example.com"
        },
        {
            name: "Марія Петренко",
            phone: "987-654-3210",
            email: "maria@example.com"
        }
    ],

    findContactByName: function (name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : "Контакт не знайдений.";
    },

    addContact: function () {
        const name = prompt("Введіть ім'я контакту:");
        const phone = prompt("Введіть номер телефону:");
        const email = prompt("Введіть електронну адресу:");

        const newContact = {
            name: name,
            phone: phone,
            email: email
        };
        this.contacts.push(newContact);
        console.log("Контакт додано:", newContact);
    }
};

contactsBook.addContact();
console.log(contactsBook.contacts);

