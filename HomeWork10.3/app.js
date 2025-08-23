let Contacts = {
    "Contacts": [
        { "name": "Аліна", "NumberPhone": "+380 97 831 92 26", "gmail": "oleksejbogomolov@gmail.com" },
        { "name": "Shapokliak", "NumberPhone": "+380 97 433 44 44", "gmail": "alesabogomolov23@gmail.com" },
        { "name": "Олена", "NumberPhone": "+380 63 319 33 99", "gmail": "alesabogomolov254@gmail.com" }
    ]
}
const newContact = {
    "Contacts": [
        { "name": "Alex", "NumberPhone": "+380 67 831 67 98", "gmail": "artemshapoval@gmail.com" }
    ]

}
    
function getEmployeeByContacts(name) {
    return Contacts.Contacts.filter(contact => contact.name === name);
}
const foundContacts = getEmployeeByContacts("Олена")
console.log(foundContacts);

Contacts.Contacts.push(...newContact.Contacts)
console.log(Contacts)




