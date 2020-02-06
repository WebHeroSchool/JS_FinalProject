// Rombus position by choosen level
const allButtons = document.querySelectorAll('.menu__item');
console.log(allButtons );

const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));


//Start menu button by click
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");

function startGame() {
    mainScreen.remove();
}

startButton.addEventListener("click", startGame);

//переворот карты
const cards = document.querySelectorAll('.table__card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

