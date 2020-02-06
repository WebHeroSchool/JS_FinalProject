//переворот карты
const cards = document.querySelectorAll('.table__card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

let number = 3;

let randomCard = Math.floor(Math.random() * number);

for (let i = 0; i < number; i++ ) {
    if (i === randomCard) {
        cards[i].firstElementChild.src = "images/bag.png"
    }
}
console.log(randomCard);