let url;
document.querySelector('.Button1').addEventListener('click', () => {
    const url = prompt()
    document.querySelector('.Button2').addEventListener('click', (link) => {
        window.location.href = url;
    })
})