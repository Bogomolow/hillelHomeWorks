let time = 85;


let timer = setInterval(function () {
    time = time - 1;
    let minutes = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    console.log(`${minutes}:${sec}`);

    if (time <= 0) {
        clearInterval(timer);
        console.log('finish')
    }
}, 1000)


