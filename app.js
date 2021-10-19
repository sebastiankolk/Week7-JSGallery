const currentImage = document.querySelector("#image");

const images = ["images/pilt1.jpg", "images/pilt2.jpeg", "images/pilt3.jpeg"]

function changeImage() {

    let randomnumber = Math.floor(Math.random() * images.length);
    console.log(randomnumber);
currentImage.src = images[randomnumber]
}