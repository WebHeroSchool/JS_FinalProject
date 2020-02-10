const allButtons = document.querySelectorAll('.menu__item');
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");
const mainContainer = document.querySelector(".container-background");
const baseField = document.createElement("div");
let currentLevel = document.querySelector(".checked").getAttribute("id");

console.log(currentLevel );


baseField.classList.add("table__wrap");


// Rhombus position by chosen level
const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

console.log(currentLevel );

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));

function goToStart () {
    mainContainer.appendChild(mainScreen);
    baseField.remove();
};

//Start menu button by click
function startGame() {

    mainScreen.remove();
    mainContainer.appendChild(baseField);


    let card = () => {
        function createCard() {
            const newCard = document.createElement("div");
            const flipCardBack = document.createElement("img");
            const imgCardBack = document.createElement("img");
            flipCardBack.src = "images/game_over.png";
            imgCardBack.src = "images/Inverted_Card.png";

            newCard.classList.add("table__card");
            imgCardBack.classList.add("card__back-face");
            flipCardBack.classList.add("card__front-face");
            baseField.appendChild(newCard); //новая карта "table__card" в baseField
            newCard.appendChild(flipCardBack);// перевернутая карта в new_card
            newCard.appendChild(imgCardBack); //рубашка "card__back-face" в new_card
        }

        createCard();
    }

    function createField(level) {
        let numberOfCards;
        switch (level) {
            case "simple-level":
                for (let i = 0; i < 3; i++) {
                    card();
                    console.log(card);

                }
                numberOfCards = 3;
                break;
            case "middle-level":
                for (let i = 0; i < 6; i++) {
                    card();
                }
                numberOfCards = 6;
                break;
            case "hard-level":
                for (let i = 0; i < 9; i++) {
                    card();
                }
                numberOfCards = 9;
                break;
        }
        console.log(numberOfCards );

        return numberOfCards;

    }

    console.log(createField(currentLevel));

    const cards = document.querySelectorAll('.table__card');

    let randomCard = Math.floor(Math.random() * createField(currentLevel));

    for (let i = 0; i <  createField(); i++) {
        if (i === randomCard) {
            cards[i].firstElementChild.src = "images/bug.png"
        }
    };


    function flipCard() {
                this.classList.toggle('flip');

            }

            createField(currentLevel);
        };


startButton.addEventListener("click", startGame);



