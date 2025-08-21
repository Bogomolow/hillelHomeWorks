let users = {
    name: "Alex",
    age: 18,
    placeOfResidence: "Kyiv",

    Data: function () {
        console.log(Object.entries(this))
    }
}
users.Data();

