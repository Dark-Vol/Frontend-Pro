// const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];
    
//     // Випадковий вибір
//     const randomIndex = Math.floor(Math.random() * images.length);
//     const randomImage = images[randomIndex];

//     // Встановлення шляху до зображення
//     document.getElementById("randomImage").src = "images/" + randomImage;
function loadRandomImage() {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    const imagePath = `images/${randomIndex}.png`;

    const imgElement = document.createElement("img");
    imgElement.src = imagePath;

    imgElement.onerror = () => {
        imgElement.src = "fallback.png"; 
    };

    const container = document.getElementById("imageContainer");
    container.innerHTML = ""; 
    container.appendChild(imgElement);
}

document.addEventListener("DOMContentLoaded", loadRandomImage);