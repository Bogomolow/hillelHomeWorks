document.querySelector('.My-list').addEventListener('click', function (event) {
    if (event.target.classList.contains('button')) {
        const del = event.target.parentElement;
        del.remove()
    }
});
document.querySelector('#button1').addEventListener('click', () => {
    const myInput = document.querySelector('input')
    const value = myInput.value;

    if (value === '') {
        return;
    }

    const list = document.querySelector('ul');


    const newItem = document.createElement('li');
    newItem.textContent = value;

    const doneButton = document.createElement('button')
    doneButton.textContent = 'Видалити';
    doneButton.addEventListener('click', () => {
        newItem.remove();
    })

    newItem.appendChild(doneButton)
    list.appendChild(newItem)

})




