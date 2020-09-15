const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const fork = document.querySelector('.fork');

setInterval(function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // console.log(hexColor);
    fork.style.backgroundColor = hexColor;
}, 2000);

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}