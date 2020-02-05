/*let view = {
    displayBug: function(location) {
        let card = document.getElementById(location);
        card.setAttribute("class", "bug");
    },
    displayMiss: function(location) {
        let card = document.getElementById(location);
        card.setAttribute("class", "miss");
    }
}

let model = {
    numCards: 3,
    bug: 2,
    guess: '',
    clickOnCard: function(guess) {
        for (let i = 0; i < numCards; i++) {
            if (i === bug) {
                view.displayBug(guess);
                return true;
            }
        }
        view.displayMiss(guess);
        return false;
    }*/

/*let numCards = 3;
let bug = 2;
    let images = document.getElementsByTagName("img");
    for (let i = 0; i< images.length; i++) {
        images[i].onclick = getGuess;
    }

function getGuess(eventObj) {
    let card = eventObj.target;
    let guess = card.id;
    //временный код для проверки работоспособности
    /*let name = card.id;
    name = "images/bug.png"
    card.src = name;*/
/*  console.log(guess);
}

   function clickOnCard(guess) {
        for (let i = 0; i < numCards; i++) {
            if (i === bug) {
                //временный код для проверки работоспособности
                let name = card.id;
                name = "images/bug.png"
                card.src = name;
            }

        }
    }*/
//переворот карты
const cards = document.querySelectorAll('.table__card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

let numCards = 3;
let bug = 2;
    let images = document.getElementsByTagName("div");
    for (let i = 0; i< images.length; i++) {
        images[i].onclick = getGuess;
    }

function getGuess(eventObj) {
    let card = eventObj.target;
    let guess = card.id;
    console.log(guess);

}

   function clickOnCard(guess) {
        for (let i = 0; i < numCards; i++) {
            if (i === bug) {

            }

        }
    }