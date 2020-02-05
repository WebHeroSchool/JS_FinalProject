//переворот карты
const cards = document.querySelectorAll('.table__card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

