const allButtons = document.querySelectorAll('.menu__item');
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");
const mainContainer = document.querySelector(".container-background");
const baseField = document.createElement("div");
//const innerField = document.createElement("div");

baseField.classList.add("table__wrap");
/*innerField.classList.add("inner-table__wrap");*/


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
    mainContainer.appendChild(baseField);
    //baseField.appendChild(innerField);

    let card = () => {
        function createCard() {
            const newCard = document.createElement("div");
           // const flipCardInner = document.createElement("div");
            const flipCardBack = document.createElement("img");
            const imgCardBack = document.createElement("img");
            flipCardBack.src = "images/game_over.png";
            imgCardBack.src = "images/card_back.png";

            /*newCard.classList.add("table__card");
            flipCardInner.appendChild(flipCardBack);
            imgCardBack.classList.add("card__back-face");
            innerField.appendChild(newCard);
            newCard.appendChild(flipCardInner);
            flipCardInner.appendChild(flipCardBack);
            flipCardBack.appendChild(imgCardBack);*/

            newCard.classList.add("table__card");
            imgCardBack.classList.add("card__back-face");
            flipCardBack.classList.add("card__front-face");
            baseField.appendChild(newCard); //новая карта "table__card" в baseField
            newCard.appendChild(flipCardBack);// перевернутая карта в new_card
            newCard.appendChild(imgCardBack); //рубашка "card__back-face" в new_card
        }

        createCard();

};

    function createField(level) {
        switch (level) {
            case "simple-level":
                for(let i = 0; i < 3 ; i++) {
                    card(currentLevel);
                }
                break;
        }

        const cards = document.querySelectorAll('.table__card');

        function flipCard() {
            this.classList.toggle('flip');
        }

        cards.forEach(card => card.addEventListener('click', flipCard));


    }

    createField(currentLevel);
}


startButton.addEventListener("click", startGame);

// //переворот карты

/*let number = 3;

let randomCard = Math.floor(Math.random() * number);

/*for (let i = 0; i < number; i++ ) {
    if (i === randomCard) {
        cards[i].firstElementChild.src = "images/bag.png"
    }
}*/
console.log(cards);
//console.log(randomCard);*/

