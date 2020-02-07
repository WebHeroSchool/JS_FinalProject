const allButtons = document.querySelectorAll('.menu__item');
const startButton = document.getElementById("start");
const mainScreen = document.getElementById("main-screen");
const mainContainer = document.querySelector(".container-background");
const baseField = document.createElement("div");
const innerField = document.createElement("div");

baseField.classList.add("table__wrap");
innerField.classList.add("inner-table__wrap");


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
    baseField.appendChild(innerField);

    let card = () => {
        function createCard() {
            const newCard = document.createElement("div");
            const flipCardInner = document.createElement("div");
            const flipCardBack = document.createElement("div");
            const imgCardBack = document.createElement("div");

            newCard.classList.add("table__card");
            flipCardInner.appendChild(flipCardBack);
            imgCardBack.classList.add("card__back-face");
            innerField.appendChild(newCard);
            newCard.appendChild(flipCardInner);
            flipCardInner.appendChild(flipCardBack);
            flipCardBack.appendChild(imgCardBack);
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

    }

    createField(currentLevel);
}


startButton.addEventListener("click", startGame);

// //переворот карты
// function flipCard() {
//     this.classList.toggle('flip');
// }
//
// cards.forEach(card => card.addEventListener('click', flipCard));

