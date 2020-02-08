const cards = ['a', 'b', 'c', 'd'];

const cardContainer = document.getElementById('card-container');

for (let i = 0; i <= cards.length - 1; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('back');
  card.addEventListener('click', flipCard);
  cardContainer.appendChild(card);
}

function flipCard() {
    this.classList.toggle('front');
}