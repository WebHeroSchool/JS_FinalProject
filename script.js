const simpleLevel = document.getElementById("simple-level");
const middleLevel = document.getElementById("middle-level");
const hardLevel = document.getElementById("hard-level");
const startButton = document.getElementById("button-start");
const mainScreen = document.getElementById("main-screen");
const selectButtons = document.querySelector(".select-buttons");
const baseField = document.querySelector(".container-for-cards");
const allButtonList = document.querySelectorAll(".menu__item");


const card = () => {
    const newCard = document.createElement('div');
    newCard.classList.add("card");
    baseField.appendChild(newCard);
};

const chooseLevel = () => {
    function startGame() {
        let currentLevel = document.querySelector(".checked").getAttribute("id");
        mainScreen.remove();

        function createField(level) {
            baseField.classList.add("centered");

            switch (level) {
                case "simple":
                    baseField.classList.add("centeredFor3");
                    for (let i = 3; i--;) {
                        card();
                    }
                    break;
                case "middle":
                    baseField.classList.add("centeredFor6");
                    for (let i = 6; i--;) {
                        card();
                    }
                    break;
                case "hard":
                    baseField.classList.add("centeredFor10");
                    for (let i = 10; i--;) {
                        card();
                    }
                    break;
            }
        }

        createField(currentLevel);
    }

    startButton.addEventListener("click", startGame);
};

