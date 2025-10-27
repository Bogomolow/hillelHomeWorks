let Contacts = {
    Contacts: [
        { name: "Аліна", NumberPhone: "+380 97 831 92 26", gmail: "oleksejbogomolov@gmail.com" },
        { name: "Shapokliak", NumberPhone: "+380 97 433 44 44", gmail: "alesabogomolov23@gmail.com" },
        { name: "Олена", NumberPhone: "+380 63 319 33 99", gmail: "alesabogomolov254@gmail.com" }
    ],

    getEmployeeByContacts(name) {
        return this.Contacts.filter(contact => contact.name === name);
    },

    addContact(newContact) {
        this.Contacts.push(newContact);
    }
};

const foundContacts = Contacts.getEmployeeByContacts("Олена");
console.log("Знайдено контакт:", foundContacts);

Contacts.addContact({
    name: "Alex",
    NumberPhone: "+380 67 831 67 98",
    gmail: "artemshapoval@gmail.com"
});

console.log("Оновлений список:", Contacts.Contacts);
