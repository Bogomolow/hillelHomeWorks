let users = {
    name: "Alex",
    age: 18,
    placeOfResidence: "Kyiv",

    loadData: function () {
        console.log(`Name: ${users.name}, Age: ${users.age}, Place: ${users.placeOfResidence}`)
    }
}
users.loadData();

