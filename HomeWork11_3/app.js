const images = [
    'Pictures/1.jpg',
    'Pictures/2.jpg',
    'Pictures/3.jpg',
    'Pictures/4.jpg',
    'Pictures/5.jpg',
    'Pictures/6.jpg',
    'Pictures/7.jpg',
    'Pictures/8.jpg',
    'Pictures/9.jpg'
];
const pictures = document.getElementById('src')
function generatePicture() {
    const random = Math.floor(Math.random() * images.length)
    const selecteImageUrl = images[random];
    pictures.src = selecteImageUrl;
}
generatePicture()