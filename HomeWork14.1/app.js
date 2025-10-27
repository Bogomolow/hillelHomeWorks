const pictures = ["pictures/1.jpg", "pictures/2.jpg", "pictures/3.jpg"];

function showNextPictures() {
    let index = 0;
    const image = document.querySelector('img');
    const next = document.querySelector('.next')
    const prove = document.querySelector('.prove')

    prove.style.display = 'none';

    next.addEventListener('click', () => {
        if (index < pictures.length - 1) {
            index++;
            image.src = pictures[index]
        }
        
        if (index === 0) {
            prove.style.display = 'none';
        } else {
            prove.style.display = 'inline-block';
        }

        // Next
        if (index === pictures.length - 1) {
            next.style.display = 'none';
        } else {
            next.style.display = 'inline-block';
        }

    })
    prove.addEventListener('click', () => {
        if (index > 0) {
            index--;
            image.src = pictures[index];
        }

        if (index === 0) {
            prove.style.display = 'none';
        } else {
            prove.style.display = 'inline-block';
        }

        
        if (index === pictures.length - 1) {
            next.style.display = 'none';
        } else {
            next.style.display = 'inline-block';
        }
    })
}
showNextPictures();


