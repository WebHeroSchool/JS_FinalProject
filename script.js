const allButtons = document.querySelectorAll('.menu__item');
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");
const mainContainer = document.querySelector(".container-background");
const baseField = document.createElement("div");

function goToStart () {
    mainContainer.appendChild(mainScreen);
    baseField.remove();
}

baseField.classList.add("table__wrap");

// Rhombus position by chosen level
const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.remove("checked"));
    elem.target.classList.add("checked");
};

allButtons.forEach((item) => item.addEventListener("click", chooseLevel));




//Start menu button by click
function startGame() {

    const currentLevel = document.querySelector(".checked").getAttribute("id");
    const currentNumberOfCards = (item) => {
        switch (item) {
            case "simple-level":
                item =  3;
                break;
            case "middle-level":
                item =  3;
                break;
            case "hard-level":
                item =  3;
                break;
        }
        return item;
    };

    let numberOfCards = currentNumberOfCards(currentLevel);
    console.log(numberOfCards);

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


    };

    function createField(level) {
        switch (level) {
            case "simple-level":
                for(let i = 0; i < 3 ; i++) {
                    card(currentLevel);
                }
                break;
            case "middle-level":
                for(let i = 0; i < 6 ; i++) {
                    card(currentLevel);
                }
                break;
            case "hard-level":
                for(let i = 0; i < 9 ; i++) {
                    card(currentLevel);
                }
                break;
        }


          const cards = document.querySelectorAll('.table__card');
        console.log(cards );

        function flipCard() {
            this.classList.toggle('flip');
        }

        cards.forEach(card => card.addEventListener('click', flipCard));


        let randomCard = Math.floor(Math.random() * numberOfCards);

        for (let i = 0; i < numberOfCards; i++ ) {
            if (i === randomCard) { cards[i].firstElementChild.src = "images/bug.png" }
        }

        const allCards = document.querySelectorAll(".card__front-face");
        allCards.forEach((item) => item.addEventListener("click", goToStart));

    }



    createField(currentLevel);


}


startButton.addEventListener("click", startGame);




