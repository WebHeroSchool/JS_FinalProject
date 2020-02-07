const allButtons = document.querySelectorAll('.menu__item');
console.log(allButtons );

const startButton = document.getElementById("start");
console.log( startButton);

const mainScreen = document.getElementById("main-screen");
console.log( mainScreen);
const simpleLevel = document.getElementById("table_3");
console.log( simpleLevel);

const cards = document.querySelectorAll('.table__card');
console.log( cards);

const mainContainer = document.querySelector(".container-background");
console.log( mainContainer);
const table3 = document.createElement("div");
table3.classList.add("table3");




// Rhombus position by chosen level
const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));


//Start menu button by click
function startGame() {
    let currentLevel = document.querySelector(".checked").getAttribute("id");
    mainScreen.remove();
    mainContainer.appendChild(table3);

let card = () =>{
    function createCard(){
        const newCard = document.createElement("div");
        newCard.classList.add("table__card");

        const flipCardInner = document.createElement("div");
        const flipCardBack = document.createElement("div");
        const imgCardBack = document.createElement("img");

        flipCardInner.appendChild(flipCardBack);
        imgCardBack.setAttribute("src", "./images/card_back.png");
        table3.appendChild(newCard);
        newCard.appendChild(flipCardInner);
        flipCardBack.appendChild(imgCardBack);

    }

    createCard();
}
    function createField(){
        switch (level) {
            case "simple-level":
                table3.classList.add("centeredFor3");
                card(currentLevel);
                break;
        }

    }
}

startButton.addEventListener("click", startGame);

//переворот карты
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

